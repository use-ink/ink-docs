---
title: Opt out of Storage
slug: /datastructures/opting-out
---

If you are in need of storing some temporary information across method and message boundaries ink! will have your back with the `ink_storage::Memory` abstraction. It allows you to simply opt-out of using the storage for the wrapped entity at all and thus is very similar to Solidity's very own `memory` annotation.

An example below:

```rust
#[ink(storage)]
pub struct OptedOut {
    a: i32,
    b: ink_storage::Lazy<i32>,
    c: ink_storage::Memory<i32>,
}
```

The the above example `a` and `b` are normal storage entities, however, `c` on the other hand side will never load from or store to contract storage and will always be reset to the default value of its `i32` type for every contract call.
It can be accessed from all ink! messages or methods via `self.c`, but will never manipulate the contract storage and thus acts wonderfully as some shared local information.
