---
title: How it Works – Substrate
hide_title: true
slug: /how-it-works
---

<img src="/img/title/substrate.svg" className="titlePic" />

# How it Works – Substrate

ink! is a programming language for smart contracts; blockchains built with [the Substrate framework](http://substrate.io)
can choose from a number of smart contract languages which one(s) they want to support.
ink! is one of them. It is an opinionated language that we have built by extending the popular Rust programming language with functionality needed to make it smart contract compatible.

## How does ink! tie into Substrate?

[Substrate](https://substrate.io) is a framework for building blockchains – those can be standalone blockchains or blockchains connected to [Kusama](http://kusama.network) or [Polkadot](http://polkadot.network), so called _parachains_. Substrate contains a number of modules, in Substrate terminology those are called _pallets_. Substrate comes with a set of pallets for many requirements modern blockchains typically have – staking, fungible tokens, non-fungible tokens, governance, etc.

Substrate also ships with a module for smart contracts, this module is called `pallet-contracts`. If a parachain is developed in Substrate it can easily add smart contract functionality by including this pallet.

How does ink! come into play here? ink! is a programming language, specifically it is an embedded domain-specific language for the popular Rust programming language. This means that you can use all the normal Rust syntax plus some specifics that we added to make the language suitable for the smart contract world. The `pallet-contracts` takes these ink! contracts and executes them safely. So in short: _with ink! you can write smart contracts in Rust for blockchains built with Substrate that include `pallet-contracts`_.

![](/img/ink-pallet-contracts.png)

## How does the `pallet-contracts` work?

We intentionally designed `pallet-contracts` in a way that it is decoupled from the language that is used to write smart contracts. The pallet is only the execution environment and it takes WebAssembly files as input. Smart contracts for this pallet have to be compiled to the WebAssembly (Wasm) target architecture.

For contract developers this means they can use ink! for writing smart contracts, but can also decide on other languages. Right now three languages to choose from exist:

* [Parity's ink!](https://github.com/paritytech/ink) for Rust.
* [ask!](https://github.com/patractlabs/ask) for AssemblyScript.
* The [Solang](https://github.com/hyperledger-labs/solang) compiler for Solidity.

It's not hard to add new languages. There just needs to be a compiler for the language down to WebAssembly, then it's possible to implement the API of `pallet-contracts`. This API at the moment consists of about 50 functions for anything a smart contract may desire: storage access, cryptographic functionality, environmental information like block numbers, access to functions for getting random numbers or self-terminate the contract, etc. Not all of those have to be implemented in the language ‒ the ink! "Hello, World!" requires just six API functions. The following schema depicts this relationship:

![](/img/ink-substrate.png)

We think this design is more future-proof than some architectures found in competing ecosystems. There is no tight coupling between language and execution environment. WebAssembly is an industry standard and a multitude of programming languages can nowadays be compiled down to WebAssembly. If in, say ten years time, researchers come up with an innovative language for writing smart contracts (or a subset of an existing language) then as long as there is a WebAssembly compiler it will be easy to make this language compatible with `pallet-contracts`.

## Why include `pallet-contracts` on a parachain?

There are a couple use cases for including smart contract functionality on a parachain. We distinguish three big ones.

### Use Case 1: Smart Contracts as "first-class citizens"
The most obvious use case is a parachain which provides smart contracts as a “first-class citizen”, meaning smart contracts are the central value proposition of the chain.

Those chains typically take the off-the-shelf `pallet-contracts` and create some additional innovation on top of it. Examples of this are:

* [Astar](https://astar.network): a parachain team that has built a layer on top of `pallet-contracts` so that contract developers can earn a passive income whenever their contracts are being used.
* [Phala](https://www.phala.network): a parachain team that utilizes `pallet-contracts` in a trusted execution environment, enabling confidential smart contract execution and interoperability.
* [Aleph Zero](https://alephzero.org): uses the `pallet-contracts` in a zero-knowledge context.
* [t3rn](https://www.t3rn.io): uses `pallet-contracts` as a building block to enable multi-chain execution for smart contracts.

### Use Case 2: Smart Contracts as "second-class citizens"
There is another not so obvious use case for `pallet-contracts`: smart contracts as “second-class citizens” on an existing chain. By this we mean that the central value proposition of the chain has nothing to do with smart contracts, but it still includes them as an add-on.

We provide an API (called [chain extensions](https://use.ink/macros-attributes/chain-extension)) with which a parachain can expose certain parts of its business logic to smart contract developers. Through this, smart contract developers can utilize the business logic primitives of the chain to build a new application on top of it. Think for example of a decentralized exchange blockchain. This chain would in its simplest form have an order book to place bids and asks ‒ there is no need for taking untrusted, Turing-complete, programs from the outside. The parachain could decide to expose the order book into smart contracts though, giving external developers the option of building new applications that utilize the order book. For example, to upload trading algorithms as smart contracts to the chain.

Smart contracts here are an opportunity to up the user engagement and drive usage of the chain's native token. And the billing for utilizing the chain comes already built-in with the pallet ‒ users have to pay gas fees for the execution of their smart contract.

### Use Case 3: Smart Contracts as a first step into Polkadot or Kusama
A third big use case for `pallet-contracts` is to prototype an idea as a proof-of-concept smart contract before leasing a dedicated parachain slot on Polkadot or Kusama.

The time to develop a smart contract and deploy it is shorter than the onboarding story for a parachain. One can deploy a proof-of-concept smart contract first, see if it gains traction and the idea holds up to the real world. Only subsequently, once there is a need for e.g. cheaper transaction fees, more efficient execution, or a governance mechanism for the community, the smart contract could be migrated to a dedicated parachain runtime with its own slot. ink! contracts and Substrate runtimes are both written in Rust and share similar primitives, this enables a clear path to graduate from a smart contract to its own runtime. Developers can reuse large parts of their code, their tests, as well as frontend and client code.

![](/img/ink-gateway.jpg)

## Smart Contracts vs. Parachains
One of the first questions we typically get when somebody learns about Substrate, Polkadot, or Kusama is when to develop a parachain vs. when to develop a smart contract.

The distinction here is that in the context of Polkadot and Kusama a parachain leases a slot for a couple of months for up to two years. The deal with a lease is that the parachain gets a fixed slot for executing its business logic (typically referred to as its _state transition function_) and can persist its modified state in a block. In Substrate terminology this state transition function is called the chain's _runtime_.

The distinction to other ecosystems here is that, in the context of Polkadot, parachains and smart contracts exist at different layers of the stack: _smart contracts sit on top of parachains_. Parachains would usually be described as layer-1 blockchains ‒ except for that they don't have to build their own security, are upgradable, and interoperable.

It's noteworthy that a parachain's state transition function doesn't get further validated ‒ it's up to the parachain how it utilizes its slot time. The parachain already pre-paid for its slot when it won the slot auction on Polkadot or Kusama. This means the parachain can build its own (blockchain) world! For example, it can decide on how transaction fees are charged ‒ or even if transaction fees are charged at all. These options are crucial when building new or more user-friendly business models. Other distinguishing factors between parachains that we observe in the wild are differences in how governance works or the crypto-economics. There are some constraints on how the parachain can build its world though. Like physics in the real world it has to adhere to certain ground rules. For Polkadot and Kusama that's for example the consensus algorithm for the Relay Chain to communicate with the parachain. From those ground rules the advantages of Polkadot and Kusama emerge. Advantages like the aforementioned shared security, cross-chain communication, or guaranteed execution slot time.

For smart contracts, on the other hand, an existing parachain has to include the `pallet-contracts` for users to deploy smart contracts. The deployed smart contract is always untrusted code. Anyone (or any program) that has tokens of the chain can upload a smart contract without requiring permission. Smart contracts allow _permissionless_ deployment of _untrusted_ programs on a blockchain. The `pallet-contracts` has to assume that these programs are adversarial, it has to put a number of safety pillars in place to ensure that the contract can not e.g. stall the chain or cause state corruption of other contracts. For `pallet-contracts` those safety pillars include mechanisms like gas metering or deposits for storing data on-chain.

_To restate this important distinction: developing a parachain runtime is different from developing a smart contract ‒ a smart contract sits on top of a parachain_.

The trade-off is that with a parachain one has the freedom to decide on (nearly) all the rules that make up the parachain. With a smart contract one is constrained by what the chain allows and the safety pillars that necessarily have to be in place. A smart contract can never be as fast as a native pallet built in the parachain runtime ‒ there is too much logic in between.
A smart contract on the other hand has less friction for developing and deploying it. Developers don't have to take care of governance, crypto-economics, etc. One just needs a few tokens and can go on its merry way deploying a smart contract. It's as simple as that.

![](/img/smart-contract-vs-parachain.png)

