---
title: Overview
slug: /frontend/overview
hide_title: true
---

![Frontend Title Picture](/img/title/frontend.svg)

# Overview

TODO @peterwht read this page and see what's still up to date.

Now after you [wrote](../getting-started/creating.md), [compiled](../getting-started/compiling.md) and [deployed your smart contract](../getting-started/deploying.md), it is time to craft a user experience around it.

This experience can take many shapes from mobile app to interactive terminal applications. In this section we are focusing on the most prominent shape in web3 right now, web apps.

Although we love Rust, the native language of the web is JavaScript. Thereby naturally the best tools for creating web experiences are available for JavaScript. Hence, the tools for smart contract interaction with JavaScript are the most advanced as well. To be precise all JavaScript tools mentioned here, actually leverage TypeScript to offer a JavaScript and a typesafe TypeScript experience.

## JavaScript/TypeScript Tools

There are several levels of abstraction where you can start your journey creating a web frontend for your contracts. Each levels offers different advantages and disadvantages. The following list is of tools. They are sorted from the most generic no third party library way to interact with Polkadot's smart contracts to the most opinionated template using libraries and proven frontend frameworks.

### Using no libraries

+ [RPC Interface](https://wiki.polkadot.network/docs/build-node-interaction) **(not recommended)**: nodes participating in the blockchain network offer an [JSON RPC interface](https://www.jsonrpc.org/) to interact with the blockchains state and capabilities.

### Low level libraries

+ [`@polkadot/api`](https://polkadot.js.org/docs/api) **(not recommended)**: allows for most general interaction with Polkadot-SDK based blockchains from JavaScript. In order to talk to smart-contracts, one would use the `pallet-contracts` runtime calls.

+ [`@polkadot/api-contract`](https://polkadot.js.org/docs/api-contract) **(recommended)**: abstraction on top of `@polkadot/api` for the `pallet-contracts`. Makes interaction with smart contracts more comfortable and type safe.

### React

+ [`useInkathon`](https://github.com/scio-labs/use-inkathon) **(recommended)**: A hooks library for the popular frontend javascript framework React with focus on smart-contract interactions. Built using `@polkadot/api` & `@polkadot/api-contract`.

### React and Next.js

+ [`inkathon`](https://github.com/scio-labs/inkathon) **(recommended)**: Full Stack web app template using the popular full stack template `Nextjs`. Itself is using `useInkathon`. The fastest way to get up and running with a smart contract and a corresponding web app.

## Other Languages

Of course the browser and JavaScript should not be the one and only platform for smart contract frontends. It's just the most mature for smart contract frontend tooling.

The following is a list of libraries which could be used to craft smart-contract dApps on other platforms than the web.

+ [novasamatech/substrate-sdk-ios](https://github.com/novasamatech/substrate-sdk-ios): low level generic iOS SDK for substrate.

+ [novasamatech/substrate-sdk-android](https://github.com/novasamatech/substrate-sdk-android): low level Android SDK for substrate.

+ [paritytech/subxt](https://github.com/paritytech/subxt): Rust library to submit extrinsics (transactions) to a substrate node via RPC.

+ [polkascan/py-substrate-interface](https://github.com/polkascan/py-substrate-interface/blob/master/docs/usage/ink-contract-interfacing.md): Python library to interface with Substrate nodes.
