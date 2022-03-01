---
title: Working with Mapping 
slug: /datastructures/mapping
---

In this section we want to demonstrate how to work with ink! [`Mapping`](https://paritytech.github.io/ink/ink_storage/struct.Mapping.html).

Here is an example of a mapping from a user to a number:

```rust
#[ink(storage)]
#[derive(SpreadAllocate)]
pub struct MyContract {
    // Store a mapping from AccountIds to a u32
    map: ink_storage::Mapping<AccountId, u32>,
}
```

This means that for a given key, you can store a unique instance of a value type. In this
case, each "user" gets their own number. 

## Initializing a Mapping

In order to correctly initialize a `Mapping` we need two things:
1. An implementation of the [`SpreadAllocate`](https://paritytech.github.io/ink/ink_storage/traits/trait.SpreadAllocate.html) trait on our storage struct
2. The [`ink_lang::utils::initalize_contract`](https://paritytech.github.io/ink/ink_lang/utils/fn.initialize_contract.html) initializer

Not initializing storage before you use it is a common error that can break your smart
contract. If you do not initialize your `Mapping`'s correctly you may end up with
different `Mapping`'s operating on the same set of storage entries 😱.

```rust

#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod mycontract {
    use ink_storage::traits::SpreadAllocate;

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct MyContract {
        // Store a mapping from AccountIds to a u32
        map: ink_storage::Mapping<AccountId, u32>,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new(count: u32) -> Self {
            // This call is required in order to correctly initialize the
            // `Mapping`s of our contract.
            ink_lang::utils::initialize_contract(|contract: &mut Self| {
                let caller = Self::env().caller();
                contract.map.insert(&caller, &count);
            })
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            // Even though we're not explicitly initializing the `Mapping`,
            // we still need to call this
            ink_lang::utils::initialize_contract(|_| {})
        }

        // Grab the number at the caller's AccountID, if it exists
        #[ink(message)]
        pub fn get(&self) -> u32 {
            let caller = Self::env().caller();
            self.map.get(&caller).unwrap_or_default()
        }
    }
}
```
