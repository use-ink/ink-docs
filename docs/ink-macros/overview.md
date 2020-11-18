---
title: Overview
slug: /ink-macros-attributes
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

In a module annotated with `#[ink::contract]` these attributes are available:


### `#[ink(storage)]` 

Applicable on `struct` definitions. 

Defines the ink! storage struct. There can only be one ink! storage definition per contract.


### `#[ink(event)]` 

Applicable on `struct` definitions.

Defines an ink! event. A contract can define multiple such ink! events.


### `#[ink(anonymous)]`

Applicable to ink! events.

Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as topic upon emitting. Very similar to anonymous events in Solidity. 


### `#[ink(topic)]` 

Applicate on ink! event field. 

Tells the ink! codegen to provide a topic hash for the given field. Every ink! event can only have a limited number of such topic field. Similar semantics as to indexed event arguments in Solidity. 


### `#[ink(message)]`

Applicable to methods.
 
Flags a method for the ink! storage struct as message making it available to the API for calling the contract. 


### `#[ink(constructor)]`

Applicable to method.

Flags a method for the ink! storage struct as constructor making it available to the API for instantiating the contract.


### `#[ink(payable)]`

Applicable to ink! messages.

Allows receiving value as part of the call of the ink! message. ink! constructors are implicitly payable. 


### `#[ink(selector = "..")]`

Applicable to ink! messages and ink! constructors.

Specifies a concrete dispatch selector for the flagged entity. This allows a contract author to precisely control the selectors of their APIs making it possible to rename their API without breakage.


### `#[ink(namespace = "..")]`

Applicable to ink! trait implementation blocks.

Changes the resulting selectors of all the ink! messages and ink! constructors within the trait implementation. Allows to disambiguate between trait implementations with overlapping message or constructor names. Use only with great care and consideration!


### `#[ink(implementation)]`

Applicable to ink! implementation blocks.

Tells the ink! codegen that some implementation block shall be granted access to ink! internals even without it containing any ink! messages or ink! constructors.


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


