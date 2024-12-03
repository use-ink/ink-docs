---
title: dApps
slug: /examples/dapps
hide_title: true
---

<img src="/img/title/frontend.svg" className="titlePic" />

# dApps

We'll point to a couple full-stack dApp examples here.
These can serve as inspiration for how to create a frontend for your
smart contract.

Three popular libraries for building frontends are:

- [`@polkadot/api`](https://github.com/polkadot-js/api): a general purpose low-level TypeScript API for substrate.

- [`@polkadot/api-contract`](https://polkadot.js.org/docs/api-contract): a `pallet-contract` specific TypeScript API.

- [useInkathon](https://github.com/scio-labs/use-inkathon): a React hooks library for interacting with Wasm contracts and Substrate.

## INK!athon

[INK!athon](https://inkathon.xyz/) is a full-stack dApp boilerplate project consisting
of an ink! smart contract and a React frontend using the
[useInkathon](https://github.com/scio-labs/use-inkathon) hooks library.

## link!

link! is a URL shortener dApp. It consists of a frontend and an ink! contract.

link! uses [`polkadot-js/api`](https://github.com/polkadot-js/api) under the hood.
The entire source code (contract + frontend) is located here:
[https://github.com/use-ink/link](https://github.com/use-ink/link).

You can view an online demo of the dApp here: [https://tiny.ink](https://tiny.ink).

To create new short links you need `ROC` tokens from our testnet.
See [here](../testing/overview.md) for how to get those.
