---
title: Upgradeable Contracts
slug: /basics/upgradeable-contracts
---

Even though smart contracts are intended to be immutable by design,
it is often necessary to perform an upgrade of a smart contract. 

The developer may need to fix a critical bug or introduce a new feature.

For this type of scenario, ink! has different upgrade strategies.

# Proxy forwarding

This method relies on the ability of contracts to proxy calls to other contracts.

## Properties:

- Forwards any call that does not match a selector of itself to another contract.
- The other contract needs to be deployed on-chain.
- State is stored in the storage of the contract to which calls are forwarded.


Our proxy contract should usually have these 2 variables
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

We then need a way to change the address fo a contract to which we forward calls to
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

Using this pattern, you can introduce other message to your proxy contract.
Any messages that are not matched on the proxy contract will be forwarded the specified contract address.

# Updating contract code directly

Following [Substrate's runtime upgradeability](https://docs.substrate.io/tutorials/get-started/forkless-upgrade/) philosophy, ink! also supports an easy way to update your contract code via the special function `set_code_hash()`

## Properties

- Updates the contract code using set_code_hash. This effectively replaces the code which is executed for the contract address.
- The other contract needs to be deployed on-chain.
- State is stored in the storage of the originally instantiated contract.

Just add the following function to the contract your want to upgrade in future.

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

## Storage compatibility

It is developer's responsibility to ensure that the new contract's storage is compatible with the old version.

**You should not change the order in which the contract state variables are declared, nor their type!**

Violating the restriction will not prevent a successful compilation,
but will result in **the mix-up of values** or **failure to read the storage correctly**.
This can be a result of severe errors in the application utilizing the contract.

If the storage of your contract looks like this:
```rust
use ink_lang as ink;
#[ink(storage)]
pub struct YourContract {
    x: u32,
    y: bool,
}
```
The procedures listed below will make it ***invalid***:

Changing the order of variables:
```rust
#[ink(storage)]
pub struct YourContract {
    y: bool,
    x: u32,
}
```
Removing existing variable:
```rust
#[ink(storage)]
pub struct YourContract {
    x: u32,
}
```
Changing type of a variable:
```rust
#[ink(storage)]
pub struct YourContract {
    x: u64,
    y: bool,
}
```
Introducing a new variable before any of the existing ones
```rust
#[ink(storage)]
pub struct YourContract {
    z: Vec[u32],
    x: u32,
    y: bool,
}
```

# Examples

Examples of upgradable contracts can be found in the [ink! repository](https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts)