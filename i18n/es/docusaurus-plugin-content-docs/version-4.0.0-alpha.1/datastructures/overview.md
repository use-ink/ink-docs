---
title: Introducción
slug: /datastructures/overview
---

El crate `ink_storage` actua como la librería de storage estándar para ink! smart contracts. En
este momento solo proporciona una única primitiva de bajo nivel para interactuar con el storage,
el [`Mapping`](https://docs.rs/ink_storage/3.3.1/ink_storage/struct.Mapping.html).

El `Mapping` es un mapping de pares clave-valor directamente con el storage del contrato. Su principal
ventaja es que es simple y ligero. Como tal, no proporciona ninguna funcionalidad de alto nivel, 
como la iteración o la limpieza automática. Los autores de smart contracts deberan implementar
cualquier funcionalidad de alto nivel ellos mismos.

## Carga impaciente

Cuando se ejecuta un contrato, todos los campos del strust `#[ink(storage)]` struct se extraerán del almacenamiento, 
independientemente de si se utilizan o no durante la ejecución del mensaje.

Los autores de smart contract deben ser conscientes de este comportamiento desde que potencialmente
puede afectar al rendimiento del contrato. Por ejemplo, consideta el siguiente storage struct: 

```rust
#[ink(storage)]
pub struct EagerLoading {
    a: i32,
    b: ink_prelude::vec::Vec<i32>,
}

impl EagerLoading {
    #[ink(message)]
    pub fn read_a(&self) {
        let a = self.a;
    }
}
```

En `EagerLoading::read_a()` solo leemos el storage item `a`. Sin embargo, el storage item `b` 
igualmente sera cargado desde el storage. Como recordatorio, esto significa acceder la base de datos
subyancente y decodificar con SCALE el valor. Esto puede incurrir en altos costes, especialmente
a medida que crece el número de elementos en `b`.

:::note

Carga impaciente **no** aplica a los campos `Mapping`, sin embargo, como las búsquedas clave en las asignaciones 
se realizan directamente desde el storage del contrato.

:::
