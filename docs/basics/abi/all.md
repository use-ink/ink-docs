---
title: |
  "All" ABI Mode
hide_title: true
slug: /basics/abi/all
---

![Metadata Title Picture](/img/title/metadata-revive.svg)

# "All" ABI Mode

The "all" ABI mode is declared in the contract's manifest file (i.e. the `Cargo.toml` file)
as follows:

```toml
[package.metadata.ink-lang]
abi = "all"
```

When the "all" ABI is specified, the ink! code generator follows both 
the ink! and Solidity ABI specifications, and generates entry points 
for both calling conventions. This means:

- For each message, two selectors are generated, one for [ink!](./ink.md) 
  and another for [Solidity](./solidity.md) ABI.
- Each selector is ABI specific and its entry point uses the corresponding
  input/output encoding/decoding scheme (i.e. entry points for ink! selectors use
  Parity's [SCALE Codec][scale-codec], while entry points for Solidity selectors
  use Solidity ABI encoding/decoding for input/output encoding/decoding).
- Message selector manual overrides 
  (using the [`selector` attribute][selector-attribute]) are respected for 
  ink! ABI entry points but ignored for Solidity ABI entry points
  (i.e. Solidity selectors are **always** generated according to the
  [Solidity ABI specification for function selectors][sol-abi-selector]).
- Multiple constructors are supported (as per the ink! ABI), however, 
  if multiple constructors are defined, then one of the constructors
  must be annotated with the [`default` attribute][default-attribute] 
  to identify it as the constructor to use for Solidity ABI encoded instantiation.
  Note that if only a single constructor is defined, 
  then the `default` attribute annotation is unnecessary.
- Call builders and [contract references][contract-refs] are generated for
  both ink! and Solidity ABI calling conventions.
- Both an ink! and Solidity ABI encoded event are emitted for each call to
  `Self::env().emit_event()` or `self.env().emit_event()`.

:::note
Your contract sizes will get larger if you support both the ink! and Solidity ABI.
:::

:::note
The "all" ABI mode can only be used if all message argument and return types, 
the argument and return type of the constructor used for Solidity ABI encoded instantiation, 
and event argument types can be mapped to equivalent Solidity ABI types 
([more details here][sol-type-mapping]).
:::

[scale-codec]: https://docs.rs/parity-scale-codec/latest/parity_scale_codec
[sol-abi-selector]: https://docs.soliditylang.org/en/latest/abi-spec.html#function-selector
[selector-attribute]: ../../macros-attributes/selector.md
[default-attribute]: ../../macros-attributes/default.md
[contract-refs]: ../cross-contract-calling.md#contract-references
[sol-type-mapping]: ../../integrations-and-sdks/ethereum-compatibility.md#rustink-to-solidity-abi-type-mapping
