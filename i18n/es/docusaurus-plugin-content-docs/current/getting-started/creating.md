---
title: Crear un proyecto ink!
slug: /getting-started/creating-an-ink-project
hide_title: true
---

<img src="/img/title/heart.svg" className="titlePic" />

# Crear un proyecto ink!

ink! es un [Lenguaje específico de dominio incorporado](https://wiki.haskell.org/Embedded_domain_specific_language) (EDSL) que puedes utilizar para escribir smart contracts basados en WebAssembly con el lenguage de programación Rust.

ink! es solo estándar Rust con un "formato de contrato" bien definido con attribute macros `#[ink(…)]` especializadas. Estos attribute macros le especifican a ink! que representan las diferentes partes que un smart contract en Rust representan, y finalmente permite a ink! hacer toda la magia necesaria para crear Wasm bytecode compatible con Substrate!

Utiliza ink! CLI para generar un smart contract inicial con código de ejemplo.

Asegurate que estas en tu directorio de trabajo y ejecuta:

```bash
cargo contract new flipper
```

Este comando crea una nueva carpeta en el proyecto llamada `flipper` con este contenido:

```
flipper
  └─ lib.rs                <-- Código fuente del Contrato
  └─ Cargo.toml            <-- Dependencies Rust y Configuración ink! 
  └─ .gitignore
```

## Código fuente del Contrato

El CLI de ink generara automaticament el código fuente para el contrato "Flipper", que es el smart contract más simple que puedes construir. Puede echar un vistazo a lo que vendrá mirando el código fuente aquí:

[Flipper Código fuente de ejemplo](https://github.com/paritytech/ink/blob/v3.0.0-rc8/examples/flipper/lib.rs)

El contrato Flipper no es más que un `bool` que cambia de `true` a `false` mediante la función `flip()` . 

## Prueba tu contracto

Al final del código fuente verás un simple test case que verifica la funcionalidad del contrat. Podemos probar rápidamente que este código esta funcionando como se espera utilizando el **off-chain test environment** que ink! proporciona.

En la carpeta de tu proyecto ejecuta:

```bash
cargo test
```

Verás la ejecución satisfactoria del test:

```bash
$ cargo test
running 2 tests
test flipper::tests::it_works ... ok
test flipper::tests::default_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```
Ahora que estamos seguros de que todo funciona, podemos compilar este contrato en Wasm en el siguiente paso.


