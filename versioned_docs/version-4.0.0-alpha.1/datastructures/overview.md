---
title: Overview
slug: /datastructures/overview
---

The `ink_storage` crate acts as the standard storage library for ink! smart contracts. At
the moment it provides two primitives for interacting with storage,
[`Mapping`](https://docs.rs/ink_storage/4.0.0-beta/ink_storage/struct.Mapping.html)
and [`Lazy`](https://docs.rs/ink_storage/4.0.0-beta/ink_storage/struct.Lazy.html).

The `Mapping` is a mapping of key-value pairs directly to the contract storage. It is very
similar to a traditional hash table and its main advantage is being simple and lightweight.
Hence, it does not provide any high-level functionality, such as iteration or automatic
clean-up. Smart contract authors will need to implement any high level functionality themselves.

## Eager Loading vs. Lazy Loading

When executing a contract, all the fields of the `#[ink(storage)]` struct will be pulled
from storage, regardless of whether or not they are used during the message execution.

Smart contract authors should be aware of this behaviour since it could potentially
affect their contract performance. For example, consider the following storage struct:

```rust
#[ink(storage)]
pub struct EagerLoading {
    a: i32,
    b: ink_prelude::vec::Vec<i32>,
}

impl EagerLoading {
    #[ink(message)]
    pub fn read_a(&self) {
        let a = self.a;
    }
}
```

In `EagerLoading::read_a()` we only read the `a` storage item. However, the `b` storage
item will still be loaded from storage. As a reminder, this means accessing the
underlying database and SCALE decoding the value. This can incur high costs, especially
as the number of elements in `b` grows.

:::note

Eager loading does **not** apply to `Mapping` fields, though, as key lookups in mappings
are done directly from contract storage.

:::
