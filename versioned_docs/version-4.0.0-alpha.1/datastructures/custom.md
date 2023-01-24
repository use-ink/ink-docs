---
title: Custom Data Structures
slug: /datastructures/custom-datastructure
---

While the `ink_storage` crate provides useful utilities and data structures to organize and 
manipulate the contract's storage contract authors are not limited by its capabilities. 

## Using custom types on storage
Any custom type wanting to be compatible with ink! storage must implement the 
[`Storable`](https://docs.rs/ink_storage_traits/4.0.0-beta/ink_storage_traits/trait.Storable.html) 
trait, so it can be SCALE
[`encoded`](https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Encode.html)
and 
[`decoded`](https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Decode.html).
Additionaly, the traits 
[`StorageLayout`](https://docs.rs/ink_storage/latest/ink_storage/traits/trait.StorageLayout.html)
and [`TypeInfo`](https://docs.rs/scale-info/2.3.1/scale_info/trait.TypeInfo.html)
are required as well. But don't worry, usually these traits can just be derived:

```rust
/// A custom type on our contract storage
#[derive(scale::Decode, scale::Encode, Debug)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct Inner {
    value: bool,
}

#[ink(storage)]
pub struct MyContractStorage {
    inner: Inner,
}
```

Even better: there is a macro `#[ink::storage_item]`, which derives all necessary traits for you. Unless you need to implement any behaviour, the above code example can be 
simplified as follows:

```rust
/// A custom type on our contract storage
#[ink::storage_item]
pub struct Inner {
    value: bool,
}

#[ink(storage)]
pub struct SparseArray {
    inner: Inner,
}
```

