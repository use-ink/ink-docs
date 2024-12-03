---
title: Migrating from ink! 5.x to 6.0
slug: /faq/migrating-from-ink-5-to-6
---

<img src="/img/title/migration-5.x-to-6.0.svg" className="titlePic" />

We've made a couple of breaking changes from ink! 5.x to ink! 6.0.
On this page we outline how you can migrate existing dApps and
contracts from 4.x to 5.0.

This release addresses the majority of issues raised in [the OpenZeppelin
security review](https://blog.openzeppelin.com/security-review-ink-cargo-contract).
In particular, we addressed the proxy selector clashing attack.

You can find the full changelog of the 5.0 release [here](https://github.com/use-ink/ink/blob/master/CHANGELOG.md#version-500).

:::caution
This migration guide only considers your code base! Not your storage data!

If you have an existing contract on-chain you might not be able to just
upgrade the code on-chain, you possibly also have to migrate your storage data.

The relevant change that you have to take into consideration is
[#1897](https://github.com/use-ink/ink/pull/1897).
A data migration may be required when your contract reads data from storage and truncates
the data when decoding it.
We've described this in more detail below, in the section
["Fail when decoding from storage and not all bytes consumed"](#fail-when-decoding-from-storage-and-not-all-bytes-consumed).
:::

## How to upgrade

* Change the dependency versions of `ink` and `ink_e2e` in your contracts `Cargo.toml` to `6`.
* Update your local `cargo-contract` installation to 6.0.
* Read through this page.

## Compatibility

### Substrate/Polkadot SDK

There are four new functions that are only compatible from particular releases upwards:
* v2 of `call` and `instantiate`: `>= polkadot-v1.8.0` and `substrate-contracts-node >= v0.39.0`
([explained here](#call-and-instantiate-v2)).
* `lock_delegate_dependency` and `unlock_delegate_dependency`:
`>= polkadot-v1.9.0` and `substrate-contracts-node >= v0.40.0` ([explained here](#upgradeable-contracts-delegate_dependency)).

These four functions are all opt-in! None of them are required to use ink! 5.0, they are only
required if you want to access the particular functionality they provide.
Please see the linked explainers for more details about them.

If you are not using any of those four functions, the same requirements as for ink! 4.0 holds:

* `pallet-contracts` >= `polkadot-v0.9.37`.
* `substrate-contracts-node` >= `v0.24.0`

### How do I find out if a chain is compatible with ink! 5?

You can query `contracts::palletVersion()` via the chain state RPCs. It has to
be `>= 9` for ink! 5.0 to be compatible, if you don't use any of the four functions
mentioned above.
For the above mentioned four functions please see the respective sections on this page,
there we explain how to find out if a chain supports them there.

You can use the [polakdot.js app](https://polkadot.js.org/apps/) to do this:
Developer » Chain State » `contracts` » `palletVersion()` » Click on the `+` on the right.

<img src="/img/pallet-version.png"  />

The following chains are in production and support ink! 5.0, if you are not using any of the
four functions mentioned above:

<div className="row">
    <div className="col text--center">
        <a href="https://alephzero.org">
            <img src= "/img/chains/aleph-zero.svg" className="chain" />
        </a>
    </div>
    <div className="col text--center">
        <a href="https://astar.network">
            <img src= "/img/chains/astar.svg" className="chain" />
        </a>
    </div>
    <div className="col text--center">
        <a href="https://shiden.astar.network">
            <img src= "/img/chains/shiden.svg" className="chain" />
        </a>
    </div>
</div>

<div className="row">
    <div className="col text--center">
        <a href="http://phala.network">
            <img src= "/img/chains/phala.svg" className="chain" />
        </a>
    </div>
    <div className="col text--center">
        <a href="https://pendulumchain.org">
            <img src= "/img/chains/pendulum.svg" className="chain" />
        </a>
    </div>
    <div className="col text--center">
        <a href="https://pendulumchain.org/amplitude">
            <img src= "/img/chains/amplitude.svg" className="chain" />
        </a>
    </div>
</div>

<div className="row">
    <div className="col text--center">
        <a href="https://www.ternoa.network/">
            <img src= "/img/chains/ternoa.svg" className="chain" />
        </a>
    </div>
    <div className="col text--center">
        <a href="https://krest.peaq.network/">
            <img src= "/img/chains/krest.svg" className="chain" />
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

* Stable Rust >= 1.75
* `cargo-contract` >= v4.0
* `polkadot-js/api` and `polkadot-js/api-contract` >= 10.12.1
* [`use-inkathon`](https://github.com/scio-labs/use-inkathon): upgrade the `polkadot-js/api` and `polkadot-js/api-contract` dependencies in your project to >= 10.12.1
* [ink!athon](https://inkathon.xyz/) >= 0.7.0
* [`typechain-polkadot`](https://github.com/Brushfam/typechain-polkadot) >= 1.2.0

## Important Changes

We had to introduce a number of changes that require you to manually upgrade
your contract from 4.x to 6.0. The steps to do this are explained in this section.

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


