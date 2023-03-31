---
title: Trabajando con Mapping
slug: /datastructures/mapping
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Trabajando con Mapping

En esta sección demostramos como trabajar con ink! [`Mapping`](https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html).

Aquí vemos un ejemplo de un mapping entre un usuario y su `Balance`:

```rust
#[ink(storage)]
pub struct MyContract {
    /// Asigna un balance a cada cuenta.
    balances: ink::storage::Mapping<AccountId, Balance>,
}
```

Esto significa que para una clave dada, se puede almacenar una única instancia de un tipo de valor. En este caso, se le acredita a cada "usuario" su propio balance.

## Ejemplo: Usando un `Mapping`

El siguiente ejemplo de contrato utiliza un `Mapping` para que cualquiera pueda depositar y retirar el balance de su propia cuenta:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod mycontract {
    use ink::storage::Mapping;

    #[ink(storage)]
    pub struct MyContract {
        /// Asigna un balance a cada AccountId
        balances: Mapping<AccountId, Balance>,
    }

    impl MyContract {
        /// Constructor para inicializar el contrato con un mapping vacío.
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            let balances = Mapping::default();
            Self { balances }
        }

        /// Recuperar el balance de quien llama al mensaje.
        #[ink(message)]
        pub fn get_balance(&self) -> Option<Balance> {
            let caller = self.env().caller();
            self.balances.get(caller)
        }

        /// Acreditar más dinero al contrato. 
        #[ink(message, payable)]
        pub fn transfer(&mut self) {
            let caller = self.env().caller();
            let balance = self.balances.get(caller).unwrap_or(0);
            let endowment = self.env().transferred_value();
            self.balances.insert(caller, &(balance + endowment));
        }

        /// Retirar todo el balance del contrato.
        pub fn withdraw(&mut self) {
            let caller = self.env().caller();
            let balance = self.balances.get(caller).unwrap();
            self.balances.remove(caller);
            self.env().transfer(caller, balance).unwrap()
        }
    }
}

```

## Consideraciones al usar el tipo `Mapping`  

Uno de lo propósitos principales del `Mapping` de ink! es permitir el almacenamiento de muchos valores.

:::note

Hay muchas estructuras de datos adicionales accesibles a través de `ink::prelude::collections` 
tal como `HashMap` o `BTreeMap` (para mencionar algunos). Tener en cuenta que estas estructuras de datos exhiben el comportamiento de carga del storage `Packed`, a diferencia del `Mapping` ink!

:::

### Comportamiento de carga del Storage


Cada valor de `Mapping` tiene su propia key de storage. Esto significa que los `Mapping`s se cargan de manera diferida en ink!. En otras palabras, si su mensaje tiene acceso a una sola key de un mapping, no cargará el mapping completo sino sólo el valor al que se está teniendo acceso.

```rust
// Esto genera un solo acceso al storage y la decodificación de una sola struct "MyValue" 
// sin importar cuántos elementos hayan dentro del mapping.
let foo: MyValue = my_mapping.get(0)?;

for n in 0..5 {
    // Esto genera un solo acceso al storage y una decodificación para cada iteración.
    // No es posible "obtener" todos los pares de key/value directamente de una sola vez.
    let bar: MyValue = my_mapping.get(n)?;
}
```

Además, los valores del mapping no tienen una disposición de storage contiguo, y no es posible iterar el contenido de un map.


### Actualizando valores

El lector puede haber notado que el acceso a valores de mapping a través del método `Mapping::get()` dará como resultado un valor propio (copia local), a diferencia de una referencia directa dentro del storage. Los cambios en este valor no se verán reflejados "automáticamente" en el storage del contrato. Para evitar este error común, el valor debe ser insertado  nuevamente en la misma key luego de haber sido modificado. La función `transfer` del ejemplo anterior ilustra esto:

```rust
pub fn transfer(&mut self) {
    let caller = self.env().caller(); 
    // `balance` es un valor local y no una referencia al valor en el storage!
    let balance = self.balances.get(caller).unwrap_or(0);
    let endowment = self.env().transferred_value();
    // La siguiente línea de código no tendría ningún efecto en el balance guardado en el storage del contrato de la cuenta que llama:
    //
    // balance += endowment;
    //
    // En cambio, usamos la función `insert` de la siguiente manera para sobrescribirlo:
    self.balances.insert(caller, &(balance + endowment));
}
```