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

[package-metadata]: https://doc.rust-lang.org/cargo/reference/manifest.html#the-metadata-table
[abi-declaration]: ../basics/abi/overview.md#declaring-the-abi

## Rust/ink! to Solidity ABI type mapping

This mapping is defined using the [`SolEncode`][sol-trait-encode] and 
[`SolDecode`][sol-trait-decode] traits, which are analogs to 
[`scale::Encode` and `scale::Decode`][scale-codec] 
(but for Solidity ABI encoding/decoding).
You won't be able to use Rust types for which no mapping to a Solidity type exists.
An error about a missing trait implementation for this type will be thrown.

[sol-trait-encode]: https://docs.rs/ink/6.0.0-alpha/ink/trait.SolEncode.html
[sol-trait-decode]: https://docs.rs/ink/6.0.0-alpha/ink/trait.SolDecode.html
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

:::note
Rust's `Option` and `Result` types are notable omissions from the default mappings.
This is because they don't have **semantically** equivalent Solidity ABI types.
:::

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

You can use [MetaMask](https://metamask.io/) to interact with your `ink!` smart contract via the Solidity ABI.

To set up your wallet and connect to the appropriate network, follow this quick start guide: [Connect MetaMask to Polkadot Hub Testnet](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/wallets/#metamask)

:::info Network Details – Polkadot Hub Testnet
*Network name:* Polkadot Hub TestNet

*Currency symbol:* PAS

*Chain ID:* 420420422

*RPC URL:* https://testnet-passet-hub-eth-rpc.polkadot.io

*Block explorer URL:* https://blockscout-passet-hub.parity-testnet.parity.io/
:::

For more detailed configuration steps (RPC URL, chain ID, symbol, block explorer),see the complete guide:
 [Connect to Polkadot - Full Guide](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/connect-to-polkadot/)

## Solidity Tooling.

You can deploy and interact with `ink!` smart contracts using popular Solidity tools like Hardhat and Foundry thanks to the Solidity-compatible ABI output.

Full Tutorial: [Use Solidity Tooling with ink! Contracts](../frontend/solidity-compatibility.md)

This guide walks through compiling an `ink!` contract with Solidity metadata, configuring Hardhat, deploying to the Polkadot Hub Testnet, and interacting with the contract using Ethers.js.

## Block explorers

PolkaVM smart contracts are compatible with Ethereum-style block explorers such as [BlockScout](https://www.blockscout.com/), which is already integrated with the Polkadot Hub Testnet.

- [Polkadot Hub Testnet BlockScout](https://blockscout.testnet.polkadot.io)

For additional information and instructions, check out: [Polkadot Smart Contract Block Explorers](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/block-explorers/)
