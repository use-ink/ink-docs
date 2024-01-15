---
title: Contract Debugging
slug: /basics/contract-debugging
hide_title: true
---

<img src="/img/title/magnifying-glass.svg" className="titlePic" />

# Debugging del Contrato

Actualmente existen tres maneras de debuggear tu contrato ink!:
* Puedes escribir test utilizando uno de los mecanismos descritos en la página [Testing del Contrato](/basics/contract-testing).
* Puedes interactuar con tu contrato via UI o línea de comandos. Esto está descrito en 
  la página [Ejecute su Contrato](/getting-started/calling-your-contract).
* Puedes imprimir declaraciones de la depuración en su contrato. Estas apareceran en el nodo de Substrate `stdout`. Esto está descrito en esta página.

### ¿Cómo imprimo algo en la consola desde el runtime?

Puedes elegir entre estos dos macros:
* [`ink::env::debug_println!`](https://docs.rs/ink_env/4.0.0/ink_env/macro.debug_println.html)
* [`ink::env::debug_print!`](https://docs.rs/ink_env/4.0.0/ink_env/macro.debug_print.html)

Tienes que hacer tres cosas para poder mostrar en la consola los mensajes de debug:

1. __Permitir la feature `pallet-contracts/unstable-interface` en el runtime.__<br/>
   Para `substrate-contracts-node` esto esta hecho por defecto [aquí](https://github.com/paritytech/substrate-contracts-node/blob/master/runtime/Cargo.toml).

1. __Permitir la feature `ink-debug` para el crate `ink_env`.__<br/>
   `cargo-contract` hace esto automaticamente para ti (para versiones `>= 0.13.0`), excepto si compilas un contrato en modo `--release`.

1. __Establecer el nivel de log de su nodo en `runtime::contracts=debug`.__<br/>
   Por ejemplo, para que aparezcan solo los errores y el output del debug en el `substrate-contracts-node`:
  ```
  substrate-contracts-node -lerror,runtime::contracts=debug
  ```

## Ejemplo

El siguiente código muestra cómo imprimir declaraciones de depuración desde un mensaje o un constructor.

```rust
#[ink(constructor)]
fn new() -> Self {
    ink::env::debug_println!("created new instance at {}", Self::env().block_number());
    Self { }
}

#[ink(message)]
fn print(&self) {
   let caller = self.env().caller();
   let message = ink_prelude::format!("got a call from {:?}", caller);
   ink::env::debug_println!(&message);
}
```


:::note
El debug output no se imprime para transaciones!

Solo se imprime para llamadas RPC o tests off-chain.
:::
