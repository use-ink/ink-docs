---
title: Estructuras de Datos Personalizadas
slug: /datastructures/custom-datastructure
---

Mientras que el crate `ink_storage` proporciona toneladas de utilidades útiles y estructuras de datos para organizar y manipular el storage del contrato, los
autores del contrato no están limitados por sus capacidades. Al implementar el núcleo de los traits `SpreadLayout`/`PackedLayout` (y el trait `StorageLayout` 
para soportar el metadata generado por el bundle `.contract`) los usuarios son capaces de definir sus propias estructuras de datos personalizadas con su conjunto de requerimientos y features que funcionen con las estructuras de datos del `ink_storage` mientras que cumplan los meros requisitos establecidos por esos dos traits.

A continuación se muestra un ejemplo básico de un struct personalizado:

``` rust
struct Inner {
    value: bool
}

#[ink(storage)]
pub struct MyContract {
    inner: Inner
}
```

Compilar el código anterior dará como resultado errores. Mientras que tener un inner struct que solo contiene un booleano puede no ser la mejor idea, funciona bien para ilustrar como implementar el trait:

``` rust
impl SpreadLayout for Inner {
    const FOOTPRINT: u64 = 1;

    fn pull_spread(ptr: &mut KeyPtr) -> Self {
        Self {
            value: SpreadLayout::pull_spread(ptr),
        }
    }

    fn push_spread(&self, ptr: &mut KeyPtr) {
        SpreadLayout::push_spread(&self.value, ptr);
    }

    fn clear_spread(&self, ptr: &mut KeyPtr) {
        SpreadLayout::clear_spread(&self.value, ptr);
    }
}

```

Puedes comprobar que hace cada método en los [trait's docs](https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.SpreadLayout.html). Comprueba como algunas estructuras de datos están implementadas, como [Mapping](https://docs.rs/ink_storage/3.3.1/src/ink_storage/lazy/mapping.rs.html#113).
