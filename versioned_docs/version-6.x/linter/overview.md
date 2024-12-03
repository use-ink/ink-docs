---
title: Overview
hide_title: true
description: An overview of ink! linter
---

<img src="/img/title/text/linter.svg" className="titlePic" />

# Overview
ink! includes the linter - a security tool designed to identify typical security issues in smart contracts. The linter is meant to seamlessly fit into the smart contracts development process, ensuring that contracts are thoroughly checked during the build phase before they are deployed to the blockchain.

## Installation
The linter is integrated to the contracts build process, therefore you should already have it installed if you are using [`cargo-contract`](https://github.com/use-ink/cargo-contract) of version `4.0.0` or later.

The linter requires two crates and a fixed Rust toolchain version. You can use
these commands to install the required dependencies:

```
export TOOLCHAIN_VERSION=nightly-2024-02-08
rustup install $TOOLCHAIN_VERSION
rustup component add rust-src --toolchain $TOOLCHAIN_VERSION
rustup run $TOOLCHAIN_VERSION cargo install cargo-dylint dylint-link
```

Note that the linter requires this specific version of the toolchain, since it uses the internal compiler API.

## Usage
The linter operates via `cargo-contract`.

By default, the linter is executed only for the RISC-V target, while for the WASM target, it is not executed unless specifically requested by the user.

To perform a build with extra code analysis, run the following command within the contract directory:

```
cargo contract build --lint
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

