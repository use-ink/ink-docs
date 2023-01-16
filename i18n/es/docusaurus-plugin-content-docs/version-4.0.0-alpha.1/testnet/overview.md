---
title: Overview
slug: /testnet
hide_title: true
---

## Rococo Deployment

Tenemos una red de prueba llamada `Contracts` en vivo como una parachain en [Rococo](https://wiki.polkadot.network/docs/build-pdk#rococo-testnet) ‒ una red de prueba para parachains de Polkadot y Kusama:

<div class="schema">
    <img src="/img/contracts-on-polkadot-js.png" alt="Smart contracts parachain on Rococo" />
</div>

Puedes interactuar con la red a través de Polkadot JS Apps,
[haga click aquí para abrir directamente la parachain `Contracts`](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer).

Nuestra parachain utiliza el token nativo (ROC) de la relay chain Rococo en lugar de tener su propio token.
Debido a esto necesitaras ROC para poder desplegar contratos en nuestra testnet.

Como primer paso, deber crear una cuenta. Mira [aquí](https://wiki.polkadot.network/docs/learn-account-generation)
para una guía más detallada.

Como segundo paso, debes obtener tokens ROC para la red de prueba a través de [Rococo Faucet](https://wiki.polkadot.network/docs/learn-DOT#getting-rococo-tokens).
Esta es una sala de un chat donde tienes que escribir:
```
!drip YOUR_SS_58_ADDRESS:1002
```
El número `1002` es el id de la parachain `Contracts` en Rococo, al suministrarlo el faucet teletransportará tokens ROC
directamente a tu cuenta en la parachain.

Si todo ha funcionado bien, los tokens ROC teletransportados se mostraran en
[la pestaña "Accounts" de `Contracts`](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts).

Una vez tengas los ROC en `Contracts` puedes desplegar el contrato como harias normalmente.
Si e
Si no estás seguro de esto, nuestro [tutorial guiado](https://docs.substrate.io/tutorials/v3/ink-workshop/pt1/)
te lo aclarará en poco tiempo.


## ¿Qué es la parachain `Contracts`?

Es una [Substrate](https://github.com/paritytech/substrate)
parachain para smart contracts.
La hemos configurado para utilizar el módule de Substrate para smart contracts ‒ el 
pallet [`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) ‒ con la 
configuración por defecto.

El código para esta parachain se puede ver [en el repositorio `cumulus`](https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo).

El `pallet-contracts` toma los smart contracts como WebAssembly blobs y define una API
para todo lo que un smart contract necesita (storage access, …).
Mientras el lenguaje de programación compile a WebAssembly y exista una implementación para su API en el, 
puedes escribir un smart contract para este pallet ‒ y por lo tanto para nuestra parachain `Contracts`
‒ en ese lenguaje.

Aquí tienes una lista de los lenguajes que actualmente puedes elegir:

* [Parity's ink!](https://github.com/paritytech/ink) en Rust
* [ask!](https://github.com/patractlabs/ask) en Assembly Script
* El compilador [Solang](https://github.com/hyperledger-labs/solang) para Solidity

El siguiente gráfico representa la idea:

<div class="schema">
    <img src="/img/pallet-contracts-overview.svg" alt="`pallet-contracts` Overview" />
</div>

También existen diferentes interfaces de usuario y herramientas de línea de comandos que pueden ser
utilizados para implementar o interactuar con contratos:

* [Contracts UI](https://contracts-ui.substrate.io/)
* [polkadot-js](https://polkadot.js.org/apps/)
