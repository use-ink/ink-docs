---
title: Overview
hide_title: true
slug: /basics/abi
---

![Metadata Title Picture](/img/title/metadata-revive.svg)

# ABI (Application Binary Interface)

An ABI (Application Binary Interface) defines a standard way to interact with contracts
(i.e. it defines the calling conventions to use for public function calls).

More concretely this entails specifications for:
- Computing or defining selectors which identify the entry points for public function calls
- Encoding and decoding public function input and output data
- Encoding and decoding event and error data

With ink! v6, the ink! code generator supports two ABI specifications:

- [Our own native ink! ABI specification](./ink.md)
- [The Solidity ABI specification](./solidity.md)

Supporting the Solidity ABI specification allows: 
- Solidity contracts to transparently call ink! contracts 
- Developers to use Solidity tools (e.g. [ethers.js][ethers-js]) to 
  transparently interact with ink! contracts.

Additionally, the ink! code generator can operate in an [`"all"` ABI mode](./all.md), 
where it generates a binary that supports both the ink! and Solidity ABI specifications 
(i.e. it generates a binary that transparently supports both ink! and Solidity 
calling conventions, and thus transparently supports interactions from 
both ink! and Solidity contracts and external tools).

## Declaring the ABI

The ABI for an ink! contract is declared in the contract's manifest file 
(i.e. the `Cargo.toml` file), as a field `abi` of a custom `ink-lang` table
in the [`package.metadata` table][package-metadata] e.g.

```toml
[package.metadata.ink-lang]
abi = "sol"
```

The default value for `abi` is currently `"ink"`, 
but we might change this before a production release. 

Allowed values are `"ink"`, `"sol"` and `"all"`.

:::note
The Solidity ABI specification can only be used if all constructor and message
argument and return types, and event argument types can be mapped to
equivalent Solidity ABI types ([more details here][sol-type-mapping]).
:::

:::note
Your contract sizes will get larger if you support both the ink! and Solidity ABI.
:::

[package-metadata]: https://doc.rust-lang.org/cargo/reference/manifest.html#the-metadata-table
[ethers-js]: https://docs.ethers.org/
[sol-type-mapping]: ../../integrations-and-sdks/ethereum-compatibility.md#rustink-to-solidity-abi-type-mapping
