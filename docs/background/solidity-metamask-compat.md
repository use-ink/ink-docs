---
title: Solidity & MetaMask Compatibility
hide_title: true
slug: /background/solidity-metamask-compatibility
---

<head>
    <meta name="description" content="Explanation of ink!'s compatibility with Solidity and Ethereum tooling (MetaMask, block explorers, Hardhat, …)." />
    <meta name="keywords" content="Ethereum, MetaMask, Solidity, Hardhat, ink!" />
    <meta property="og:title" content="Solidity & MetaMask Compatibility" />
    <meta property="og:description" content="Explanation of ink!'s compatibility with Solidity and Ethereum tooling (MetaMask, block explorers, Hardhat, …)." />
    <meta property="og:image" content="https://use-ink.com/img/opengraph/solidity-metamask.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Solidity and MetaMask" />
    <meta property="og:image:type" content="image/jpg" />
</head>

![Metadata Title Picture](/img/title/solidity.svg)

# Solidity & MetaMask Compatibility

With ink! v6, we have introduced an `abi` field in a custom `ink-lang` table 
in the [`package.metadata` table][package-metadata] of a contract's manifest
file (i.e. the `Cargo.toml` file) - [more details here][abi-declaration].
It allows building your contract in Solidity ABI compatibility mode 
when declared as follows:

```toml
[package.metadata.ink-lang]
abi = "sol"
```

The implication of supporting Solidity ABI encoding is that all types used as 
constructor/message argument and return types, and event argument types must 
define a mapping to an equivalent Solidity ABI type.

:::note
This is similar to the requirement to implement `scale::Encode` and `scale::Decode`
for Rust types used in the public interfaces of ink!/"native" ABI encoded contracts.
:::

[package-metadata]: https://doc.rust-lang.org/cargo/reference/manifest.html#the-metadata-table
[abi-declaration]: ../basics/abi/overview.md#declaring-the-abi

## Rust/ink! to Solidity ABI type mapping

This mapping is defined using the [`SolEncode`][sol-trait-encode] and 
[`SolDecode`][sol-trait-decode] traits, which are analogs to 
[`scale::Encode` and `scale::Decode`][scale-codec] 
(but for Solidity ABI encoding/decoding).
You won't be able to use Rust types for which no mapping to a Solidity type is defined.
An error about a missing trait implementation for this type will be thrown.

[sol-trait-encode]: https://use-ink.github.io/ink/ink/trait.SolEncode.html
[sol-trait-decode]: https://use-ink.github.io/ink/ink/trait.SolDecode.html
[scale-codec]: https://docs.rs/parity-scale-codec/latest/parity_scale_codec

### Default/provided mappings

