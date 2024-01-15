---
title: Estructura del storage
slug: /datastructures/storage-layout
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Estructura del storage

A los autores de smart contracts se les da cierta flexibilidad respecto a cómo ellos quieren organizar la estructura de storage de sus smart contracts.
Profundicemos sobre los conceptos detrás del storage de ink! para comprender mejor algunas de sus implicaciones y limitaciones.

## Organización del storage

El siguiente esquema representa el storage que es expuesto a ink! por el contract pallet:

<div class="schema">
    <img src="/img/kv.svg" alt="Organización del storage: estructura" />
</div>

Los datos de storage siempre se codifican con el codec
[`SCALE`](https://docs.substrate.io/reference/scale-codec/).
La API de storage funciona guardando y cargando registros en y desde celdas de storage únicas, donde se accede a cada celda de storage con su propia storage key. Hasta cierto punto, la API del storage funciona de manera similar a una base de datos key-value tradicional.

## Estructura Packed vs Non-Packed

Los tipos que se pueden guardar completamente en una sola celda de storage se consideran [`Packed`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html).
Por default, ink! intenta guardar todos los campos de struct de storage en una única celda de storage.
En consecuencia, con una estructura de storage `Packed`, cualquier mensaje que interactúe con el storage del contrato siempre necesitará operar en todo el struct de storage del contrato.

Por ejemplo, si tenemos un struct de storage relativamente pequeño que consiste de unos pocos campos diminutos, obtener todo desde el storage en cada mensaje no es problemático. Quizás hasta sea favorable - especialmente si esperamos que la mayoría de los mensajes interactúen con la mayoría de los campos del storage.

Por otro lado, esto puede ser problemático si estamos guardando un gran `ink::prelude::vec::Vec` en el storage del contrato pero provee mensajes que no necesitan ser leídos y escritos de este `Vec`. En ese escenario, todos y cada uno de los mensajes del contrato sufre de un overhead de ejecución al tratar con ese `Vec`, independientemente de si acceden a él o no. Esto resulta en costos de gas extra. Para resolver este problema necesitamos transformar nuestro storage en una estructura non-packed de algún modo.

:::caution

Si algún tipo que muestra estructura `Packed` se hace lo suficientemente grande (un `Vec` en crecimiento constante podría ser un candidato perfecto para esto), romperá el contrato. Esto sucede porque para codificar y decodificar elementos del storage, hay un buffer con solamente capacidad limitada (alrededor de 16KB en la configuración por default) disponible. Esto significa que cada contrato que intente decodificar más que eso lanzará un error. Si uno no está seguro del tamaño potencial que pueda adquirir una estructura de datos, se debería considerar usar un ink! `Mapping`, que puede guardar un número arbitrario de elementos en cambio.

:::

## Eager Loading vs. Lazy Loading

ink! provee medios para dividir el storage en partes más pequeñas, que pueden ser cargadas a demanda, con la primitiva [`Lazy`](https://paritytech.github.io/ink/ink/storage/struct.Lazy.html). Envolver cualquier campo dentro de un struct `Lazy` hace que el struct de storage en el cual ese campo aparezca también sea non-`Packed`, evitando que sea cargado anticipadamente durante operaciones de storage arbitrarias:

<div class="schema">
    <img src="/img/storage-layout.svg" alt="Organización del storage: estructura con un campo lazy" />
</div>

Tener en cuenta que en la ilustración de arriba, la key `0x12345678` sólo sirve como ejemplo, aprenderemos más sobre cálculo de storage key
[en este capítulo](/datastructures/storage-layout#generación-de-key-manual-vs-automática).

El siguiente ejemplo demuestra cómo podemos resolver el problema presentado en la sección anterior. Se verá que para el campo de storage cargado de manera lazy, ahora trabajamos con getters y setters para tener acceso y modificar el valor de storage interno:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod mycontract {
    use ink::prelude::vec::Vec;
    use ink::storage::Lazy;

    #[derive(Default)]
    #[ink(storage)]
    pub struct MyContract {
        tiny_value: Balance,
        /// Este vector puede volverse grande y caro para utilizarlo.
        /// Queremos forzar una estructura de storage non-`Packed`
        large_vec: Lazy<Vec<Balance>>,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        /// Este mensaje siempre es barato ya que `large_vec` es cargado de forma lazy.
        #[ink(message)]
        pub fn get_balance(&self) -> Balance {
            self.tiny_value
        }

        /// Los campos lazy como `large_vec` proveen los operadores de storage `get()` y `set()`. 
        #[ink(message)]
        pub fn add_balance(&mut self, value: Balance) {
            let mut balances = self.large_vec.get_or_default();
            balances.push(value);
            self.large_vec.set(&balances);
        }
    }
}
```

:::caution

Los `ink::prelude::vec::Vec` son siempre cargados en su totalidad. Esto sucede porque todos los elementos del `ink::prelude::vec::Vec` existen en una sola storage key. Si se envuelve el `ink::prelude::vec::Vec` dentro del `Lazy`, como muestra el ejemplo de arriba, no tiene influencia en su estructura interior. Si se está tratando con arrays grandes o dispersos en storage de contratos, se debería considerar usar un `Mapping` en cambio.

:::

## Generación de key Manual vs. Automática 

Por defecto, las keys son calculadas automáticamente, gracias a la primitiva [`AutoKey`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.AutoKey.html). Estas serán generadas en tiempo de compilación y descartadas de conflictos.
Sin embargo, para tipos non-`Packed` como `Lazy` o `Mapping`, la primitiva [`ManualKey`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.ManualKey.html) permite un control manual sobre la storage key de un campo, así:

```rust
#[ink(storage)]
pub struct MyContract {
    /// La storage key para este campo siempre es `0x0000007f`
    inner: Lazy<bool, ManualKey<127>>,
}
```

Esto puede ser ventajoso: Su key de storage será siempre la misma, independientemente de la versión de su contrato o de ink! en sí mismo (Tenga en cuenta que el algoritmo de cálculo de la key puede cambiar con futuras versiones de ink!).

:::tip

El uso de una `ManualKey` en vez de una `AutoKey` puede ser específicamente deseable para contratos actualizables, ya que usar `AutoKey` puede resultar en una storage key diferente para el mismo campo en una nueva versión de contrato. Esto puede romper su contrato luego de una actualización 😱!

:::

La key del storage de la struct del storage raíz del contrato tiene como valor default `0x00000000`. Sin embargo, los desarrolladores pueden definir la key como un valor arbitrario de 4 bytes al proveer una `ManualKey` así: 

```rust
/// Definición manual de la root storage key de `MyContract` para que sea `0xcafebabe`.
#[ink(storage)]
pub struct MyContract<KEY: StorageKey = ManualKey<0xcafebabe>> {
    value: bool,
}
```

## Consideraciones

Sería conveniente pensar cual es la estructura de storage deseada para un contrato. Si usamos una estructura `Packed` se mantendrá el tamaño del código general del contrato más pequeño lo cual puede ocasionar altos costos de gas innecesarios. Por lo tanto, consideramos una buena práctica dividir estructuras de storage grandes o complejas en distintas celdas de storage de tamaño razonable.

:::note

Los `Mapping` de ink! son siempre non-`Packed` y cargados de manera lazy, un par key-value por vez.

:::