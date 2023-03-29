---
title: OpenBrush
slug: /getting-started/use-openbrush
---

[OpenBrush] is a library for smart contract development on ink! maintained by the
[Brushfam](https://brushfam.io) team.

It provides standard contracts based on [Polkadot Standard Proposals (PSPs)](https://github.com/w3f/PSPs),
as well as higher-level contracts and Rust macros that generate ink! code.

Using OpenBrush is simple, you only add the dependency to your `Cargo.toml` file.
You can find an example [here](https://docs.openbrush.io/smart-contracts/overview).

### Which standards and contract components does it contain?

- **PSP22**: Fungible Token (*ERC20 equivalent*) with extensions.
- **PSP34**: Non-Fungible Token (*ERC721 equivalent*) with extensions.
- **PSP37**: *ERC1155 equivalent* with extensions.
- **Ownable** Restrict access to action for non-owners.
- **Access Control**: Define a set of roles and restrict access to an action by roles.
- **Reentrancy Guard**: Prevent reentrant calls to a function.
- **Pausable**: Pause/Unpause the contract to disable/enable some operations.
- **Timelock Controller**: Execute transactions with some delay.
- **Payment Splitter**: Split the amount of native tokens between participants.

### Generic Trait Implementation

OpenBrush adds support for generic Trait implementations, so that you can
split a Trait and its implementation into different files. This can
increase the readability and maintainability of your smart-contract
code base ([detailed description](https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md)).

### Wrapper around Traits: `#[openbrush::wrapper]`

If you know that the other contract implements a trait and 
the trait is attributed with ` #[openbrush::trait_definition]`
you only need that trait definition and the address of the other contract 
in order to call a method from the deployed third-party contract.
The wrapper is an attribute macro named `#[openbrush::wrapper]` for traits. 
It will generate a callable structure of the other contract with the name defined
by a user:
```rust
// You can create wrapper in the place where you defined the trait
// Or if you import **everything** from the file where you define trait
#[openbrush::wrapper]
type Trait1Ref = dyn Trait1;
```

The benefits of such mechanism is a functional polymorphism.
Instead of working with the concrete implementation of the trait as a dependency
in you contract, you only interact with its interface. 
That means that you do not need to import other contracts as dependencies
to the calling contract.
If you need to update the implementation of the trait within the calling contract,
you only need to replace the called contract address. The wrapper does not guarantee
that the given address refers to a contract that implements the given trait.

Additionally, the wrapper supports multiple traits (i.e. `dyn Erc20 + Ownable + Erc721`)
without losing the syntax highlighting from your favourite IDE.

See [this example](https://github.com/727-Ventures/openbrush-contracts#wrapper-around-traits)
for more information.

### Documentation

- [OpenBrush Github repo](https://github.com/727-Ventures/openbrush-contracts)
- [Official Docs](https://docs.openbrush.io/)
- [OpenBrush website](https://openbrush.io/)
- [Substrate Seminar (Youtube)](https://www.youtube.com/watch?v=I5OFGNVvzOc)
- [How to use modifiers](https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76)

## Typechain-Polkadot

Another tool helpful for ink! smart contracts development is [Typechain-Polkadot](https://github.com/727-Ventures/typechain-polkadot).

Typechain-Polkadot is used to generate Typescript wrappers around your smart contract.
This can be used for UI development or in integration tests of your ink! smart contracts.
The library uses [`polkadot-js/api`](https://github.com/polkadot-js/api) under the hood,
but is especially useful because all calls and queries are typed, therefore the chance of
getting some error during a call is mitigated.

## Sol2Ink

[Sol2Ink](https://github.com/727-Ventures/sol2ink) is a tool which can support migrations
from Solidity to ink!. Solidity code is passed to Sol2Ink and converted to an ink! contract.
The tool can also be used to learn the differences between Solidity and ink! code.

### Questions?

If you have any questions about how to use any of these tools, or just about the ink! smart contracts in general, you can join the [Brushfam element channel](https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation) or ask a question on the [Substrate Stack Exchange](https://substrate.stackexchange.com/).

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs