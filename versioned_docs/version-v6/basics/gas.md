---
title: Gas
slug: /basics/gas
hide_title: true
---

![Gas Title Picture](/img/title/gas.svg)

## What is "Gas" in ink!?

For ink!, the term Gas refers to the resources used by a contract call.
It's important for smart contracts that the caller has to pay for any utilized resource.

Those resources can be either storage space (for storing data in the contract's storage)
or computational time (for executing the contract and its logic). The term Gas encompasses both
of these resources: `Gas = (refTime, proofSize)`.

The terms hereby refer to:

`refTime`: The amount of computational time that can be used for execution, in picoseconds.

`proofSize`: The amount of storage in bytes that a transaction is allowed to read.

The term `refTime` comes from "reference time", referring to the Polkadot SDK Weights system, where
computation time is benchmarked on reference hardware. You can read more details
[here](https://docs.polkadot.com/polkadot-protocol/glossary/#weight).

The term `proofSize` is only relevant for parachains on the [Polkadot](https://polkadot.network/)
or [Kusama](https://kusama.network/) networks.
_It can be ignored for standalone chains (like [Aleph Zero](https://alephzero.org/))._
On a high level, `proofSize` is the size of the proof that individual parachains send to
the Polkadot or Kusama relay chain to allow re-executing their block for validation
(this is called Proof of Validity).
Phrased differently: Layer-1 chains send a proof of validity to a Layer-0 chain to validate the block.
This Proof of Validity contains everything necessary to execute the block -- the code of each contract
that is executed plus the storage each contract reads and writes.

:::info
The terms above come from Substrate's "Weights V2" system.
For ink!, Gas is a synonym to the concept called "Weight" in the Substrate framework.
Blockchains that support ink! are built using Substrate which uses the concept of Weight
to describe the usage of resources.
The Weights concept is similar to what smart contract developers might know from other
ecosystems, but is more fine grained. It also tracks the utilized bandwidth, not just
execution. For ink! smart contracts the utilized bandwidth is the `proofSize` explained above.

We decided on using the term "Gas" to make onboarding easier for developers from other
smart contract ecosystems. So: `Gas = Weight = (refTime, proofSize)`.
:::