---
title: Contracts on Rococo
slug: /testnet
---

[Rococo](https://wiki.polkadot.network/docs/build-pdk#rococo-testnet) is a testnet for
Polkadot and Kusama parachains.
We have a live testnet named `Contracts` as a parachain online there.

<img src="/img/contracts-on-polkadot-js.png" alt="Smart contracts parachain on Rococo" />

## What is the `Contracts` parachain?

It's a [Substrate](https://github.com/paritytech/substrate) parachain for smart
contracts. We configured it to use Substrate's smart contracts module – the
[`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts)
pallet – in a default configuration.

The code for this parachain can be found [in the `cumulus` repository](https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo).
Our parachain uses the Rococo relay chain's native token (`ROC`) instead of having its own token.
Due to this you'll need `ROC` in order to deploy contracts on our testnet.

## How can I use it?
### (1) Create an Account

As a first step, you should create an account. This can be done via command-line
tools (e.g. `subxt`) or via a wallet (e.g. with the `polakdot-js` browser extension).
See [here](https://wiki.polkadot.network/docs/learn-account-generation) for a detailed guide.

### (2) Get Testnet Tokens

As a second step, you have to get `ROC` testnet tokens through the [Rococo Faucet](https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet).
This is a chat room in which you need to write:

```
!drip YOUR_SS_58_ADDRESS:1002
```

The number `1002` is the parachain id of `Contracts` on Rococo, by supplying it the
faucet will teleport `ROC` tokens directly to your account on the parachain.
Teleport is a term 

If everything worked out, the teleported `ROC` tokens will show up in your account.
In case you are using the `polkadot-js` fronted, you can see them under
[the "Accounts" tab for `Contracts`](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts).

<img src="/img/roc-in-wallet.png" alt="Rococo testnet tokens in wallet" />

### (3) Deploy Your Contract

Once you have `ROC` on `Contracts` you can deploy a contract _nearly_ as you would with
a local developer node.
The only difference is that you can't use pre-endowed accounts like `Alice` or `Bob`,
you have to use the one you generated instead.

<img src="/img/deployment-acc.png" alt="Deploy a smart contract on Rococo/Polkadot" />

You can also deploy your contract from the command-line via `cargo-contract`.
Make sure you are in the folder of your contract and that it has been
built recently. Then execute:

```bash
cargo contract upload --suri "your twelve or twenty-four words"
cargo contract instantiate --suri … --constructor new --args true
```

`new` in this case would be a constructor method exposed by the contract,
`--args` would be any arguments the constructor expects.

See [the `cargo-contract` docs](https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md#commands)
for a more detailed documentation.