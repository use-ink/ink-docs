---
title: Upgradeable Contracts
slug: /basics/upgradeable-contracts
hide_title: true
---

![Upgradeable Contract Title Picture](/img/title/upgradeable-contract.svg)

# Upgradeable Contracts

Even though smart contracts are intended to be immutable by design,
it is often necessary to perform an upgrade of a smart contract. 

The developer may need to fix a critical bug or introduce a new feature.
ink! supports different upgrade strategies that we describe on this page.

## Proxy Forwarding

This method relies on the ability of contracts to proxy calls to other contracts.

### Properties

- Forwards any call that does not match a selector of itself to another contract.
- The other contract needs to be deployed on-chain.
- State is stored in the storage of the contract to which calls are forwarded.

```
User ---- tx ---> Proxy ----------> Implementation_v0
                     |
                      ------------> Implementation_v1
                     |
                      ------------> Implementation_v2
```

### Example

Our proxy contract will have these 2 storage fields:

```rust
#[ink(storage)]
pub struct Proxy {
    /// The `AccountId` of a contract where any call that does not match a
    /// selector of this contract is forwarded to.
    forward_to: AccountId,
    /// The `AccountId` of a privileged account that can update the
    /// forwarding address. This address is set to the account that
    /// instantiated this contract.
    admin: AccountId,
}
```

We then need a way to change the address of a contract to which we forward calls to
and the actual message selector to proxy the call:

```rust
impl Proxy {
    /// Changes the `AccountId` of the contract where any call that does
    /// not match a selector of this contract is forwarded to.
    ///
    /// # Note
    /// Only one extra message with a well-known selector `@` is allowed.
    #[ink(message, selector = @)]
    pub fn change_forward_address(&mut self, new_address: AccountId) {
        assert_eq!(
            self.env().caller(),
            self.admin,
            "caller {:?} does not have sufficient permissions, only {:?} does",
            self.env().caller(),
            self.admin,
        );
        self.forward_to = new_address;
    }

    /// Fallback message for a contract call that doesn't match any
    /// of the other message selectors.
    ///
    /// # Note:
    ///
    /// - We allow payable messages here and would forward any optionally supplied
    ///   value as well.
    /// - If the self receiver were `forward(&mut self)` here, this would not
    ///   have any effect whatsoever on the contract we forward to.
    #[ink(message, payable, selector = _)]
    pub fn forward(&self) -> u32 {
        ink::env::call::build_call::<ink::env::DefaultEnvironment>()
            .call(self.forward_to)
            .transferred_value(self.env().transferred_value())
            .call_flags(
                ink::env::CallFlags::default()
                    .set_forward_input(true)
                    .set_tail_call(true),
            )
            .invoke()
            .unwrap_or_else(|err| {
                panic!(
                    "cross-contract call to {:?} failed due to {:?}",
                    self.forward_to, err
                )
            });
        unreachable!(
            "the forwarded call will never return since `tail_call` was set"
        );
    }
}
```

:::tip

Take a look at the selector pattern in the attribute macro: by declaring `selector = _`
we specify that all other messages should be handled by this message selector.

:::

Using this pattern, you can introduce other message to your proxy contract.
Any messages that are not matched in the proxy contract 
will be forwarded to the specified contract address.

## Delegating execution to foreign Contract Code with `delegate_call`

Similar to proxy-forwarding we can delegate execution to another code hash uploaded on-chain.

### Properties 

- Delegates any call that does not match a selector of itself to another contract.
- Code is required to be uploaded on-chain, but is not required to be instantiated.
- State is stored in the storage of the original contract which submits the call.
- Storage layout must be identical between both contract codes.

```
                                (Storage of Contract A)
User ---- tx ---> Contract A ----------> Code_v0
                     |                     ^
                     |                     |
                     ⌊_____________________⌋
                    Storage is delegated to
```

### Example

Suppose we have defined of the caller contract as following:

```rust
#[ink(storage)]
pub struct Delegator {
    addresses: Mapping<AccountId, i32, ManualKey<0x23>>,
    counter: i32,
}
```

Then let's define two messages that separately calls to update `addresses` and `counter` separately:

