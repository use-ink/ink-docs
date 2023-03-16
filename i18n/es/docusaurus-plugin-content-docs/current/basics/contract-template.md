---
title: Plantilla de un Contrato
slug: /basics/contract-template
hide_title: true
---

<img src="/img/title/macro.svg" className="titlePic" />

# Plantilla de un Contrato

En esta página cubriremos como crear un contrato básico y explicaremos
sus diferentes elementos.

## Creando la plantilla

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
cargo test
```

Y comprueba que puedes construir el fichero Wasm arrancando:

```bash
cargo contract build
```
Si todo esta bien, entonces estamos preparados para comenzar a programar!

## Template Content

## Contenido de la plantilla

La plantilla provee un esqueleto inicial con el que comenzar a escribir
un contrato ink!. A continuación veremos el contenido del fichero.
Los ficheros que tendrás localmente serán similares, en estos simplemente
hemos añadido comentarios explicativos.

### `Cargo.toml`

```toml
[package]
name = "foobar"
version = "0.1.0"
authors = ["[your_name] <[your_email]>"]
edition = "2021"

[dependencies]
# El crate `ink` contiene el eDSL de ink! y re-exporta
# otros crates specificos de ink!. Por ejemplo, `ink::env`
# es el crate `ink_env` que contiene funciones para
# interactuar con el entorno de un contrato (pedir información
# sobre el caller, el numero de bloque actual, etc.).
ink = { version = "4.0.0-beta", default-features = false }

# Las blockchains creadas con Substrate usan el codec SCALE
# para todo lo que tenga que ver con la codificación y decodificación
# de información. Si un contrato ink! es llamado, los valores
# que se hayan pasado tienen que ser SCALE-codificados y los
# valores que se devuelvan han de ser SCALE-decodificados. Todos
# los valores que son almacenados en un contrato son SCALE-codificados también.
scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }

# Este crate es usado para escribir información sobre los tipos
# de un contrato en su metadata (por ejemplo, su ABI). Esto es 
# necesario para que los clientes sepan requiere cada mensaje del contrato
# por ejemplo, un Array y que ha de SACLE-codificar los valores
# como un Array.
scale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }

[dev-dependencies]
# Esta dependencia es para el framework de tests End-to-End.
ink_e2e = { path = "../../crates/e2e" }

[lib]
name = "foobar"
path = "lib.rs"

# Con la siguiente configuración especificamos que el compilador ha de
# crear una librería dinámica. Aunque para WebAssembly especifica
# que el compilador debe crear un `*.wasm` sin función start.
crate-type = [
    "cdylib",
]

[features]
default = ["std"]
std = [
    "ink/std",
    "scale/std",
    "scale-info/std",
]
ink-as-dependency = []

# Esta feature es simplemente una convención, para que los tests
# end-to-end solo sean ejecutados si `cargo test` es explicitamente invocado
# con `--features e2e-tests`.
e2e-tests = []
```

### `lib.rs`

Cada contrato ink! necesita contener:

* Exactamente una estructura `#[ink(storage)]`.
* Al menos una functión `#[ink(constructor)]`.
* Al menos una función `#[ink(message)]`.

El código será algo similar al siguiente, aunque hemos cambiado
los comentarios para explicar qué está pasando a alto nivel.

```rust
// Si la feature `std` en el fichero `Cargo.toml` no está activada
// activamos  `no_std`, esta es la consecuencia de que la librería
// estandard de Rust no haya sido incluida en el contrato.
//
// La librería estandard de Rust depende del sistema operativo
// y Wasm es independiente de la arquitectura.
#![cfg_attr(not(feature = "std"), no_std)]

// Esta es la macro ink!, el punto inicial de tu contrato.
// Todo lo que está por debajo de ella parecerá código Rust,
// pero en realidad será ejecutado a través de un parser en ink!.
#[ink::contract]
pub mod flipper {
    /// Este es el storage del contrato.
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        /// Un contructor con el que el contrato puede ser inicializado.
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            /* --snip-- */
        }

        /// Un contructor alternativo con el que el contrato
        /// puede ser incializado.
        #[ink(constructor)]
        pub fn new_default() -> Self {
            /* --snip-- */
        }

        /// Una función que puede mutar el estado del contrato y es expuesta
        /// al mundo exterior.
        /// 
        /// Por defecto las funciones será privadas, habrá que anotarlas
        /// con `#[ink(message)]` y `pub` para que estén disponibles
        /// desde el exterior.
        #[ink(message)]
        pub fn flip(&mut self) {
            /* --snip-- */
        }

        /// Una función pública que no tendrá ningún efecto.
        /// 
        /// Cuando una función sea puramente de lectura pueden ser
        /// invocada enviando una transacción on-chain, normalmente
        /// esto no se hace ya que no tienen ningún efecto, y los
        /// costes de la transacción serían malgastados.
        /// Típicamente estas funciones serán invocadas via RPC
        /// para devolver el estado del contrato.
        #[ink(message)]
        pub fn get(&self) -> bool {
            /* --snip-- */
        }
    }

    #[cfg(test)]
    mod tests {
        use super::*;

        /// Este atributo denotaque el test es ejecutado en un entorno
        /// simulado. Hay funciones disponibles para influenciar como
        /// el entorno de testing será configurado (por ejemplo, 
        /// dando un balance específico a una cuenta).
        #[ink::test]
        fn default_works() {
            /* --snip-- */
        }

        /* --snip-- */
    }

    #[cfg(all(test, feature = "e2e-tests"))]
    mod e2e_tests {
        use super::*;
        use ink_e2e::build_message;

        type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;

        /// Con este atributo el contrato será compilado y desplegado
        /// en un nodo Substrate que necesariamente tendrá que estar ejecutandose.
        ///
        /// Ofrecemos funciones API que permiten a los desarrollardores interactuar
        /// con el contrato. ink! se encargará de crear transacciones con las
        /// llamadas que serán enviadas a la red Substrate.
        /// 
        /// Los desarrolladores pueden declarar aserciones en el resultado
        /// de sus transacciones, como comprobar mutaciones de estado, fallos
        /// o costes de gas.
        #[ink_e2e::test]
        async fn it_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
            /* --snip-- */
        }

        /* --snip-- */
    }
}
```