---
title: Working with StorageVec
slug: /datastructures/storagevec
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Working with `StorageVec`

In this section we demonstrate how to work with ink!'s
[`StorageVec`](https://docs.rs/ink_storage/5.0.0/ink_storage/struct.StorageVec.html).

## Example: Using a `StorageVec`

Here is an example of an append-only on-chain log:

```rust
#[ink(storage)]
pub struct MyContract {
    on_chain_log: ink::storage::StorageVec<String>,
}
```

The following example contract utilizes a `StorageVec` to log each operation on chain (similar to emitting events but the contract can access them).

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod mycontract {
    use ink::prelude::{format, string::String};
    use ink::storage::StorageVec;

    #[ink(storage)]
    pub struct MyContract {
        on_chain_log: StorageVec<String>,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                on_chain_log: Default::default(),
            }
        }

        /// Donate money to the contract.
        #[ink(message, payable)]
        pub fn donate(&mut self) {
            let caller = self.env().caller();
            let endowment = self.env().transferred_value();

            let log_message = format!("{caller:?} donated {endowment}");

            self.on_chain_log.push(&log_message);
        }

        /// How many donations had the contract so far?
        #[ink(message)]
        pub fn log_length(&self) -> u32 {
            self.on_chain_log.len()
        }

        /// What was the last donation to the contract?
        #[ink(message)]
        pub fn last_donation(&self) -> Option<String> {
            self.on_chain_log.peek()
        }
    }
}

```

## Difference between `StorageVec` and Rusts `Vec` type

Any Rust `Vec<T>` will exhibit `Packed` storage layout; where
`StorageVec` stores each value under it's own storage key.

Hence, any read or write from or to a `Vec` on storage will load
or store _all_ of its elements.

This can be undesirable:
The cost of reading or writing a _single_ element grows linearly
corresponding to the number of elements in the vector (its length).
Additionally, the maximum capacity of the _whole_ vector is limited by
the size of [ink!'s static buffer](https://github.com/paritytech/ink/blob/master/ARCHITECTURE.md#communication-with-the-pallet)
used during ABI encoding and decoding (default 16 KiB).

`StorageVec` on the other hand allows to access each element individually.
Thus, it can theoretically grow to infinite size.
However, we currently limit the length at 2 ^ 32 elements. In practice,
even if the vector elements are single bytes, it'll allow to store
more than 4 GB data in blockchain storage.

### Caveats

Iterators are not provided. `StorageVec` is expected to be used to
store a lot elements, where iterating through the elements would be
rather inefficient. Manually iterating over the elements using a loop
is possible but considered an anti-pattern for most cases.

For the same reason, operations which would require re-ordering
stored elements are not supported. Examples include inserting and
deleting elements at arbitrary positions or sorting elements.

The decision whether to use `Vec<T>` or `StorageVec` can be seen as an
optimization problem with several factors:
* How large you expect the vector to grow
* The size of individual elements being stored
* How frequently reads, writes and iterations happen

For example, if a vector is expected to stay small but is frequently
iterated over. Choosing a `Vec<T>` instead of `StorageVec` will be
preferred as individual storage reads are much more expensive as
opposed to retrieving and decoding the whole collection with a single
storage read.

### Storage Layout

At given `StorageKey` `K`, the length of the `StorageVec` is hold.
Each element `E` is then stored under a combination of the `StorageVec`
key `K` and the elements index.

Given `StorageVec` under key `K`, the storage key `E` of the `N`th
element is calculated as follows:

`E = scale::Encode((K, N))`

## Considerations when using the `StorageVec` type

`StorageVec` is a `Lazy` type similar to `Mapping`.

Hence, the same considerations apply to `StorageVec` too:
- [Storage loading behavior](../datastructures/mapping.md#storage-loading-behavior)
- [Use fallible storage methods for dynamically sized values](../datastructures/mapping.md#use-fallible-storage-methods-for-dynamically-sized-values)
- [Updating values](../datastructures/mapping.md#updating-values)

## Rust Docs

See here for the Rust documentation of this data structure:
[`StorageVec`](https://docs.rs/ink_storage/5.0.0/ink_storage/struct.StorageVec.html).
