---
title: Plantilla de un Contrato
slug: /basics/contract-template
---

Cambia tu directorio de trabajo y arranca:

```bash
cargo contract new foobar
```

Esto creara una nueva carpeta para el proyecto llamada `foobar`.

```bash
cd foobar/
```

En el fichero `lib.rs` encontraras un código `scaffolded` inicial, que podrás utilizar como punto de inicio.

Rápidamente comprueba si compila y pasa los test triviales con:

```bash
cargo +nightly test
```

Y comprueba que puedes construir el fichero Wasm arrancando:

```bash
cargo +nightly contract build
```
Si todo esta bien, entonces estamos preparados para comenzar a programar!