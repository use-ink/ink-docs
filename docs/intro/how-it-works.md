---
title: How it works ‒ Substrate
slug: /how-it-works
---

* Substrate's [Framework for Runtime Aggregation of Modularised Entities (FRAME)](https://substrate.dev/docs/en/next/conceptual/runtime/frame) contains the `contracts` pallet,
which implements an API for typical functions smart contracts need (storage, querying information about account, …).
* The `contracts` pallet requires smart contracts to be uploaded to the blockchain as a Wasm blob.
* ink! is a smart contract language which targets the API exposed by `contracts`.
Hence ink! smart contracts are compiled to Wasm.
* When executing `cargo contract build` an additional file `metadata.json` is created.
It contains information about e.g. what methods the contract provides for others to call.
