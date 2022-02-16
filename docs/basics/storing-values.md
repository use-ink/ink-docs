---
title: Storing Values
slug: /basics/storing-values
---

Here is how you store simple values in storage:

```rust
#[ink(storage)]
pub struct MyContract {
    // Store a bool
    my_bool: bool,
    // Store some number
    my_number: u32,
}
/* --snip-- */
```

## Supported Types

Substrate contracts may store types that are encodable and decodable with
[Parity Codec](https://github.com/paritytech/parity-codec) which includes most Rust common data
types such as `bool`, `u{8,16,32,64,128}`, `i{8,16,32,64,128}`, `String`, tuples, and arrays.

ink! provides Substrate specific types like `AccountId`, `Balance`, and `Hash` to smart contracts as if
they were primitive types. 


ink! also provides a `Mapping` storage type. You can read more about it [here](https://paritytech.github.io/ink-docs/datastructures/mapping).

Here is an example of how you would store an `AccountId` and `Balance`:

```rust
// We are importing the default ink! types
use ink_lang as ink;

#[ink::contract]
mod MyContract {

    // Our struct will use those default ink! types
    #[ink(storage)]
    pub struct MyContract {
        // Store some AccountId
        my_account: AccountId,
        // Store some Balance
        my_balance: Balance,
    }
    /* --snip-- */
}
```

## Initializing Storage in Constructors

Constructors are how values get initialized.
Every ink! smart contract must have a constructor which is run once when a contract is created. ink! smart contracts can have multiple constructors:

Note that if you have a contract whose storage contains `Mapping'`s you will need to use
`ink_lang::utils::initialize_contract` in your constructor. See the
[`Mapping` documentation](https://paritytech.github.io/ink-docs/datastructures/mapping) for more details.

```rust
use ink_lang as ink;

#[ink::contract]
mod mycontract {

    #[ink(storage)]
    pub struct MyContract {
        number: u32,
    }

    impl MyContract {
        /// Constructor that initializes the `u32` value to the given `init_value`.
        #[ink(constructor)]
        pub fn new(init_value: u32) -> Self {
            Self {
                number: init_value,
            }
        }

        /// Constructor that initializes the `u32` value to the `u32` default.
        #[ink(constructor)]
        pub fn default() -> Self {
            Self {
                number: Default::default(),
            }
        }
    /* --snip-- */
    }
}
```
