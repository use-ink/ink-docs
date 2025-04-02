---
title: Custom Data Structures
slug: /datastructures/custom-datastructure
hide_title: true
---

![Storage Title Picture](/img/title/storage.svg)

# Custom Data Structures

The `ink_storage` crate provides useful utilities and data structures to organize and
manipulate the contract's storage. However, contract authors should know that they can
also create their own custom data structures.

## Using custom types on storage
Any custom type wanting to be compatible with ink! storage must implement the
[`Storable`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/trait.Storable.html)
trait, so it can be SCALE
[`encoded`](https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Encode.html)
and
[`decoded`](https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Decode.html).
Additionally, the traits
[`StorageLayout`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/trait.StorageLayout.html)
and [`TypeInfo`](https://docs.rs/scale-info/2.3.1/scale_info/trait.TypeInfo.html)
are required as well. But don't worry, usually these traits can just be derived:

```rust
/// A custom type that we can use in our contract storage
#[ink::scale_derive(Encode, Decode, TypeInfo)]
#[cfg_attr(
    feature = "std",
    derive(ink::storage::traits::StorageLayout)
)]
pub struct Inner {
    value: bool,
}

#[ink(storage)]
pub struct ContractStorage {
    inner: Inner,
}
```

Even better: there is a macro
[`#[ink::storage_item]`](https://docs.rs/ink_macro/6.0.0/ink_macro/attr.storage_item.html),
which derives all necessary traits for you. If there is no need to implement any special
behavior, the above code example can be simplified further as follows:

```rust
/// A custom type that we can use in our contract storage
#[ink::storage_item]
pub struct Inner {
    value: bool,
}

#[ink(storage)]
pub struct ContractStorage {
    inner: Inner,
}
```

Naturally, you can as well implement any required trait manually. Please directly refer to
the relevant trait documentations for more information.

:::note

The `#[ink::storage_item]` macro is responsible for storage key calculation of 
non-[`Packed`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/trait.Packed.html) 
types. Without it, the key for non-`Packed` fields will be zero. Using this macro is 
necessary if you don't plan to use a
[`ManualKey`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/struct.ManualKey.html) 
on a non-`Packed` type.

Types with custom implementations of the ink! storage traits can still use this macro only 
for key calculation by disabling the derives: `#[ink::storage_item(derive = false)]`.

:::

## Generic storage fields

It is possible to use generic data types in your storage, as long as any generic type
satisfies the required storage trait bounds. In fact, we already witnessed this in the
previous sections about the
[`Mapping`](https://docs.rs/ink_storage/6.0.0/ink_storage/struct.Mapping.html).

Let's say you want a mapping where accessing a non-existent key should just return
it's default value, akin to how mappings work in Solidity. Additionally, you want to know
how many values there are in the mapping (its length). This could be implemented as a
thin wrapper around the ink! `Mapping` as follows:

```rust
/// Values for this map need to implement the `Default` trait.
/// Naturally, they also must be compatible with contract storage.
/// Note that the underlying `Mapping` type only supports `Packed` values.
#[ink::storage_item]
pub struct DefaultMap<K, V: Packed + Default> {
    values: Mapping<K, V>,
    length: u32,
}

impl<K: Encode, V: Packed + Default> DefaultMap<K, V> {
    /// Accessing non-existent keys will return the default value.
    pub fn get(&self, key: &K) -> V {
        self.values.get(key).unwrap_or_default()
    }

    /// Inserting into the map increases its length by one.
    pub fn set<I, U>(&mut self, key: I, value: &U)
    where
        I: scale::EncodeLike<K>,
        E: scale::EncodeLike<V> + Storable,
    {
        if self.values.insert(key, value).is_none() {
            self.length += 1
        }
    }

    /// Removing a value from the map decreases its length by one.
    pub fn remove(&mut self, key: &K) {
        if self.values.take(key).is_some() {
            self.length -= 1
        }
    }

    /// Return how many values the mapping contains
    pub fn len(&self) -> u32 {
        self.length
    }
}

/// `DefaultMap` is compatible with contract storage.
#[ink(storage)]
pub struct MyContract {
    my_map: DefaultMap<BlockNumber, Balance>,
}
```

:::caution

Generic data types may substantially increase your contracts overall code size, making it
more costly to store on-chain.

The reason for this is [Rust's monomorphization](https://rustwasm.github.io/twiggy/concepts/generic-functions-and-monomorphization.html).

:::

