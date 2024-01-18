---
title: Cómo funciona ‒ Substrate
slug: /como-funciona
hide_title: true
---

<img src="/img/title/substrate.svg" className="titlePic" />


# Cómo funciona ‒ Substrate

ink! es un lenguaje de programación para smart contracts; blockchains contruidas con [el framework Substrate](http://substrate.io)
pueden elegir entre una serie de lenguajes para smart contracts cual quieren soportar.
ink! es uno de ellos. Es un lenguaje obstinado que hemos construido extendiendo el popular lenguaje de programación Rust con la funcionalidad necesaria para hacerlo compatible con smart contracts.

## ¿Cómo se vincula ink! con Substrate?

[Substrate](https://substrate.io) es un framework para construir blockchains – esos pueden ser blockchains independientes o blockchains conectados a [Kusama](http://kusama.network) o [Polkadot](http://polkadot.network), también conocidos como _parachains_. Substrate contiene un número de módulos, en terminología Substrate estos son conocidos como _pallets_. Substrate tiene un conjunto de pallets para muchos de los requisitos que las blockchain modernas suelen tener – staking, fungible tokens, non-fungible tokens, governance, etc.

Substrate también se contiene un módulo para smart contracts, este módulo se llama `pallet-contracts`. Si una parachain ies desarrollada con Substrate se puede facilmente añadir la funcionalidad para smart contracts incluyendo este pallet.

¿Cómo entra ink! en juego aquí? ink! es un lenguaje de programación, específicamente es un lenguaje específico de dominio incrustado para el popular lenguaje de programación Rust. Esto quiere decir que puedes utilizar la sintaxis normal de Rust además de algunos detalles que hemos agregado para que el lenguaje sea adecuado para el mundo de los smart contracts.
El `pallet-contracts` toma estos contractos en ink! y los ejecuta de una manera segura. Así que en resumen: _con ink! puedes escribir smart contracts en Rust para blockchains construidos con Substrate que incluyen `pallet-contracts`_.

![](/img/ink-pallet-contracts.png)

## ¿Como funciona el `pallet-contracts`?

Hemos diseñado intencionalmente el `pallet-contracts` de manera que este desvinculado del lenguaje que se utiliza para escribit smart contracts. El pallet es solo el entorno de ejecución y toma ficheros WebAssembly como input. Los smart contracts para este pallet tienen que ser compilados con una arquitectura WebAssembly (Wasm) como objetivo.

Para desarrolladores de contratos esto quiere decir que pueden utilizar ink! para escribir smart contracts, pero que también pueden decidir hacerlo en otros lenguajes. Ahora mismo se puede elegir entre estos 3 lenguajes:

* [Parity's ink!](https://github.com/paritytech/ink) para Rust.
* [ask!](https://github.com/patractlabs/ask) para AssemblyScript.
* El compilador [Solang](https://github.com/hyperledger-labs/solang) para Solidity.

No es dificil añadir nuevos lenguajes. S
It's not hard to add new languages. Solo se necesita un compilador para el lenguaje a WebAssembly, entonces es posible implementar una API para `pallet-contracts`. En este momento esta API consiste en entre 15-20 funciones para cualquier cosa que un smart contract puede necesitar: acceso al almacenamiento, funcionalidad criptográfica, información del entorno como números de bloque, acceso a funciones para obtener números aleatorios o auto-terminar el contrato, etc. No todas las funcionalidades tienen que ser implementadas en el lenguaje - el ink! "Hello, World!" necesita solo seis funciones API. El siguiente esquema representa esta relación:

![](/img/es/ink-substrate.png)

Creemos que este diseño está más preparado para el futuro que algunas arquitecturas que se encuentran en ecosistemas competidores.
No existe tight coupling entre el lenguaje y el entorno de ejecución. WebAssemblyes un estandar de la industria y una hoy en dia una múltitud de lenguajes de programación pueden ser compilados a WebAssembly. Si en por ejemplo diez años, investigadores idean un lenguaje innovador para escribir smart contracts (o un subconjunto de un lenguaje existente) entonces mientras exista un compilador WebAssembly sera sencillo hacer que este lenguaje sea compatible con `pallet-contracts`.

## ¿Por qué incluir `pallet-contracts` en una parachain?

Existe un par de casos de uso para incluir funcionalidad de smart contracts en una parachain. Distinguimos tres grandes casos de uso.

### Caso de uso 1: Smart Contracts como "ciudadanos de primera clase"
El caso de uso más obvio es una parachain que proporciona smart contracts como “ciudadanos de primera clase”, lo que significa que los smart contracts son la propuesta central de valor de la cadena.

Estas cadena toman por lo general el off-the-shelf `pallet-contracts` y crean alguna innovación adicional encima. Ejemplos de esto son:

* [Astar](https://astar.network): una parachain que ha construido una capa sobre `pallet-contracts` para que los desarolladores de contratos pueden obtener ingresos pasivos mientras sus contratos son utilizados.
* [Phala](https://www.phala.network): una parachain que utiliza `pallet-contracts` en un entorno de ejecución confiable, permitiendo ejecuciónes de smart contract confidenciales e interoperabilidad.
* [Aleph Zero](https://alephzero.org): utiliza el `pallet-contracts` en un contexto de zero-knowledge.
* [t3rn](https://www.t3rn.io): utiliza `pallet-contracts` como un bloque de construcción para permitir ejecución multi-chain para smart contracts.

### Caso de uso 2: Smart Contracts como "ciudadanos de segunda clase"
Existe otro no tan obvio caso de uso para `pallet-contracts`: smart contracts como “ciudadanos de segunda clase” en una cadena existente. Con esto queremos decir que la propuesta de valor central de la cadena no tiene nada que ver con los smart contracts, pero aún así los incluye como complemento.

Proveemos una API (llamada [chain extensions](https://use.ink/macros-attributes/chain-extension)) con la que una parachain
puede exponer ciertas partes de su lógica de negocio a los desarrolladores de smart contracts. A través de esto,, los desarrolladores de smart contracts pueden utilizar primitivas de la lógica de negocio de la cadena para construir una nueva aplicación sobre ella. Imagina por ejemplo una blockchain con un exchange descentralizado. Esta cadena, en su forma más simple, tendría un libro de pedidos para realizar ofertas y demandas - no hay necesidad de tomar programas no confiables, turing completos ni programas del exterior. La parachain podria decidir exponer el libro de pedidos a traves del smart contract, dando a desarrolladores externos la opción de construir nuevas aplicaciones que utilicen el libro de pedidos. Por ejemplo, para For example, para cargar algoritmos de trading como smart contracts en la cadena.

Los smart contracts aqui son una oportunidad para aumentar la participación del usuario e impulsar el uso del token nativo de la cadena. Y la facturación por utilizar la cadena ya viene integrada con el pallet - los usuarios tienen que pagar gas fees para la ejecución de sus smart contracts.


### Caso de uso 3: Smart Contracts como primer paso en Polkadot o Kusama
Un tercer gran caso de uso del `pallet-contracts` es para crear un prototipo de una idea como una prueba de concepto en forma de smart contract antes de arrendar un dedicado parachain slot en Polkadot o Kusama.

El tiempo que cuesta desarrollar y desplegar un smart contract es más corto que la onboarding story para una parachain. Se puede desplegar primero un smart contract como prueba de concepto, ver si gana tracción y la idea resiste al mundo real. Solo posteriormente, una vez que sea necesario, por ejemplo tarifas de transacción más baratas, una ejecución más eficiente o un mecanismo de governance para la comunidad, el smart contract podría migrarse a un runtime de una parachain dedicads con su propio slot. Los contratos ink! y los runtime de Substrate están ambos escritos en Rust y comparte primitivas similar, esto permite un camino claro para pasar de un smart contract a un runtime propio. Los desarrolladores pueden reutilizar largaas partes del código, sus tests, asi como su frontend y su código cliente.


![](/img/ink-gateway.jpg)

## Smart Contracts vs. Parachains

Una de las primeras preguntas que normalmente recibimos cuando alguien empieza a aprender Substrate, Polkadot, o Kusama es cuendo desarrollar su propia parachain vs. cuando desarrollar un smart contract.

La distinción aquí es que en el contexto de Polkadot y Kusama es que una parachain alquila un slot desde un par de meses hasta dos años. El trato con un contrato de arrendamiento es que el parachain obtiene un slot fijo para ejecutar su lógica de negocio (típicamente referido como su _state transition function_) y puede persistir su estado modificado en un bloque. En terminología Substrate esta state transition function se conoce como el _runtime_ de la cadena.

La distinción con otros ecosistemas aquí es que, en el contexto de Polkadot, parachains y smart contracts existen en distintas capas del stack: _smart contracts existen sobre las parachains_. Las parachains normalmente se describen como layer-1 blockchains ‒ exceptuando que no tienen que contruir su propia seguridad, son actualizables e interoperables.

Es de destacar que la state transition function de una parachain no se valida más ‒ depende de la parachain el como utilizar su tiempo del slot. La parachain ya pre paga por su slot cuando gana la subasta del slot en Polkadot o Kusama. Esto significa que la parachain puede construir su propio (blockchain) mundo! Por ejemplo, puede decidir como las fees de las transacciones se pagan - o incluso si las fees de las transacciones se tienen que pagar. Estas opciones son cruciales cuando se construyen modelos comerciales nuevos o más fáciles de usar. Otros factores distintivos entre parachains que observamos en la naturaleza son diferencias en cómo funciona la gobernanza o la criptoeconomía. Aún asi existen algunas restricciones en como una parachain pueden construir su propio mundo. Al igual que la física en el mundo real, tienen que adherirse a ciertas reglas básicas. Para Polkadot y Kusama esto es por ejemplo el algoritmo de consenso para la Relay Chain y su comunicación con la parachain. De esas reglas básicas surgen las ventajas de Polkadot y Kusama. Ventajas como la seguridad compartida antes mencionada, la comunicación entre cadenas o el tiempo de ejecución garantizado.

Por otro lado para los smart contracts, una parachain existente tiene que incluir el`pallet-contracts` para que los usuarios puedan desplegar smart contracts. El smart contract desplegado es siempre código no confiable. Cualquiera (o cualquier programa) que tiene tokens de la cadean puede subir un smart contract sin necesidad de pedir permiso.Los Smart contracts permiten deployments _permisionless_ de programas _untrusted_ en la blockchain. El `pallet-contracts` tiene que asumir que estos programas son antagónicos, tiene que establecer una serie de pilares de seguridad para garantizar que el contrato no pueda, por ejemplo detener la cadena o provocar la corrupción estatal de otros contratos. Para el `pallet-contracts` estos pilares de seguridad incluyen mecanismos como la medición de gas o depósitos para almacenar datos en la cadena.

_Para reafirmar esta importante distinción: desarrollar el runtime de una parachain runtime es diferente a desarrollar un smart contract ‒ el smart contract existe encima de un parachain_.

La ventaja es que con una parachain uno tiene la libertad de decidir en (prácticamente) todas las reglas que hacen la parachain. Con un smart contract uno está limitado por lo que permite la cadena y los pilares de seguridad que necesariamente tienen que estar en el lugar. Un smart contract nunca puede ser tan rápido como un pallet nativo contruido en el runtime de una parachain ‒ hay demasiada lógica en el medio.
Por otro lado un smart contract tiene menos fricción para desarrollarlo y desplegarlo. Los desarrolladores no tienen que ocuparse de la gobernanza, la criptoeconomía, etc. Uno solo necesita algunos tokens y puede seguir su camino feliz implementando un contrato inteligente. Es tan simple como eso.

![](/img/es/smart-contract-vs-parachain.png)

