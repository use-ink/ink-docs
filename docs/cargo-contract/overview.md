---
title: Overview
slug: /cargo-contract-cli
---

[![version][m1]][m2]

[m1]: https://img.shields.io/crates/v/cargo-contract.svg
[m2]: https://crates.io/crates/cargo-contract

## What it is

`cargo-contract` is a CLI tool which helps you set up and manage
WebAssembly smart contracts written with ink!.

You can find it [here on GitHub](https://github.com/paritytech/cargo-contract)
and here on [crates.io](https://crates.io/crates/cargo-contract).

The tool has a number of handy capabilities:

TODO update
```
cargo-contract 0.7.0
Utilities to develop Wasm smart contracts

USAGE:
	cargo contract <SUBCOMMAND>

OPTIONS:
	-h, --help          Prints help information
	-V, --version       Prints version information

SUBCOMMANDS:
	new              	Setup and create a new smart contract project
	build            	Compiles the smart contract
	generate-metadata	Generate contract metadata artifacts
	test             	Test the smart contract off-chain
	deploy           	Upload the smart contract code to the chain
	instantiate      	Instantiate a deployed smart contract
	call             	Arguments required for creating and sending
                        an extrinsic to a substrate node
```

## Usage

You can install it this way:

```
cargo install cargo-contract --force
```

Use the `--force` to ensure you are updated to the most recent `cargo-contract` version.

In order to initialize a new ink! project you can use:

```
cargo contract new flipper
```

This will create a folder `flipper` in your work directory.
The folder contains a scaffold `Cargo.toml` and a `lib.rs`, which both contain the necessary building blocks for using ink!.

The `lib.rs` contains our hello world contract ‒ the `Flipper`, which we explain in the next section.

In order to build the contract just execute these commmands in the `flipper` folder:
```
cargo contract build
```

As a result you'll get the file `target/flipper.contract`. It's a JSON which bundles the contract's
metadata and its Wasm blob. This file needs to be used when deploying the contract.
You additionally get the individual `target/flipper.wasm` and `target/metadata.json` in the folder as well.
