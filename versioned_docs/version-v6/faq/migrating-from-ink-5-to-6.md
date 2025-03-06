---
title: Migrating from ink! 5.x to 6.0
slug: /faq/migrating-from-ink-5-to-6
---

![Migration 5.x To 6.0 Title Picture](/img/title/migration-5.x-to-6.0.svg)

We've made a couple of breaking changes from ink! 5.x to ink! 6.0.
On this page we outline how you can migrate existing dApps and
contracts.

You can find the full changelog of the 6.0 release [here](https://github.com/use-ink/ink/blob/master/CHANGELOG.md#version-600).

:::caution
This migration guide only considers your code base! Not your storage data!

If you have an existing contract on-chain you might not be able to just
upgrade the code on-chain, you possibly also have to migrate your storage data.
:::

## How to upgrade

* Change the dependency versions of `ink` and `ink_e2e` in your contracts `Cargo.toml` to `6`.
* Update your local `cargo-contract` installation to 6.0.
* Read through this page.

## Compatibility

* `>= polkadot-v1.9.0`
* `pallet-contracts >= polkadot-v0.9.37`
* `substrate-contracts-node >= v0.24.0`

### How do I find out if a chain is compatible with ink! 5?

You can query `contracts::palletVersion()` via the chain state RPCs. It has to
be `>= 9` for ink! 5.0 to be compatible, if you don't use any of the four functions
mentioned above.
For the above mentioned four functions please see the respective sections on this page,
there we explain how to find out if a chain supports them there.

You can use the [polakdot.js app](https://polkadot.js.org/apps/) to connect to the chain and check if
`reviveApi` is available under Developer » Runtime calls.

<img src="/img/pallet-revive-available.png"  />

The following chains are in production and support ink! 6.0.

<div className="row">
    <div className="col text--center">
        <a href="https://onpop.io">
            <img src= "/img/chains/polkadot-pop-network.svg" className="chain" />
        </a>
    </div>
    <div className="col text--center">
        <a href="https://kusama.network/">
            <img src= "/img/chains/kusama-assethub.svg" className="chain" />
        </a>
    </div>
</div>

### `cargo-contract` 6.0

Together with ink! 6.0 we've released `cargo-contract` 6.0.
You have to use `cargo-contract` >= 6.0 for ink! 6.0 contracts!

You can upgrade via:

```rust
cargo install cargo-contract --version ^6
```

### Tooling & Libraries

* Stable Rust >= 1.81
* `cargo-contract` >= v6.0
* `polkadot-js/api` and `polkadot-js/api-contract` >= 10.12.1
* [`use-inkathon`](https://github.com/scio-labs/use-inkathon): 10.12.1
* [ink!athon](https://inkathon.xyz/) >= 0.7.0

## Important Changes

We had to introduce a number of changes that require you to manually upgrade
your contract from 5.x to 6.0. The steps to do this are explained in this section.

### Restrict which `cfg` attributes can be used

This change was done as a recommendation from the ink! 5.x audit.
In a nutshell it prevents developers from hiding functionality in a contract,
that would not be visible in the metadata (so e.g. on a block explorer).
The relevant PR is [#2313](https://github.com/use-ink/ink/pull/2313).

From ink! 6.0 on only these attributes are allowed in `#[cfg(…)]`:
    - `test`
    - `feature` (without `std`)
    - `any`
    - `not`
    - `all`

## Interesting New Features


