---
title: Faucet
slug: /faucet
hide_title: true
---

import Faucet from "./Faucet";

<Faucet/>

Operamos un faucet para nuestra [Testnet Contracts en Rococo](/testnet).
Al solicitar fondos del formulario anterior, recibirá tokens `ROC`
para tu cuenta en esta parachain.

Tenga en cuenta que los fondos no estarán disponibles en la relaychain, el faucet 
los teletransporta directamente a nuestro parachain ([mira aquí para más detalles](/testnet)).
El polkadot-js UI los mostrará bajo [la pestaña "Accounts" para la parachain Contracts](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts):
<img src="/img/roc-in-wallet.png" alt="Rococo testnet tokens en el wallet" />