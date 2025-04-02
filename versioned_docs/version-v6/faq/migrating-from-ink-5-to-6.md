---
title: "Migration: ink! v5 → v6"
slug: /faq/migrating-from-ink-5-to-6
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/title/migration-5.x-to-6.0.svg')} className="titlePic titleSpace" title="Migration 5.x To 6.0 Title Picture" />

We've made a number of breaking changes from ink! 5.x to ink! 6.0.
On this page we outline how you can migrate existing dApps and
contracts.

The biggest change is that we've migrated from `pallet-contracts` +
WebAssembly (executed in `wasmi`) to [`pallet-revive`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive) +
RISC-V (executed in [PolkaVM](https://github.com/paritytech/polkavm/)).
_This is a major breaking change, ink! v6 is only compatible with `cargo-contract` >= v6
and chains that include `pallet-revive`._

We did a detailed write-up of the background to this development and the reasoning
[here](https://use.ink/6.x/current-state). 

Compatibility of this release:
* Rust >= 1.85
* [`cargo-contract` `v6.0.0-alpha`](https://github.com/use-ink/cargo-contract/releases/tag/v6.0.0-alpha)
* [`ink-node/cd94b5f`](https://github.com/use-ink/ink-node/commit/cd94b5fa23ee04f2d541decf1ace3b9904d61cb2)
* [`polkadot-sdk/f8c90b2a01ec77579bccd21ae17bd6ff2eeffd6a`](https://github.com/paritytech/polkadot-sdk/commit/f8c90b2a01ec77579bccd21ae17bd6ff2eeffd6a)

In the following we'll describe the breaking changes on a high-level. The
context to understand them is that the `pallet-revive` team has Ethereum/Solidity
support as the number one priority. All their design decisions derive from that,
they don't want to maintain code that is unnecessary for that objective.

You can find the full changelog of the 6.0 release [here](https://github.com/use-ink/ink/blob/master/CHANGELOG.md#version-600).

:::caution
This migration guide only considers your code base! Not your storage data!

If you have an existing contract on-chain you might not be able to just
upgrade the code on-chain, you possibly also have to migrate your storage data.
:::

## How to upgrade

- Change the dependency versions of `ink` and `ink_e2e` in your contracts `Cargo.toml` to `6`.
- Update your local `cargo-contract` installation to 6.0.
- Read through this page.

## Compatibility

- `>= polkadot-v1.9.0`
- `pallet-contracts >= polkadot-v0.9.37`
- `ink-node >= v0.24.0`

### How do I find out if a chain is compatible with ink! 6.0?

You can query `contracts::palletVersion()` via the chain state RPCs. It has to
be `>= 9` for ink! 5.0 to be compatible, if you don't use any of the four functions
mentioned above.
For the above mentioned four functions please see the respective sections on this page,
there we explain how to find out if a chain supports them there.

You can use the [polakdot.js app](https://polkadot.js.org/apps/) to connect to the chain and check if
`reviveApi` is available under Developer » Runtime calls.

<img src={useBaseUrl('/img/pallet-revive-available.png')} />

The following chains are in production and support ink! 6.0.

<div className="row">
    <div className="col text--center">
        <a href="https://onpop.io">
            <img src={useBaseUrl('/img/chains/polkadot-pop-network.svg')} className="chain" />
        </a>
    </div>
    <div className="col text--center">
        <a href="https://kusama.network/">
            <img src={useBaseUrl('/img/chains/kusama-assethub.svg')} className="chain" />
        </a>
    </div>
</div>

### `cargo-contract` v6

Together with ink! 6.0 we've released `cargo-contract` 6.0.
You have to use `cargo-contract` >= 6.0 for ink! 6.0 contracts!

You can upgrade via:

```rust
cargo install cargo-contract --version ^6 --locked
```

### Tooling & Libraries

- Stable Rust >= 1.85
- `cargo-contract` >= v6.0
- `polkadot-js/api` and `polkadot-js/api-contract`: no support yet
- [`use-inkathon`](https://github.com/scio-labs/use-inkathon): no support yet
- [ink!athon](https://inkathon.xyz/): no support yet

## Important Changes

We had to introduce a number of changes that require you to manually upgrade
your contract from 5.x to 6.0. The steps are explained in this section.

### Restrict which `cfg` attributes can be used

This change was done as a recommendation from the ink! 5.x audit.
In a nutshell it prevents developers from hiding functionality in a contract,
that would not be visible in the metadata (so e.g. on a block explorer).
The relevant PR is [#2313](https://github.com/use-ink/ink/pull/2313).

From ink! 6.0 on only these attributes are allowed in `#[cfg(…)]`: - `test` - `feature` (without `std`) - `any` - `not` - `all`

### Metadata Changes

The field `source.wasm` was renamed to `source.contract_binary`.

### Types

#### Contract Balance: `U256`
For the type of a contract's balance, `pallet-revive` uses depending on the context
* either the configured `pallet_revive::Config::Currency` type (which corresponds
  to the `ink::Environment::Balance` type.
* or a hardcoded `U256` (which corresponds to what Ethereum uses).
  In this alpha release we just adhere to requiring the types that `pallet-revive` uses.
  In an upcoming beta release this could be simplified to reduce UX friction by just
  using one type everywhere and converting to the `pallet-revive` one.

#### Contract Address: `H160`
For a contract's account, `pallet-revive` is using either the configured `AccountId` type
of the `polkadot-sdk` runtime, or `H160`.

Finding the `H160` for an `AccountId` is done via an address derivation scheme derived in
[#7662](https://github.com/paritytech/polkadot-sdk/pull/7662).
After instantiating a contract, the address is no longer returned by `pallet-revive`.
Instead one has to derive it from given parameters (see the linked PR). `cargo-contract`
does that automatically.

For contract instantiations and contract calls the pallet requires that a 1-to-1 mapping
of an `AccountId` to a `H160` has been created. This can be done via the `map_account`/
`unmap_account` API.
The PR [#6096](https://github.com/paritytech/polkadot-sdk/pull/6096) contains more
information.

Besides the publicly exposed crate functions, we've introduced a new subcommand
`cargo contract account` that allows resolving the `H160` contract address to the
Polkadot SDK `AccountId` which it is mapped to.

#### Contract Hash: `H256`
For a contract's hash value, `pallet-revive` uses a fixed `H256`, Previously,
the `ink::Environment::Hash` type referenced the hash type being used for the
contract's hash. Now it's just a fixed `H160`.

### Contract delegates can no longer be done by code
In `pallet-contracts` (and hence up until ink! v5), a pattern for upgradeable
contracts was to delegate the contract execution to a different code, e.g. to
a new version of the contract's code.

This distinction of contract code that was uploaded to a chain vs. an instantiated
contract from this code no longer exists in `pallet-revive`. If you want to
delegate the execution, you will have to specify another contract's address
to which code you want to delegate to. This other contract needs to be instantiated
on-chain.

For the execution, the context of the contract that delegates will continue
to be used (storage, caller, value).

Specifically the delegate API changed like this:

```rust
/// ink! v5
#[derive(Clone)]
pub struct DelegateCall<E: Environment> {
    code_hash: E::Hash,
    call_flags: CallFlags,
}

/// ink! v6
#[derive(Clone)]
pub struct DelegateCall {
    address: H160,
    flags: CallFlags,
    ref_time_limit: u64,
    proof_size_limit: u64,
    deposit_limit: Option<[u8; 32]>,
}
```

### Feature `ink/unstable-hostfn`
In `pallet-revive` a number of functions can only be called by smart contracts
if the chain that the pallet is running on has enabled the feature
`pallet-revive/unstable-hostfn`.
This feature is not enabled on Kusama or Westend!

It is enabled for the `ink-node` version that we linked above.

### New debugging workflow
Previously `pallet-contracts` returned a `debug_message` field with contract
instantiations and dry-runs.
Whenever `ink::env::debug_println` was invoked in a contract, ink! wrote debugging
info to this field. This functionality has been removed. Instead `pallet-revive` now
supports other means of debugging.

The most relevant new debugging workflow is the tracing API. There are a number
of PRs that implemented it, so we won't link a specific one here. A good starting
point to look deeper into it is the [`tracing.rs`](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/tracing.rs).

We have implemented barebones support for this tracing API in the 6.0.0-alpha
versions of ink! + `cargo-contract`. But it's really barebones and should
certainly be improved before a production release.

We've updated [the Debugging chapter](../debugging/overview.md) of this documentation
to reflect the new workflow.
We've also added a contract example to illustrate these new debugging strategies:
[`debugging-strategies`](https://github.com/use-ink/ink/tree/master/integration-tests/public/debugging-strategies).

### Removed Events
In [#7164](https://github.com/paritytech/polkadot-sdk/pull/7164), Parity removed
most smart-contract-specific events: `Called`, `ContractCodeUpdated, CodeStored`,
`CodeRemoved`, `Terminated`, `Instantiated`, `DelegateCalled`,
`StorageDepositTransferredAndHeld`, `StorageDepositTransferredAndReleased`.

The `ContractEmitted` event (for events a contract emits) is still available.

### `no_main`

Previously ink! contracts started with this line:

```rust
#![cfg_attr(not(feature = "std"), no_std)]
```

This line instructs the Rust compiler to not link the Rust 
standard library with your contract. 
If you want to know about why:
we have an entry 
["Why is Rust's standard library (stdlib) not available in ink!?"](./faq.md)
in our FAQ.

With ink! v6, an additional crate-level attribute needs to be set:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]
```

It instructs the compiler not to use the default `fn main() {}` function as the
entry point for your smart contract. This is needed because PolkaVM uses a different
entry point (the `deploy` function).

### `substrate-contracts-node` can no longer be used
The `substrate-contracts-node` is still maintained by Parity for ink! v5 and
`pallet-contracts`, but it does not support `pallet-revive`.

We've set up a new project in its place: [`ink-node`](https://github.com/use-ink/ink-node).
As before, it functions as a simple local development node.
It contains `pallet-revive` in a default configuration.
You can find binary releases of the node [here](https://github.com/use-ink/ink-node/releases).

### Solang can no longer be used
It was previously possible to interact with Solidity contracts compiled via the 
Solang compiler. As we have moved from WebAssembly/`pallet-contracts` to 
PolkaVM/RISC-V/`pallet-revive`, users who want to deploy Solidity will use
[the Parity `revive` compiler](https://github.com/paritytech/revive). It takes 
Solidity contracts and compile them into RISC-V for PolkaVM.

## Interesting New Features

### Cross-contract calling Solidity contracts
We are introducing a new attribute `abi` for the `#[ink::contract]` macro.
These are the values it takes:

```rust
#[ink::contract(abi = "all")]
#[ink::contract(abi = "sol")]
#[ink::contract(abi = "ink")]
```

The default currently is `abi = "ink"`, but we might change this before a production
release.

The implication of supporting Solidity ABI encoding is that there is a restriction on
the types you can use as constructor/message arguments or return types.
You won't be able to use Rust types for which no mapping to a Solidity type exists.
An error about a missing trait implementation for this type will be thrown.

Please note that your contract sizes will get larger if you support both the ink!
and Solidity ABI.

### Generate Solidity metadata for an ink! contract
We added a new subcommand:

```bash
$ cargo contract build ---metadata <ink|solidity>
```

Please see [#1930](https://github.com/use-ink/cargo-contract/pull/1930) for more information.

#### Abiility to build contract with features during E2E tests
We've added the possibility to set a feature to build a contract with during e2e tests:

```rust
#[ink_e2e::test(features = ["debug-info"])]
```

This allows for e.g. emitting debug events in the contract, which
you can then check for in testing.
Please see our [`debugging-strategies`](https://github.com/use-ink/ink/tree/master/integration-tests/public/debugging-strategies)
example for a complete explainer.

We've added a page [Debugging » Events](../debugging/events.md) to this documentation.
We've also added a contract example that illustrates the usage:
[`debugging-strategies`](https://github.com/use-ink/ink/tree/master/integration-tests/public/debugging-strategies).
