---
title: Metadata
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

Metadata is used to describe a contract in a language agnostic way. It is
intended to be used by third party tools (e.g. UIs, block explorers) in order to correctly
call contract functions and interpret events.

ink! supports two formats of metadata:

* [The Solidity format](./solidity-format.md)
* [Our own ink! format](./ink-format.md)

The reason why we support two formats is that Solidity is a subset of
the types that Rust allows for. E.g. Rust's `Option` or `Result` are
not supported by the Solidity type system.

So developers have a choice which metadata they want to generate for a contract.
They can decide when invoking `cargo-contract`:

```bash
$ cargo contract build ---metadata <ink|solidity>
```

Generating Solidity metadata is only possible if all constructor and message 
arguments + return types can be mapped to fitting Solidity types.