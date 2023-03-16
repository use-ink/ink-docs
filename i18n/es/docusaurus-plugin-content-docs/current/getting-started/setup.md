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

Puedes encontrarlo [aquí en GitHub](https://github.com/paritytech/cargo-contract)
y [aquí en crates.io](https://crates.io/crates/cargo-contract).

La herramienta tiene unas cuantas funcionalidades bastante convenientes:

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

### Instalación

Por favor vea las instrucciones de instalación en el repositorio `cargo-contract` [aquí](https://github.com/paritytech/cargo-contract#installation).

Si todo funcionó, `cargo contract --help` debería mostrar una lista con los comandos disponibles similar a la anterior. 

## Instalando `substrate-contracts-node`

[substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node) es
una simple blockchain construida con Substrate y configurada para incluir el módulo que añade
la funcionalidad de smart contracts - el pallet `contracts` (vea [How it Works](/how-it-works) para saber más).
Es una opción muy cómoda para comenzar rápidamente.

Hay dos maneras de instalar el nodo:

### (1) Descargar el Binario
Este es el método recomendado, puedes 
[descargar el binario de nuestra página de releases](https://github.com/paritytech/substrate-contracts-node/releases)
(Linux y Mac).

### (2) Compilalo tu mismo
De manera alternativa, puedes compilar el nodo tu mismo.
¡Aunque esto puede tardar un poco!

```bash
cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --tag v0.23.0 --force --locked
```