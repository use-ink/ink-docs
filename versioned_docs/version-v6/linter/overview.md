---
title: Overview
hide_title: true
description: An overview of ink! linter
---

![Text/linter Title Picture](/img/title/text/linter.svg)

:::caution
This page has not yet been edited for ink! v6 yet.

TODO @peterwht
:::

# Overview

# Overview
ink! includes the linter — a security tool designed to identify typical security issues in smart contracts. The linter is meant to seamlessly fit into the smart contracts development process, ensuring that contracts are thoroughly checked during the build phase before they are deployed to the blockchain.

## Installation
Our linter requires two crates and a fixed Rust toolchain version. You can use
these commands to install the required dependencies:

```bash
export TOOLCHAIN_VERSION=nightly-2025-02-20
rustup install $TOOLCHAIN_VERSION
rustup component add rust-src --toolchain $TOOLCHAIN_VERSION
rustup run $TOOLCHAIN_VERSION cargo install cargo-dylint dylint-link
```

Note that the linter requires this specific version of the toolchain, 
since it uses the internal Rust compiler API. That's also why we require
nightly for the linter, these internal crates are not accessible on stable.

## Usage
The linter operates via `cargo-contract`.

To perform a build with extra code analysis (i.e. the ink! linting rules), run the
following command within the contract directory:

```bash
$ cargo contract build --lint
```

This command compiles the contract and applies all linting checks. You can find the complete list of lints along with their descriptions in this documentation.

## Suppressing linter warnings
To suppress linter warnings in your ink! smart-contract, you can use `allow` attributes. You can apply these attributes either to a particular piece of code or globally.

Here's how to suppress the specific linter warnings:

```rust
// Suppressing the `primitive_topic` lint globally
#[cfg_attr(dylint_lib = "ink_linting", allow(primitive_topic))]

#[ink(message)]
pub fn test(&mut self) {
    // Suppressing the `strict_balance_equality` lint in a specific place
    #[cfg_attr(dylint_lib = "ink_linting", allow(strict_balance_equality))]
    if self.env().balance() == 10 { /* ... */ }
}
```

