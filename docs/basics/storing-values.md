---
title: Storing Values
slug: /basics/storing-values
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Storing Values

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

Futhermore, ink! provides [substrate](https://substrate.io/) specific types like `AccountId`, `Balance`, and `Hash` to smart contracts as if
they were primitive types.

### String, Vector and More

As ink! operates in a `no_std` environment we need bring our own definitions for data types included in `std` like `String` and `Vec`. The [`ink_prelude`](https://docs.rs/ink_prelude/latest/ink_prelude/index.html) crate offers such definitions for most common `std` data types and can be safely used in an ink! contract.

You can use the prelude definitions like this:

```rust
#[ink::contract]
mod MyContractWithStringsAndArrays {
    use ink::prelude::string::String;
    use ink::prelude::vec::Vec;

    #[ink(storage)]
    pub struct MyContract {
        // Store some String
        my_string: String,
        // Store some u32 in a vec
        my_vector: Vec<u32>,
    }
    /* --snip-- */
}
```

### Mapping

ink! also provides a `Mapping` storage type. You can read more about it [here](/datastructures/mapping).

### Substrate Types

Here is an example of how you would store substrate types `AccountId`, `Balance` and `Hash`:

```rust
#[ink::contract]
mod MyContract {

    // Our struct will use those default ink! types
    #[ink(storage)]
    pub struct MyContract {
        // Store some AccountId
        my_account: AccountId,
        // Store some Balance
        my_balance: Balance,
        // Store some Hash
        my_hash: Hash,
    }
    /* --snip-- */
}
```

### Enum

Enum can be used as a datatype as well. It's use in the example in the [Struct](#struct) section.

```rust
pub enum Status {
    /// An auction has not started yet.
    NotStarted,
    /// We are in the starting period of the auction, collecting initial bids.
    OpeningPeriod,
    /// We are in the ending period of the auction, where we are taking snapshots
    /// of the winning bids.
}
```

### Struct

You can combine all the above mentioned types even in a custom `struct` you can than store in the contracts storage.

```rust
mod MyContract {
    use ink::prelude::string::String;
    use ink::prelude::vec::Vec;


    pub struct Auction {
        /// Branded name of the auction event.
        name: String,
        /// Some hash identifying the auction subject.
        subject: Hash,
        /// Auction status.
        status: Status, // Enum: Usage shown in next section
        /// Candle auction can have no winner.
        /// If auction is finalized, that means that the winner is determined.
        finalized: bool,
        /// vector
        vector: Vec<u8>,
    }

    #[ink(storage)]
    pub struct MyContract {
        // Store Auctions in a vec
        auctions: Vec<Auction>,
    }
}
```

The values of an enum should be referenced as `Status::OpeningPeriod`.

## Initializing Storage in Constructors

Constructors are how values get initialized.
Every ink! smart contract must have a constructor which is run once when a contract is created. ink! smart contracts can have multiple constructors:

Note that if you have a contract whose storage contains `Mapping'`s you will need to use
`ink_lang::utils::initialize_contract` in your constructor. See the
[`Mapping` documentation](/datastructures/mapping) for more details.

```rust
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
