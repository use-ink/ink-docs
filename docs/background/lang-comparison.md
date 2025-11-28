---
title: Low-level Rust contracts vs. ink!
hide_title: true
slug: /background/pallet-revive-low-level-rust-contracts
---

<head>
    <meta name="description" content="Comparison of Rust contracts for `pallet-revive`: low-level vs. ink!." />
    <meta name="keywords" content="Rust, ink!, Polkadot SDK, pallet-revive, Smart Contracts" />
    <meta property="og:title" content="Low-level Rust contracts vs. ink!" />
    <meta property="og:description" content="Comparison of Rust contracts for `pallet-revive`: low-level vs. ink!." />
</head>

![Polkadot SDK Precompiles Title Picture](/img/title/rust.svg)

# Rust contracts on `pallet-revive`

`pallet-revive` supports contracts written in Rust and Solidity. 
Solidity is supported by compiling the source code with Parity's [`revive`](https://github.com/paritytech/revive) compiler.
Rust is supported by providing a low-level FFI interface and compiling for [PolkaVM](https://github.com/paritytech/polkavm). 
You can view the low-level interface [here](https://docs.rs/pallet-revive-uapi/latest/pallet_revive_uapi/).
See [the `HostFn` trait](https://docs.rs/pallet-revive-uapi/latest/pallet_revive_uapi/trait.HostFn.html) for 
functions exposed to smart contracts.

## Low-level Rust interface

`pallet-revive`'s low-level Rust interface can be used to write contracts, those
will be very low-level though with developers having to take care
of everything by themselves. In this section we'll explain what "everything" implies.

We believe a fitting comparison is the analogy of writing a web application in something
like Ruby on Rails vs  C, crafting your own HTTP responses
and doing byte-level manipulation.  

There are certainly niches where "going low" makes sense, but due to the complexity,
the overwhelming majority of developers will neither want nor need to use it.
It's certainly not a way that can be recommended to newcomers
or as a general approach.
For Polkadot SDK natives: this would be similar to developing a parachain
without FRAME.

Nevertheless, it's interesting and examples of such low-level contracts
can be found in [the `pallet-revive` fixtures directory](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive/fixtures/contracts).
Another cool example is the [`nightmarket`](https://github.com/lovelaced/nightmarket/tree/master)
project, written entirely in low-level Rust for `pallet-revive`.

## ink! vs. low-level Rust
ink! is a toolkit to make the development of Rust smart contracts for `pallet-revive`
easy and efficient.
To highlight some key abstractions that make smart contract development much easier
than with "plain" Rust:

### ABI Support
ink! supports two ABIs: [Solidity](../solidity-interop/use-ink-with-solidity-abi.md) and 
[our own ABI format](../reference/metadata/overview.md), which uses SCALE.

Support for the Solidity ABI means you can interact with ink! contracts as if
they were Solidity contracts. You can cross-contract call them or use them with 
MetaMask or Hardhat.

Our custom ABI uses the Polkadot native SCALE encoding, which makes it highly efficient.
The Solidity ABI encoding is bloated and not Polkadot native. By using SCALE,
ink! contracts play well with Polkadot-native tooling and libraries (PAPI, polkadot-js, …).

If you write low-level Rust contracts, you will not have any ABI support or dispatching
logic whatsoever. This means, you'll have to handcraft on your own how your contract
is called and how it reacts to that. Building a frontend for your contract will require 
you to build the logic for calling the contract by yourself. 

### Types

We've baked the classic Polkadot SDK types for `Balance`, `AccountId`, etc. into ink!
([see here for how](../advanced/environment.md)).
For developers coming from parachain development, ink! will feel natural and they'll
recognize the same guiding principles.

ink! provides a high-level type system built directly on top of Rust’s own type system. 
This means you can use enums, structs, generics, traits, associated types, iterators, `Result`, 
pattern matching, and all other expressive features that Rust offers in a smart contract context. 
You can use any struct, tuple, etc. that supports SCALE encoding in events, storage, as function arguments,
as return types, etc.

ink! automatically derives the logic for encoding, decoding, allocating, storing, and 
loading these types from contract storage.

In contrast, low-level Rust contracts using the raw `pallet-revive` FFI have _no type support at all_.
All values (arguments, return values, storage items) must be manually serialized and
deserialized. It is entirely up to you to ensure that your types remain consistent over time.
You also need to design your own storage layout and perform manual byte-level manipulation. 

This leads to a large surface area for subtle bugs, broken upgrades, and ABI mismatches.

### Developer Ergonomics

ink! focuses on reducing boilerplate: macros generate dispatch code, storage bindings, 
events, constructors, metadata, error handling, and typed interfaces for cross-contract calls. 
You write Rust code while ink! expands the complex parts for you.

This starts with simple things like constructors 

Pure Rust contracts must implement all of these things manually: 
You must define your own entrypoints, argument parsers, dispatch tables, error codes, and 
metadata. Even simple tasks such as emitting events or reading a storage value become
complex and require multiple lines of low-level code.

This slows down development dramatically and increases the likelihood of bugs.

### Datastructures & Storage

ink! provides high-level, contract-optimized datastructures such as 
[`Mapping`](../datastructures/mapping/), 
[`Lazy`](../datastructures/storage-layout/#eager-loading-vs-lazy-loading), 
[`StorageVec`](../datastructures/storagevec/), and others built specifically for smart-contract workloads. 
They automatically handle storage layout, lazy loading, SCALE encoding, hashing, and key derivation.

These data structures expose an idiomatic Rust interface, mimicking the APIs
found in Rust's `std::collections`.

Low-level Rust contracts provide **no datastructures whatsoever**.
You must define your own storage layout and manually read and write byte slices to storage.
Bread and butter data structures (like maps) require full custom implementations, including
all serialization concerns.

### Documentation & Tooling

ink! comes with comprehensive documentation: 

* This developer portal
* [Contract example collection](https://github.com/use-ink/ink-examples)
* [API references](https://docs.rs/ink_storage/6.0.0-beta.1/ink_storage/)
* [Tutorials](/tutorials/guide)

It is supported by sophisticated tooling such as `cargo-contract` and `pop-cli`, 
the ink! analyzer, phink! (a [fuzzer by SRLabs](https://github.com/srlabs/phink)),
type bindings for polkadot-js, PAPI, dedot, and other established libraries.

For low-level Rust on `pallet-revive` there is **no dedicated documentation, guides, or tooling** beyond the raw FFI functions.
Developers must construct their own workflows for compilation, deployment, metadata definition,
debugging, and verification. There is no support group for any of that, whereas for ink! there
is [an active Telegram channel](https://t.me/inkathon) with over 370 members and 
[Substrate Stack Exchange](https://substrate.stackexchange.com/).

### UI Frameworks

ink! contracts can be used directly with existing Polkadot UI stacks such as polkadot-js, PAPI,
dedot, Substrate Connect, or custom TypeScript frameworks that rely on SCALE metadata. 

Furthermore, there are custom tools around ink!, like [inkathon.xyz](https://inkathon.xyz/),
which has become the go-to tool for rapid prototyping and hackathons.

Because ink! generates complete metadata, frontends can introspect message signatures, events, 
storage items, and types without any manual work.

Pure Rust contracts expose **no metadata**, so no UI framework can interact with them by default.
Building a frontend requires hand-crafted encoding/decoding logic, manual ABI definitions, and
custom integration layers. No automatic type generation is possible.

### Testing

ink! provides an E2E testing environment, entirely in Rust. This means you
can test interactions with your contract and make assertions for the resulting
state, events, balances, etc.
The E2E testing framework can even be used to fuzz-test your contract!

Low-level Rust contracts have **no testing framework**.
You must implement your own simulated environment or write integration tests that call into
compiled RISC-V bytecode manually. This means substantially more work and minimal safety guarantees.

### Cross-contract calls

ink! offers a type-safe cross-contract calling system where Rust traits can be used to specify
contract interface to either Solidity or ink! contracts.
ink! automatically generates the bindings, ABI selectors, SCALE encoding logic, error types, 
and call wrappers based on those traits. Through that you get strong typing: if you are trying
to use the wrong type during cross-contract calls, the compiler will catch it.

Pure Rust contracts must build cross-contract calls manually: encoding arguments, constructing 
selectors, decoding return values, and performing error handling. None of this is type-checked, 
and a single mismatched byte can cause the call to fail silently.


## Comparison Table

|                              | ink!                                                                                                                                                                                                                                 | Pure Rust                                                                           | Solidity                                              |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------|
| **Language**                 | Rust (safe, statically typed) with ink! macros for higher-level abstractions                                                                                                                                                         | Rust (no macros or framework)                                                       | Solidity (purpose-built for smart contracts)          |
| **Safety Model**             | Rust guarantees (ownership, no nulls, memory safety, …)                                                                                                                                                                              | Rust safety, but high bug risk due to DIY framework (e.g. for storage interactions) | Manual safety patterns; reentrancy common             |
| **Tooling**                  | `cargo-contract`, [ink! analyzer](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer), [`pop-cli`](https://github.com/r0gue-io/pop-cli), [phink!](https://github.com/srlabs/phink), …                     | None                                                                                | Hardhat, Foundry, Truffle, Remix                      |
| **UI frameworks**            | [ink!athon](https://inkathon.xyz/), dedot, PAPI, [Typink](/tutorials/frontend-development/typink-erc20), polkadot-js, …                                                                                                              | None                                                                                | Very mature Web3 ecosystem: ethers.js, wagmi, web3.js |
| **Documentation**            | Extensive, verbose docs on [use.ink/docs](https://use.ink/docs), crate-level docs for all crates ([`ink_env`](https://docs.rs/ink_env/6.0.0-beta.1/ink_env/), [`ink_storage`](https://docs.rs/ink_env/6.0.0-beta.1/ink_storage/), …) | None                                                                                | Widely available                                      |
| **Polkadot SDK Integration** | Native support for typical `polkadot-sdk` types (`Balance`, `AccountId`, `VersionedXcm`, etc.)                                                                                                                                       | None                                                                                | None                                                  |
| **Developer Ergonomics**     | High: macros for storage, events, traits, testing                                                                                                                                                                                    | Very low: everything must be implemented manually                                   | Extensive tooling & IDE support                       |
| **Testing Environments**     | Elaborate End-to-End testing framework                                                                                                                                                                                               | Must implement your own test harness                                                | Foundry/Hardhat; very mature                          |
| **Contract Model**           | Function-based message/constructor model                                                                                                                                                                                             | No model provided; must implement dispatch & ABI                                    | Function-based ABI, msg.sender model                  |
| **Datastructures**           | High-level datastructures, optimized for smart contracts (small footprint, lazy loading)                                                                                                                                             | None                                                                                | Basic mappings, arrays, structs                       |
| **Storage Handling**         | [`ink::storage`](https://docs.rs/ink_storage/6.0.0-beta.1/ink_storage/), [`Mapping`](../datastructures/mapping/)`, derive macros for layout and codecs                                                                              | Manual storage layout + serialization                                               | Solidity storage keywords & slot model                |
| **ABI / Metadata**           | Supports ink! metadata (SCALE-based) + Solidity ABI                                                                                                                                                                                  | Fully manual ABI definitions                                                        | Native ABI; industry standard                         |
| **Cross-Contract Calls**     | Rust traits as type-safe interfaces for calling Solidity or ink! contracts                                                                                                                                                           | Manual SCALE (or other) encoding/decoding, not type-safe                            | Built into EVM                                        |
| **Contract Verification**    | Supported through ink! metadata and tooling; verifiable via Docker container                                                                                                                                                         | No support, must build verification tooling manually                                | Etherscan-style source verification       |
| **Zero Knowledge**           | Can integrate with Polkadot-native ZK primitives at the Rust level ([example](https://github.com/use-ink/ink-examples/tree/main/zk-cross-contract-calls-solidity-verifiers))                                                         | Possible, but fully manual                                                          | Growing zkEVM ecosystem |
| **Productivity**             | High                                                                                                                                                                                                                                 | Highest flexibility, lowest productivity                                            | High                                                  |
| **Recommended Use Case**     | Polkadot smart contracts                                                                                                                                                                                                             | Highly efficient low-level contracts (e.g. for isolated business logic parts)       | EVM-chain smart contracts, L1/L2 ecosystems           |
