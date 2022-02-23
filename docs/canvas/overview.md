---
title: Overview
slug: /canvas
hide_title: true
---

## What is the Canvas?

Canvas is a [Substrate](https://github.com/paritytech/substrate)
parachain for smart contracts.
We configured it to use Substrate's smart contracts module ‒ the
[`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) pallet.

This `contracts` pallet takes smart contracts as WebAssembly blobs and defines an API
for everything a smart contract needs (storage access, …).
As long as a programming language compiles to WebAssembly and there exists an implementation
of this API in it, you can write a smart contract for this pallet ‒ and thus for Canvas ‒ in
that language.

This is a list of languages you can currently choose from:

* [Parity's ink!](https://github.com/paritytech/ink) for Rust
* [ask!](https://github.com/patractlabs/ask) for Assembly Script
* The [Solang](https://github.com/hyperledger-labs/solang) compiler for Solidity

The following graphic depicts the idea:

<div class="schema">
    <img src="/ink-docs/img/canvas.svg" alt="Canvas Parachain: Overview" />
</div>

There are also different user interfaces and command-line tools you can use to deploy
or interact with contracts:

* [Canvas UI](https://paritytech.github.io/canvas-ui/)
* [polkadot-js](https://polkadot.js.org/apps/)

## Rococo Deployment

We have a live deployment of the Canvas parachain on [Rococo](https://wiki.polkadot.network/docs/build-pdk#rococo-testnet) ‒
a testnet for Polkadot and Kusama parachains.
You can interact with the network through Polkadot JS Apps,
[click here for a direct link to Canvas](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-canvas-rpc.polkadot.io#/explorer).

The Canvas parachain uses the Rococo relay chain's native token (ROC) instead of having its own token.
Due to this you'll need ROC in order to deploy contracts on Canvas.

As a first step, you should create an account. See [here](https://wiki.polkadot.network/docs/learn-account-generation)
for a detailed guide.

As a second step, you have to get ROC testnet tokens through the [Rococo Faucet](https://wiki.polkadot.network/docs/learn-DOT#getting-rococo-tokens).
This is a chat room in which you need to write:
```
!drip YOUR_SS_58_ADDRESS:1002
```
The number `1002` is the parachain id of Canvas on Rococo, by supplying it the faucet will teleport ROC
tokens directly to your account on the parachain.

If everything worked out, the teleported ROC tokens will show up under 
[the "Accounts" tab for Canvas](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-canvas-rpc.polkadot.io#/accounts).

Once you have ROC on Canvas you can deploy a contract as you would normally.
If you're unsure about this, our [guided tutorial](https://docs.substrate.io/tutorials/v3/ink-workshop/pt1/) 
will clarify that for you in no time.