---
title: Contract Template
hide_title: true
slug: /basics/contract-template
---

![Macro Title Picture](/img/title/macro.svg)

# Contract Template

On this page we'll go over the elements of a basic contract.

## Creating a template

Change into your working directory and run:

```bash
$ cargo contract new foobar
```

This will create a new project folder named `foobar`.

```bash
$ cd foobar/
```

In the `lib.rs` file you find initial scaffolded code, which you can use as a starting point.

Quickly check that it compiles, and the trivial tests pass with:

```bash
$ cargo test
```

Also check that you can build the contract by running:

```bash
$ cargo contract build
```

`cargo test` builds the contract for `std`, `cargo contract build` for an 
on-chain deployment (`no_std` with a RISC-V target).

If everything looks good, then we are ready to start programming!

## Template Content

The template contains scaffolded code that provides a starting point
for writing an ink! contract. In the following we'll take a look
at what the files contain.
The files you get locally will look similar, just that we added
explanatory comments here.

### `Cargo.toml`

```toml
[package]
name = "foobar"
version = "0.1.0"
authors = ["[your_name] <[your_email]>"]
edition = "2021"

[dependencies]
# The `ink` crate contains the ink! eDSL and re-exports
# a number of other ink! specific crates. For example,
# `ink::env` is the `ink_env` crate that contains functions
# to interact with a contract's environment (querying information
# about a caller, the current block number, etc.).
ink = { version = "6", default-features = false }

[dev-dependencies]
# This developer dependency is for the End-to-End testing framework.
ink_e2e = { path = "../../crates/e2e" }

[lib]
name = "foobar"
path = "lib.rs"

[features]
default = ["std"]
std = [
    "ink/std",
]
ink-as-dependency = []

# This feature is just a convention, so that the end-to-end tests
# are only executed if `cargo test` is explicitly invoked with
# `--features e2e-tests`.
e2e-tests = []
```

### `lib.rs`

Every ink! contract is required to contain:

* Exactly one `#[ink(storage)]` struct.
* At least one `#[ink(constructor)]` function.
* At least one `#[ink(message)]` function.

The scaffolded code will look similar to the following, we've
changed the comments though to explain what is going on there
on a high level.

```rust
// If the `std` feature from the `Cargo.toml` is not enabled
// we switch on `no_std`, this has the effect of Rusts standard
// library not being included in our contract.
//
// The Rust standard library is OS-dependent and Wasm is
// architecture independent.
#![cfg_attr(not(feature = "std"), no_std, no_main)]

// This is the ink! macro, the starting point for your contract.
// Everything below it might look like Rust code, but it is actually
// run through a parser in ink!.
#[ink::contract]
pub mod flipper {
    /// This is the contract's storage.
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        /// A constructor that the contract can be initialized with.
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            /* --snip-- */
        }

        /// An alternative constructor that the contract can be
        /// initialized with.
        #[ink(constructor)]
        pub fn new_default() -> Self {
            /* --snip-- */
        }

        /// A state-mutating function that the contract exposes to the
        /// outside world.
        ///
        /// By default functions are private, they have to be annotated
        /// with `#[ink(message)]` and `pub` to be available from the
        /// outside.
        #[ink(message)]
        pub fn flip(&mut self) {
            /* --snip-- */
        }

        /// A public contract function that has no side-effects.
        ///
        /// Note that while purely reading functions can be invoked
        /// by submitting a transaction on-chain, this is usually
        /// not done as they have no side-effects and the transaction
        /// costs would be wasted.
        /// Instead those functions are typically invoked via RPC to
        /// return a contract's state.
        #[ink(message)]
        pub fn get(&self) -> bool {
            /* --snip-- */
        }
    }

    #[cfg(test)]
    mod tests {
        use super::*;

        /// This attribute denotes that the test is executed in
        /// a simulated, mocked blockchain environment. There are
        /// functions available to influence how the test environment
        /// is configured (e.g. setting an account to a specified balance).
        #[ink::test]
        fn default_works() {
            /* --snip-- */
        }

        /* --snip-- */
    }

    #[cfg(all(test, feature = "e2e-tests"))]
    mod e2e_tests {
        use super::*;
        use ink_e2e::build_message;

        type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;

        /// With this attribute the contract will be compiled and deployed
        /// to a Substrate node that is required to be running in the
        /// background.
        ///
        /// We offer API functions that enable developers to then interact
        /// with the contract. ink! will take care of putting contract calls
        /// into transactions that will be submitted to the Substrate chain.
        ///
        /// Developers can define assertions on the outcome of their transactions,
        /// such as checking for state mutations, transaction failures or
        /// incurred gas costs.
        #[ink_e2e::test]
        async fn it_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
            /* --snip-- */
        }

        /* --snip-- */
    }
}
```
