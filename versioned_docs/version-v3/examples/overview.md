---
title: Overview
slug: /examples
---

In our <a href="https://github.com/use-ink/ink-examples/tree/main">examples folder</a> you find a number of examples written in ink!.

Some of the most interesting ones:

* `delegator` ‒ Implements cross-contract calling.
* `trait-erc20` ‒ Defines a trait for `Erc20` contracts and implements it.
* `erc721` ‒ An exemplary implementation of `Erc721` NFT tokens.
* `dns` ‒  A simple `DomainNameService` smart contract.
* …and more, just rummage through the folder 🙃.

To build a single example navigate to the root of the example and run:
```bash
cargo contract build
```

As a result you'll get a file `target/flipper.wasm` file, a `metadata.json` file and a `<contract-name>.contract` file in the `target/` folder of your contract.
The `.contract` file combines the Wasm and metadata into one file and needs to be used when deploying the contract.

For further information, please have a look at the [Deploy your Contract](../getting-started/deploying.md) section or our [smart contracts workshop](https://docs.substrate.io/tutorials/smart-contracts/).


