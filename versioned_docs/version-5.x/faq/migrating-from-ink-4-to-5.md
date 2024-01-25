---
title: Migrating from ink! 4.x to 5.0
slug: /faq/migrating-from-ink-4-to-5
---

<img src="/img/title/migration-4.x-to-5.0.svg" className="titlePic" />

We've made a couple of breaking changes from ink! 4.x to ink! 5.0.
On this page we outline how you can migrate existing clients and
contracts from 4.x to 5.0.

This release addresses the majority of issues raised in [the OpenZeppelin
security review](https://blog.openzeppelin.com/security-review-ink-cargo-contract).
In particular, we addressed the proxy selector clashing attack.

You can find the full changelog of the 5.0 release [here](https://github.com/paritytech/ink/blob/master/CHANGELOG.md).

:::caution
This migration guide only considers your code base! Not your data!

If you have an existing contract on-chain you cannot just
upgrade the code on-chain, you also have to migrate your data.

The way how ink! 4.0 stores data and reads from it (i.e. the storage
layout) changes from ink! 3.x to 4.0.
:::

## How to upgrade

* Change the dependency versions of `ink` and `ink_e2e` in your contracts `Cargo.toml` to `5`.
* Update your local `cargo-contract` installation to 4.0.
* Read through this page.

## Compatibility

The following chains are in production and support ink! 5.0:

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
        <a href="https://krest.peaq.network/">
            <img src= "/img/chains/krest.svg" className="chain" />
        </a>
    </div>
</div>

### `cargo-contract` 4.0

Together with ink! 5.0 we've released `cargo-contract` 4.0.

:::info
You have to use `cargo-contract` >= 4.0 for ink! 5.0 contracts!

You can upgrade via:

```rust
cargo install cargo-contract --version ^4
```
:::

Make sure that e.g. your CI also uses at least `cargo-contract` 4.0 with ink! v5.0.
If you have wrapper scripts around `cargo-contract`, you should
ensure that this version is enforced, otherwise users will get an error.

### Substrate

The same requirements as for ink! 4.0 hold.

* `pallet-contracts` >= `polkadot-v0.9.37`.
* `substrate-contracts-node` >= `v0.24.0`

#### How do I find out which Polkadot version a chain is running on?

You can query the `contracts::palletVersion()` via the chain state RPCs. It has to
be `>= 9` for ink! 5.0 to be compatible.

You can use e.g. the [polakdot.js app](https://polkadot.js.org/apps/) to do this:
Developer » Chain State » `contracts` » `palletVersion()` » Click on the `+` on the right.

<center>
  <img src="/img/pallet-version.png"  />
</center>

### Tooling

* `cargo-contract` >= v4.0
* Stable Rust >= 1.75
 
### Dependencies

Same as for ink! 4.0.

* `scale` >= 3
* `scale-info` >= 2.6

### Frontend Libraries

Same as for ink! 4.0: `polkadot-js/api` and `polkadot-js/api-contract` >= 9.10.2.

## Important Changes

### `scale` dependencies were moved to `ink` entrance crate

This change was done to ensure that you always use the correct scale dependency versions
with an ink! version. The relevant PR is [#1890](https://github.com/paritytech/ink/pull/1890).

We removed the requirement for contracts to have direct dependencies on `parity-scale-codec`
and `scale-info` in their `Cargo.toml`. 
You can now remove those dependencies from your contracts `Cargo.toml`:

```diff
ink = { version = "4.3", default-features = false }
-scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
-scale-info = { version = "2.6", default-features = false, features = ["derive"], optional = true }
```

Both crates have been re-exported from the `ink` umbrella crate: `ink::scale_info` and `ink::scale`.

We created a convenience macro to derive the re-exported traits `ink::scale::Encode`,
`ink::scale::Decode` and `ink::scale_info::TypeInfo`.

```rust
// Previously
#[scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(::scale_info::TypeInfo))]
pub enum Error {}


// Now
#[ink::scale_derive(Encode, Decode, TypeInfo)]
pub enum Error {}
```

The documentation of the macro can be found [here](https://docs.rs/ink/5.0.0-rc/ink/attr.scale_derive.html).

### Wildcard selectors: only one other message is allowed in the contract besides the wildcard selector

Following [our security review by OpenZeppelin](https://blog.openzeppelin.com/security-review-ink-cargo-contract),
we've tightened the usage of wildcard selectors.
With ink! 5.0 we allow only exactly one other contract message with a well-known reserved
selector to be defined. In ink! 4.x, more than one other message was allowed.

Read more in [the PR](https://github.com/paritytech/ink/pull/1708) and [IIP-2: Limit contracts with a wildcard selector to one other message](https://github.com/paritytech/ink/issues/1676).

The proposal is to restrict contracts with a wildcard selector to only have one other message
with a reserved/well known selector. This guarantees that there are no selector clashes,
either by chance or malicious intent, and that the Proxy will only handle messages intended for it.

If a contract uses a wildcard selector `#[ink(message, payable, selector = _)]` it _MAY_ define one
other message. This message _MUST_ use the reserved selector `@`.
This selector _MUST_ only be used in conjunction with a wildcard selector.

```rust
/// Handles any message with no matching selector in this proxy contract
#[ink(message, selector = _)]
pub fn fallback(&self) {
    // forward call to the "logic" contract which actually executes the call
}

#[ink::scale_derive(Decode)]
pub enum ProxyMessage {
    UpgradeContract(Hash),
}

/// One other message allowed to handle messages.
/// Fails to compile unless `@` is used as the selector.
#[ink(message, selector = @)]
pub fn handler(&self, msg: ProxyMessage) {
  match msg {
    ProxyMessage(hash) => { }
  }
}

/// An additional message. Fails to compile when uncommented.
// #[ink(message)]
// pub fn additional_message(&self, msg: ProxyMessage) {
//    match msg {
//        ProxyMessage(hash) => ...
//    }
// }
```

### Events 2.0

In prior ink! versions, events were defined inside the `#[ink::contract]` macro.
With ink! 5.0 we decouple events from the `#[ink::contract]` macro,
allowing events to be shared between contracts.
We've updated [the Events documentation page](/5.x/basics/events) accordingly.

The syntax of defining events within the main `#[ink::contract]` macro will continue to work,
no code changes in existing contracts are required to update to the new syntax.

:::caution
The topic calculation changed in general, so also for events that are declared inside the
`#[ink::contract]` macro!

This is a breaking change for any client code which uses topics to filter events.

Please see [#1827](https://github.com/paritytech/ink/pull/1827) for details.
:::

### No more unchecked arithmetic

Unchecked arithmetic operations in a contract no longer work.
Compiling a contract that contains those will fail gracefully.
You need to handle overflows using e.g. saturating or wraparound math.

This was done in [#1831](https://github.com/paritytech/ink/pull/1831).

### Fail when decoding from storage and not all bytes consumed

If a contract previously relied on successful decoding which does not consume all bytes,
then recompiling with a version of ink! which includes this change will cause that contract
to trap at runtime when attempting to decode.

A simple example would be if a storage cell contains some bytes which were in the first place
an encoded `u32`. If the contract attempts to decode those into a `u8`
this would previously have succeeded, now the contract would trap.

We introduced this change in [#1897](https://github.com/paritytech/ink/pull/1897).

### [ink_e2e] Improved `call()` API

We removed the `build_message()` function with its unhandy callback.

```rust
// Previously
let first_insert = ink_e2e::build_message::<MappingsRef>(contract_id)
    .call(|contract| contract.insert_balance(1_000));

// Now
let first_insert = ink_e2e::build_message::<MappingsRef>(contract_id)
    .call().insert_balance(1_000));
```

See [#1782](https://github.com/paritytech/ink/pull/1782) for more details.


## Interesting New Features

### End-To-End testing with a chain snapshot 

With ink! 5.0 we introduce the possibility of running your tests against the
fork (i.e. snapshot) of a live chain.

See [this page](/5.x/basics/contract-testing/chain-snapshot) in our documentation for details.

### New lints

The new lints are:
* [`no_main`](/5.x/linter/rules/no_main): enforces `no_main` for  contracts.
* [`primitive_topic`](/5.x/linter/rules/primitive_topic): no number types are allowed as event topics.
* [`storage_never_freed`](/5.x/linter/rules/storage_never_freed): what is written into storage can be removed again.
* [`strict_balance_equality`](/5.x/linter/rules/strict_balance_equality): detects usage of strict balance equality checks, a common smart contract vulnerability.
* [`non_fallible_api`](/5.x/linter/rules/non_fallible_api): detects the usage of potentially unsafe methods for which there are safer alternatives.

With `cargo-contract` 4.0 we added a couple new lints for common smart contract issues
and best practices.
You can run the linter via `cargo contract build --lint`.

Details on each lint can be found [here](/5.x/linter/overview).

### New `cargo-contract` commands

We added a bunch of helpful new commands to `cargo-contract` 4.0.
For all these commands you can also supply the `--help` cli flag to get more
info (e.g. `cargo contract storage --help`).

* `cargo contract verify`: contract verification ([#1404](https://github.com/paritytech/cargo-contract/pull/1404), [#1306](https://github.com/paritytech/cargo-contract/pull/1306))
* `cargo contract info` now outputs the language of the deployed contract, using a heuristic ([#1329](https://github.com/paritytech/cargo-contract/pull/1329))
* `cargo contract info --binary`: outputs the on-chain Wasm of the contract ([#1311](https://github.com/paritytech/cargo-contract/pull/1311/))
* `cargo contract info --all`: displays all addresses of deployed contracts on a particular chain ([#1319](https://github.com/paritytech/cargo-contract/pull/1319))
* `cargo contract storage`: displays the storage of an on-chain contract ([#1395](https://github.com/paritytech/cargo-contract/pull/1395), [#1414](https://github.com/paritytech/cargo-contract/pull/1414))

<center>
  <img src="/img/contract-storage.png"  />
</center>

### Alternative off-chain E2E testing backend support: DRink!

DRink! is a toolbox for ink! developers that allows for testing your contracts
without any running node. 

It has a number of features that are pretty great:

- deploy and call your contracts synchronously, _without any delays_ related to block production or networking.
- enhanced debugging and call tracing.
- supports _arbitrary runtime_ configurations, including custom chain extensions and runtime calls.
- full control over runtime state, including block number, timestamp, etc.

See the [DRink!](https://github.com/inkdevhub/drink) page for more details.

### New Data Structure: `StorageVec`

We've added a `Vec`-like data structure, built on top of Mapping.

This allows to retrieve elements from a vector and grow it without
having to load and push all elements.
For `Vec`, the cost of reading or writing a single element grows linearly corresponding
to the number of elements in the vector (its length). Additionally, the maximum capacity
of the whole vector is limited by the size of [ink!'s static buffer](https://github.com/paritytech/ink/blob/master/ARCHITECTURE.md#communication-with-the-pallet)
used during ABI encoding and decoding (default 16 KiB).
`StorageVec` on the other hand allows to access each element individually.

You can find verbatim documentation on `StorageVec` [here](/5.x/datastructures/storagevec),
the Rust docs can be found [here](https://docs.rs/ink/5.0.0-rc/ink/storage/struct.StorageVec.html).

### Support for multiple chain extensions

With [#1958](https://github.com/paritytech/ink/pull/1958) we added support for interacting with
multiple chain extensions from ink!.
You can now e.g. have a contract that utilizes a PSP22 chain extension together with one
for random numbers.

The syntax for chain extensions changed slightly:

```diff
-#[ink(extension = 0xfecb)]
+#[ink(function = 0xfecb)]
fn foo() {}
```

We added an example contract that illustrates this:
[`combined-extension`](https://github.com/paritytech/ink/tree/master/integration-tests/combined-extension).

### We improved the contract example illustrating upgradeable contracts via `delegate_call`

See [here](https://github.com/paritytech/ink/tree/master/integration-tests/upgradeable-contracts)
for the contract example.

### We made `set_code_hash` generic

The `self.env().set_code_hash()` method now accepts the `Hash` environment type instead 
of a concrete `[u8; 32]`.

```rust
// Previously
pub fn set_code(&mut self, code_hash: [u8; 32]) {
    ink::env::set_code_hash(&code_hash).unwrap_or_else(|err| {});
}
        
// Now 
pub fn set_code(&mut self, code_hash: Hash) {
    self.env().set_code_hash(&code_hash).unwrap_or_else(|err| {});
}
```

More details in [#1906](https://github.com/paritytech/ink/pull/1906).

### Buffer size can be customized

With [#1869](https://github.com/paritytech/ink/pull/1869) we added a possibility 
of setting a custom static buffer size for ink! to use.

ink! uses a static buffer for interacting with pallet-contracts, i.e. to move data
between `pallet-contracts` and a smart contract. The advantage of a static buffer
is that no gas-expensive heap allocations are necessary, all allocations are done
using simple pointer arithmetic.

The default static buffer size is 16 kB, which is enough for on-chain smart
contracts. However, the [Phala Network](https://phala.network/) parachain on Polkadot
allows the deployment of ink! contracts off-chain. Hence, for their chain certain high
computation contracts might require a larger buffer size.

### Custom signature topics

In [#2031](https://github.com/paritytech/ink/pull/2031) we introduced an
optional attribute `signature_topic` to the `#[ink::event]` and `#[ink(event)]` macros.
It can be used to specify the signature topic for a specific event manually, instead of the
automatic topic calculation.

### Stabilized `call_runtime`

We stabilized `call_runtime` in [#1749](https://github.com/paritytech/ink/pull/1749).
It can be used to call a runtime dispatchable from an ink! contract.

You can find a contract example and a comparison with chain extensions
[here](https://github.com/paritytech/ink/tree/master/integration-tests/call-runtime).

We've added an example of how to end-to-end test
`call_runtime` [here](https://github.com/paritytech/ink/tree/master/integration-tests/e2e-call-runtime).
