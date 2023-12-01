---
title: Estructuras de Datos Personalizadas 
slug: /datastructures/custom-datastructure
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Estructuras de Datos Personalizadas 

El crate `ink_storage` provee servicios útiles y estructuras de datos para organizar y manipular el storage del contrato. Sin embargo, los autores de contratos deberían saber que ellos pueden crear sus propias estructuras de datos personalizadas.


## Usando tipos personalizados en storage
Cualquier tipo personalizado que quiera ser compatible con el  storage de ink! debe implementar el trait [`Storable`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Storable.html), así puede ser [`codificado`](https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Encode.html) y [`decodificado`](https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Decode.html) mediante SCALE. Además, los traits [`StorageLayout`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.StorageLayout.html) y [`TypeInfo`](https://docs.rs/scale-info/2.3.1/scale_info/trait.TypeInfo.html) también son requeridos. Pero no se preocupe, generalmente estos traits pueden ser derivados:

```rust
/// Un tipo personalizado que podemos usar en nuestro storage del contrato
#[derive(scale::Decode, scale::Encode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct Inner {
    value: bool,
}

#[ink(storage)]
pub struct ContractStorage {
    inner: Inner,
}
```

Aún mejor: existe una macro [`#[ink::storage_item]`](https://docs.rs/ink_macro/4.0.0/ink_macro/attr.storage_item.html), que deriva todos los traits necesarios. Si no hay necesidad de implementar un comportamiento especial, el código anterior puede ser simplificado de la siguiente manera:

```rust
/// Un tipo personalizado que podemos usar en nuestro storage del contrato
#[ink::storage_item]
pub struct Inner {
    value: bool,
}

#[ink(storage)]
pub struct ContractStorage {
    inner: Inner,
}
```

Naturalmente, uno además puede implementar cualquier característica manualmente. Por favor, consulte directamente la documentación relevante de traits para más información.

:::note

La macro `#[ink::storage_item]` es responsable del cálculo de la storage key de los tipos non-[`Packed`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html). Sin esta, la key para campos non-`Packed` será cero. Usar esta macro es necesario si no se planea usar una [`ManualKey`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.ManualKey.html) en un tipo non-`Packed`.

Tipos con implementaciones personalizadas de storage de ink! pueden también usar esta macro solo para cálculos de key al habilitar los derivados: `#[ink::storage_item(derive = false)]`.

:::

## Campos de storage genéricos

Es posible usar tipos de datos genéricos en su storage, siempre y cuando cualquier tipo genérico satisfaga los limites requeridos del trait storage. De hecho, ya hemos visto esto en anteriores secciones sobre [`Mapping`](https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html).

Digamos que quiere un mapping que, al acceder a una key no existente, devuelva simplemente su valor predeterminado, similar a como los mappings trabajan en Solidity. Además, debe saber la cantidad de valores que hay en el mapping (la longitud). Esto puede ser implementado como un pequeño wrapper sobre ink! [`Mapping`](https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html) de la siguiente manera:

```rust
/// Los valores para este map deben implementar el trait `Default`.
/// Naturalmente, también deben ser compatibles con el storage del contrato.
/// Tener en cuenta que el tipo del `Mapping` solo soporta valores `Packed`.
#[ink::storage_item]
pub struct DefaultMap<K, V: Packed + Default> {
    values: Mapping<K, V>,
    length: u32,
}

impl<K: Encode, V: Packed + Default> DefaultMap<K, V> {
    /// El acceso a keys inexistentes retornará el valor predeterminado.
    pub fn get(&self, key: &K) -> V {
        self.values.get(key).unwrap_or_default()
    }

    /// La inserción en el map incrementa la longitud en uno.
    pub fn set<I, U>(&mut self, key: I, value: &U)
    where
        I: scale::EncodeLike<K>,
        E: scale::EncodeLike<V> + Storable,
    {
        if self.values.insert(key, value).is_none() {
            self.length += 1
        }
    }

    /// La eliminación de un valor del map disminuye la longitud en uno.
    pub fn remove(&mut self, key: &K) {
        if self.values.take(key).is_some() {
            self.length -= 1
        }
    }

    /// Devuelve la cantidad de valores que contiene el mapping
    pub fn len(&self) -> u32 {
        self.length
    }
}

/// `DefaultMap` es compatible con el storage del contrato.
#[ink(storage)]
pub struct MyContract {
    my_map: DefaultMap<BlockNumber, Balance>,
}
```

:::caution

Los tipos de datos genéricos pueden incrementar sustancialmente el tamaño del código de su contrato, generando mayores costos para almacenarlo on-chain.

La razón de esto es la ["monomorfización" de Rust](https://rustwasm.github.io/twiggy/concepts/generic-functions-and-monomorphization.html).

:::
