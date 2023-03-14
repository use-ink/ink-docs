---
title: ink! vs. CosmWasm
slug: /ink-vs-cosmwasm
hide_title: true
---

<img src="/img/title/cosmwasm.svg" className="titlePic" />

# ink! vs. CosmWasm

A continuación, una breve comparación entre [ink!](https://github.com/paritytech/ink/)
y [CosmWasm](https://github.com/CosmWasm/cosmwasm) enfocada a desarrolladores que vengan
del ecosistema de Cosmos.

## Arquitectura

CosmWasm es modular, de manera que cualquier blockchain que use Cosmos SDK puede añadir
soporte para smart contracts. Siendo muy similar al enfoque que toma [Substrate](https://substrate.io),
con el cual cualquier red tiene la opción de añadir el `pallet-conctracts` en su runtime.

Salvo en esto, la filosofía con la que se ha hecho la arquitectura de CosmWasm e ink! es 
totalmente diferente. El patrón de diseño seguido por CosmWasm es el modelo actor, mientras
que ink! se construye sobre un modelo de ejecución síncrona. Esto se traduce en diferencias
fundamentales en como el código fuente es estructurado.

El principal punto de entrada de funciones en contratos de CosmWasm son:
- `instantiate` que inicializa el estrado del contrato (asumiendo que ya ha sido desplegado).
- `execute` el actor realizará operaciones sobre su estado interno.
- `query` devuelve información sobre el estado interno del actor.

Un contracto en ink! puede tener tanto dispatchables publicos como el desarrollador desee,
y de manera diferente a CosmWasm, no depende de JSON schemas para definir la estructura de los
mensajes.

En cambio, ink! hace un uso intensivo de las macros de Rust. Las principales macros usadas en ink! son:
- `#[ink(constructor)]` la cual es llamada cuando el contrato se despliega, y es responsable
   de inicializar el estado del contrato. Es analoga a la función `instantiate` de CosmWasm.
- `#[ink(storage)]` anotará una estrucura que represente el estado interno del contrato.
- `#[ink(message)]` denota una función como un dispatchable público, esto significa que es expuesta
   en la interfaz del contrato al resto del mundo. Esta macro hace que una función se comporte
   analogamente a las funciones `execute` y `query` de CosmWasm.
- `#[ink(event)]` y `#[ink(topic)]` anotarán estructuras cuyos elementos serán los eventos y topics
   que el contrato pueda emitir.

Hay más macros usadas en ink!, sus detalles pueden ser encontrados en [Macros & Attributes](/macros-attributes). 

## Tests unitarios

Los test unitarios en CosmWasm son bastante similares a ink!. Ambos usan la convencional
`#[cfg(test)]` macro de Rust y establecen un entonrno mock on-chain.

Mientras que los tests unitarios de CosmWasm tienen diferentes módules para cada uno de las tres
posibles funciones de entrada, ink! permite un enfoque más general, `#[ink(test)]` será usado
para cada test.

Puedes leer más sobre ink! y los test unitarios [aqui](https://use.ink/basics/contract-testing#unit-tests).

## Compilador

CosmWasm usa [cargo-wasm](https://docs.rs/crate/cargo-wasm/latest) como su principal
compilador, mientras que ink! usa [cargo-contract](https://github.com/paritytech/cargo-contract).
`cargo-contract` ha sido desarrollado por Parity específicamente para construir, testear y desplegar
contractos escritos usando ink!. 

## Desarrollo Local

En cuanto a redes para desarrollo local, el repositorio [cosmos/gaia](https://github.com/cosmos/gaia)
actua como un template básico de un nodo genérico de Cosmos. Con la adición del módulo `x/wasm`
y algo de reorganización del código, este repositorio se conviernte en [wasmd](https://github.com/CosmWasm/wasmd),
punto de entrada para el desarrollo con CosmWasm.

Con Substrate, `substrate-node-template` es un template genérico de un nodo. Similar a `x/wasm`,
[`pallet-contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) es el módulo
que añade soporte para WebAssembly smart contracts a la red. Parity provee [`substrate-contracts-node`](https://github.com/paritytech/substrate-contracts-node), que es el análogo a `wasmd` - un template de un nodo básico para
el desarrollo de smart contracts.

## Testnets

Para el desarrolly on-chain testing con CosmWasm, `wasmd` puede ser usado para lanzar localmente
(uno o múltiples nodos), o conectados a la testnet pública `cliffnet`.

Por otro lado, existen varias opciones para desplegar contratos ink!:
- Localmente, en un único, o múltiples, nodos [`substrate-contracts-node`](https://github.com/paritytech/substrate-contracts-node).
- [Contracts Parachain en Rococo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer), que está contectada a [Rococo relay chain test network](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer).
- [Astar Network’s Shibuya testnet](https://docs.astar.network/docs/build/wasm).

## Workflow de Desarrollo

### Dependencias

El primer paso desarrollando con CosmWasm es [instalar las dependencias](https://docs.cosmwasm.com/docs/1.0/getting-started/installation), como son Go, Rust y `wasmd`.

Para ink! también puedes encontrar una [guía de configuración](/getting-started/setup) que te ayudará a instalar
las dependencias necesarias, como Rust, `cargo-contract` y `substrate-contracts-node`.

### Setup del entorno

El siguiente paso en el desarrollo con CosmWasm es hacer el [preparar el entorno](https://docs.cosmwasm.com/docs/1.0/getting-started/setting-env). Consiste en configurar `wasmd` de manera que tengamos
ciertas cuentas con un balance inicial haciendo posible interactuar con la red.

De manera similar, cuando lanzamos `substrate-contracts-node` obtendremos
cuentas pre-fundadas (`alice`, `bob`, etc.) que están listas para ser usadas en nuestro desarrollo.

### Compilación y Tests

CosmWasm provee contratos de ejemplo en el repositorio [cw-contracts](https://github.com/InterWasm/cw-contracts).
Tras clonar el repositorio, podremos compilalo con:
```
$ cargo wasm
```

y realizar los tests con:
```
$ cargo test
```
De manera similar, podemos encontrar ejemplos de ink! en el directorio [`examples`](https://github.com/paritytech/ink-examples/tree/main) del repositorio principal.

Un contrato pude ser compilado desde su directorio ejecutando:
```
$ cargo contract build
```

y realizar tests con:
```
$ cargo test
```

### Despliegue e Interacción

Los contratos de CosmWasm son deplegados e instanciados con ayuda del ejecutable `wasmd`.
La lista de pasos a seguir puede encontrarse [aquí](https://docs.cosmwasm.com/docs/1.0/getting-started/interact-with-contract).

Es posible desplegar e interactuar un contrato ink! usando el CLI(`cargo-contract`), o el UI web ([`contracts-ui`](https://contracts-ui.substrate.io/)).
- [Instrucciones para `cargo-contract`](https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md)
- [Instrucciones para `contracts-ui`](/getting-started/deploy-your-contract)
