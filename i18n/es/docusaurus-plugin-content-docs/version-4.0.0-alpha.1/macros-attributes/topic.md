---
title: "#[ink(topic)]"
slug: /macros-attributes/topic
---

Aplicado a los campos de los tipos de los eventos ink! para indicar que son temas.

Le dice al codegen de ink! que para proporcionar un hash de tema para el campo dado. Cada evento de ink! solo puede tener un número 
limitado de dicho campo de tema. La semántica es similar a los argumentos de eventos indexados en Solidity.


## Ejemplo

```rust
#[ink(event)]
pub struct Transferred {
    #[ink(topic)]
    from: Option<AccountId>,

    #[ink(topic)]
    to: Option<AccountId>,

    amount: Balance
}
```
