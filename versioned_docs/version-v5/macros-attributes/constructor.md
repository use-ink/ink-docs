---
title: "#[ink(constructor)]"
slug: /macros-attributes/constructor
hide_title: true
---

![Text/constructor Title Picture](/img/title/text/constructor.svg)

Applicable to a method.

Flags a method (or multiple methods) for the ink! storage struct as constructor making it available to the API for instantiating the contract.

There must be at least one `#[ink(constructor)]` defined method.

Methods flagged with `#[ink(constructor)]` are special in that they are dispatchable
upon contract instantiation. A contract may define multiple such constructors which
allow users of the contract to instantiate a contract in multiple different ways.


## Example

```rust
#[ink::contract]
mod erc20 {
    #[ink(storage)]
    pub struct Erc20 { ... }

    impl Erc20 {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self { .. }

        #[ink(constructor)]
        pub fn total_supply(&self) -> Balance { .. }

        // etc.
    }
}
```
