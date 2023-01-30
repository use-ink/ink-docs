---
title: "#[ink(message)]"
slug: /macros-attributes/message
---

Aplicable a métodos.
 
Marca un método para el struct storage de ink! como mensaje haciendo que este disponible para la API al llamar al contrato.

Date cuenta que todas las funciones públicas deben utilizar el atributo `#[ink(message)]`.

Al menos debe haber un método `#[ink(message)]` definido.

Los métodos marcados con `#[ink(message)]` son especiales de un modo que son dispatchables
en la invocación del contrato. El conjunto de mensajes de ink! definidos por los smart contract ink!
defined su superficie API con los usuarios que están permitidos interactuar.

Un smart contract de ink! puede tener multiples mensajes ink! definidos.

Un mensaje ink! con un receptor  `&self` solo puede leer el estado mientras un mensaje ink!
con un receptor `&mut self` puede mutar el storage del contrato.

```rust
#[ink(message)]
pub fn purely_reading(&self, from: AccountId) {
    // implementación actual
}

#[ink(message)]
pub fn mutates_storage(&mut self, from: AccountId) {
    // implementación actual
}
```


## Valor de retorno de los mensajes

El valor de returno de un mensaje tiene que implementar  `scale::Encode`.

Es notable que la colección bajo  `ink_storage` ‒ como por ejemplo `Vec` o `HashMap` ‒
no implementa `scale::Encode`. Esto quiere decir que no puedes solo retornar un `Vec` desde un mensaje ink!.
Esta restricción es intencional ‒ devolviendo una estructura de datos completa con un contenido potencialmente ilimitado
es un anti patrón para smart contracts. Simplemente piensa en como de impredecible serían los costes del gas.

Si tu _realmente_ necesitas devolver una estructura de datos entera entonces utiliza un de 
`ink_prelude` (e.g. `ink_prelude::vec::Vec`). Estas implementan `scale::Encode`.


## Ejemplo

Dada la definición del contrato `Flipper` de arriba añadimos las definiciones `#[ink(message)]`
como vemos a continuación:

```rust
#[ink::contract]
mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {

        #[ink(constructor)]
        pub fn new(initial_value: bool) -> Self {
            Flipper { value: false }
        }

        /// Voltea el valor actual.
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Devuelve el valor actual.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```
