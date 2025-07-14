---
title: Where to Deploy
slug: /where-to-deploy
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Rocket Title Picture](/img/title/rocket.svg)

# Where to Deploy Your ink! Contracts

Ready to deploy your ink! smart contracts? You have several options depending on your needs, from local development to live testnets. Here's your complete guide to deploying ink! v6 contracts.

## Local Development

Perfect for initial development and testing, check out [deploying your first contract](./../getting-started/deploying.md).

## Live Testnets

Make sure you have a Polkadot account, check out the [guide](https://support.polkadot.network/support/solutions/articles/65000098878-how-to-create-a-dot-account) or [video](https://www.youtube.com/watch?v=DNU0p5G0Gqc) on how to do this.

### Passet Hub
Passet hub is Polkadot's 

<div className="grid grid-cols-3 gap-4 mb-4">
    <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet-passet-hub.polkadot.io">
        <img src={useBaseUrl('/img/chains/passethub.svg')} alt="Paseo Asset Hub" className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]" />
    </a>
</div>

Getting Started:
1. **Get PAS Tokens**: Use the [Passet Hub Faucet](https://faucet.polkadot.io/?parachain=1111)
2. **Developer Console**: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpasset-hub-paseo.ibp.network#/explorer
3. **URL**: `wss://testnet-passet-hub.polkadot.io`

### Pop Network
**Experimental parachain for smart contracts and cross-chain features**

<div className="grid grid-cols-3 gap-4 mb-4">
    <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.paseo.popnetwork.xyz">
        <img src={useBaseUrl('/img/chains/polkadot-pop-network.svg')} alt="Pop Network" className="w-auto h-[48px] mx-auto mix-blend-lighten" />
    </a>
</div>

**Getting Started:**
1. **Get PAS tokens on Pop**: Follow [this guide](https://learn.onpop.io/contracts/guides/bridge-tokens-to-pop-network) to transfer from Paseo to Pop
2. **Developer Console**: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc1.paseo.popnetwork.xyz#/explorer
3. **URL**: `wss://rpc1.paseo.popnetwork.xyz`

### Ready to deploy

Check out how to deploy your contract [here](../getting-started/deploying.md).
