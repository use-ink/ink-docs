---
title: Compilar tu Contrato
slug: /getting-started/building-your-contract
---

Ejecuta el siguiente comando en tu directorio `flipper` para compilar tu smart contract:

```bash
cargo contract build
```

Este comando construirá lo siguiente para tu contrato: un binario Wasm, un fichero metadata (el cual el ABI del contrato) y un fichero `.contract` que agrupa a ambos. Este fichero `.contract` puede ser utilizado para desplegar el contrato en una red. Si todo va bien, deberías ver una carpeta `target` que contiene estos ficheros:

```
target
  └─ ink
    └─ flipper.contract
    └─ flipper.wasm
    └─ metadata.json
```

Vamos a ver la estructura de `metadata.json`:

```json
{
  "metadataVersion": "0.1.0",
  "source": {...},
  "contract": {...},
  "spec": {
    "constructors": [...],
    "docs": [],
    "events": [],
    "messages": [...],
  },
  "storage": {...},
  "types": [...]
}
```

Este fichero describe todas las interfaces que pueden ser utilizadas para interactuar con tu contrato:

* `types` proporciona el personalizado **data types** utilizado en el resto del fichero JSON.
* `storage` define todos los items **storage** controlados por tu contrato y como acceder a ellos. 
* `spec` almacena información sobre las funciones invocables como **constructors** y **messages**, un usuario 
puede llamarlas para interaccionar con el contrato. También tiene información que puede ayudar como los **events**
que son emitidos por el contrato o cualquier **docs**.

Si miras de cerca a los constructors y los messages también verás un `selector` que contiene un hash de 4-bytes del nombre de la función
y que es utilizado para enrutar las llamadas de tu contrato a las funciones correctas.

En la siguiente sección arrancaremos un [Substrate Smart Contracts node](https://github.com/paritytech/substrate-contracts-node)
y configuraremos el [Contracts UI](https://github.com/paritytech/contracts-ui) para interactuar con el.

<div class="translateTodo">
## Debug vs. Release Build

By default, `cargo-contract` builds the contract in debug mode. This means
that the contract will e.g. print statements like

```rust
ink::env::debug_println!("magic number: {}", value);
```

to the node's console if debugging was enabled on the node ([instructions here](/faq#how-do-i-print-something-to-the-console-from-the-runtime)).
To support functionality like this the debug build of a contract includes some
heavy-weight logic.

For contracts that are supposed to run in production you should always build the
contract with `--release`:

```bash
cargo contract build --release
```

This will ensure that nothing unnecessary is compiled into the Wasm blob, making
your contract faster and cheaper to deploy and execute.

:::info
With this behavior `cargo-contract` mirrors how `cargo` behaves for Rust programs:
the `--release` flag has to be passed explicitly to `cargo build`.
:::
</div>