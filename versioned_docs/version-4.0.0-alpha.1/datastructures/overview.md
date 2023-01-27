---
title: Overview
slug: /datastructures/overview
---

The `ink_storage` crate acts as the standard storage library for ink! smart contracts.
At the moment it provides two primitives for interacting with storage, 
[`Mapping`](https://docs.rs/ink_storage/4.0.0-beta.1/ink_storage/struct.Mapping.html)
and [`Lazy`](https://docs.rs/ink_storage/4.0.0-beta.1/ink_storage/struct.Lazy.html).

`Mapping` is a mapping of key-value pairs directly to the contract storage. It is very 
similar to traditional hash tables and comparable to the `mapping` type Solidity offers.
As a core ingredient to the ink! language, its main advantage is being simple and 
lightweight. However, it does not provide any high-level functionality, such as iteration 
or automatic clean-up. Smart contract authors will need to implement any high level 
functionality themselves.

`Lazy` allows smart contract developers fine grained manual control over the storage 
layout of individual types. Conceivably, it may be desirable to change certain aspects
on how your contract deals with it's storage variables. You can find out more about this
in the section about the ink!
[Storage Layout](https://use.ink/versioned_docs/version-4.0.0-alpha.1/datastructures/storage-layout).
