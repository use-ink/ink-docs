---
title: "#[ink(namespace = \"…\")]"
slug: /macros-attributes/namespace
hide_title: true
---

<img src="/img/title/text/namespace.svg" className="titlePic" />

Aplicable a los bloque de implementación de ink! trait.

Aplicado en bloques de implementación de ink! traits para eliminar la ambigüedad de otros
bloques de implementación trait con nombres iguales.

## Ejemplo

```rust
#[ink(namespace = "my_namespace")]
impl MyTrait for MyStorage {
    #[ink(message)]
    fn my_message(&self) {}
}
```
Estos cambia los selectores resultantes de todos los mensajes y  constructores ink! dentro de la implementación trait.
Permitiendo así la desambiguación entre implementaciones trait con mensajes superpuestos o nombres de constructores.
