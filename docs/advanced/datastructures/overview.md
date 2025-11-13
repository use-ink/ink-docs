---
title: Overview
slug: /datastructures/overview
hide_title: true
---

![Storage Title Picture](/img/title/storage.svg)

# Overview

The `ink_storage` crate acts as the standard storage library for ink! smart contracts.
At the moment it provides three primitives for interacting with storage,
[`Mapping`][mapping], [`Lazy`][lazy] and [`StorageVec`][storage-vec].

[mapping]: https://use-ink.github.io/ink/ink_storage/struct.Mapping.html
[lazy]: https://use-ink.github.io/ink/ink_storage/struct.Lazy.html
[storage-vec]: https://use-ink.github.io/ink/ink_storage/struct.StorageVec.html

[`Mapping`][mapping] is a mapping of key-value pairs directly to the contract storage. 
It is very similar to traditional hash tables and comparable to the `mapping` type Solidity offers.
As a core ingredient to the ink! language, its main advantage is being simple and
lightweight: It favors being efficient in terms of gas costs and code size
over providing a lot of high-level functionality found in other implementations
like the `ink::prelude::collections::HashMap` type.
Overall, the ink! `Mapping` will be a solid choice for most contracts. 
Moreover, smart contracts developers can implement advanced features themselves.
You can learn more about this in the [dedicated `Mapping` section](./mapping.md).

[`Lazy`][lazy] is a wrapper type that can be used over any other storage compatible type.
This allows smart contract developers fine-grained manual control over the layout of
the contract storage by assigning a separate storage cell for the field. For example,
it can be used to prevent the contract from eagerly loading large storage fields
during each contract call.
Conceivably, it may be desirable to change certain aspects on how your contract deals with
its storage variables. You can find out more about this in the section about the ink!
[Storage Layout](./storage-layout.md).

[`StorageVec`][storage-vec] is a vector of values/elements directly on contract storage.
However, unlike `Vec<T>`, which stores all of its elements in a single storage cell, 
`StorageVec` stores each of its elements in its own storage cell. 
This layout is more gas efficient for reads and writes of single elements, 
and also allows higher maximum capacity for `StorageVec` compared to `Vec<T>`.
You can learn more about this in the [dedicated `StorageVec` section](./storagevec.md).
