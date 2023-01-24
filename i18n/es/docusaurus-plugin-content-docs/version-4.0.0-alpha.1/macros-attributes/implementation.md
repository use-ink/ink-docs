---
title: "#[ink(impl)]"
slug: /macros-attributes/impl
---

El atributo soporta un caso de nicho que rara vez se necesita.

Se puede aplicar a un bloque de implementación en ink! para hacer que ink! sea consciente de ellos.
Esto puede ser útil si el bloque de implemtación no contiene ningún otro atributo ink!,
por lo que sera marcado por ink! como un item de Rust.
Añadiendo `#[ink(impl)]` en este bloque de implementación hace que sea tratado como 
un bloque de implementación ink! permitiendo así acceder al entorno, etc.

Date cuenta que los mensajes y constructores ink! necesitan ser marcados explicitamente como tal.


## Ejemplo

Un bloque de implementación puede definirse como una implementación trait para 
el struct storage de ink! utilizando la anotación `#[ink(impl)]`  ‒ 
incluso si ninguno de los items interiores tiene ningún atributo ink! específico:

```rust
use core::convert::TryFrom;
use ink_lang_ir as ir;

#[ink::contract]
mod my_module {
    #[ink(storage)]
    pub struct MyStorage {
        /* campos storage */
    }

    #[ink(impl)]
    impl MyStorage {
        fn my_method(&self) -> i32 {
            /* Implementación del metodo */
        }
    }

    impl MyStorage {
      #[ink(constructor)]
      pub fn my_constructor() -> Self {
          /* implementación del constructor */
      }

      #[ink(message)]
      pub fn my_message(&self) {
          /* implementación del mensaje */
      }
    }
}
```
