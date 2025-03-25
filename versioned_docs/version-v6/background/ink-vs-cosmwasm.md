---
title: ink! vs. CosmWasm
slug: /background/ink-vs-cosmwasm
hide_title: true
---

![Cosmwasm Title Picture](/img/title/cosmwasm.svg)

:::caution
This page has not yet been edited for ink! v6.

TODO @peterwht
:::

# ink! vs. CosmWasm

This is a short comparison between [ink!](https://github.com/use-ink/ink/)
and [CosmWasm](https://github.com/CosmWasm/cosmwasm) meant to onboard
developers coming from the Cosmos ecosystem.

## Architecture

CosmWasm is modular, meaning that any blockchain using the Cosmos SDK can add smart
contract support to their chain. That is similar to the [Polkadot SDK](https://polkadot.com/platform/sdk)
approach, where chains have the option to add `pallet-revive` to their runtime.

Aside from that, the architecture philosophy is likely the point where CosmWasm and ink!
differ the most. CosmWasm follows the actor model design pattern, while ink! follows a
synchronous execution model. That means some fundamental differences in how the source
code is structured.

The main entry point functions of CosmWasm contracts are:

- `instantiate` which bootstraps the initial contract state (assuming it's already been
  deployed).
- `execute` which has the actor perform operations to its internal state.
- `query` which retrieves data from the actor’s internal state.

An ink! contract can have as many public dispatchables as the developer desires, and
differently from CosmWasm, it doesn’t rely on JSON schemas for defining how the messages
are structured.

Instead, ink! makes heavy usage of Rust macros. The main ink! macros are:

- `#[ink(constructor)]` which is called when the contract is deployed, and is responsible
  for bootstrapping the initial contract state into the storage. It is analogous to the
  CosmWasm `instantiate` function.
- `#[ink(storage)]` which annotates a struct that represents the contract's internal
  state.
- `#[ink(message)]` which marks a function as a public dispatchable, meaning that it is
  exposed in the contract interface to the outside world. This macro can make a function
  behave analogously to CosmWasm’s `execute` and `query` functions. This depends on how it
  affects the internal contract state and what the return types.
- `#[ink(event)]` and `#[ink(topic)]` which annotates a struct and its members as the
  events and topics that the contract might emit.

There are other ink! macros, for which details can be found at [Macros & Attributes](../macros-attributes/overview.md).

## Unit Testing

Unit testing in CosmWasm is quite similar to ink!. Both use the conventional Rust
`#[cfg(test)]` macro and set up a mock on-chain environment.

While CosmWasm unit tests have different modules for each of the three main entry-point
functions, ink! allows for a more generalised approach, where the `#[ink(test)]` macro is
used for each unit test.

You can read more about ink! unit tests [here](../testing/unit-integration.md).

## Compiler

CosmWasm uses [cargo-wasm](https://docs.rs/crate/cargo-wasm/latest) as its main
compiler, while ink! uses [cargo-contract](https://github.com/use-ink/cargo-contract).
`cargo-contract` is developed specifically for building, testing, and deploying
ink! contracts.

# Local Development Network

In terms of local development networks, the [cosmos/gaia](https://github.com/cosmos/gaia)
repository acts as the basic template for a generic Cosmos node. With the addition of the
`x/wasm` module and some clean-up, this template repository becomes
[wasmd](https://github.com/CosmWasm/wasmd), the entry point for CosmWasm development.

In terms of Polkadot SDK, [`polkadot-sdk-solochain-template`](https://github.com/paritytech/polkadot-sdk-solochain-template) is a basic generic template of a node.
Similar to `x/wasm`, [`pallet-revive`](https://github.com/paritytech/polkadot-sdk/tree/master/susbtrate/frame/revive)
is the module that adds RISC-V smart contract functionality to the chain. 
We provide the [ink-node](https://github.com/use-ink/ink-node), which is analogous to `wasmd` — a basic template node 
for smart contract development.

## Testnets

For CosmWasm development and on-chain testing, `wasmd` can be operated as a local setup
(single or multiple nodes), or connected to the `cliffnet` public test network.

For testing, ink! contracts can be deployed on a few different options:

- Locally, on a single or multiple node setup of [`ink-node`](https://github.com/use-ink/ink-node).
- TODO add Paseo/Westend
- TODO add Pop Testnet

## Development Workflow

### Dependencies and Environment Setup

The first step in CosmWasm development is to
[install dependencies and setup the environment](https://docs.cosmwasm.com/core/installation),
namely Rust, the WebAssembly target, `cargo-generate` and `cargo-run-script`.

For ink! you can also find [a setup guide](../getting-started/setup.md) which will help you
with dependencies, namely Rust, `cargo-contract` and `ink-node`.

### Compile and Test

CosmWasm provides a template at the
[cw-template](https://github.com/CosmWasm/cw-template) repository. In order to generate a new project, all  you have to do is run:

```
$ cargo generate --git https://github.com/CosmWasm/cw-template.git --name PROJECT_NAME
```

Replacing `PROJECT_NAME` with the name of your project.

Similarly, ink! provides an
[`examples`](https://github.com/use-ink/ink-examples/tree/main) directory of its
main repository.

A contract can be compiled from its directory via:

```
$ cargo contract build
```

and tested via:

```
$ cargo test
```

### Deploy and Interact

CosmWasm contracts are deployed and instantiated with help of the `wasmd` executable. The
list of step is provided [here](https://docs.cosmwasm.com/wasmd).

It is possible to deploy and interact with ink! contracts using either a CLI
(`cargo-contract`), or a web UI ([`contracts-ui`](https://ui.use.ink)).

- [Instructions for `cargo-contract`](https://github.com/use-ink/cargo-contract/blob/master/crates/extrinsics/README.md)
- [Instructions for `contracts-ui`](../getting-started/deploying.md)
