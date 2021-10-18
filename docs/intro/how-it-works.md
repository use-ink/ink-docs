---
title: How it Works ‒ Substrate
slug: /how-it-works
---

<div class="schema">
    <img src="https://paritytech.github.io/ink-docs/img/how-it-works.svg" alt="How it Works" />
</div>

Substrate's [Framework for Runtime Aggregation of Modularised Entities (FRAME)](https://docs.substrate.io/v3/runtime/frame/) contains
a module  which implements an API for typical functions smart contracts need (storage, querying information about accounts, …).
This module is called the `contracts` pallet,
you can find its repository [here](https://github.com/paritytech/substrate/blob/master/frame/contracts/README.md).

The `contracts` pallet requires smart contracts to be uploaded to the blockchain as a Wasm blob.

ink! is a smart contract language which targets the API exposed by `contracts`.
Hence ink! contracts are compiled to Wasm.

When executing `cargo contract build` an additional file `metadata.json` is created.
It contains information about e.g. what methods the contract provides for others to call.
