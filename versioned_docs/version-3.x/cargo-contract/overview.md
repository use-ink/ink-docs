---
title: Overview
slug: /cargo-contract-cli
---

[![version][m1]][m2]

[m1]: https://img.shields.io/crates/v/cargo-contract.svg
[m2]: https://crates.io/crates/cargo-contract

`cargo-contract` is a CLI tool which helps you set up and manage
WebAssembly smart contracts written with ink!.
You can find it [here on GitHub](https://github.com/use-ink/cargo-contract)
and here on [crates.io](https://crates.io/crates/cargo-contract).

The tool has a number of handy capabilities:

```
cargo-contract 0.8.0
Utilities to develop Wasm smart contracts.

USAGE:
    cargo contract <SUBCOMMAND>

OPTIONS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    new                  Setup and create a new smart contract project
    build                Compiles the contract, generates metadata, bundles both together in a '.contract' file
    check                Check that the code builds as Wasm; does not output any build artifact to the top level `target/` directory
    test                 Test the smart contract off-chain
    deploy               Upload the smart contract code to the chain
    instantiate          Instantiate a deployed smart contract
    help                 Prints this message or the help of the given subcommand(s)
```

## Installation

As a pre-requisite for the tool you need to install the [binaryen](https://github.com/WebAssembly/binaryen) package, which is used to optimize the WebAssembly bytecode of the contract.

Many package managers have it available nowadays ‒ e.g. it's a package for [Debian/Ubuntu](https://tracker.debian.org/pkg/binaryen),
[Homebrew](https://formulae.brew.sh/formula/binaryen) and [Arch Linux](https://archlinux.org/packages/community/x86_64/binaryen/).

After you've installed the package execute:

```bash
cargo install cargo-contract --force --locked
```

Use the `--force` to ensure you are updated to the most recent `cargo-contract` version.

You can then use `cargo contract --help` to start exploring the commands made available to you.

## Usage

In order to initialize a new ink! project you can use:

```bash
cargo contract new flipper
```

This will create a folder `flipper` in your work directory.
The folder contains a scaffold `Cargo.toml` and a `lib.rs`, which both contain the necessary building blocks for using ink!.

The `lib.rs` contains our hello world contract ‒ the `Flipper`, which we explain in the next section.

In order to build the contract just execute these commands in the `flipper` folder:
```bash
cargo contract build
```

As a result you'll get the file `target/flipper.contract`. It's a JSON which bundles the contract's
metadata and its Wasm blob. This file needs to be used when deploying the contract.
You additionally get the individual `target/flipper.wasm` and `target/metadata.json` in the folder as well.
