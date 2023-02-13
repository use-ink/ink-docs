---
title: "#[ink(impl)]"
slug: /macros-attributes/impl
hide_title: true
---

<img src="/img/title/text/impl.svg" className="titlePic" />

This attribute supports a niche case that is rarely needed.

Can be applied on ink! implementation blocks in order to make ink! aware
of them. This is useful if such an implementation block doesn't contain
any other ink! attributes, so it would be flagged by ink! as a Rust item.
Adding `#[ink(impl)]` on such implementation blocks makes them treated
as ink! implementation blocks thus allowing to access the environment
etc.

Note that ink! messages and constructors still need to be explicitly
flagged as such.

## Example

An implementation block can be defined as a trait implementation
for the ink! storage struct using the `#[ink(impl)]` annotation ‒ even
if none of its interior items have any ink! specific attributes on them:

```rust
use core::convert::TryFrom;

#[ink::contract]
mod my_module {
    #[ink(storage)]
    pub struct MyStorage {
        /* storage fields */
    }

    #[ink(impl)]
    impl MyStorage {
        fn my_method(&self) -> i32 {
            /* method implementation */
        }
    }

    impl MyStorage {
      #[ink(constructor)]
      pub fn my_constructor() -> Self {
          /* constructor implementation */
      }

      #[ink(message)]
      pub fn my_message(&self) {
          /* message implementation */
      }
    }
}
```
