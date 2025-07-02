---
title: Overview
hide_title: true
slug: /basics/metadata
---

![Metadata Title Picture](/img/title/metadata-revive.svg)

# Metadata

You can think of "Metadata" this way: when a contract is built,
the product of this process is a binary (the `.polkavm` file) that 
contains just the bytecode of your contract. 

Without further information it's
not possible to know what this bytecode refers to. For example,
which functions can be called in there or what their arguments
are. This additional information that describes what the raw binary
is about is called metadata — data that describes other data.

Metadata is used to describe a contract in a language agnostic way. 
It is intended to be used by third party tools (e.g. UIs, block explorers e.t.c) 
in order to correctly call contract functions and interpret events.

ink! supports two formats of metadata:

* [Our own native ink! metadata format](./ink-format.md)
* [The Solidity metadata format](./solidity-format.md)

Supporting the Solidity metadata format allows developers to use Solidity tools
(e.g. [ethers.js][ethers-js]) to transparently interact with 
[Solidity ABI compatible ink! contracts][sol-compat].

So developers have a choice which metadata they want to generate for a contract.
They can decide when invoking `cargo-contract`:

```shell
$ cargo contract build ---metadata <ink|solidity>
```

Generating Solidity metadata is only possible if all constructor and message 
argument and return types, and event argument types can be mapped to 
equivalent Solidity ABI types ([more details here][sol-type-mapping]).

[ethers-js]: https://docs.ethers.org/
[sol-compat]: ../../background/solidity-metamask-compat.md
[sol-type-mapping]: ../../background/solidity-metamask-compat.md#rustink-to-solidity-abi-type-mapping