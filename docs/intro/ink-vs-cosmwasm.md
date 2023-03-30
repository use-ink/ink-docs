---
title: ink! vs. CosmWasm
slug: /ink-vs-cosmwasm
hide_title: true
---

<img src="/img/title/cosmwasm.svg" className="titlePic" />

# ink! vs. CosmWasm

This is a short comparison between [ink!](https://github.com/paritytech/ink/)
and [CosmWasm](https://github.com/CosmWasm/cosmwasm) meant to onboard
developers coming from the Cosmos ecosystem.

## Architecture

CosmWasm is modular, meaning that any blockchain using the Cosmos SDK can add smart
contract support to their chain. That is similar to the [Substrate](https://substrate.io/)
approach, where chains have the option to add `pallet-contracts` to their runtime.

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

There are other ink! macros, for which details can be found at [Macros & Attributes](/macros-attributes).

## Unit Testing

Unit testing in CosmWasm is quite similar to ink!. Both use the conventional Rust
`#[cfg(test)]` macro and set up a mock on-chain environment.

While CosmWasm unit tests have different modules for each of the three main entry-point
functions, ink! allows for a more generalised approach, where the `#[ink(test)]` macro is
used for each unit test.

You can read more about ink! unit tests [here](https://ink.substrate.io/basics/contract-testing#unit-tests).

## Compiler

CosmWasm uses [cargo-wasm](https://docs.rs/crate/cargo-wasm/latest) as its main
compiler, while ink! uses [cargo-contract](https://github.com/paritytech/cargo-contract).
`cargo-contract` is developed by Parity specifically for building, testing, and deploying
ink! contracts.

# Local Development Network

In terms of local development networks, the [cosmos/gaia](https://github.com/cosmos/gaia)
repository acts as the basic template for a generic Cosmos node. With the addition of the
`x/wasm` module and some clean-up, this template repository becomes
[wasmd](https://github.com/CosmWasm/wasmd), the entry point for CosmWasm development.

In terms of Substrate, `substrate-node-template` is a basic generic template of a node.
Similar to `x/wasm`, [`pallet-contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts)
is the module that adds WebAssembly smart contract functionality to the chain. Parity
provides the [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node),
which is analogous to `wasmd` - a basic template node for smart contract development.

## Testnets

For CosmWasm development and on-chain testing, `wasmd` can be operated as a local setup
(single or multiple nodes), or connected to the `cliffnet` public test network.

ink! contracts can be deployed on a few different options:

- Locally, on a single or multiple node setup of [`substrate-contracts-node`](https://github.com/paritytech/substrate-contracts-node).
- [Contracts on Rococo Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer),
  which is connected to the [Rococo relay chain test network](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer).
- [Astar Network’s Shibuya testnet](https://docs.astar.network/docs/build/Introduction/astar_family/#shibuya).

## Development Workflow

### Dependencies

The first step in CosmWasm development is to
[install dependencies](https://docs.cosmwasm.com/docs/getting-started/installation),
namely Go, Rust and `wasmd`.

For ink! you can also find [a setup guide](/getting-started/setup) which will help you
with dependencies, namely Rust, `cargo-contract` and `substrate-contracts-node`.

### Environment Setup

The next step in the CosmWasm development workflow is
[setting up the environment](https://docs.cosmwasm.com/docs/getting-started/setting-env).
That consists mainly of configuring `wasmd` such that it has prefunded accounts that are able
to interact with the network.

When `substrate-contracts-node` is started, it already contains well
known pre-funded accounts (`alice`, `bob`, etc.) which are ready to be used for development.

### Compile and Test

CosmWasm provides example contracts at the
[cw-contracts](https://github.com/InterWasm/cw-contracts) repository. After the
repository is cloned, from the contract directory it can be compiled via:

```
$ cargo wasm
```

and tested via:

```
$ cargo unit-test
```

Similarly, ink! provides an
[`examples`](https://github.com/paritytech/ink-examples/tree/main) directory of its
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
list of step is provided [here](https://docs.cosmwasm.com/docs/getting-started/interact-with-contract).

It is possible to deploy and interact with ink! contracts using either a CLI
(`cargo-contract`), or a web UI ([`contracts-ui`](https://contracts-ui.substrate.io/)).

- [Instructions for `cargo-contract`](https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md)
- [Instructions for `contracts-ui`](/getting-started/deploy-your-contract)
