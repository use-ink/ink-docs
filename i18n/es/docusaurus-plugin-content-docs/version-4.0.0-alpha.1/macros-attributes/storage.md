---
title: "#[ink(storage)]"
slug: /macros-attributes/storage
---

Aplicable a las definiciones `struct`. 

Aplicado en tipos `struct` para marcarlos por 
ser la definición del storage del contrato.
Solo puede ser la definición del storage ink! del contrato.


Tiene que haber exactamente un struct `#[ink(storage)]`.

El struct define el diseño del storage donde el smart contract ink! opera.
El usuario puede utilizar una variedad de facilidades built-in, combinandolos de varias maneras
o incluso proveendo sus propias implementaciones de las estructuras de datos del storage.

Para más información visita la documentación del crate `ink_storage`.

## Ejemplo


```rust
use ink_lang as ink;

#[ink::contract]
mod flipper {

    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        #[ink(constructor)]
        pub fn construct() -> Self { Flipper { value: false } }

        #[ink(message)]
        pub fn message(&self) {}
    }
}
```
