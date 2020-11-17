---
title: Overview
slug: /examples
---

In our <a href="https://github.com/paritytech/ink/tree/master/examples">examples folder</a> you find a number of examples written in ink!.

Some of the most interesting ones:

* `delegator` ‒ Implements cross-contract calling.
* `trait-erc20` ‒ Defines a trait for `Erc20` contracts and implements it.
* `erc721` ‒ An exemplary implementation of `Erc721` NFT tokens.
* `dns` ‒  A simple `DomainNameService` smart contract.
* …and more, just rummage through the folder 🙃.

To build a single example navigate to the root of the example and run:
```
cargo contract build && cargo contract generate-metadata
```

You should now have an optimized `<contract-name>.wasm` file and a `metadata.json` file in the `target` folder of the contract.

For further information, please have a look at the [Play with It](#play-with-it) section or our [smart contracts workshop](https://substrate.dev/substrate-contracts-workshop/).


