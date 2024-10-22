---
title: Contracts on Paseo
hide_title: true
slug: /testnet
---

<img src="/img/title/testnet.svg" className="titlePic" />

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

Once you have `PAS` on Paseo you can deploy a contract _nearly_ as you would with
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

See [the `cargo-contract` docs](https://github.com/paritytech/cargo-contract/blob/master/crates/extrinsics/README.md#commands)
for a more detailed documentation.
