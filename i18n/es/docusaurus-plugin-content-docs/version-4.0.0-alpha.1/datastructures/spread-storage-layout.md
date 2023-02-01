---
title: Diseño Extendido del Storage
slug: /datastructures/spread-storage-layout
---

### Organización del Storage

El siguiente esquema representa el storage que se expone a ink!
por el pallet contracts:

<div class="schema">
    <img src="/img/kv.svg" alt="Storage Organization: Layout" />
</div>

El storage de ink! opera almacenando y cargando las entradas en y desde una única celda 
del storage. En este momento no hay manera de personalizar este comportamiento. Dependiendo en 
los datos que estamos manejando, esto puede terminar siendo bueno o malo.

Pr ejemplo, si tenemos un pequeño `ink_prelude::vec::Vec` cargando todos los elementos
a la vez esto puede ser ventajoso - especialmente si esperamos que nuestro mensaje para interactuar
con la mayoria de ellos en una única llamada.

Por otro lado, esto puede ser un problema si estamos cargando un `Vec` largo y solo estamos 
operando con unos pocos elementos.

### Propagando

ink! propaga la información a tantas células como sea posible. Por ejemplo si tienes el
siguiente struct `#[ink(storage)]` cada campo vivira en su propia única celda del storage.
Date cuenta que para `b` todos los 32 bytes compratiran la misma celda!

```rust
#[ink(storage)]
pub struct Spread {
    a: i32,
    b: [u8; 32],
}
```

El siguiente esquema representa el diseño del storage para un vector con tres elementos,
persistentes al storage en un diseño extendido.

<div class="schema">
    <img src="/img/spread.svg" alt="Storage Organization: Spreading" />
</div>
