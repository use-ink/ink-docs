---
title: Contracts on Rococo
slug: /testnet
---

[Rococo](https://wiki.polkadot.network/docs/build-pdk#rococo-testnet) is a testnet for
Polkadot and Kusama parachains.
We have a live testnet named `Contracts` as a parachain online there.

<img src="/img/contracts-on-polkadot-js.png" alt="Smart contracts parachain on Rococo" />

Our parachain uses the Rococo relay chain's native token (`ROC`) instead of having its own token.
Due to this you'll need ROC in order to deploy contracts on our testnet.

As a first step, you should create an account. This can be done via command-line
tools or via a wallet. See [here](https://wiki.polkadot.network/docs/learn-account-generation)
for a detailed guide.

As a second step, you have to get `ROC` testnet tokens through the [Rococo Faucet](https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet).
This is a chat room in which you need to write:

```
!drip YOUR_SS_58_ADDRESS:1002
```

The number `1002` is the parachain id of `Contracts` on Rococo, by supplying it the
faucet will teleport `ROC` tokens directly to your account on the parachain.

If everything worked out, the teleported `ROC` tokens will show up in your account.
In case you are using the `polkadot-js` fronted, you can see them under
[the "Accounts" tab for `Contracts`](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts).

Once you have `ROC` on `Contracts` you can deploy a contract _nearly_ as you would with
a local developer node.
The only difference is that you can't use pre-endowed accounts like `Alice` or `Bob`.

## What is the `Contracts` parachain?

It's a [Substrate](https://github.com/paritytech/substrate)
parachain for smart contracts.
We configured it to use Substrate's smart contracts module – the
[`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) pallet – in
a default configuration.

The code for this parachain can be found [in the `cumulus` repository](https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo).
