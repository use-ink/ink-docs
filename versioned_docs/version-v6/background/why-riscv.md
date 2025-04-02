---
title: Why RISC-V and PolkaVM for Smart Contracts?
hide_title: true
slug: /background/why-riscv-and-polkavm-for-smart-contracts
---

<head>
    <meta name="description" content="Discover available bounties and contribute to the ink! ecosystem." />
    <meta name="keywords" content="Polkadot, PolkaVM, RISC-V, RISCV, Smart Contracts" />
    <meta property="og:title" content="Why RISC-V and PolkaVM for Smart Contracts?" />
    <meta property="og:description" content="Discover available bounties and contribute to the ink! ecosystem." />
    <meta property="og:image" content="https://use-ink.com/img/opengraph/riscv-polkavm.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="RISC-V, PolkaVM, and ink!" />
    <meta property="og:image:type" content="image/png" />
</head>

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/title/polkadot-riscv.svg')} title="RISC-V" className="titlePic"  />

## 🤔 Shortcomings of WebAssembly for Smart Contracts

From ink! v1 to v5, the execution platform was Substrate's smart contracts
module [`pallet-contracts`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/contracts/).
This pallet required the smart contracts that were uploaded to be in the _WebAssembly
(Wasm) bytecode format_. So ink! contracts were always compiled to a WebAssembly binary.
This could be done by invoking `cargo build`/`rustc` directly or via our CLI tool
[`cargo-contract`](https://github.com/use-ink/cargo-contract) (which executes the
Rust compiler with optimal flags for smart contracts).

As an ongoing research project Parity was always looking at alternatives to WebAssembly
for smart contract execution. Some of those investigations are
persisted in the Polkadot Forum. The forum post on [the eBPF investigation](https://forum.polkadot.network/t/ebpf-contracts-hackathon/1084)
(eBPF is used in Solana) highlights some shortcomings of WebAssembly for smart contracts.

## 🧑‍🔬 RISC-V + PolkaVM 

During 2023, Parity core developer Jan Bujak ([@koute](https://github.com/koute)) did another
exploration on alternatives for WebAssembly. [His forum post](https://forum.polkadot.network/t/exploring-alternatives-to-wasm-for-smart-contracts/2434)
gives a great overview on how he landed at RISC-V and its potential.
His explorations yielded promising results and a new project
was started: [PolkaVM](https://github.com/paritytech/polkavm)
([the announcement contains more info](https://forum.polkadot.network/t/announcing-polkavm-a-new-risc-v-based-vm-for-smart-contracts-and-possibly-more/3811)).
PolkaVM is intended to be a very fast RISC-V based virtual machine. Jan
regularly shared performance benchmarks in the Polkadot Forum. Those were very
good and got community enthusiasm started.
For blockchains a very fast performance correlates with transaction throughput
and transaction costs, which implies improved scalability and reduced costs for users.

## 🤝 `pallet-revive`

Parity in late 2024 forked Substrate's `pallet-contracts` into a new project called
[`pallet-revive`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive).
Smart contracts that are uploaded to this new pallet have to be
in the RISC-V bytecode format, and no longer in WebAssembly.

Besides the contract binary format, a number of other significant changes were
made to provide first-class support for Solidity contracts:

    * Extensive changes were made in the inner logic of the pallet to bring its behavior
    closer to the EVM (e.g. types, events, and debugging was changed to be Solidity
    compatible).

    * In the `pallet-contracts` era, the idea for Solidity compatibility was a project
    called [Solang](https://github.com/hyperledger-solang/solang/). It's a Solidity
    compiler that parses Solidity syntax and outputs WebAssembly.
    Parsing the Solidity syntax turned out to be a complex undertaking. Solidity
    as a language is also evolving and provided a moving target.<br/><br/>
    As an iteration on that approach, for `pallet-revive` Parity started a new
    project called [`revive`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive/src) ᠆
    a compiler from the Solidity bytecode YUL to a RISC-V
    contract that can be executed on `pallet-revive`.
    This bytecode is more stable than the language syntax. Plus Solidity developers
    can continue to use the Solidity compiler `solc` to compile their contracts.

    * An RPC wrapper that maps Ethereum RPC's onto Substrate was created.

At the time of writing, `pallet-revive` is deployed to the Polkadot testnet Westend
(on the AssetHub parachain).
A launch on Polkadot's canary network Kusama is targeted for early Q2/25.
The Polkadot launch is targeted for Q3/25.

## 🙌 Migrating ink! to RISC-V + PolkaVM + `pallet-revive`

`pallet-revive` and RISC-V are seen as the future of smart contracts in the Polkadot
ecosystem. We agree with that vision and are excited to work on making the ink! stack
ready for it!
In autumn 2024 the ink! Alliance created [a Polkadot treasury proposal](https://forum.polkadot.network/t/treasury-ink-alliance-for-a-more-successful-plaza/9692)
around this.
The Polkadot community signaled its alignment and gave us the mandate of
migrating ink! to this new stack.

Hence, v5 of ink! and `cargo-contract` were the last versions supporting `pallet-contracts`
and Wasm. We can still backport important fixes, but the coming releases (`>= v6`) will
all no longer be compatible. In case you want to create a PR for a backport, we have
v5 release branches [here](https://github.com/use-ink/ink/tree/v5.x) and [here](https://github.com/use-ink/cargo-contract/tree/v5.x.x).

We have created [this migration guide](/docs/v6/faq/migrating-from-ink-5-to-6) from ink! v5 to v6.
All breaking changes and new features are documented there.

What has not yet been migrated is [Contracts UI](https://github.com/use-ink/contracts-ui)
and external libraries (such as [ink!athon](https://inkathon.xyz/), the
[ink! Analyzer VS Code extension](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer),
`polkadot-js`, …).
We are in contact with the maintainers of these external libraries about migrating 
them as well.

