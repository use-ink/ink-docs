---
title: Precompiles
slug: /basics/precompiles
hide_title: true
---

![Precompiles Title Picture](/img/title/precompiles.svg)

# Precompiles

Precompiles are pre-defined functions implemented directly into the blockchain's runtime, unlike smart
contracts that execute within the virtual machine. This makes heavy operations cheaper and also turns
precompiles into adapters that let smart contracts call into chain features. Precompiles exist at
predetermined addresses and offer optimized performance with lower gas costs than equivalent contract
implementations.

## Using Precompiles in ink! Contracts

In ink!, precompiles are called exactly like any other contract using the same [cross-contract calling mechanisms](./cross-contract-calling.md). You simply target the precompile's predetermined address instead of a deployed contract address.

## Discovering Chains Precompiles

To find available precompiles on a Polkadot SDK chain, check the runtime configuration in the `pallet-revive` section for the `Precompiles` type definition.

```rust
impl pallet_revive::Config for Runtime {
    ...
    type Precompiles = MyChainPrecompiles;
    ...
}
```