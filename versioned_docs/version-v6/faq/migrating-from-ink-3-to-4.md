---
title: "Migration: ink! v3 → v4"
slug: /faq/migrating-from-ink-3-to-4
---

![Migration 3.x To 4.0 Title Picture](/img/title/migration-3.x-to-4.0.svg)

We've made a couple of breaking changes from ink! 3.x to ink! 4.0.
On this page we outline how you can migrate existing clients and
contracts from 3.x to 4.0.

:::caution
This migration guide is only for your code base!

If you have an existing contract on-chain you cannot just
upgrade the code on-chain ‒ you also have to migrate your data,
since the way ink! 4.0 stores data and reads it (i.e. the storage
layout) changes from ink! 3.x to 4.0.
:::

## Compatibility

ink! 4.0 is compatible with:

- Stable Rust >= 1.63.0
- `scale` >=3
- `scale-info` >= 2.3
- `pallet-contracts` >= `polkadot-v0.9.37`
- `substrate-contracts-node` >= `v0.24.0`
- `polkadot-js/api` and `polkadot-js/api-contract` >= 9.10.2

## `cargo-contract` 2.0

Together with ink! 4.0 we've released `cargo-contract` 2.0.
You have to use this latest version of `cargo-contract` for ink! 4.0
contracts.
You can upgrade via:

```rust
cargo install cargo-contract --force --version 2
```

Make sure that e.g. your CI also uses `cargo-contract` 2 with ink! 4.
If you have wrapper scripts around `cargo-contract` you should
ensure that this version is enforced, otherwise users will get an error.

:::note
`cargo-contract` no longer requires `binaryen` or `wasm-opt` as an
external dependency. We required those because of `wasm-opt` tool
(which is part of `binaryen`). Fortunately we were able to find a way of
installing `wasm-opt` now as part of the `cargo-contract` installation
process.
:::

## Rust `stable` instead of `nightly`

ink! 4.0 and `cargo-contract` use `stable` Rust now.
This means no more `cargo +nightly contract` is required, you
can just use a stable Rust toolchain now (>= Rust 1.63).

## New entrance `ink` crate

