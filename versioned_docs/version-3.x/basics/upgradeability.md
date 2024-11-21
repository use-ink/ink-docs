---
title: Upgradeable Contracts
slug: /basics/upgradeable-contracts
---

Even though smart contracts are intended to be immutable by design,
it is often necessary to perform an upgrade of a smart contract. 

The developer may need to fix a critical bug or introduce a new feature.

For this type of scenario, ink! has different upgrade strategies.
- [Proxy Forwarding](#proxy-forwarding)
  - [Properties](#properties)
- [Replacing Contract Code with `set_code_hash()`](#replacing-contract-code-with-set_code_hash)
  - [Properties](#properties-1)
  - [Storage Compatibility](#storage-compatibility)
  - [A little note on the determinism of contract addresses](#a-little-note-on-the-determinism-of-contract-addresses)
- [Examples](#examples)

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
    #[ink(message)]
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
        ink_env::call::build_call::<ink_env::DefaultEnvironment>()
            .call_type(
                Call::new()
                    .callee(self.forward_to)
                    .transferred_value(self.env().transferred_value())
                    .gas_limit(0),
            )
            .call_flags(
                ink_env::CallFlags::default()
                    .set_forward_input(true)
                    .set_tail_call(true),
            )
            .fire()
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

## Replacing Contract Code with `set_code_hash()`

Following [Substrate's runtime upgradeability](https://docs.substrate.io/maintain/runtime-upgrades/) 
philosophy, ink! also supports an easy way to update your contract code via the special function 
[`set_code_hash()`](https://use-ink.github.io/ink/ink_env/fn.set_code_hash.html).

### Properties

- Updates the contract code using `set_code_hash()`. 
This effectively replaces the code which is executed for the contract address.
- The other contract needs to be deployed on-chain.
- State is stored in the storage of the originally instantiated contract.

Just add the following function to the contract you want to upgrade in the future.

```rust 
/// Modifies the code which is used to execute calls to this contract address (`AccountId`).
///
/// We use this to upgrade the contract logic. We don't do any authorization here, any caller
/// can execute this method. In a production contract you would do some authorization here.
#[ink(message)]
pub fn set_code(&mut self, code_hash: [u8; 32]) {
    ink_env::set_code_hash(&code_hash).unwrap_or_else(|err| {
        panic!(
            "Failed to `set_code_hash` to {:?} due to {:?}",
            code_hash, err
        )
    });
    ink_env::debug_println!("Switched code hash to {:?}.", code_hash);
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

If your contract utilizes this approach, it no-longer holds a deterministic address assumption.
You can no longer assume that a contract address identifies a specific code hash.
Please refer to [the issue](https://github.com/paritytech/substrate/pull/10690#issuecomment-1025702389) 
for more details.

:::

## Examples

Examples of upgradable contracts can be found in the 
[ink! repository](https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts)
