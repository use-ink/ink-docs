---
title: Solidity ABI
hide_title: true
slug: /basics/abi/solidity
---

![Metadata Title Picture](/img/title/solidity.svg)

# Solidity ABI

The Solidity ABI is declared in the contract's manifest file (i.e. the `Cargo.toml` file)
as follows:

```toml
[package.metadata.ink-lang]
abi = "sol"
```

When the Solidity ABI is specified, the ink! code generator follows the [Solidity ABI specification][sol-abi]. 
This means:

- Message selectors are **always** generated according to the
  [Solidity ABI specification for function selectors][sol-abi-selector].
- Message selector manual overrides using the [`selector` attribute][selector-attribute] are ignored.
- [Solidity ABI encoding][sol-abi-codec] is used for input/output encoding/decoding.
- Only one constructor can be defined for the contract.
- Call builders are generated for Solidity ABI calling conventions.

:::note
The Solidity ABI specification can only be used if all constructor and message
argument and return types, and event argument types can be mapped to
equivalent Solidity ABI types ([more details here][sol-type-mapping]).
:::

:::info
The contract ABI only describes how external interactions with a contract are
encoded/decoded. 
The internal storage representation of a contract is still done in the SCALE codec!

_Using the Solidity ABI does not imply switching to a different storage layout!_
:::

[sol-abi]: https://docs.soliditylang.org/en/latest/abi-spec.html
[sol-abi-selector]: https://docs.soliditylang.org/en/latest/abi-spec.html#function-selector
[selector-attribute]: ../../macros-attributes/selector.md
[sol-abi-codec]: https://docs.soliditylang.org/en/latest/abi-spec.html#formal-specification-of-the-encoding
[sol-type-mapping]: ../../background/solidity-metamask-compat.md#rustink-to-solidity-abi-type-mapping