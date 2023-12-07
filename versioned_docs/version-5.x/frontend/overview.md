---
title: Overview
slug: /frontend/overview
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Overview

Now after you [wrote](/getting-started/creating-an-ink-project), [compiled](/getting-started/building-your-contract) and [deployed your smart contract](/getting-started/deploy-your-contract), it is time to craft a user experience around it.

This experience can take many shapes from mobile app to interactive terminal applications. For this section we are, however, focusing on the most prominent shape in web3 right now, web apps.

Although you know we love Rust, the native language of the web for years has been JavaScript. Thereby naturally the best tools for creating web experiences are built in and for JavaScript. Hence, also the tools for interacting with smart contracts.

Concluding, this part will solely focus on how to craft a web frontend for smart contracts in JavaScript. We will not cover libraries and tools for other languages and platforms.

## Landscape

There are several levels of abstraction where you can start your journey creating a web frontend for your contracts. Each levels offers different advantages and disadvantages. The following list is of tools. They are sorted from the most generic no third party library way to interact with Polkadot's smart contracts to the most opinionated template using libraries and proven frontend frameworks.

-- Using no libraries--

+ [RPC Interface](https://wiki.polkadot.network/docs/build-node-interaction) **(not recommended)** - nodes participating in the blockchain network offer an [JSON RPC interface](https://www.jsonrpc.org/) to interact with the blockchains state and capabilities.

-- Low level libraries --

+ [`@polkadot/api`](https://polkadot.js.org/docs/api) **(not recommended)** - allows for most general interaction with Polkadot-SDK based blockchains from JavaScript. In order to talk to smart-contracts, one would use the `pallet-contracts` runtime calls.

+ [`@polkadot/api-contract`](https://polkadot.js.org/docs/api-contract) **(recommended)** - abstraction on top of `@polkadot/api` for the `pallet-contracts`. Makes interaction with smart contracts more comfortable and type safe.

-- [React](https://react.dev/) --

+ [`useInkathon`](https://github.com/scio-labs/use-inkathon) **(recommended)** - A hooks library for the popular frontend javascript framework React with focus on smart-contract interactions. Built using `@polkadot/api` & `@polkadot/api-contract`.

-- [React](https://react.dev/) & [Next.js](https://nextjs.org/) --

+ [`inkathon`](https://github.com/scio-labs/inkathon) **(recommended)** - Full Stack web app template using the popular full stack template `Nextjs`. Itself is using `useInkathon`. The fastest way to get up and running with a smart contract and a corresponding web app.

## Examples

For inspiration how to get started building your full stack dApp. Make sure to visit our [Smart Contracts Examples section](/examples/smart-contracts) or [repository directly](https://github.com/paritytech/ink-examples). These examples not only offer the smart contract code but also have an accompanied frontend project. Checkout the `README.md` for details how to setup and run these frontend examples.

## Other Languages

Of course the browser and JavaScript should not be the one and only platform for smart contract frontends. It's just the most mature for smart contract frontend tooling.

The following is a list of substrate libraries for other programming languages allowing for crafting frontend for other platforms than the web.

+ [novasamatech/substrate-sdk-ios](https://github.com/novasamatech/substrate-sdk-ios) - low level generic iOS SDK for substrate.

+ [novasamatech/substrate-sdk-android](https://github.com/novasamatech/substrate-sdk-android) - low level Android SDK for substrate.