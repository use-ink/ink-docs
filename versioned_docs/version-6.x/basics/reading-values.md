---
title: Reading Values from Storage
slug: /basics/reading-values
hide_title: true
---

<img src="/img/title/storage-read.svg" className="titlePic" />

# Reading Values from Storage

Reading from storage is where the fun begins!

## Contract Functions

As you can see in the contract template, all of your contract functions are part of your contract module.

```rust
impl MyContract {
    // Public and Private functions can go here
}
```

### Public and Private Functions

In Rust, you can make as many implementations as you want. As a stylistic choice, we recommend
breaking up your implementation definitions for your private and public functions:

```rust
impl MyContract {
    /// Public function
    #[ink(message)]
    pub fn my_public_function(&self) {
        /* --snip-- */
    }

    /// Private function
    fn my_private_function(&self) {
        /* --snip-- */
    }

    /* --snip-- */
}
```

You can also choose to split things up however is most clear for your project.

Note that all public functions must use the `#[ink(message)]` attribute.

## Getting a Value

We already showed you how to initialize a storage value in the chapter [Storing Values](./storing-values.md).
Getting the value is just as simple:

```rust
impl MyContract {
    #[ink(message)]
    pub fn my_getter(&self) -> u32 {
        self.number
    }
}
```

In Rust, if the last expression in a function does not have a semicolon it will be the return value.
