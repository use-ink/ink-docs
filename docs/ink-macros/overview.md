---
title: Overview
slug: /docs/docs/ink-macros-attributes
---

## ink! Macros & Attributes

All of these ink! attributes are available to specify inside an ink! module.
An ink! module is the module that is flagged by `#[ink::contract]` containing all the ink! definitions:
```rust
use ink_lang as ink;

#[ink::contract]
mod erc20 {
    #[ink(storage)]
    pub struct Erc20 { ... }

    impl Erc20 {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self { .. }

        #[ink(constructor)]
        pub fn total_supply(&self) -> Balance { .. }

        // etc. ...
    }
}
```

We won't be going into the details for any of those but will briefly present the entire set of ink! specific attributes below:
See [here](https://paritytech.github.io/ink/ink_lang/attr.contract.html) for a more detailed description of those and also for details on the `#[ink::contract]` macro.

## Merging of ink! Attributes

It is possible to merge attributes that share a common flagged entity.
The example below demonstrates this for a payable message with a custom selector.

```rust
#[ink(message)]
#[ink(payable)]
#[ink(selector = "0xCAFEBABE")]
pub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {
    // actual implementation
}
```
We can also write the above ink! message definition in the following way:
```rust
#[ink(message, payable, selector = "0xCAFEBABE")]
pub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {
    // actual implementation
}
```


