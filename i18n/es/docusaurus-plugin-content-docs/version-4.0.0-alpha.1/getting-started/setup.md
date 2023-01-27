---
title: Configuración
slug: /getting-started/setup
---

Si estas buscando un tutorial guiado dirigido a principiantes, por favor echa un vistazo a nuestro [Tutorial](https://docs.substrate.io/tutorials/smart-contracts/).

## Rust & Cargo

Un prerequisito para compilar smart contracts es tener Rust y Cargo instalados. Aquí tienes [una guía para la instalación](https://doc.rust-lang.org/cargo/getting-started/installation.html).

## ink! CLI

La primera herramienta que instalaremos es [`cargo-contract`](https://github.com/paritytech/cargo-contract), una herramienta para la interfaz de la línea de comandos (CLI) para ayudar a configurar y administrar WebAssembly smart contracts escritos en ink!.

Como prerequisito para la herramienta tiene que instalar el paquete [binaryen](https://github.com/WebAssembly/binaryen), que es utilizado para optimizar el WebAssembly bytecode del contrato.

Se necesitan dos dependencias más para analizar los contratos en ink!. Esto se hace para advertir a los usuarios sobre el uso por ejemplo de API's de una manera que podría conducir a problemas de seguridad.

```bash
cargo install cargo-dylint dylint-link
```

Hoy en día muchos de los gestores de paquetes lo tiene disponible - p. ej. Hay un paquete para [Debian/Ubuntu](https://tracker.debian.org/pkg/binaryen),
[Homebrew](https://formulae.brew.sh/formula/binaryen) y [Arch Linux](https://archlinux.org/packages/community/x86_64/binaryen/).

Si solo hay una versión antigua en las distribuciones de tu gestor de paquetes también puedes [descargar el binary release directamente](https://github.com/WebAssembly/binaryen/releases).

Después de haber instalado el paquete, ejecute:

```bash
cargo install cargo-contract --force --locked
```

Utiliza `--force` para asegurarse que tienes la versión más reciente de `cargo-contract`.

A continuación, puede utilizar `cargo contract --help` para comenzar a explorar los comandos disponibles.

## Prerequisito para el Substrate Framework

Con ink! puedes escribir smart contracts para blockchains construidas con Substrate.

Sigue los [pasos de instalación oficial](https://substrate.dev/docs/en/knowledgebase/getting-started/) del Substrate Developer Hub Knowledge Base para configurar todos los prerequisitos de Substrate.

Una vez tengas esto hecho deberas ejecutar:

```bash
rustup component add rust-src --toolchain nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

## Instalando el Substrate Smart Contracts Node

El [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node) es un Substrate blockchain simple configurado para incluir el modulo de Substrate para la funcionalidad de smart contracts - el pallet  `contracts` (Consulta [How it Works](/how-it-works) para más información).

Es una opción cómoda si desea obtener un inicio rápido.
Puedes [descargar el binario de nuestra página de releases](https://github.com/paritytech/substrate-contracts-node/releases)
(Linux y Mac). Alternativamente puedes construir tú mismo el nodo: 
```bash
cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --tag v0.17.0 --force --locked
```
