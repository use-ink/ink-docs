---
title: "#[ink(constructor)]"
slug: /ink-macros-attributes/constructor
---

Applicable to a method.

Flags a method (or multiple methods) for the ink! storage struct as constructor making it available to the API for instantiating the contract.

## Example

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
