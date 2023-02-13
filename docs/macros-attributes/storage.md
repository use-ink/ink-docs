---
title: "#[ink(storage)]"
slug: /macros-attributes/storage
hide_title: true
---

<img src="/img/title/text/storage.svg" className="titlePic" />

Applicable on `struct` definitions. 

Applied on `struct` types in order to flag them for being
the contract's storage definition.
There can only be one ink! storage definition per contract.

There must be exactly one `#[ink(storage)]` struct.

This struct defines the layout of the storage that the ink! smart contract operates on.
The user is able to use a variety of built-in facilities, combine them in various ways
or even provide their own implementations of storage data structures.

For more information visit the `ink_storage` crate documentation.

## Example


```rust
#[ink::contract]
mod flipper {

    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        #[ink(constructor)]
        pub fn construct() -> Self { Flipper { value: false } }

        #[ink(message)]
        pub fn message(&self) {}
    }
}
```
