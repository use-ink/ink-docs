---
title: Instantiate a Contract
slug: /cargo-contract-cli/instantiate
---

TODO

I am trying to deploy and instantiate a contract using a custom-built cargo-contract with the extrinsics feature. The 'deploy' and 'instantiate' commands require a "secret key uri" and "secret key password" that I don't know how to find for my canvas devnet. Can somebody help me understand what these are and how to obtain them?

You probably just need to the key for some account with enough funds to deploy and instantiate the contract...I don't think the key is specific to the node in any way
If you're running the Canvas node in dev mode, these are the accounts that are pre-funded https://github.com/paritytech/canvas-node/blob/master/node/src/chain_spec.rs#L76
People typically use Alice...her information is here https://substrate.dev/docs/en/knowledgebase/integrate/subkey#well-known-keys I guess you'd just leave the password blank
So the secret key URI will be bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice I think