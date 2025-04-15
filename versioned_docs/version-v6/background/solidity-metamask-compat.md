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

:::caution
This page has not yet been written for ink! v6.

TODO @davidsemakula
:::

With ink! v6, we have introduced a new attribute argument `abi` for the `#[ink::contract]` macro.
It allows building your contract in Solidity ABI compatibility mode ([more details here][contract-abi-arg]).

The implication of supporting Solidity ABI encoding is that all types used as constructor/message arguments 
and return types must define a mapping to an equivalent Solidity type.

This mapping is defined using the [`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode] traits, 
which are analogs to [`scale::Encode` and `scale::Decode`][scale-codec] (but for Solidity ABI encoding/decoding).
You won't be able to use Rust types for which no mapping to a Solidity type exists.
An error about a missing trait implementation for this type will be thrown.

[contract-abi-arg]: ../macros-attributes/contract.md#abi-string
[sol-trait-encode]: https://docs.rs/ink/latest/ink/trait.SolEncode.html
[sol-trait-decode]: https://docs.rs/ink/latest/ink/trait.SolEncode.html
[scale-codec]: https://docs.rs/parity-scale-codec/latest/parity_scale_codec

## Rust/ink! to Solidity ABI type mapping

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
| [`ink::SolBytes<u8>`][ink-sol-bytes] | `bytes1` ||
| [`ink::SolBytes<[u8; N]>`][ink-sol-bytes] for `1 <= N <= 32` | `bytesN` | e.g. `ink::SolBytes<[u8; 1]>` ↔ `bytes1` |
| [`ink::SolBytes<Vec<u8>>`][ink-sol-bytes] | `bytes` ||
| [`ink::SolBytes<Box<[u8]>>`][ink-sol-bytes] | `bytes` ||
| `(T1, T2, T3, ... T12)` | `(U1, U2, U3, ... U12)` | where `T1` ↔ `U1`, ... `T12` ↔ `U12` e.g. `(bool, u8, Address)` ↔ `(bool, uint8, address)` |

[`SolEncode`][sol-trait-encode] is additionally implemented for reference and smart
pointer types below:

| Rust/ink! type | Solidity ABI type | Notes |
| -------------- | ----------------- | ----- |
| `&str`, `&mut str` | `string` ||
| `&T`, `&mut T`, `Box<T>` | `T` | e.g. `&i8 ↔ int8` |
| `&[T]`, `&mut [T]` | `T[]` | e.g. `&[i8]` ↔ `int8[]` |

[ink-u256]: https://docs.rs/ink/latest/ink/struct.U256.html
[ink-address]: https://docs.rs/ink/latest/ink/type.Address.html
[ink-h160]: https://docs.rs/ink/latest/ink/struct.H160.html
[ink-sol-bytes]: https://docs.rs/ink/latest/ink/struct.SolBytes.html

### Mappings for arbitrary custom types

See the rustdoc for [`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode]
for instructions for implementing the traits for arbitrary custom types.

:::note
Rust's [coherence/orphan rules][rust-coherence] mean that you can
only implement the [`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode]
traits for local types.
:::

[rust-coherence]: https://doc.rust-lang.org/reference/items/implementations.html#trait-implementation-coherence

## MetaMask

…

## Hardhat, Foundry, etc.

…

## Block explorers

…
