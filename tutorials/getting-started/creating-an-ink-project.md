---
title: Creating an ink! Project
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Heart Title Picture](/img/title/heart.svg)

# Creating an ink! Project

Learn how to get started with ink! and build your first contract.

## Prerequisites

Before we start, make sure you have the following installed:

- [Rust](https://rustup.rs/) (latest stable version)
- [cargo-contract](https://github.com/use-ink/cargo-contract) CLI tool

## Installing cargo-contract

First, install the `cargo-contract` CLI tool:

```bash
cargo install --force --locked cargo-contract
```

## Creating Your First Project

Use the ink! CLI to generate an initial smart contract with some scaffolding code:

```bash
cargo contract new flipper
cd flipper
```

This creates a new directory called `flipper` with a basic smart contract template.

## Project Structure

Let's explore what was generated:

```
flipper/
├── Cargo.toml          # Project dependencies and metadata
├── lib.rs              # Main contract code
└── .gitignore          # Git ignore file
```

## Understanding the Contract

Open `lib.rs` to see your first ink! smart contract:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```

This contract:
- Stores a boolean value
- Has two constructors: `new()` and `default()`
- Has a `flip()` message that toggles the value
- Has a `get()` message that returns the current value

## What's Next?

Now that you have your first ink! project, you can:
1. [Build your contract](../building-your-contract)
2. [Deploy it to a blockchain](../deploy-your-contract)
3. [Call your contract methods](../calling-your-contract)

## Key Concepts

- **#[ink::contract]**: Marks the module as an ink! smart contract
- **#[ink(storage)]**: Defines the contract's storage structure
- **#[ink(constructor)]**: Marks functions that initialize the contract
- **#[ink(message)]**: Marks functions that can be called externally 