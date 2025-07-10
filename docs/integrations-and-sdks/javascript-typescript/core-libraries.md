---
title: Core Libraries
slug: /integrations-and-sdks/javascript-typescript/core-libraries
hide_title: true
---

![Frontend Title Picture](/img/title/frontend.svg)

# Core Libraries

These are the foundational libraries for interacting with ink! contracts from JavaScript and TypeScript applications. Choose the level of abstraction that best fits your project needs.

## Low-Level Libraries

### RPC Interface
- **[RPC Interface](https://wiki.polkadot.network/docs/build-node-interaction)** **(not recommended)**
- Nodes participating in the blockchain network offer a [JSON RPC interface](https://www.jsonrpc.org/) to interact with the blockchain's state and capabilities
- Direct interaction with the blockchain without any abstraction layer
- Requires deep understanding of the underlying protocols

### General Polkadot SDK Libraries

#### papi
- **[`polkadot-api`](https://papi.how/getting-started)** **(currently recommended)**
- Fully-typed TypeScript API supporting general interaction with Polkadot-SDK based blockchains
- Modern, lightweight alternative to `@polkadot/api`
- Excellent TypeScript support and developer experience

#### @polkadot/api
- **[`@polkadot/api`](https://polkadot.js.org/docs/api)** **(not recommended for new projects)**
- Allows for most general interaction with Polkadot-SDK based blockchains from JavaScript
- To interact with smart contracts, use the `pallet-revive` runtime calls
- Legacy library, consider using `polkadot-api` for new projects

## ink!-Specific SDKs

### @polkadot-api/sdk-ink
- **[`@polkadot-api/sdk-ink`](https://papi.how/sdks/ink-sdk)** **(Compatible with ink! v6)**
- PAPI SDK for interacting with ink! smart contracts
- Fully type-safe APIs for:
  - Deploying contracts
  - Dry-running calls
  - Sending messages
  - Estimating gas and storage deposits
  - Decoding events
  - Accessing on-chain storage of contracts

### dedot
- **[`dedot`](https://docs.dedot.dev/ink-smart-contracts/intro)** **(Compatible with ink! v6)**
- Next-gen TypeScript client for Polkadot & Polkadot SDK-based networks
- Fully type-safe APIs for interacting with ink! smart contracts
- Features:
  - Generates TypeScript bindings for contracts
  - Contract deployment and interaction
  - Query and transaction execution
  - Dry runs for validation
  - Event decoding with full type safety

### @polkadot/api-contract
- **[`@polkadot/api-contract`](https://polkadot.js.org/docs/api-contract)** **(Compatible with ink! v6)**
- Abstraction on top of `@polkadot/api` for `pallet-contracts` and `pallet-revive`
- Makes interaction with smart contracts more comfortable and type-safe
- Built on the legacy `@polkadot/api` foundation