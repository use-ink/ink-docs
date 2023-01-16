---
title: "#[ink(constructor)]"
slug: /macros-attributes/constructor
---

Aplicable a un método.

Marca un método (o múltiples métodos) para el struc del ink! storage como contructor haciendo que este disponible
para la API de instanciación del contrato.

Tiene que haber al menos un método `#[ink(constructor)]` definido.

Los métodos marcados con `#[ink(constructor)]` son especiales ya que son dispatacble en el momento
de la instanciación del contrato. Un contrato puede definir múltiples constructores que permite al
los usuarios del contrato inicializar el contrato de diferentes maneras.


## Ejemplo

```rust
use ink_lang as ink;

#[ink::contract]
mod erc20 {
    #[ink(storage)]
    pub struct Erc20 { ... }

    impl Erc20 {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self { .. }

        #[ink(constructor)]
        pub fn total_supply(&self) -> Balance { .. }

        // etc.
    }
}
```
