---
title: Dapps
slug: /examples/dapps
hide_title: true
---

<img src="/img/title/balloons-2.svg" className="titlePic" />

# Dapps

We'll point to a couple full-stack Dapp examples here.
These can serve as inspiration for how to create a frontend for your
smart contract.

Three popular libraries for building frontends are:

* [`useink`](/frontend/overview) an ergonomic React hooks library for interacting with Wasm contracts and Substrate.
* [`polkadot-js/api`](https://github.com/polkadot-js/api) a low-level TypeScript API.
* [useInkathon](https://github.com/scio-labs/use-inkathon) a React hooks library.

## INK!athon

[INK!athon](https://inkathon.xyz/) is a full-stack dApp boilerplate project consisting
of an ink! smart contract and a React frontend using the
[useInkathon](https://github.com/scio-labs/use-inkathon) hooks library.

## link!

link! is a URL shortener DApp. It consists of a frontend and an ink! contract.

link! uses [`polkadot-js/api`](https://github.com/polkadot-js/api) under the hood.
The entire source code (contract + frontend) is located here:
[https://github.com/paritytech/link](https://github.com/paritytech/link).

You can view an online demo of the Dapp here: [https://tiny.ink](https://tiny.ink).

To create new short links you need `ROC` tokens from our testnet.
See [here](/testnet) for how to get those.
