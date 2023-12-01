---
title: Compilar tu Contrato
slug: /getting-started/building-your-contract
hide_title: true
---

<img src="/img/title/cargo-contract.svg" className="titlePic" />

# Compilar tu Contrato

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
    └─ flipper.json
```

Vamos a ver la estructura de `flipper.json`:

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

## Debug vs. Release Build

Por defecto, `cargo-contract` compilará el contrato en modo debug. Esto significa
wue el contrato imprimirá declaraciones como

```rust
ink::env::debug_println!("magic number: {}", value);
```
en la consola del nodo si debugging ha sido activado ([instrucciones aquí](/faq#how-do-i-print-something-to-the-console-from-the-runtime)).
Para incluir esta funcionalidad la compilación en modo debug de un contrato incluye
lógica más pesada.

De manera que los contratos que sean ejecutados en producción deberán ser compilados
con la opción `--release`:

```bash
cargo contract build --release
```
Esto se encargará de que nada que no sea necesario sea compilado en el Wasm blob,
haciendo el contrato más rápido y barato de desplegar y ejecutar.

:::info
`cargo-contract` imita así el comportamiento de `cargo` con programas Rust:
la opción `--release` necesita pasarse explicitamente a `cargo build`.
:::