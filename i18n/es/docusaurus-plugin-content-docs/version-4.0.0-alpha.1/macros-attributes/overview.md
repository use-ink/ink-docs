---
title: Introducción
slug: /macros-attributes
---

Un módulo ink! es un módulo que está marcado por `#[ink::contract]` y que contiene todas las definiciones de ink!.
Todos los atributos de ink! están disponibles para especificarlos dentro de un módulo de ink!.
All ink! attributes are available to specify inside an ink! module.

## Fusionando Atributos

Es posible fusionar atributos que compartan una entidad marcada común.
El ejemplo a continuación demuestra esto en un mensaje de pago con un selector personalizado.

```rust
#[ink(message)]
#[ink(payable)]
#[ink(selector = "0xCAFEBABE")]
pub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {
    // implementación actual
}
```
También podemos escribir la definición del mensaje ink! de arriba de la siguiente manera:
```rust
#[ink(message, payable, selector = "0xCAFEBABE")]
pub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {
    // implementación actual
}
```


