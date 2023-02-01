---
title: OpenBrush
slug: /getting-started/use-openbrush
---

:::note
TODO: Translate to Spanish.
:::

[OpenBrush] is a library for smart contract development on ink! maintained by the
[Brushfam](https://brushfam.io) team.

It provides standard contracts based on [Polkadot Standard Proposals (PSPs)](TODO),
as well as higher-level contracts and Rust macros that generate ink! code.

Using OpenBrush is simple, you will only add the dependency to your `Cargo.toml` file. Here is an [example](https://docs.openbrush.io/smart-contracts/overview) of how to do it.

### Which standards and contract components does it contain?

- **PSP22** - Fungible Token (*ERC20 equivalent*) with extensions
- **PSP34** - Non-Fungible Token (*ERC721 equivalent*) with extensions
- **PSP37**: *ERC1155 equivalent* with extensions
- **Ownable** Restrict access to action for non-owners
- **Access Control**: Define a set of roles and restrict access to an action by roles
- **Reentrancy Guard**: Prevent reentrant calls to a function
- **Pausable**: Pause/Unpause the contract to disable/enable some operations
- **Timelock Controller**: Execute transactions with some delay
- **Payment Splitter**: Split the amount of native tokens between participants

### Generic Trait Implementation

More importantly, OpenBrush adds support for generic Trait implementation so you can split Trait and Impls into different files, which will increase the readability and maintainability of your smart-contract code base (see detailed description [here](https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md))

### Wrapper around Traits

Defining a Trait definition is sufficient (a contract that implements that Trait is not needed anymore) to call methods of that Trait from some contract in the network (do a cross contract call). It makes cross-contract calls easier.

### Documentation

- [OpenBrush Github repo](https://github.com/727-Ventures/openbrush-contracts)
- [Official Docs](https://docs.openbrush.io/)
- [OpenBrush website](https://openbrush.io/)
- [Substrate Seminar (Youtube)](https://www.youtube.com/watch?v=I5OFGNVvzOc)
- [How to use modifiers](https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76)

## Typechain-Polkadot

Another tool helpful for ink! smart contracts development is [Typechain-Polkadot](https://github.com/727-Ventures/typechain-polkadot).

Typechain-Polkadot is used to generate Typescript wrappers around your smart-contract, which can be used in UI or in integration tests of your ink! smart contracts. It uses polkadot-api under the hood, but is especially useful because all calls and queries are typed, therefore the chance of getting some error during a call is mitigated.

## Sol2Ink

[Sol2Ink](https://github.com/727-Ventures/sol2ink) is a useful tool which can help you migrating from Solidity to ink! You will only pass the Solidity code of your smart contract to Sol2Ink and get the ink! contract in return. You can also use Sol2Ink to learn the differences between Solidity and ink! code and use it to help you learning to create ink! smart contracts.

### Questions?

If you have any questions about how to use any of these tools, or just about the ink! smart contracts in general, you can join the [Brushfam element channel](https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation) or ask a question on the [Substrate Stack Exchange](https://substrate.stackexchange.com/).

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs
