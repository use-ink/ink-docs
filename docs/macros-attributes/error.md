---
title: "#[ink::error]"
slug: /macros-attributes/error
hide_title: true
---

![Text/error Title Picture](/img/title/text/error.svg)

Applicable on `struct` and `enum` definitions.

It derives traits necessary for encoding/decoding a custom type as revert error data.

The following traits are derived depending on the ABI mode:
- In ["ink"][abi-ink] and ["all"][abi-all] ABI mode:
  - [`scale::Encode` and `scale::Decode`][scale-codec] for encoding/decoding ink! revert error data
  - [`scale_info::TypeInfo`][scale-info] for generating ink! contract metadata (gated behind the `std` feature)
- In ["sol"][abi-sol] and ["all"][abi-all] ABI mode:
  - [`SolErrorEncode`][sol-error-encode] and [`SolErrorDecode`][sol-error-decode]
    for encoding/decoding custom types as [Solidity custom errors][sol-custom-error]
  - `SolErrorMetadata` for generating [Solidity ABI metadata][sol-abi-json] (gated behind the `std` feature)

[scale-codec]: https://docs.rs/parity-scale-codec/latest/parity_scale_codec
[sol-error-encode]: https://use-ink.github.io/ink/ink/sol/trait.SolErrorEncode.html
[sol-error-decode]: https://use-ink.github.io/ink/ink/sol/trait.SolErrorDecode.html
[sol-custom-error]: https://soliditylang.org/blog/2021/04/21/custom-errors/
[sol-abi-json]: https://docs.soliditylang.org/en/latest/abi-spec.html#json
[scale-info]: https://docs.rs/scale-info/latest/scale_info/
[abi-ink]: ../basics/abi/ink.md
[abi-sol]: ../basics/abi/solidity.md
[abi-all]: ../basics/abi/all.md

## Example

```rust
#[ink::error]
struct UnitError;

#[ink::error]
enum MultipleErrors {
    UnitError,
    ErrorWithParams(bool, u8, String),
    ErrorWithNamedParams {
        status: bool,
        count: u8,
        reason: String,
    }
}
```

:::note
See our [Solidity ABI compatibility docs][sol-result] for more details about
handling Solidity ABI encoded [revert error data][sol-revert].
:::

[sol-revert]: https://docs.soliditylang.org/en/latest/control-structures.html#revert
[sol-result]: ../integrations-and-sdks/ethereum-compatibility.md#handling-the-resultt-e-type