---
title: Cómo funciona ‒ Substrate
slug: /como-funciona
---

<div class="schema">
    <img src="./../img/how-it-works.svg" alt="How it Works" />
</div>

El [Framework for Runtime Aggregation of Modularised Entities (FRAME)](https://docs.substrate.io/v3/runtime/frame/)  de Substrate contiene un módulo que implementa una API para funciones que típicamente necesta un smart contract (información de cuentas, guardado (storage), ...).
Este módulo se llama el pallet `contracts`, y su repositorio se puede encontrar [acá](https://github.com/paritytech/substrate/blob/master/frame/contracts/README.md).

El pallet `contracts` require que los smart contracts sean deployados/lanzados en el blockchain como código Wasm.

ink! es un lenguage de smart contracts que está adapato a la API expuesta por el pallet `contracts`. Por eso, ink!
es compilable a Wasm.

Cuando se ejecuta `cargo contracts build`, un archivo adicional es creado: `metadata.json`. Este arrchivo contiene 
información acerca de qué métodos el smart contrract provee para que otros contractos puedan llamar.

