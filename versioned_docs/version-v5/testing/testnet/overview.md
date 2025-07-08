---
title: Contracts on Paseo
hide_title: true
slug: /testnet
---

![Testnet Title Picture](/img/title/testnet.svg)

# Contracts on Paseo

[Paseo](https://wiki.polkadot.network/docs/build-pdk#paseo-testnet) is a testnet for
Polkadot and Kusama parachains.

## How can I use it?
### (1) Create an Account

As a first step, you should create an account. This can be done via command-line
tools (e.g. `subxt`) or via a wallet (e.g. with the `polkadot-js` browser extension).
See [here](https://wiki.polkadot.network/docs/learn-account-generation) for a detailed guide.

### (2) Get Testnet Tokens

As a second step, you have to get `PAS` testnet tokens through the [Paseo Faucet](https://faucet.polkadot.io/).

Alternatively, you can use the [Matrix chat room](https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-paseo-testnet).
You must send a message like this:

```
!drip <PASEO_ADDRESS>
```

If everything worked out, the `PAS` tokens will show up in your account.
In case you are using the `polkadot-js` frontend, you can see them under
[the "Accounts" tab for Paseo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpaseo.dotters.network#/accounts).

<img src="/img/pas-in-wallet.png" alt="Paseo testnet tokens in wallet" />


### (3) Deploy Your Contract

Once you have `PAS` on Paseo you can [bridge them from Paseo to Pop](https://learn.onpop.io/contracts/guides/bridge-tokens-to-pop-network) and deploy by following the instructions in the Pop Docs [here](https://learn.onpop.io/contracts/guides/deploy#deploy-to-custom-or-public-network).

