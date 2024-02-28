---
title: Gas
slug: /basics/gas
hide_title: true
---

<img src="/img/title/faq.svg" className="titlePic" />

## What is "Gas" in ink!?

For ink!, the term Gas refers to the resources used by a contract call.
It's important for smart contracts that the caller has to pay for any utilized resource.

Those resources can be either storage space (for storing data in the contract's storage)
or computational time (for executing the contract and its logic). The term Gas encompasses both
of these resources: `Gas = (refTime, proofSize)`.

The terms hereby refer to:

`refTime`: The amount of computational time that can be used for execution, in picoseconds.

`proofSize`: The amount of storage in bytes that a transaction is allowed to read.

The term `refTime` comes from "reference time", referring to Substrate's Weights system, where
computation time is benchmarked on reference hardware. You can read more details
[here](https://docs.substrate.io/reference/how-to-guides/weights/).

Specifically, the terms above come from Substrate's Weights V2 system.
For ink!, Gas is a synonym to the concept called "Weight" in the Substrate framework.
Blockchains that support ink! are built using Substrate which uses the concept of Weight
to describe the usage of resources.
The Weights concept is similar to what smart contract developers might know from other
ecosystem, but is more fine granular.
We decided on using the term "Gas" to make onboarding easier for developers from other
smart contract ecosystems. So: `Gas = Weight = (refTime, proofSize)`.