```rust
/// Increment the current value using delegate call.
#[ink(message)]
pub fn inc_delegate(&self, hash: Hash) {
    let selector = ink::selector_bytes!("inc");
    let _ = build_call::<DefaultEnvironment>()
        .delegate(hash)
        // if the receiver is set to `&mut self`,
        // then any changes made in `inc_delegate()` before the delegate call
        // will be persisted, and any changes made within delegate call will be discarded.

        // Therefore, it is advised to use `&self` receiver with a mutating delegate call,
        // or `.set_tail_call(true)` to flag that any changes made by delegate call should be flushed into storage. 
        // .call_flags(CallFlags::default().set_tail_call(true))
        .exec_input(ExecutionInput::new(Selector::new(selector)))
        .returns::<()>()
        .try_invoke();
}

/// Adds entry to `addresses` using delegate call.
/// Note that we don't need `set_tail_call(true)` flag
/// because `Mapping` updates the storage instantly on-demand.
#[ink(message)]
pub fn add_entry_delegate(&mut self, hash: Hash) {
    let selector = ink::selector_bytes!("append_address_value");
    let _ = build_call::<DefaultEnvironment>()
        .delegate(hash)
        .exec_input(ExecutionInput::new(Selector::new(selector)))
        .returns::<()>()
        .try_invoke();
}
```

ink! provides an intuitive call builder API for you to compose your call.
As you can see that `inc_delegate()` can be built a call in slightly different manner than `add_entry_delegate()`.
That's because if the delegated code modifies layout-full storage
(i.e. it contains at least non-`Lazy`, non-`Mapping` field),
either the receiver should be set to `&self` or the `.set_tail_call(true)` flag of `CallFlags` needs to be specified, and the storage layouts must match.

