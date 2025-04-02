---
title: Overview
slug: /datastructures/overview
hide_title: true
---

![Storage Title Picture](/img/title/storage.svg)

# Overview

The `ink_storage` crate acts as the standard storage library for ink! smart contracts.
At the moment it provides two primitives for interacting with storage,
[`Mapping`](https://docs.rs/ink_storage/6.0.0/ink_storage/struct.Mapping.html)
and [`Lazy`](https://docs.rs/ink_storage/6.0.0/ink_storage/struct.Lazy.html).

`Mapping` is a mapping of key-value pairs directly to the contract storage. It is very
similar to traditional hash tables and comparable to the `mapping` type Solidity offers.
As a core ingredient to the ink! language, its main advantage is being simple and
lightweight: It favors being efficient in terms of gas costs and code size
over providing a lot of high-level functionality found in other implementations
like the `ink::prelude::collections::HashMap` type.
Overall, the ink! `Mapping` will be a solid choice for most contracts. Moreover, smart
contracts developers can implement advanced features themselves.

`Lazy` is a wrapper type that can be used over any other storage compatible type.
This allows smart contract developers fine-grained manual control over the layout of
the contract storage by assigning a separate storage cell for the field. For example,
it can be used to prevent the contract from eagerly loading large storage fields
during each contract call.
Conceivably, it may be desirable to change certain aspects on how your contract deals with
its storage variables. You can find out more about this in the section about the ink!
[Storage Layout](./storage-layout.md).
