---
title: Setup
slug: /getting-started/setup
hide_title: true
---

![Setup Title Picture](/img/title/setup.svg)

# Setup

On this page we describe the pre-requisites for working with ink!.

## Rust & Cargo

A pre-requisite for compiling smart contracts is to install a stable Rust 
version (>= 1.85) and `cargo`. Please see [the official Rust installation guide](https://doc.rust-lang.org/cargo/getting-started/installation.html).

## ink! CLI

The first tool we will be installing is [`cargo-contract`](https://github.com/use-ink/cargo-contract),
our CLI tool for help with setting up and managing smart contracts written with ink!.

The tool has a number of handy capabilities:

```bash
$ cargo contract --help
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

### Installation

Please see the installation instructions in the `cargo-contract` repository [here](https://github.com/use-ink/cargo-contract#installation).

If everything worked, `cargo contract --help` should show you the above list of available commands.

## Installing `ink-node`

The [ink-node](https://github.com/use-ink/ink-node) is
a simple Polkadot SDK blockchain which is configured to include the Polkadot SDK module for
smart contract functionality – the `pallet-revive` (see [Polkadot SDK](../background/polkadot-sdk.md) for more).
It's a comfortable option for local development and testing.

There are two ways of installing the node:

### (1) Download the Binary
This is the recommended method, you can
[download a binary from our releases page](https://github.com/use-ink/ink-node/releases)
(Linux and Mac). 

### (2) Build it yourself

Alternatively, you can build the node by yourself.
This can take a while though!

The build instructions and pre-requisites can be found
[here](https://github.com/use-ink/ink-node?tab=readme-ov-file#build-locally).