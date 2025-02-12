---
title: Why RISC-V for Smart Contracts?
hide_title: true
slug: /why-riscv
---

<img src="/img/title/ink!-6.0.svg" title="RISC-V" className="titlePic"  />

Parity Technologies is the company that is developing the execution engine for ink!
contracts -- the Substrate module `pallet-contracts`.
Up until ink! v5 this engine was executing WebAssembly smart
contracts.
From ink! v6 on we migrated to a new execution engine -- `pallet-revive`,
which executes smart contracts in the RISC-V bytecode format.
On this page we lay out what motivated this decision.


## Why no longer WebAssembly for Smart Contracts?

As an ongoing research project Parity was always looking at alternatives to WebAssembly
for smart contract execution. Some of those investigations are
persisted in the Polkadot Forum. The forum post on [the eBPF investigation](https://forum.polkadot.network/t/ebpf-contracts-hackathon/1084)
(eBPF is used in Solana) highlights some shortcomings of WebAssembly for smart contracts.

On a high level these are important findings:

_WebAssembly is unnecessarily flexible (i.e. complex) for our use case of smart contracts._
The unneeded flexibility causes unnecessary overhead for the interpreter
that runs the contract and thus the performance.


The stack is unbounded. Moreover, a function
can declare arguments and locals. That all means you actually need to perform some
register allocation to get decent performance.

Wasm bytecode operates on primitive values of I32, I64, F32, and F64 types.
Contracts don’t really need floating points and if they need it badly, they can
use software implementations. Also, I am pretty sure there is no need for two
integer types, and having only 64-bit numbers is pretty much OK.

_Ability to write efficient and simple single pass compilers._
Contracts need to be single-pass compiled on-chain. With multiple passes the 
compiler would be subject to malicious contracts that exploit its behavior via
compiler bombs.

_Intepretation of RISC-V contracts can be done more efficient as Wasm_
WebAssembly bytecode is a stack machine, whereas RISC-V is modeled as a
register machine.
The target architectures that Polkadot SDK (and hence `pallet-revive`) supports

RISC-V is a register machine, just like any target
machine we ever intent to support (x86 + ARM at the moment). It is a
RISC ISA with few registers so that it can be 1to1 mapped to x86-64 and ARM without
any register allocation overhead.


## Why RISC-V for Smart Contracts?

In 2023, Parity core developer Jan Bujak ([@koute](https://github.com/koute)) did another
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
Eventually an idea emerged: move the Substrate stack in the long-term to RISC-V
instead of WebAssembly.

Some of the reasons why RISC-V is seen as a progression from WebAssembly:

