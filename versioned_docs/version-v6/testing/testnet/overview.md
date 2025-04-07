---
title: Contracts on Paseo
hide_title: true
slug: /testnet
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Testnet Title Picture](/img/title/testnet.svg)

# Contracts on Paseo (using Pop Testnet)

- [Paseo](https://wiki.polkadot.network/docs/build-pdk#paseo-testnet) is Polkadot's main testnet for parachains.  
- [Pop](https://learn.onpop.io/contracts) is a parachain on Paseo that allows you to deploy smart contracts – and uses Paseo's token (PAS).

## How can I use it?
### (1) Create an Account

As a first step, you should create an account. This can be done via command-line
tools (e.g. `subxt`) or via a wallet (e.g. with the `polkadot-js` browser extension).
See [here](https://wiki.polkadot.network/docs/learn-account-generation) for a detailed guide.

### (2) Get Testnet Tokens

As a second step, you have to get `PAS` testnet tokens through the [Paseo Faucet](https://faucet.polkadot.io/). For Pop, make sure to select Asset Hub as the destination (see [this guide](https://learn.onpop.io/contracts/guides/bridge-tokens-to-pop-network) for details).

Alternatively, you can use the [Matrix chat room](https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-paseo-testnet).
You must send a message like this:

```
!drip <PASEO_ADDRESS>
```

If everything worked out, the `PAS` tokens will show up in your account.
In case you are using the `polkadot-js` frontend, you can see them under
[the "Accounts" tab for Paseo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpaseo.dotters.network#/accounts).

<img src={useBaseUrl('img/pas-in-wallet.png')} alt="Paseo testnet tokens in wallet" />

### (3) Deploy Your Contract

Once you have `PAS` on Paseo you can deploy by following the instructions in the Pop Docs [here](https://learn.onpop.io/contracts/guides/deploy-on-pop-testnet#:~:text=Transfer%20from%20Paseo%20Relay%20Network%20to%20Pop%20Testnet).
The only difference is that instead of using the `Alice` account you will use the one you generated.
