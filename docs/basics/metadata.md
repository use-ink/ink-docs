---
title: Metadata
slug: /metadata
---

# ink! Metadata

The ink! metadata is used to describe a contract in a language agnostic way. It is
intended to be used by third party tools (e.g UIs, block explorers) in order to correctly
call contract functions and interpret events.

The ink! metadata is generated when a contract is built using `cargo-contract`, e.g
`cargo +nightly contract build`.

The metadata can be found in your contract's target directory under the name
`metadata.json`.

Note: The metadata is also contained in your `$contract_name.contract` file. The
difference is that the `.contract` file also contains the Wasm binary of your contract.

## metadata.json

This file is composed of four sections:
    - `source`: Information about the contract's Wasm code.
    - `contract`: Metadata about the contract.
    - `user` (optional): Additional user-defined metadata.
    - `abi`: Raw JSON of the contract's abi metadata, generated during contract compilation.

The following sections will dive deeper into how these sections are made up.

### `source`
This object contains information about how the contract was built.

```json
"source": {
  "hash": "0x157014494527fee27a82e49bbd9eea10c0713bb0566f6def37f4595db86236ff",
  "language": "ink! 3.1.0",
  "compiler": "rustc 1.63.0-nightly"
}
```

It consists of the following **required** keys:
    - `hash`: The hash of the contract's Wasm code.
    - `language`: The language used to write the contract.
    - `compiler`: The compiler used to compile the contract.

It may _optionally_ include the following keys:
    - `wasm`: The actual Wasm code of the contract, for optionally bundling the code with the metadata.

Code reference from `cargo-contract`: https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L127

### `contract`
This object contains extra metadata about the contract.

```
"contract": {
  "name": "flipper",
  "version": "3.1.0",
  "authors": [
    "Parity Technologies <admin@parity.io>"
  ]
}
```

The **required** keys include:
    - `name`: The name of the smart contract.
    - `version`: The version of the smart contract.
    - `authors`: The authors of the smart contract.

It can _optionally_ include the following keys:
    - `description`: The description of the smart contract.
    - `documentation`: Link to the documentation of the smart contract.
    - `repository`: Link to the code repository of the smart contract.
    - `homepage`: Link to the homepage of the smart contract.
    - `license`: The license of the smart contract.

Code reference from `cargo-contract`: https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L395

### ABI
This is the specification of the contract. The "outer" metadata format does not dicate how
this looks, and instead will be driven by each smart contracting language. In this
document we will focus on the ink! ABI.


### `user`
This is an _optional_ field used to add user-defined metadata. Some examples of things
you may want to include here:
    - `moon_phase`: Phase of the moon during which the smart contract works.
    - `favorite_blockchain`: The favorite blockchain of the contract authors (answer: Polkadot!).
