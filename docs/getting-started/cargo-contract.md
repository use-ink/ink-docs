---
title: Install cargo-contract
slug: /cargo-contract-cli
---

`cargo-contract` is a command-line (CLI) tool which helps you set up and manage
WebAssembly smart contracts written with ink!.
You can find it [here on GitHub](https://github.com/use-ink/cargo-contract)
and [here on crates.io](https://crates.io/crates/cargo-contract).

The tool has a number of handy capabilities:

```
$ cargo contract       
Utilities to develop Wasm smart contracts

Usage: cargo contract <COMMAND>

Commands:
  new          Setup and create a new smart contract project
  build        Compiles the contract, generates metadata, bundles both together in a `<name>.contract` file
  check        Check that the code builds as Wasm; does not output any `<name>.contract` artifact to the `target/` directory
  test         Test the smart contract off-chain
  upload       Upload contract code
  instantiate  Instantiate a contract
  call         Call a contract
  decode       Decodes a contracts input or output data (supplied in hex-encoding)
  help         Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help information
  -V, --version  Print version information
```

## Installation

Please see the installation instructions in the `cargo-contract` repository [here](https://github.com/use-ink/cargo-contract#installation).

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
You additionally get the individual `target/flipper.wasm` and `target/flipper.json` in the folder as well.

