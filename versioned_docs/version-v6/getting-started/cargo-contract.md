---
title: Install cargo-contract
slug: /cargo-contract-cli
---

`cargo-contract` is a command-line (CLI) tool that helps you set up and manage
smart contracts written with ink!.

The tool has a number of handy capabilities:

```
$ cargo contract       
Utilities to develop ink! smart contracts

Usage: cargo contract <COMMAND>

Commands:
  new              Setup and create a new smart contract project
  build            Compiles the contract, generates metadata, bundles both together in a `<name>.contract` file
  check            Check that the code builds for PolkaVM; does not output any `<name>.contract` artifact to the `target/` directory
  upload           Upload contract code
  instantiate      Instantiate a contract
  call             Call a contract
  account          Account handling and information
  encode           Encodes a contracts input calls and their arguments
  decode           Decodes a contracts input or output data (supplied in hex-encoding)
  remove           Remove contract code
  info             Display information about a contract
  storage          Inspect the on-chain storage of a contract
  verify           Verifies that a given contract binary matches the build result of the specified workspace
  generate-schema  Generates schema from the current metadata specification
  verify-schema    Verify schema from the current metadata specification
  rpc              Make a raw RPC call
  help             Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
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
metadata and its RISC-V binary blob. This file needs to be used when deploying the contract.
You additionally get the individual `target/flipper.polkavm` and `target/flipper.json` in the folder as well.
The `.polkavm` extension is used because the interpreter for the RISC-V bytecode
is a component called [PolkaVM](http://github.com/paritytech/polkavm).

