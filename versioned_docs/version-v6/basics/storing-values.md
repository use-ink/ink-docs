---
title: Storing Values
slug: /basics/storing-values
hide_title: true
---

![Storage Title Picture](/img/title/storage.svg)

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

Furthermore, ink! provides [Polkadot SDK](https://polkadot.com/platform/sdk) specific types like `AccountId`, `Balance`, and `Hash` to smart contracts as if
they were primitive types.

### String, Vector and More

The [`ink_prelude`](https://docs.rs/ink_prelude/5.0.0/ink_prelude/index.html) crate provides an efficient approach to import commonly used Rust types such as `String` and `Vec`, ensuring safe usage within an ink! contract.

This simplifies the type referencing process between the `std` and `no_std` environments. Typically, these types are defined within the `std` crate in the `std` environment, and the `alloc` crate in the `no_std` environment. Given that ink! smart contract code is compiled in both environments (`no_std` for production and `std` for unit tests), developers might find themselves writing intricate conditional compilation macros. The `ink_prelude` crate conveniently re-exports these types, eliminating this complexity.

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

ink! also provides a `Mapping` storage type. You can read more about it [here](../datastructures/mapping.md).

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

You can even combine all the above mentioned types in a custom `struct` which you can then store in the contract's storage.

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
[`Mapping` documentation](../datastructures/mapping.md) for more details.

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
