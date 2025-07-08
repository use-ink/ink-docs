---
title: Overview
slug: /frontend/overview
hide_title: true
---

![Frontend Title Picture](/img/title/frontend.svg)

# Overview

Now after you build your smart contract it is time to craft a user experience around it.

This experience can take many shapes from mobile app to interactive terminal applications. In this section we are focusing on the most prominent shape in web3 right now, web apps.

Although we love Rust, the native language of the web is JavaScript. Thereby naturally the best tools for creating web experiences are available for JavaScript. Hence, the tools for smart contract interaction with JavaScript are the most advanced as well. To be precise, all JavaScript tools mentioned here, actually leverage TypeScript to offer a JavaScript and a typesafe TypeScript experience.

## JavaScript/TypeScript Tools

There are several levels of abstraction where you can start your journey creating a web frontend for your contracts. Each levels offers different advantages and disadvantages. The following list is of tools. They are sorted from the most generic no third party library way to interact with Polkadot's smart contracts to the most opinionated template using libraries and proven frontend frameworks.

### Using no libraries

- **[RPC Interface](https://wiki.polkadot.network/docs/build-node-interaction)** **(not recommended)**: nodes participating in the blockchain network offer a [JSON RPC interface](https://www.jsonrpc.org/) to interact with the blockchains state and capabilities.

### Low level libraries

- **[Papi](https://papi.how/getting-started)** **(recommended)**: fully-typed TypeScript API supporting general interaction with Polkadot-SDK based blockchains.

- **[Polkadot JS](https://polkadot.js.org/docs/api)**: allows for most general interaction with Polkadot-SDK based blockchains from JavaScript. In order to talk to smart-contracts, one would use the `pallet-revive` runtime calls.

### ink!-specific SDKs

- **[Papi's `ink-sdk`](https://papi.how/sdks/ink-sdk)**: is a PAPI SDK for interacting with ink! smart contracts, offering fully type-safe APIs for: deploying contracts, dry-running calls, sending messages, estimating gas and storage deposits, decoding events, and accessing on-chain storage of contracts.

- **[Dedot](https://docs.dedot.dev/ink-smart-contracts/intro)**: Next-gen TypeScript client for Polkadot & Polkadot SDK-based networks, offering fully type-safe APIs for interacting with ink! smart contracts. Dedot simplifies the process of generating TypeScript bindings for your contracts, deploying them, executing queries and transactions, performing dry runs for validation, and decoding contract events with full type safety.

- **[Polkadot JS Contracts](https://polkadot.js.org/docs/api-contract)**: abstraction on top of Polkadot JS for the `pallet-contracts` and `pallet-revive`. Makes interaction with smart contracts more comfortable and type safe.

### React

- **[ReactiveDOT](https://reactivedot.dev/)**: A reactive library for building Substrate front-ends.

- **[useInkathon](https://github.com/scio-labs/use-inkathon)** **(not yet compatible with ink! v6)**: A hooks library for the popular frontend javascript framework React with focus on smart-contract interactions. Built using Polkadot JS.

- **[typink](https://docs.dedot.dev/typink)**: A comprehensive toolkit designed to simplify and accelerate ink! dApp development. Typink provides fully type-safe React hooks to streamlines interactions with ink! smart contracts, ensuring a seamless developer experience. With its built-in CLI, Typink enables you to bootstrap new projects in seconds, offering multi-chain support and flexible options for wallet connectors.

### React and Next.js

- **[inkathon](https://github.com/scio-labs/inkathon)** **(will be compatible with ink! v6 soon)**: Full Stack web app template using the popular full stack template `Nextjs`. Itself is using `useInkathon`. The fastest way to get up and running with a smart contract and a corresponding web app.

## Other Languages

Of course the browser and JavaScript should not be the one and only platform for smart contract frontends. It's just the most mature for smart contract frontend tooling.

The following is a list of libraries which could be used to craft smart-contract dApps on other platforms than the web.

- **[novasamatech/substrate-sdk-ios](https://github.com/novasamatech/substrate-sdk-ios)**: low level generic iOS SDK for substrate.

- **[novasamatech/substrate-sdk-android](https://github.com/novasamatech/substrate-sdk-android)**: low level Android SDK for substrate.

- **[paritytech/subxt](https://github.com/paritytech/subxt)**: Rust library to submit transactions to a substrate node via RPC.

- **[polkascan/py-substrate-interface](https://github.com/polkascan/py-substrate-interface/blob/master/docs/usage/ink-contract-interfacing.md)**: Python library to interface with Substrate nodes.
