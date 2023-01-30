---
title: Introducción
slug: /cargo-contract-cli
---
TODO: delete

[![version][m1]][m2]

[m1]: https://img.shields.io/crates/v/cargo-contract.svg
[m2]: https://crates.io/crates/cargo-contract

`cargo-contract` es una herramienta CLI tool que te ayuda a configurar y administrar
WebAssembly smart contracts escritos con ink!.
Puedes encontrarla [aquí en GitHub](https://github.com/paritytech/cargo-contract)
y aquí en [crates.io](https://crates.io/crates/cargo-contract).

La herramienta tiene una serie de capacidades útiles:

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

## Instalación

Como prerequisito de la herramienta tienes que instalar el paquete [binaryen](https://github.com/WebAssembly/binaryen), que es utilizado para optimizar el bytecode WebAssembly bytecode del contrato.

Muchos gestores de paquetes lo tienen disponible hoy en día. ‒ p.ej. es una paquete para [Debian/Ubuntu](https://tracker.debian.org/pkg/binaryen),
[Homebrew](https://formulae.brew.sh/formula/binaryen) y [Arch Linux](https://archlinux.org/packages/community/x86_64/binaryen/).

Después de instalar el paquete ejecuta:

```bash
cargo install cargo-contract --force --locked
```

Utiliza `--force` para asegurarse que estas actualizado con la versión más reciente de `cargo-contract`.

Después puedes utilizar `cargo contract --help` para comenzar a explorar los comandos que tienes disponibles.

## Uso

Para inicializar un nuevo proyecto de ink! puedes utilizar:

```bash
cargo contract new flipper
```

Esto creara una carpeta `flipper` en tu directorio de trabajo.
La carpeta contiene un scaffold `Cargo.toml` y un `lib.rs`, ambos contienen los bloques de construcción necesarios para utilizar ink!.

El `lib.rs` contiene nuesto contrato hello world ‒ el `Flipper`, que explicaremos en la siguiente sección.

Para compilar el contrato simplemente ejecuta estos comandos el la carpeta `flipper`:
```bash
cargo contract build
```
Como resultado generaras el fichero `target/flipper.contract`. Es un JSON que It's a JSON que agrupa los 
metadatos del contrato y su Wasm blob. Este fichero sera necesario para el despliegue del contrato. 
Adicionalmente obtendras el  `target/flipper.wasm` y `target/metadata.json` individuales en la carpeta.
