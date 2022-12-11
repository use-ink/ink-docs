---
title: Setup
slug: /getting-started/setup
---

In case you are looking for a guided tutorial directed
towards beginners please check out our [Guided Tutorial](https://docs.substrate.io/tutorials/v3/ink-workshop/pt1).

## Rust & Cargo

A pre-requisite for compiling smart contracts is to have Rust and Cargo installed. Here's [an installation guide](https://doc.rust-lang.org/cargo/getting-started/installation.html).

## ink! CLI

The first tool we will be installing is [`cargo-contract`](https://github.com/paritytech/cargo-contract), a CLI tool for helping setting up and managing WebAssembly smart contracts written with ink!.

As a pre-requisite for the tool you need to install the [binaryen](https://github.com/WebAssembly/binaryen) package, which is used to optimize the WebAssembly bytecode of the contract.

Many package managers have it available nowadays ‒ e.g. there is a package for [Debian/Ubuntu](https://tracker.debian.org/pkg/binaryen),
[Homebrew](https://formulae.brew.sh/formula/binaryen) and [Arch Linux](https://archlinux.org/packages/community/x86_64/binaryen/).

If there's only an old version in your distributions package manager you can also [download a binary release directly](https://github.com/WebAssembly/binaryen/releases).

After you've installed the package execute:

```bash
cargo install cargo-contract --force --locked
```

Use the `--force` to ensure you are updated to the most recent `cargo-contract` version.

You can then use `cargo contract --help` to start exploring the commands made available to you.

Two other dependencies are needed to lint the ink! contract. This is done to warn users about using e.g. API's in a way that could lead to security issues.

```bash
cargo install cargo-dylint dylint-link
```

## Substrate Framework Pre-requisites

With ink! you can write smart contracts for blockchains built on Substrate.

Follow the
[official installation steps](https://substrate.dev/docs/en/knowledgebase/getting-started/) from the
Substrate Developer Hub Knowledge Base to set up all Substrate pre-requisites.
Once you have done this you will also need to run:

```bash
rustup component add rust-src --toolchain nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

## Installing The Substrate Smart Contracts Node

The [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node) is a simple Substrate
blockchain which is configured to include the Substrate module for smart contract
functionality ‒ the `contracts` pallet (see [How it Works](/how-it-works) for more).

It's a comfortable option if you want to get a quickstart.
You can [download a binary from our releases page](https://github.com/paritytech/substrate-contracts-node/releases)
(Linux and Mac). Alternatively you can build the node by yourself:

```bash
cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --tag v0.17.0 --force --locked
```
