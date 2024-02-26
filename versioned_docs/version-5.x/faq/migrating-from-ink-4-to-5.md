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
This migration guide only considers your code base! Not your storage data!

If you have an existing contract on-chain you might not be able to just
upgrade the code on-chain, you possibly also have to migrate your storage data.

The relevant change that you have to take into consideration is
[#1897](https://github.com/paritytech/ink/pull/1897).
A data migration may be required when your contract reads data from storage and truncates
the data when decoding it.
We've described this in more detail below, in the section
["Fail when decoding from storage and not all bytes consumed"](#fail-when-decoding-from-storage-and-not-all-bytes-consumed).
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

<img src="/img/pallet-version.png"  />

### Tooling & Libraries

* Stable Rust >= 1.75
* `cargo-contract` >= v4.0
* `polkadot-js/api` and `polkadot-js/api-contract` >= TODO
* `use-inkathon` >= TODO
* ink!athon >= TODO

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
with a reserved/well-known selector. This guarantees that there are no selector clashes,
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

#### Custom signature topics

In [#2031](https://github.com/paritytech/ink/pull/2031) we introduced an
optional attribute `signature_topic` to the `#[ink::event]` and `#[ink(event)]` macros.
It can be used to specify the signature topic for a specific event manually, instead of the
automatic topic calculation.

### Metadata storage keys encoding change

Storage keys used to access storage data are SCALE encoded. Previously,
the contract metadata used big endian encoding to represent storage keys (`root_key` and `key` fields).
With the ink! 5.0 release, these encoding formats have been aligned,
and SCALE encoding (little endian) is now used for the metadata storage keys.
This change is breaking, and client tools that use the storage keys from contract metadata
will need to adapt accordingly.

Please see: [#2048](https://github.com/paritytech/ink/pull/2048) for details.

### No more unchecked arithmetic

Unchecked arithmetic operations in a contract are no longer supported for arithmetic
safety reasons. Compiling a contract that contains those will fail gracefully.

If you haven't already done, you now need to handle overflows that could occur.
Rust supports different possibilities of doing so (saturating, "wrap around",
and unchecked arithmetic operations) .
See [this](https://doc.rust-lang.org/book/ch03-02-data-types.html#scalar-types) section
of the Rust Programming Language for a thorough explanation on how to do safe arithmetic
operations in Rust.

This change was introduced in [#1831](https://github.com/paritytech/ink/pull/1831).

### Fail when decoding from storage and not all bytes consumed

If a contract previously relied on successful decoding which does not consume all bytes,
then recompiling with a version of ink! which includes this change will cause that contract
to trap at runtime when attempting to decode.

A simple example would be if a storage cell contains some bytes which were in the first place
an encoded `u32`. If the contract attempts to decode those into a `u8`
this would previously have succeeded, now the contract would trap.

Here's a code example of behavior that previously worked for ink! 4.x, but
would error now:

```rust
let key = 0u32;
let value = [0x42; 32];
ink::env::set_contract_storage(&key, &value);

// Only attempt to read the first byte (the `u8`) of the storage value data
let _loaded_value: Option<u8> = ink::env::get_contract_storage(&key)
    .map_err(|e| format!("get_contract_storage failed: {:?}", e))?;
```

We introduced this change in [#1897](https://github.com/paritytech/ink/pull/1897).

### [ink_e2e] API Changes

#### Builder API

In [#1917](https://github.com/paritytech/ink/pull/1917) we reworked the E2E API with
a builder API. 
`instantiate`, `call` and `upload` will now return a builder instance. You can
specify optional arguments with builder methods, and submit the call for on-chain
execution with the `.submit()` method, or dry-run it with `dry_run()`.

```rust
let contract = client
    .instantiate("flipper", &ink_e2e::alice(), &mut constructor)
    .submit()
    .await
    .expect("instantiate failed");
let mut call_builder = contract.call_builder::<Flipper>();

let get = call_builder.get();
let get_res = client.call(&ink_e2e::bob(), &get).dry_run().await;
assert!(matches!(get_res.return_value(), false));
```

#### Extra gas margin

As part of [#1917](https://github.com/paritytech/ink/pull/1917) we added the possibility
to specify a gas margin (in percentage) as part of the on-chain call.

There are cases when gas estimates may not necessarily be accurate enough due to the complexity
of the smart contract logic that adds additional overhead and gas consumption.
Therefore, it is helpful to allow to specify an extra portion of the gas to be added to the 
limit (i.e. 5%, 10%).

The method `.extra_gas_portion(margin: u64)` method is part of the builder API:

* [`ink_e2e::InstantiateBuilder::extra_gas_portion`](https://docs.rs/ink_e2e/5.0.0-rc/ink_e2e/struct.InstantiateBuilder.html#method.extra_gas_portion)
* [`ink_e2e::CallBuilder::extra_gas_portion`](https://docs.rs/ink_e2e/5.0.0-rc/ink_e2e/struct.CallBuilder.html#method.extra_gas_portion)

#### Improved `call()` API

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

#### Removed `additional_contracts` parameter 

`additional_contracts` parameter which is part of `#[ink_e2e:test]` has been removed in [#2098](https://github.com/paritytech/ink/pull/2098).
This information is now implied from the contract's manifest. 
Simply, add the other contract as dependency with the `ink-as-a-dependency` feature enabled.
The test will detect the contract and build it as part of the test.

### New Data Structure: `StorageVec`

We've added a `Vec`-like data structure, built on top of Mapping.

This allows to retrieve elements from a vector and grow it without
having to load and push all elements.
For `Vec`, the cost of reading or writing a single element grows linearly corresponding
to the number of elements in the vector (its length). Additionally, the maximum capacity
of the whole vector is limited by the size of [ink!'s static buffer](https://github.com/paritytech/ink/blob/master/ARCHITECTURE.md#communication-with-the-pallet)
used during ABI encoding and decoding (default 16 KiB).
`StorageVec` on the other hand allows to access each element individually.

With a `Vec` it's possible to e.g. introduce a security issue in your contract
where an attacker can fill the `Vec`, making it very costly for other users to
access it or write to it.

You can find verbatim documentation on `StorageVec` [here](/5.x/datastructures/storagevec).
The page explains when to use `StorageVec` and when not.
The Rust docs can be found [here](https://docs.rs/ink/5.0.0-rc/ink/storage/struct.StorageVec.html).

### Fallible methods for `Lazy`, `Mapping`, `StorageVec`

In [#1910](https://github.com/paritytech/ink/pull/1910) we added `try_*` methods for
reading and writing `Lazy` and `Mapping` values to and from storage.
The try methods correspond to `Mapping::{insert, get, take}`, `Lazy::{set, get}`.
For `StorageVec::{peek, get, set, pop, push}` we added `try_*` methods in
[#1995](https://github.com/paritytech/ink/pull/1995).

Please see the individual Rust docs for these new methods:

* [`StorageVec`](https://docs.rs/ink/5.0.0-rc/ink/storage/struct.StorageVec.html)
* [`Lazy`](https://docs.rs/ink/5.0.0-rc/ink/storage/struct.Lazy.html)
* [`Mapping`](https://docs.rs/ink/5.0.0-rc/ink/storage/struct.Mapping.html). For `Mapping`, the encoded size of the key is also accounted for.

You should use the `try_*` methods for dynamically sized values, unless you made sure
otherwise they will fit into the static buffer. The [static buffer in ink!](https://github.com/paritytech/ink/blob/master/ARCHITECTURE.md#communication-with-the-pallet)
is 16 kB by default.

We added a lint to `cargo-contract` 4.0 that will detect
potentially unsafe uses of methods for which there are safer alternatives:
[`non_fallible_api`](https://use.ink/5.x/linter/rules/non_fallible_api).

### Chain Extension API changed + Support for multiple chain extensions

With [#1958](https://github.com/paritytech/ink/pull/1958) we added support for interacting with
multiple chain extensions from ink!. This is a breaking change.

You can now e.g. have a contract that utilizes a PSP22 chain extension together with one
for random numbers.

The syntax for chain extension functions changed slightly:

```diff
-#[ink(extension = 0xfecb)]
+#[ink(function = 0xfecb)]
fn foo() {}
```

The argument type changed from `u32` to `u16`:

```diff
-/// `#[ink(extension = N: u32)]`
-Extension,
+/// `#[ink(function = N: u16)]`
+Function,
```

The top level macro `#[ink::chain_extension]` now _requires_ an `(extension = N: u16)` argument to support multiple chain extensions.
If you are using only one extension, the ID can be any `u16` number, 
otherwise please consult the [`#[ink::chain_extension]` macro documentation](https://use.ink/5.x/macros-attributes/chain-extension)
```diff
-#[ink::chain_extension]
+#[ink::chain_extension(extension = 1)]
```

:::Note
If the chain extension was not used in a tuple in the runtime configuration, 
`extension = N: u16` can take any `u16` number.
:::

A migration in most cases should just be to rename `#[ink(extension = …)]` to 
`#[ink(function = …)]`, and specifying `extension` argument in top level macro.

We added an example contract that illustrates the usage of multiple chain extensions
in one contract:
[`combined-extension`](https://github.com/paritytech/ink/tree/master/integration-tests/combined-extension).


### Metadata Changes

#### Events 2.0

See [#1827](https://github.com/paritytech/ink/pull/1827) for the full details.
Two fields werere added to the objects in the `events` array:
`module_path` and `signature_topic`.

Previously the order of the events in the `events` array was significant (i.e. the first
one had an implied index of `0`), and this index could be used to determine which event
to decode.
Now that is replaced by the `signature_topic`, and the order of the events in the metadata
no longer has any significance.

See the section "[Events 2.0](#events-20)" on this page for more info.

ink! 4.0:
```json
   "events": [
      {
        "args": [ ... ],
        "docs": [ ... ],
        "label": "Transfer"
      },
      ...
  ]
```

ink! 5.0:
```diff
    "events": [
      {
        "args": [ ... ],
        "docs": [ ... ],
        "label": "...",
+       "module_path": "erc20::erc20",
+       "signature_topic": "0xb5b61a3e6a21a16be4f044b517c28ac692492f73c5bfd3f60178ad98c767f4cb"
      },
      ...
  ]
```

#### New field: `staticBufferSize`

With [#1880](https://github.com/paritytech/ink/pull/1880) we added a `"staticBufferSize"` field to
the metadata file. The unit is bytes.

See the section "[Buffer size can be customized](#buffer-size-can-be-customized)" on this page for
more info.

Example:
```diff
      "maxEventTopics": 4,
+     "staticBufferSize": 16384,
      "timestamp": { ... }
```

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

<img src="/img/contract-storage.png"  />

### Alternative off-chain E2E testing backend support: DRink!

DRink! is a toolbox for ink! developers that allows for testing your contracts
without any running node. 

It has a number of features that are pretty great:

- deploy and call your contracts synchronously, _without any delays_ related to block production or networking.
- enhanced debugging and call tracing.
- supports _arbitrary runtime_ configurations, including custom chain extensions and runtime calls.
- full control over runtime state, including block number, timestamp, etc.

See the [DRink!](https://github.com/inkdevhub/drink) page for more details.

### Contract Verification

We added a bunch of helpful documentation and `cargo-contract` commands for
contract verification. [Read more here](/5.x/basics/verification/contract-verification).

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

### Stabilized `call_runtime`

We stabilized `call_runtime` in [#1749](https://github.com/paritytech/ink/pull/1749).
It can be used to call a runtime dispatchable from an ink! contract.

You can find a contract example and a comparison with chain extensions
[here](https://github.com/paritytech/ink/tree/master/integration-tests/call-runtime).
We've added an example of how to end-to-end test
`call_runtime` [here](https://github.com/paritytech/ink/tree/master/integration-tests/e2e-call-runtime).


### `call_v2`

There is a new host function `call_v2` which allows passing both `Weight` parts: 
`ref_time_limit` and `proof_time_limit` and the `storage_deposit_limit`. 
The legacy call function only provides the single `gas_limit` parameter, 
which is used as the value for `ref_time_limit`.

These parameters can be set on a call builder instance:
```rust
call_builder
  .ref_time_limit(ref_time_limit)
  .proof_time_limit(proof_time_limit)
  .storage_deposit_limit(storage_deposit_limit)
  .invoke();
```

:::Note
These changes depend on the [`60310de`](https://github.com/paritytech/polkadot-sdk/commit/60310de7d6402b6e44624aaa9b5db2dd848545e7)
commit of `pallet-contracts`.
:::

If you are developing a contract for an older version of `pallet-contracts`
that uses the old `Weight` API, you can still use the legacy call builder by first calling `call_v1`:
```rust
call_builder
  .call_v1()
  .gas_limit(ref_time_limit)
  .invoke();
```

Please note that that if you using trait definition for cross-contract call,
direct calls from `contract_ref!` macro are only supported with the `call_v2`.
Otherwise, you need to get the `CallBuilder` from the structure 
and build the call manually.

```rust
type Erc20Wrapper = contract_ref!(Erc20);
let erc20: Erc20Wrapper = new_erc20.into();
let erc20_builder = self.erc20.call();
erc20_builder.total_supply().call_v1().invoke()
```