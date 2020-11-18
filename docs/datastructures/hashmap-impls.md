---
title: Lazy vs. Eager
slug: /datastructures/lazy-eager
---

In the following we explore the differences between the high-level `ink_storage::collections::HashMap`
and the low-level `ink_storage::lazy::LazyHashMap`. Both provide very similar functionality in that they map some generic key to some storage entity.

However, their APIs look very different. Whereas the `HashMap` provides a rich and high-level API that is comparable to that of Rust's very own `HashMap`, the `LazyHashMap` provides only a fraction of the API and also operates on `Option<T>` values types instead of `T` directly. It is more similar Solidity mappings than to Rust's `HashMap`.

The fundamental difference of both data structures is that `HashMap` is aware of the keys that have been stored in it and thus can reconstruct exactly which elements and storage regions apply to it. This enables it to provide iteration and automated deletion as well as efficient way to defragment its underlying storage to free some storage space again. This goes very well in the vein of Substrate's storage rent model where contracts have to pay for the storage they are using.

| Data Structure | level of abstraction | caching | lazy | element type | container |
|:--|:-:|:-:|:-:|:-:|:-:|
| `T` | - | yes | no | `T` | primitive value |
| `Lazy<T>` | high-level | yes | yes | `T` | single element container |
| `LazyCell<T>` | low-level | yes | yes | `Option<T>` | single element, no container |
| `Vec<T>` | high-level | yes | yes | `T` | Rust vector-like container |
| `LazyIndexMap<T>` | low-level | yes | yes | `Option<T>` | similar to Solidity mapping |
| `HashMap<K, V>` | high-level | yes | yes | `V` (key type `K`) | Rust map-like container |
| `LazyHashMap<K, V>` | low-level | yes | yes | `Option<V>` (key type `K`) | similar to Solidity mapping |

There are many more! For more information about the specifics please take a look into [the `ink_storage` crate documentation](https://paritytech.github.io/ink/ink_storage/).


### In Summary

TODO

The new `ink_storage` crate provides everything you need to operate on your contract's storage.
There are low-level and high-level data structures depending on your need of control.
All provided data structures operate lazily on the contract's storage and cache their reads and writes for a more gas efficient storage access.
Users should prefer high-level data structures found in the `collections` module over the low-level data structures found in the `lazy` module.
For a list of all the new storage data structure visit [`ink_storage`'s documentation](https://paritytech.github.io/ink/ink_storage/).