[`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode] are implemented
for the following Rust/ink! primitive types creating a mapping
to the corresponding Solidity ABI types as shown in the table below:

| Rust/ink! type | Solidity ABI type | Notes |
| -------------- | ----------------- | ----- |
| `bool` | `bool` ||
| `iN` for `N ∈ {8,16,32,64,128}` | `intN` | e.g `i8` ↔ `int8` |
| `uN` for `N ∈ {8,16,32,64,128}` | `uintN` | e.g `u8` ↔ `uint8` |
| [`ink::U256`][ink-u256] | `uint256` ||
| `String` | `string` ||
| `Box<str>` | `string` ||
| [`ink::Address`][ink-address] / [`ink::H160`][ink-h160] | `address` | `ink::Address` is a type alias for the `ink::H160` type used for addresses in `pallet-revive` |
| `[T; N]` for `const N: usize` | `T[N]` | e.g. `[i8; 64]` ↔ `int8[64]` |
| `Vec<T>` | `T[]` | e.g. `Vec<i8>` ↔ `int8[]` |
| `Box<[T]>` | `T[]` | e.g. `Box<[i8]>` ↔ `int8[]` |
| [`ink::sol::FixedBytes<N>`][ink-fixed-bytes] for `1 <= N <= 32` | `bytesN` | e.g. `FixedBytes<32>` ↔ `bytes32`, `FixedBytes<N>` is just a newtype wrapper for `[u8; N]` that also implements `From<u8>` |
| [`ink::sol::DynBytes`][ink-dyn-bytes] | `bytes` | `DynBytes` is just a newtype wrapper for `Vec<u8>` that also implements `From<Box<[u8]>>` |
| `(T1, T2, T3, ... T12)` | `(U1, U2, U3, ... U12)` | where `T1` ↔ `U1`, ... `T12` ↔ `U12` e.g. `(bool, u8, Address)` ↔ `(bool, uint8, address)` |
| `Option<T>` | `(bool, T)` | e.g. `Option<u8>` ↔ `(bool, uint8)`|

[ink-u256]: https://use-ink.github.io/ink/ink/struct.U256.html
[ink-address]: https://use-ink.github.io/ink/ink/type.Address.html
[ink-h160]: https://use-ink.github.io/ink/ink/struct.H160.html
[ink-fixed-bytes]: https://use-ink.github.io/ink/ink/sol/struct.FixedBytes.html
[ink-dyn-bytes]: https://use-ink.github.io/ink/ink/sol/struct.DynBytes.html

:::note
Rust's `Option<T>` type doesn't have a **semantically** equivalent Solidity ABI type,
because [Solidity enums][sol-enum] are field-less.

So `Option<T>` is mapped to a tuple representation instead (i.e. `(bool, T)`),
because this representation allows preservation of semantic information in Solidity,
by using the `bool` as a "flag" indicating the variant
(i.e. `false` for `None` and `true` for `Some`) such that:
- `Option::None` is mapped to `(false, <default_value>)`
  where `<default_value>` is the zero bytes only representation of `T`
  (e.g. `0u8` for `u8` or `Vec::new()` for `Vec<T>`)
- `Option::Some(value)` is mapped to `(true, value)`

The resulting type in Solidity can be represented as a struct with a field for the "flag"
and another for the data.

Note that `enum` in Solidity is encoded as `uint8` in [Solidity ABI encoding][sol-abi-types],
while the encoding for `bool` is equivalent to the encoding of `uint8`,
with `true` equivalent to `1` and `false` equivalent to `0`.
Therefore, the `bool` "flag" can be safely interpreted as a `bool` or `enum` (or even `uint8`)
in Solidity code.
:::

[sol-enum]: https://docs.soliditylang.org/en/latest/types.html#enums
[sol-abi-types]: https://docs.soliditylang.org/en/latest/abi-spec.html#mapping-solidity-to-abi-types

[`SolEncode`][sol-trait-encode] is additionally implemented for reference and smart
pointer types below:

| Rust/ink! type | Solidity ABI type | Notes |
| -------------- | ----------------- | ----- |
| `&str`, `&mut str` | `string` ||
| `&T`, `&mut T`, `Box<T>` | `T` | e.g. `&i8 ↔ int8` |
| `&[T]`, `&mut [T]` | `T[]` | e.g. `&[i8]` ↔ `int8[]` |
| [`ink::sol::ByteSlice`][ink-byte-slice] | `bytes` | `ByteSlice` is a just newtype wrapper for `&[u8]` |

[ink-byte-slice]: https://use-ink.github.io/ink/ink/sol/struct.ByteSlice.html

### Handling the `Result<T, E>` type

Rust's `Result<T, E>` type doesn't have a **semantically** equivalent Solidity ABI type,
because [Solidity enums][sol-enum] are field-less, so no composable mapping is provided.

However, `Result<T, E>` types are supported as the return type of messages
and constructors, and they're handled at language level as follows:
- When returning the `Result::Ok` variant, where `T` implements `SolEncode`,
  `T` is encoded as "normal" Solidity ABI return data.
- When returning the `Result::Err` variant, `E` must implement `SolErrorEncode`,
  ink! will set the revert flag in the execution environment,
  and `E` will be encoded as [Solidity revert error data][sol-revert],
  with the error data representation depending on the `SolErrorEncode` implementation.
- Similarly, for decoding, `T` must implement `SolDecode`,
  while `E` must implement `SolErrorDecode`, and the returned data is decoded as `T`
  (i.e. `Result::Ok`) or `E` (i.e. `Result::Err`) depending on whether
  the revert flag is set (i.e. `E` if the revert flag is set, and `T` otherwise).

[sol-revert]: https://docs.soliditylang.org/en/latest/control-structures.html#revert

The `SolErrorEncode` and `SolErrorDecode` traits define the highest level interfaces
for encoding and decoding an arbitrary Rust/ink! error type as Solidity ABI revert error data.

Default implementations for both `SolErrorEncode` and `SolErrorDecode` are provided for unit
(i.e. `()`), and these are equivalent to reverting with no error data in Solidity
(i.e. empty output buffer).

For arbitrary custom error types, `Derive` macros are provided for automatically generating
implementations of `SolErrorEncode` and `SolErrorDecode` for structs and enums for which
all fields (if any) implement `SolEncode` and `SolDecode`.
- For structs, the struct name is used as the name of the [Solidity custom error][sol-custom-error]
  while the fields (if any) are the parameters
- For enums, each variant is its own [Solidity custom error][sol-custom-error],
  with the variant name being the custom error name, and the fields (if any) being the parameters

[sol-custom-error]: https://soliditylang.org/blog/2021/04/21/custom-errors/

```rust
use ink::{SolErrorDecode, SolErrorEncode};

// Represented as a Solidity custom error with no parameters
#[derive(SolErrorDecode, SolErrorEncode)]
struct UnitError;

// Represented as a Solidity custom error with parameters
#[derive(SolErrorDecode, SolErrorEncode)]
struct ErrorWithParams(bool, u8, String);

// Represented as a Solidity custom error with named parameters
#[derive(SolErrorDecode, SolErrorEncode)]
struct ErrorWithNamedParams {
    status: bool,
    count: u8,
    reason: String,
}

// Represented as multiple Solidity custom errors
// (i.e. each variant represents a Solidity custom error)
#[derive(SolErrorDecode, SolErrorEncode)]
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
For other [Solidity `revert`][sol-revert] error data representations (e.g. legacy revert strings),
you can implement `SolErrorEncode` and `SolErrorDecode` manually to match those representations.
:::

:::note
Rust's [coherence/orphan rules][rust-coherence] mean that you can only implement the
`SolErrorEncode` and `SolErrorDecode` traits for local types.
:::

### Mappings for arbitrary custom types

For arbitrary custom types, `Derive` macros are provided for automatically generating
implementations of `SolEncode` and `SolDecode`
- For structs where all fields (if any) implement `SolEncode` and `SolDecode` respectively,
  including support for generic types
- For enums where all variants are either [unit-only][enum-unit-only] or [field-less][enum-field-less]
  (see notes below for the rationale for this limitation)

[enum-unit-only]: https://doc.rust-lang.org/reference/items/enumerations.html#r-items.enum.unit-only
[enum-field-less]: https://doc.rust-lang.org/reference/items/enumerations.html#r-items.enum.fieldless

```rust
use ink_macro::{SolDecode, SolEncode};

#[derive(SolDecode, SolEncode)]
struct UnitStruct;

#[derive(SolDecode, SolEncode)]
struct TupleStruct(bool, u8, String);

#[derive(SolDecode, SolEncode)]
struct FieldStruct {
    status: bool,
    count: u8,
    reason: String,
}

#[derive(SolDecode, SolEncode)]
enum SimpleEnum {
    One,
    Two,
    Three,
}

#[derive(SolDecode, SolEncode)]
struct NestedStruct {
    unit: UnitStruct,
    tuple: TupleStruct,
    fields: FieldStruct,
    enumerate: SimpleEnum,
}

#[derive(SolDecode, SolEncode)]
struct GenericStruct<T> {
    concrete: u8,
    generic: T,
}
```

:::note
Solidity has no **semantic** equivalent for Rust/ink! enums with fields
(i.e. [Solidity enums][sol-enum] can only express the equivalent of Rust [unit-only][enum-unit-only]
or [field-less][enum-field-less] enums).

So mapping complex Rust enums (i.e. enums with fields) to "equivalent" Solidity representations
typically yields complex structures based on tuples (at [Solidity ABI encoding][sol-abi-types] level)
and structs (at Solidity language level).

Because of this, the `Derive` macros for `SolEncode` and `SolDecode` do NOT generate implementations
for enums with fields.

However, you can define custom representations for these types by manually implementing
the [`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode]
(see linked rustdoc for instructions).
:::

:::note
Rust's [coherence/orphan rules][rust-coherence] mean that you can
only implement the [`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode]
traits for local types.
:::

[rust-coherence]: https://doc.rust-lang.org/reference/items/implementations.html#trait-implementation-coherence

## MetaMask

You can use [MetaMask](https://metamask.io/) to interact with your `ink!` smart contract via the Solidity ABI.

To set up your wallet and connect to the appropriate network, follow this quick start guide: [Connect MetaMask to Polkadot Hub Testnet](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/wallets/#metamask)

:::info Network Details – Polkadot Hub Testnet
*Network name:* Polkadot Hub TestNet

*Currency symbol:* PAS

*Chain ID:* 420420422

*RPC URL:* https://testnet-passet-hub-eth-rpc.polkadot.io

*Block explorer URL:* https://blockscout-passet-hub.parity-testnet.parity.io/
:::

For step-by-step manual configuration instructions, see this guide: [Connect MetaMask to Polkadot Hub Testnet](https://docs.polkadot.com/develop/smart-contracts/wallets/#metamask).

## Solidity Tooling

You can deploy and interact with `ink!` smart contracts using popular Solidity tools like Hardhat and Foundry thanks to the Solidity-compatible ABI output.

Full Tutorial: [Use Solidity Tooling with ink! Contracts](../integrations-and-sdks/ethereum-compatibility/overview.md)

This guide walks through compiling an `ink!` contract with Solidity metadata, configuring Hardhat, deploying to the Polkadot Hub Testnet, and interacting with the contract using Ethers.js.

## Block explorers

PolkaVM smart contracts are compatible with Ethereum-style block explorers such as [BlockScout](https://www.blockscout.com/), which is already integrated with the Polkadot Hub Testnet.

- [Polkadot Hub Testnet BlockScout](https://blockscout.testnet.polkadot.io)

For additional information and instructions, check out: [Polkadot Smart Contract Block Explorers](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/block-explorers/)