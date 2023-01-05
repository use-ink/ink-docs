---
title: Mutando Valores del Storage
slug: /basics/mutating-values
---

Es hora de modificar el storage!

## Funciones Mutables e Inmutables

Te habras dado cuenta que la función plantilla incluye `self` como el primer parámetro de las funciones del contrato.
Es a través de `self` que tienes acceso a todas las funciones del contrato y los elementos almacenados.

Si simplemente estas _leyendo_ del storage del contrato, solamente tiene que pasar `&self`. Pero si quieres
_modificar_ elementos del storage, tienes que marcarlo explicitamente como mutable, `&mut self`.

```rust
impl MyContract {
    #[ink(message)]
    pub fn my_getter(&self) -> u32 {
        self.my_number
    }

    #[ink(message)]
    pub fn my_setter(&mut self, new_value: u32) {
        self.my_number = new_value;
    }
}
```
