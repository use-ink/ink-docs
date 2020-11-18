---
title: HashMap Lazy vs. Eager
slug: /datastructures/hashmap-lazy-eager
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

### Spread & Packed Modes

Storing or loading complex data structures to and from contract storage can be done in many different ways. You could store all information into a single storage cell or you could try to store all information into as many different cells as possible. Both strategies have pros and cons under different conditions.

For example it might be a very good idea to store all the information under the same cell if all the information is very compact. For example when we are dealing with a byte vector that is expected to never be larger than approx a thousand elements it would probably be more efficient if we store all those thousand bytes in the same cell and especially if we often access many of those (or all) in our contract messages.

On the other hand spreading information across as many cells as possible might be much more efficient if we are dealing with big data structures, a lot of information that is not compact, or when messages that operate on the data always only need a small fraction of the whole data.
An example for this use case is if you have a vector of user accounts where each account stores potentially a lot of information, e.g. a 32-byte hash etc and where our messages only every operate on only a few of those at a time.

The `ink_storage` crate provides the user full control over the strategy or a mix of these two root strategies through some fundamental abstractions that we are briefly presenting to you.

### Default: Spreading Mode

By default ink! spreads information to as many cells as possible. For example if you have the following `#[ink(storage)]` struct every field will live in its own single storage cell. Note that for `c` all 32 bytes will share the same cell!

```rust
#[ink(storage)]
pub struct Spreaded {
    a: i32,
    b: ink_storage::Lazy<i32>,
    c: [u8; 32],
}
```

### Packing Storage

We can alter this behaviour by using the `ink_storage::Pack` abstraction:

```rust
pub struct Spreaded {
    a: i32,
    b: ink_storage::Lazy<i32>,
    c: [u8; 32],
}

#[ink(storage)]
pub struct Packed {
    packed: ink_storage::Pack<Spreaded>,
}
```

Now all fields of `Spreaded` will share the same storage cell. This means whenever one of them is stored to or loaded from the contract storage, all of them are stored or loaded. A user has to choose wisely what mode of operation is more suitable for their contract.

These abstractions can be combined in various ways, yielding full control to the users. For example, in the following only `a` and `b` share a common storage cell while `c` lives in its own:

```rust
pub struct Spreaded {
    a: i32,
    b: ink_storage::Lazy<i32>,
}

#[ink(storage)]
pub struct Packed {
    packed: ink_storage::Pack<Spreaded>,
    c: [u8; 32],
}
```

### Spreading Array Cells

If we prefer to store all bytes of `c` into their own storage cell we can make use of the `SmallVec` data structure. The `SmallVec` is a high-level data structure that allows to efficiently organize a fixed number of elements similar to a Rust array. However, unlike a Rust array it acts lazily upon the storage and spreads its elements into different cells.

```rust
use typenum::U32;

pub struct Spreaded {
    a: i32,
    b: ink_storage::Lazy<i32>,
}

#[ink(storage)]
pub struct Packed {
    packed: ink_storage::Pack<Spreaded>,
    c: SmallVec<u8, U32>,
}
```

### Opting-out of Storage

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
It can be accesses from all ink! messages or methods via `self.c` but will never manipulate the contract storage and thus acts wonderfully as some shared local information.

### Dynamic Storage Allocator

In the previous section we have seen how the default mode of operation is to spread information and how we can opt-in to packing information into single cells via `ink_storage::Packed`.

However, what if we wanted to store a vector of a vector of `i32` for example?
Naturally a user would try to construct this as follows:

```rust
use ink_storage::Vec as StorageVec;

#[ink(storage)]
pub struct Matrix {
    values: StorageVec<StorageVec<i32>>,
}
```

However, this will fail compilation with an error indicating that `StorageVec<T>` requires for its `T` to be packed (`T: PackedLayout`) which `StorageVec<T>` itself does not since it always stores all of its elements into different cells. The same applies to many other storage data sturctures provided by `ink_storage` and is a trade-off the ink! team decided for the case of efficiency of the overall system.
Instead what a user can do in order to get their vector-of-vector to be working is to make use of ink!'s dynamic storage allocator capabilities.

For this the contract author has to first enable the feature via:

```rust
use ink_lang as ink;

#[ink::contract(dynamic_storage_allocator = true)]
mod matrix {
    // contract code ...
}
```

And then we can define our `Matrix` `#[ink(storage)]` as follows:

```rust
use ink_storage::{
    Vec as StorageVec,
    Box as StorageBox,
};

#[ink(storage)]
pub struct Matrix {
    values: StorageVec<StorageBox<StorageVec<i32>>>,
}
```

With `ink_storage::Box<T>` we can use a `T: SpreadLayout` as if it was `T: PackedLayout` since the `ink_storage::Box<T>` itself suffices the requirements and can be put into a single contract storage cell. The whole concept works quite similar to how Rust's `Box` works: by an indirection - contract authors are therefore advised to make use of dynamic storage allocator capabilities only if other ways of dealing with ones problems are not applicable.


### In Summary

The new `ink_storage` crate provides everything you need to operate on your contract's storage.
There are low-level and high-level data structures depending on your need of control.
All provided data structures operate lazily on the contract's storage and cache their reads and writes for a more gas efficient storage access.
Users should prefer high-level data structures found in the `collections` module over the low-level data structures found in the `lazy` module.
For a list of all the new storage data structure visit [`ink_storage`'s documentation](https://paritytech.github.io/ink/ink_storage/).
