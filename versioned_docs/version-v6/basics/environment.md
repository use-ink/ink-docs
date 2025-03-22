---
title: Chain Environment Types
slug: /basics/chain-environment-types
hide_title: true
---

![Environment Title Picture](/img/title/environment.svg)

# Chain Environment Types

:::caution
If you write a contract for a chain that deviates from the default
Substrate types, you have to make sure to configure that chain's
`Environment` for your contract!
:::

ink! defines a trait [`Environment`](https://use-ink.github.io/ink/ink_env/trait.Environment.html)
and also a default implementation of that trait ‒ [`DefaultEnvironment`](https://use-ink.github.io/ink/ink_env/enum.DefaultEnvironment.html).

These are the types that ink! uses, if no explicit steps are taken:

```rust
/// The fundamental types of the default configuration.
#[derive(Debug, Clone, PartialEq, Eq)]
#[cfg_attr(feature = "std", derive(TypeInfo))]
pub enum DefaultEnvironment {}

impl Environment for DefaultEnvironment {
    const MAX_EVENT_TOPICS: usize = 4;

    type AccountId = ink_primitives::AccountId;
    type Balance = u128;
    type Hash = ink_primitives::Hash;
    type Timestamp = u64;
    type BlockNumber = u32;
    type ChainExtension = NoChainExtension;
}
```

The context here is that you can use ink! on any blockchain that was built with
the [Polkadot SDK](https://polkadot.com/platform/sdk) and includes the
[`pallet-revive`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive)
module.

Chains built on Substrate can decide on their own which types they want
to use for e.g. the chain's block number or account id's. For example,
chains that intend to be compatible to Ethereum typically use the same
type as Ethereum for their `AccountId`.

Most Substrate chains stay with the default Substrate types though and
ink! just uses those by default as well. It is possible to configure
a different environment in the contract macro ([documentation here](https://use-ink.github.io/ink/ink/attr.contract.html#header-arguments))
though:

```rust
#[ink::contract(env = MyCustomTypes)]
```
