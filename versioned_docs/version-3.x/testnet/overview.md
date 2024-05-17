---
title: Overview
slug: /testnet
hide_title: true
---

## Rococo Deployment

We have a live testnet named `Contracts` as a parachain on [Rococo](https://wiki.polkadot.network/docs/build-pdk#rococo-testnet) ‒
a testnet for Polkadot and Kusama parachains:

<div class="schema">
    <img src="/img/contracts-on-polkadot-js.png" alt="Smart contracts parachain on Rococo" />
</div>

You can interact with the network through Polkadot JS Apps,
[click here for a direct link to the `Contracts` parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer).

Our parachain uses the Rococo relay chain's native token (ROC) instead of having its own token.
Due to this you'll need ROC in order to deploy contracts on our testnet.

As a first step, you should create an account. See [here](https://wiki.polkadot.network/docs/learn-account-generation)
for a detailed guide.

As a second step, you have to get ROC testnet tokens through the [Rococo Faucet](https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet).
This is a chat room in which you need to write:
```
!drip YOUR_SS_58_ADDRESS:1002
```
The number `1002` is the parachain id of `Contracts` on Rococo, by supplying it the faucet will teleport ROC
tokens directly to your account on the parachain.

If everything worked out, the teleported ROC tokens will show up under
[the "Accounts" tab for `Contracts`](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts).

Once you have ROC on `Contracts` you can deploy a contract as you would normally.
If you're unsure about this, our [guided tutorial](https://docs.substrate.io/tutorials/smart-contracts//)
will clarify that for you in no time.


## What is the `Contracts` parachain?

It's a [Substrate](https://github.com/paritytech/substrate)
parachain for smart contracts.
We configured it to use Substrate's smart contracts module ‒ the
[`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) pallet ‒ in
a default configuration.

The code for this parachain can be found [in the `cumulus` repository](https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo).

The `pallet-contracts` takes smart contracts as WebAssembly blobs and defines an API
for everything a smart contract needs (storage access, …).
As long as a programming language compiles to WebAssembly and there exists an implementation
of this API in it, you can write a smart contract for this pallet ‒ and thus for our the `Contracts`
parachain ‒ in that language.

This is a list of languages you can currently choose from:

* [Polkadot's ink!](https://github.com/use-ink/ink) for Rust
* [ask!](https://github.com/patractlabs/ask) for Assembly Script
* The [Solang](https://github.com/hyperledger-labs/solang) compiler for Solidity

The following graphic depicts the idea:

<div class="schema">
    <img src="/img/pallet-contracts-overview.svg" alt="`pallet-contracts` Overview" />
</div>

There are also different user interfaces and command-line tools you can use to deploy
or interact with contracts:

* [Contracts UI](https://ui.use.ink)
* [polkadot-js](https://polkadot.js.org/apps/)
