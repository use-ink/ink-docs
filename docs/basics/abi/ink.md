---
title: ink! ABI
hide_title: true
slug: /basics/abi/ink
---

![Metadata Title Picture](/img/title/metadata-revive.svg)

# ink! ABI

The ink! ABI is declared in the contract's manifest file (i.e. the `Cargo.toml` file) 
as follows:

```toml
[package.metadata.ink-lang]
abi = "ink"
```

When the ink! ABI is specified, the ink! code generator follows the ink! ABI specification. 
This means:

- By default, message selectors are generated according to the
  [ink! ABI specification for selectors][ink-spec-selector].
- Message selectors can be manually overridden using the [`selector` attribute][selector-attribute].
- Parity's [SCALE Codec][scale-codec] is used for input/output encoding/decoding.
- Call builders (used for making cross-contract calls) are generated for ink! ABI
  calling conventions.

[ink-spec-selector]: ../../basics/selectors
[selector-attribute]: ../../macros-attributes/selector
[scale-codec]: https://docs.rs/parity-scale-codec/latest/parity_scale_codec