This is due to the way ink! execution call stack is operated. Non-`Lazy`, non-`Mapping` field are first loaded into the memory.
If `&mut self` receiver is used, then when delegate call is completed, the original state before the call will be persisted and flushed into the storage.
Therefore, `.set_tail_call(true)` needs to be set to indicate that, that delegate call's storage context is the final (i.e. _tail) one that needs to be flushed.
This also makes any code after the delegate call unreachable.
With `&self` receiver, `.set_tail_call(true)` is not required since no storage flushing happens at the end of the original caller's function.
(see [Stack Exchange Answer](https://substrate.stackexchange.com/a/3352/3098) for details on how changes are flushed into storage).



:::note Key compatibility
If the delegated code modifies `Lazy` or `Mapping` field, the keys must be identical and `.set_tail_call(true)` is optional 
regardless of the function receiver.
This is because `Lazy` and `Mapping` interact with the storage directly instead of loading and flushing storage states.
:::

Now let's look at the "delegatee" code:

```rust
#[ink::contract]
pub mod delegatee {
    use ink::storage::{
        traits::ManualKey,
        Mapping,
    };
    #[ink(storage)]
    pub struct Delegatee {
        // `ManualKey` must be the same as in the original contract.
        addresses: Mapping<AccountId, i32, ManualKey<0x23>>,
        counter: i32,
        // Uncommenting below line will break storage compatibility.
        // flag: bool,
    }

    impl Delegatee {
        /// When using the delegate call. You only upload the code of the delegatee
        /// contract. However, the code and storage do not get initialized.
        ///
        /// Because of this. The constructor actually never gets called.
        #[allow(clippy::new_without_default)]
        #[ink(constructor)]
        pub fn new() -> Self {
            unreachable!(
                "Constructors are not called when upgrading using `set_code_hash`."
            )
        }

        /// Increments the current value.
        #[ink(message)]
        pub fn inc(&mut self) {
            self.counter = self.counter.checked_add(2).unwrap();
        }

        /// Adds current value of counter to the `addresses`
        #[ink(message)]
        pub fn append_address_value(&mut self) {
            let caller = self.env().caller();
            self.addresses.insert(caller, &self.counter);
        }
    }
}
```

As you can see, delegatee's code looks like a normal ink! Smart Contract with some important features:
- Storage layout is identical to the original contract's storage
- `addresses` mapping key is identical
- Constructor does not have any logic, as the code is never instantiated. (It can be, but plays no effect on the execution)

### Delegate dependency locks

In a delegator contract pattern, one contract delegates calls to another contract. 
Thus it depends upon the contract code to which it delegates. Since on-chain contract code
can be deleted by anybody if there are no instances of the contract on the chain, this would 
break the `delegator` contract. To prevent this, the `delegator` contract can utilize the 
`lock_delegate_dependency` and `unlock_delegate_dependency` host functions. Calling
`lock_delegate_dependency` will prevent the code at the given hash from being deleted e.g.

```rust
self.env().lock_delegate_dependency(&code_hash);
```

A subsequent call to `unlock_delegate_dependency` from within the `delegator` contract 
instance releases the lock from that contract, allowing that code at the given hash to be 
deleted if no other instances of the contract or delegate dependency locks exist.

```rust
self.env().lock_delegate_dependency(&code_hash);
```

Note that these two methods can be called by anybody executing the contract, so it is the 
responsibility of the contract developer to ensure correct access control.
You can take a look at our [`upgradeable-contracts/delegator`](https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts#delegator)
example, which demonstrates the usage of these two functions.

## Note on the usage of wildcard selectors

When working with cross-contract calls, developers are required to be aware of the some important changes.


Since ink! 5 we have restricted the usage of the wildcard selector due to 
[security reasons](https://blog.openzeppelin.com/security-review-ink-cargo-contract#custom-selectors-could-facilitate-proxy-selector-clashing-attacks).

:::danger Beware
Due to [IIP-2](https://github.com/use-ink/ink/issues/1676), ink! only allows
to contain a single message with a well-known selector `@` when the other message
with the wildcard selector `_` is defined.
:::

See [example](https://github.com/use-ink/ink-examples/tree/main/wildcard-selector)
for illustration on how it can be used in practice.

## Note on `CallFlags`

`CallFlags` provide fine-grained control over the cross-contract execution.

Some useful properties:
- Re-entry is disable by default. It can be enabled with `.set_allow_reentry(true)` flag.
- The call execution context is returned to the caller by default. You can finish execution in the callee with `.set_tail_call(true)` flag.
- `.set_clone_input(true)` clones the input of the caller's messages. It can be used with when `.set_tail_call(false)`.
- `.set_forward_input(true)` consumes the input of the caller's message which can be used after.  It can be used with when `.set_tail_call(true)`. 



## Replacing Contract Code with `set_code_hash()`

Following [Substrate's runtime upgradeability](https://docs.substrate.io/maintain/runtime-upgrades/) 
philosophy, ink! also supports an easy way to update your contract code via the special function 
[`set_code_hash()`](https://use-ink.github.io/ink/ink_env/fn.set_code_hash.html).

### Properties

- Updates the contract code using `set_code_hash()`. 
This effectively replaces the code which is executed for the contract address.
- The other contract needs to be deployed on-chain.
- State is stored in the storage of the originally instantiated contract.


### Example

Just add the following function to the contract you want to upgrade in the future.

```rust 
/// Modifies the code which is used to execute calls to this contract address (`AccountId`).
///
/// We use this to upgrade the contract logic. We don't do any authorization here, any caller
/// can execute this method. In a production contract you would do some authorization here.
#[ink(message)]
pub fn set_code(&mut self, code_hash: [u8; 32]) {
    ink::env::set_code_hash(&code_hash).unwrap_or_else(|err| {
        panic!(
            "Failed to `set_code_hash` to {:?} due to {:?}",
            code_hash, err
        )
    });
    ink::env::debug_println!("Switched code hash to {:?}.", code_hash);
}
```

### Storage Compatibility

It is the developer's responsibility to ensure 
that the new contract's storage is compatible with the storage of the contract that is replaced.

:::danger Beware

You should not change the order in which the contract state variables are declared, nor their type!

Violating the restriction will not prevent a successful compilation,
but will result in **the mix-up of values** or **failure to read the storage correctly**.
This can be a result of severe errors in the application utilizing the contract.

:::


If the storage of your contract looks like this:
```rust
#[ink(storage)]
pub struct YourContract {
    x: u32,
    y: bool,
}
```

The procedures listed below will make it ***invalid***

Changing the order of variables:

```rust
#[ink(storage)]
pub struct YourContract {
    y: bool,
    x: u32,
}
```

Removing an existing variable:

```rust
#[ink(storage)]
pub struct YourContract {
    x: u32,
}
```

Changing the type of a variable:

```rust
#[ink(storage)]
pub struct YourContract {
    x: u64,
    y: bool,
}
```

Introducing a new variable before any of the existing ones:

```rust
#[ink(storage)]
pub struct YourContract {
    z: Vec<u32>,
    x: u32,
    y: bool,
}
```

### A little note on the determinism of contract addresses

:::note

todo
If your contract utilizes this approach, it no-longer holds a deterministic address assumption.
You can no longer assume that a contract address identifies a specific code hash.
Please refer to [the issue](https://github.com/paritytech/substrate/pull/10690#issuecomment-1025702389) 
for more details.

:::

## Examples

Examples of upgradable contracts can be found in the 
[ink! repository](https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts).
