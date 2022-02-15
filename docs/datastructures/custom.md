---
title: Custom Data Structures
slug: /datastructures/custom-datastructure
---

While the `ink_storage` crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core `SpreadLayout`/`PackedLayout` traits (and the `StorageLayout` trait for supporting the metadata generated for the `.contract` bundle) users are able to define their very own custom storage data structures with their own set of requirement and features that work along the `ink_storage` data structures as long as they fulfill the mere requirements stated by those two traits.

A basic example of a custom struct is shown below:

``` rust
struct Inner {
    value: bool
}

#[ink(storage)]
pub struct MyContract {
    inner: Inner
}
```

Compiling the above will result in errors. While having an inner struct which holds only a boolean might not be the best idea, it serves well to illustrate how to implement the trait:

``` rust
impl SpreadLayout for Inner {
    const FOOTPRINT: u64 = 1;

    fn pull_spread(ptr: &mut KeyPtr) -> Self {
        Self {
            value: SpreadLayout::pull_spread(ptr),
        }
    }

    fn push_spread(&self, ptr: &mut KeyPtr) {
        SpreadLayout::push_spread(&self.value, ptr);
    }

    fn clear_spread(&self, ptr: &mut KeyPtr) {
        SpreadLayout::clear_spread(&self.value, ptr);
    }
}

```

You can check what each method does in the [trait's docs](https://paritytech.github.io/ink/ink_storage/traits/trait.SpreadLayout.html). Check how some data structures are implemented, such as [Mapping](https://paritytech.github.io/ink/src/ink_storage/lazy/mapping.rs.html#131-156).
