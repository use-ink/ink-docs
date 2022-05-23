---
title: ink! vs. CosmWasm
slug: /ink-vs-cosmwasm
---

This is a short comparison between CosmWasm and ink! meant to onboard developers coming 
from the Cosmos ecosystem.

# Architecture

CosmWasm is modular, meaning that any blockchain using the Cosmos SDK can add smart 
contract support to their chain. That is similar to the Substrate approach, where chains
have the option to add `pallet-contracts` to their runtime.

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
are structured. Instead, ink! makes heavy usage of Rust macros. The main ink! macros are:
- `#[ink(storage)]` which annotates a struct that represents the contract's internal state.
- `#[ink(event)]` and `#[ink(topic)]` which annotates a struct and its members as the 
events and topics that the contract might emit.
- `#[ink(constructor)]` which is called when the contract is deployed, and is responsible
for bootstrapping the initial contract state into the storage. It is analogous to the 
CosmWasm `instantiate` function.
- `#[ink(message)]` which marks a function as publicly dispatchables, meaning that it is
exposed in the contract interface to the outside world. This macro can make a function 
behave analogously to CosmWasm’s execute and query functions, depending on how it affects
the internal contract state, and what is the return types.

There are other ink! macros, for which details can be found at [Macros & Attributes](/macros-attributes).

# Testnets

For CosmWasm development and on-chain testing, `wasmd` can be operated as a local setup
(single or multiple nodes), or connected to the `cliffnet` public test network.

ink! contracts can be deployed on a few different options:
- Locally, on a single or multiple node setup of `substrate-contracts-node`.
- [Canvas testnet parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-canvas-rpc.polkadot.io#/explorer), which is connected to the [Rococo relay chain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer).
- [Astar Network’s Shibuya testnet](https://docs.astar.network/maintain/collator/shibuya-network/).

# Unit Testing

Unit testing in CosmWasm is quite similar to ink!. Both use the main `#[cfg(test)]` macro
and set up a mock on-chain environment.

While CosmWasm unit tests have different modules for each of the three main entry-point 
functions, ink! allows for a more generalised approach, where the `#[ink(test)]` macro 
is used for each unit test.

# Local Development Network

In terms of development workflow, the [cosmos/gaia](https://github.com/cosmos/gaia) 
repository acts as the basic template for a generic Cosmos node. With the addition of the
`x/wasm` module and some clean-up, this template repository becomes [wasmd](https://github.com/CosmWasm/wasmd),
the entry point for CosmWasm development.

In terms of Substrate, `substrate-node-template` is a basic generic template of a node. 
Similar to `x/wasm`, `pallet-contracts` is the module that adds WebAssembly smart 
contract functionality to the chain. Parity provides [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node), 
which is analogous to `wasmd`: a basic template node for smart contract development.

# Compiler

While CosmWasm uses [cargo-wasm](https://docs.rs/crate/cargo-wasm/latest) as its main compiler, 
ink! uses [cargo-contract](https://github.com/paritytech/cargo-contract), which was developed 
by Parity especially for the language.