---
title: Configuración
slug: /getting-started/setup
hide_title: true
---

<img src="/img/title/setup.svg" className="titlePic" />

# Configuración

Si estas buscando un tutorial guiado dirigido a principiantes, por favor echa un vistazo a nuestro [Tutorial](https://docs.substrate.io/tutorials/smart-contracts/).

## Rust & Cargo

Un prerequisito para compilar smart contracts es tener Rust y Cargo instalados. Aquí tienes [una guía para la instalación](https://doc.rust-lang.org/cargo/getting-started/installation.html).

## ink! CLI

La primera herramienta que instalaremos es [`cargo-contract`](https://github.com/paritytech/cargo-contract), una herramienta para la interfaz de la línea de comandos (CLI) para ayudar a configurar y administrar WebAssembly smart contracts escritos en ink!.

<div className="translateTodo">
You can find it [here on GitHub](https://github.com/paritytech/cargo-contract)
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

### Installation

Please see the installation instructions in the `cargo-contract` repository [here](https://github.com/paritytech/cargo-contract#installation).

If everything worked, `cargo contract --help` should show you the above list of available commands.

## Installing `substrate-contracts-node`

The [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node) is
a simple Substrate blockchain which is configured to include the Substrate module for
smart contract functionality – the `contracts` pallet (see [How it Works](/how-it-works) for more).
It's a comfortable option if you want to get a quickstart.

There are two ways of installing the node:

### (1) Download the Binary
This is the recommended method, you can
[download a binary from our releases page](https://github.com/paritytech/substrate-contracts-node/releases)
(Linux and Mac).

### (2) Build it yourself

Alternatively you can build the node by yourself.
This can take quite a while though!

```bash
cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --tag v0.23.0 --force --locked
```
</div>