The `ink_lang` crate has been replaced in [#1223](https://github.com/use-ink/ink/pull/1223)
by a new top level `ink` crate. All existing sub-crates are reexported and should be used via
the new `ink` crate, so e.g. `ink::env` instead of `ink_env`. Contract authors should now import
the top level `ink` crate instead of the individual crates.

### Migration

- In `Cargo.toml` Replace all individual `ink_*` crate dependencies with the `ink` crate.
- In the contract source:
  - Remove the commonly used `use ink_lang as ink` idiom.
  - Replace all usages of individual crates with reexports, e.g. `ink_env` ➜ `ink::env`.

## Storage API + Layout

With [#1331](https://github.com/use-ink/ink/pull/1331) the way `ink!` reads and writes
to a contract's storage changed. Storage keys are generated at compile-time, and user facing
abstractions which determine how contract data is laid out in storage are different now.

### Migration

- Initialize `Mapping` fields with `Mapping::default()` instead of `ink_lang::utils::initialize_contract` in
  constructors. See [`erc20`](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs) and other examples which use a `Mapping`.
- `SpreadAllocate`, `SpreadLayout`, `PackedLayout`, `PackedAllocate` have been removed.

## Removal of `wee-alloc` support

ink! uses a bump allocator by default, additionally we supported another allocator
(`wee-alloc`) through a feature flag. `wee-alloc` is no longer maintained and
we removed support for it in [#1403](https://github.com/use-ink/ink/pull/1403).

## Removal of `eth_compatibility` crate

As part of [#1233](https://github.com/use-ink/ink/pull/1233)
the `eth_compatibility` crate was removed. The `ecdsa_to_eth_address()`
function from it can now be found [in the `ink_env` crate](https://docs.rs/ink_env/4.0.0/ink_env/fn.ecdsa_to_eth_address.html).

```rust
ink_env::ecdsa_to_eth_address(&pub_key, &mut output);
```

## `ink_storage::Mapping`

The function signature of `Mapping::insert(key, val)` changed to
`Mapping::insert(key, val) -> Option<u32>`.
The return value is the size of the pre-existing value at the specified key if any (in bytes).

Two new useful functions were added:

- [`Mapping::contains(key)`](https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html#method.contains)
  in [#1224](https://github.com/use-ink/ink/pull/1224).
- [`Mapping::take()`](https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html#method.take)
  to get a value while removing it from storage in [#1461](https://github.com/use-ink/ink/pull/1461).

In case you were working around those two functions you can now
use them directly; they are more gas-efficient than e.g. executing
a `get(key).is_none()` instead of `contains(key)`.

## Storage functions in `ink_env`

As part of [#1224](https://github.com/use-ink/ink/pull/1224) the return type
of [`ink_env::set_contract_storage()`](https://docs.rs/ink_env/4.0.0/ink_env/fn.set_contract_storage.html)
was changed to return an `Option<u32>` instead of `()`.

A new function [`ink_env::take_contract_storage`](https://docs.rs/ink_env/4.0.0/ink_env/fn.take_contract_storage.html)
was introduced.

## Removal of `ink_env::random` function

We had to remove the [`ink_env::random`](https://docs.rs/ink_env/3.3.1/ink_env/fn.random.html)
function (in [#1442](https://github.com/use-ink/ink/pull/1442)).
This function allowed contract developers getting random entropy.
There is unfortunately no way how this can be done safely enough
with built-in Substrate primitives on-chain currently. We're
following the recommendation of our auditors to remove it.

The alternative right now is to provide random entropy off-chain to
the contract, to use a random entropy oracle, or to have a chain-extension
that does this, in case the chain has a possibility to do so.

We hope to bring this function back in a future release of ink!, the
best hope right now is that it could come back with
[Sassafras](https://wiki.polkadot.network/docs/learn-consensus#badass-babe-sassafras),
a block production protocol for future versions of Polkadot.

If you're interested in more information on this check out
[the Substrate PR](https://github.com/paritytech/substrate/pull/13204) which
deprecated the random interface of `pallet-contracts`.

## Constructors can now return `Result<Self, MyContractError>`

With [#1446](https://github.com/use-ink/ink/pull/1446) we introduced
the possibility for constructors to return either `Self` (as usual) or
`Result<Self, MyContractError>`.

This enables contract developers to bubble up encoded error objects to
clients/frontends about a failure. In ink! 3.x it was only possible to
panic in the constructor in case an error occurred, resulting in loss
of this information.

## Chain extension's `returns_result` removed

The `returns_result` flag has been removed from the `#[ink(extension = …)]` attribute in
[#1569](https://github.com/use-ink/ink/pull/1569).
We now infer this information at compile time. If `handle_status` is set to `true`,
the return type will still be wrapped into `Result` as before.

## Contract Metadata (ABI)

The most detailed way to grasp what changed is to look at
[this PR](https://github.com/use-ink/ink-docs/pull/138), which
updated the metadata page in our documentation.

### Add support for language level errors (`LangError`)

Under the hood, ink! now generates code that results in each message
and constructor returning a `Result<Message::Output, LangError>` (or
for constructors `Result<Constructor::Output, LangError>`).
This happens even if the message/constructor doesn't have a return type,
we default to the unit type `()` in that case.

A [`LangError`](https://docs.rs/ink/4.0.0/ink/enum.LangError.html)
is a type of error which doesn't originate from the contract itself,
nor from the underlying execution environment (so the Contracts pallet
in this case).

An example of where this would arise is if a caller tries to use a non-existent message
selector for a contract. Previously, the contract would trap and not allow the caller to
do any sort of error handling if it encountered a non-existent selector.

This change doesn't affect how you write a contract! It affects clients and
frontends though, since it breaks the API in two ways:

first, all contract messages now have a `Result` return type, and second a new field,
`lang_error`, will be introduced as part of the contract spec. The second change allows
other languages (such as Solang) to use an equivalent `LangError`.

<details>
  <summary>
    Click here for a snippet of the new metadata for the Flipper contract.
  </summary>
<p>

```json
"messages": [
  {
    "args": [],
    "docs": [
      " Flips the current value of the Flipper's boolean."
    ],
    "label": "flip",
    "mutates": true,
    "payable": false,
    "returnType": {
      "displayName": [
        "ink",
        "MessageResult"
      ],
      "type": 1
    },
    "selector": "0x633aa551"
  }],
"lang_error": {
  "displayName": [
    "ink",
    "LangError"
  ],
  "type": 3
},
{
  "id": 3,
  "type": {
    "def": {
      "variant": {
        "variants": [
          {
            "index": 1,
            "name": "CouldNotReadInput"
          }
        ]
      }
    },
    "path": [
      "ink_primitives",
      "LangError"
    ]
  }
}

```

</p>
</details>

### Version field

As part of [#1313](https://github.com/use-ink/ink/pull/1313) the ink! ABI was
changed to have a proper version field as part of the ink! metadata object.
This enables querying the ABI version in a less-ambiguous way.

Before:

```json
"source": {...},
"contract": {...},
"V3": {
  "spec": {...},
  "storage": {...},
  "types": {...}
}

```

After:

```json
{
  "source": {...},
  "contract": {...},
  "spec": {...},
  "storage": {...},
  "types": [...],
  "version": "4"
}
```

### The Storage Layout (`storage`)

The storage layout under the `storage` key changed for v4. If you have an application
that is using it consider reading the updated documentation:

- [General storage documentation](../../../versioned_docs/version-v4/datastructures/overview.md)
- [Storage metadata format](../../../versioned_docs/version-v4/datastructures/storage-in-metadata.md)

## Removal of `AccountId` `Default` implementation

In [#1255](https://github.com/use-ink/ink/pull/1255) we removed the `Default` trait
implementation on `AccountId`s.

The `Default` implementation of `AccountId` returned the zero-address, which is
problematic since the
[zero-address in the `sr25519` and `ed25519` curves has a known private key](https://substrate.stackexchange.com/questions/982/why-does-the-all-0-public-key-have-a-known-private-key-in-sr25519-and-ed25519).

Developers commonly reach for defaults, and the zero-address in particular, making it an
unsafe trait implementation to have given the consequences.

Imagine a developer sending tokens to the zero-address to be burned, only to find that
they've been stolen because the private key is known.

If you were previously using `AccountId`'s `Default` implementation in your code you
have a couple of different options for how to move forward. These will depend on what
exactly you were using the zero-address for.

If you were using it as a burn address:

- You can pick another address to use, assuming that you've actually picked a random
  address
- Consider a solution that involves reducing total issuance, instead of transferring
  tokens to a random address

If you were using it as a privileged account:

- Change the account
- Add checks to ensure that calls coming from the zero-address are rejected

You should also now consider dealing with `AccountId`'s as `Option<AccountId>`'s. This is
more idiomatic Rust, and also conveys the meaning of a "null" or "empty" address much
better.

## Updates to the `CallBuilder` and `CreateBuilder` APIs

There's been several changes to the
[`CallBuilder`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html)
and
[`CreateBuilder`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CreateBuilder.html)
APIs.

In [#1604](https://github.com/use-ink/ink/pull/1604) we renamed the
`CallBuilder::fire()` method to
[`CallBuilder::invoke()`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.invoke-2).
This brings more consistency across our APIs which were already using the `invoke`
terminology.

In [#1512](https://github.com/use-ink/ink/pull/1512) and [#1525](https://github.com/use-ink/ink/pull/1525)
we added support for handing
`LangError`s from the `CreateBuilder` and `CallBuilder`, respectively.

If you want to handle errors from either `Builder` you can use the new
[`CreateBuilder::try_instantiate()`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CreateBuilder.html#method.try_instantiate)
or
[`CallBuilder::try_invoke()`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.try_invoke-1)
methods.

Because of the addition of those methods we also removed any error handling from the
non-`try_` methods in [#1602](https://github.com/use-ink/ink/pull/1602). This means
that the `CallBuilder::invoke()` and `CreateBuilder::instantiate()` methods return values
directly, and panic when they encounter an error.

Lastly, in [#1636](https://github.com/use-ink/ink/pull/1636) we added two methods to
the `CallBuilder` to streamline
[`Call`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.Call.html)
and
[`DelegateCall`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.DelegateCall.html)
workflows:

- For `Call` you can use
  [`CallBuilder::call()`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.call) (this replaces `CallBuilder::callee()`)
- For `DelegateCall` you can use [`CallBuilder::delegate()`](https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.delegate)

## Removal of `[lib.crate-type]` and `[lib.name]` from contract manifest

Earlier versions of `cargo-contract` required that these two fields were specified in the
contract manifest explicitly, as follows:

```toml
[lib]
name = "flipper"
path = "lib.rs"
crate-type = [
    # Used for normal contract Wasm blobs.
    "cdylib",
    # Use to generate ABI
    "rlib",
]
```

However, with [cargo-contract#929](https://github.com/use-ink/cargo-contract/pull/929) we changed this behavior to:

- Use the contract name by default, removing the need for the `name` field
- Compile contracts as `rlib`s by default, and automatically changing to `cdylib` as
  needed

This means that your new manifest should look like:

```toml
[lib]
path = "lib.rs"
```
