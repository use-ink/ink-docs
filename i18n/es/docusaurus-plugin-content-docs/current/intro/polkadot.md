---
title: Smart Contracts en Polkadot
hide_title: true
slug: /smart-contracts-polkadot
---

<img src="/img/title/polkadot.svg" className="titlePic" />

# Smart Contracts en Polkadot

Una de las primeras preguntas que normalmente recibimos cuando alguien aprende sobre Substrate, Polkadot, o Kusama es cuándo desarrollar una parachain vs. cuándo desarrollar un smart contract.

La diferencia aquí es que en el contexto de Polkadot y Kusama una parachain alquila un espacio que abarca desde un par de meses hasta dos años. El acuerdo con un alquiler es que la parachain obtiene un slot fijo para ejecutar su lógica de negocio (normalmente conocida como su  _función de transición de estado_) y puede persistir su estado modificado en un  bloque. En terminología de Substrate esta función de transición de estado se denomina _runtime_.

La diferencia con otros ecosistemas aquí es que, en el contexto de Polkadot, parachains y smart contracts existen en diferentes niveles del stack: _los smart contracts se ubican por encima de las parachains_. Las parachains serían generalmente descriptas como blockchains de nivel 1 - excepto por el hecho de que no tienen que construir su propia seguridad, son actualizables e interoperables.

Vale la pena destacar que una función de transición de estado de una parachain no se valida más - depende de la parachain cómo utiliza su tiempo de slot. La parachain ya pagó por adelantado por su slot cuando ganó la subasta en Polkadot o Kusama. Eso significa que la parachain puede construir su propio mundo (de blockchain)! Por ejemplo, puede decidir cómo se cobran las comisiones por transacción - incluso si dichas comisiones se cobran o no. Estas opciones son cruciales cuando se construyen modelos de negocio nuevos o más accesibles para el usuario. Otros factores distintivos entre parachains que observamos en estado natural son diferencias en cómo funciona la gobernanza o la cripto economía. Sin embargo hay algunas limitaciones en cómo la parachain puede construir su mundo. Como la física en el mundo real, tiene que adherir a ciertas reglas básicas. Para Polkadot y Kusama eso es por ejemplo el algoritmo de consenso para que la Relay Chain se comunique con la parachain. Desde esas reglas básicas emergen las ventajas para Polkadot y Kusama. Ventajas como la seguridad compartida, comunicación cross-chain o ejecución de tiempo de slot garantizada.

Para los smart contracts, por otro lado, una parachain existente tiene que incluir el `pallet-contracts` para que los usuarios deployen smart contracts. El smart contract deployado siempre es un código untrusted (de no confianza). Cualquiera (o cualquier programa) que tiene tokens de la chain puede subir un smart contract sin requerir permiso. Los smart contracts permiten deployar de manera _permissionless_ programas _untrusted_ en una blockchain. El `pallet-contracts` debe asumir que estos programas son contradictorios, debe ubicar un número de pilares de seguridad en su lugar para asegurar que el contrato no puede, por ejemplo, paralizar la chain o causar la corrupción del estado de otros contratos. Para el `pallet-contracts` esos pilares de seguridad incluyen mecanismos como la medición de gas o depósitos para almacenar datos on-chain.

 _Para reafirmar esta distinción importante: desarrollar un runtime de parachain es diferente a desarrollar un smart contract ‒ un smart contract se sitúa por encima de una parachain_.

La contrapartida es que con una parachain uno tiene la libertad de decidir sobre (casi) todas las reglas que constituyen la parachain. Con un smart contract uno está limitado por lo que la chain permite y los pilares de seguridad que necesariamente deben estar en su lugar. Un smart contract nunca puede ser tan rápido como un pallet nativo incluido en el runtime de la parachain - hay demasiada lógica involucrada. 
Un smart contract, por otro lado, tiene menos fricción para desarrollarlo y deployarlo. Los desarrolladores no tienen que ocuparse de la gobernanza, crypto economía, etc. Uno sólo necesita unos pocos tokens y puede simplemente seguir adelante deployando un smart contract. Es tan simple como eso.

![](/img/smart-contract-vs-parachain.png)