---
title: Overview
slug: /datastructures/custom
---

The `ink_storage` crate acts as the standard storage library for ink! smart contracts.
It provides all the necessary tools and data structures to organize and operate the contract's storage intuitively and efficiently.


TODO https://paritytech.github.io/ink/ink_storage/collections/

### Lazy

Data structures provided by the new `ink_storage` crate are inherently lazy. We will explain what this means below!

The `ink_storage` crate provides high-level and low-level lazy data structures.
The difference between high-level and low-level lies in the distinction in how these data structures are aware
of the elements that they operate on.

For high-level data structures they are fully aware about the elements they contain, do all the clean-up by themselves so the user can concentrate on the business logic.

For low-level data structures the responsibility about the elements lies in the hands of the contract author.
Also they operate on cells (`Option<T>`) instead of entities of type `T`. But what does that mean exactly?

TODO what are high-level and what are low-level data structures

The `ink_storage::Lazy` type caches their entities and acts lazily on the storage.
This means that a read or write operation is only performed when it really needs to
in order to satisfy other inputs.

Data types such as Rust primitives `i32` or Rust's very own `Vec` or data structures
can also be used to operate on the contract's storage, however, they will load their
contents eagerly which is often not what you want.

An example follows with the below contract storage and a message that operates on either of the two fields.
```rust
#[ink(storage)]
pub struct TwoValues {
    offset: i32,
    a: i32,
    b: i32,
}

impl TwoValues {
    #[ink(message)]
    pub fn set(&mut self, which: bool, new_value: i32) {
        match which {
            true  => { self.a = self.offset + new_value; },
            false => { self.b = self.offset + new_value; },
        }
    }
}
```

Whenever we call `TwoValues::set` always both `a` and `b` are loaded despite the fact the we only operate on one of them at a time. This is very costly since storage accesses are in fact database look-ups.
In order to prevent this eager loading of storage contents we can make use of `ink_storage::Lazy` or other lazy data structures defined in that crate:
```rust
#[ink(storage)]
pub struct TwoValues {
    offset: i32,
    a: ink_storage::Lazy<i32>,
    b: ink_storage::Lazy<i32>,
}

impl TwoValues {
    #[ink(message)]
    pub fn set(&mut self, which: bool, new_value: i32) {
        match which {
            true  => { self.a = offset + new_value; },
            false => { self.b = offset + new_value; },
        }
    }
}
```
Now `a` and `b` are only loaded when the contract really needs their values.
Note that `offset` remained `i32` since it is always needed and could spare the minor overhead of the `ink_storage::Lazy` wrapper.
