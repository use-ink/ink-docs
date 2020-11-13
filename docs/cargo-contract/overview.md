---
title: Overview
slug: /cargo-contract-cli
---

## What it is

[`cargo-contract`](https://github.com/paritytech/cargo-contract) is a CLI tool for helping setting up
and managing WebAssembly smart contracts written with ink!.

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
cargo contract build && cargo contract generate-metadata
```

As a result you'll get a file `target/flipper.wasm` and `target/metadata.json`. Those need to be used when deploying the contract.

## Capabilities

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

