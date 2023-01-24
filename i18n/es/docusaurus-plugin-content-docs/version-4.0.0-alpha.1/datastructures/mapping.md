---
title: Trabajando con Mapping 
slug: /datastructures/mapping
---

En esta sección queremos demostrar como trabajar con ink! [`Mapping`](https://docs.rs/ink_storage/3.3.1/ink_storage/struct.Mapping.html).

Aquí tenemos un ejemplo de un mapping de un usuario a un número:

```rust
#[ink(storage)]
#[derive(SpreadAllocate)]
pub struct MyContract {
    // Store a mapping from AccountIds to a u32
    map: ink_storage::Mapping<AccountId, u32>,
}
```

Esto significa que dada una clave, puedes almacenar una única instancia de un tipo valor. En este
caso, cada "usuario" obtiene su propio número.

## Inicializar un Mapping

Para inicializar correctamente un `Mapping` necesitamos dos cosas:
1. Una implementación del trait [`SpreadAllocate`](https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.SpreadAllocate.html) en nuestro struct storage.
2. El inicializador [`ink_lang::utils::initalize_contract`](https://docs.rs/ink_lang/3.3.1/ink_lang/utils/fn.initialize_contract.html).

No inicializar el storage antes de utilizarlo es un error común que puede romper tu smart contract.
Si no inicializas tus `Mapping`'s correctamente puedes terminar con unos `Mapping`'s diferentes
operando en el mismo conjunto de entradas del storage 😱.

```rust

#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod mycontract {
    use ink_storage::traits::SpreadAllocate;

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct MyContract {
        // Almacena un mapping de AccountIds a u32
        map: ink_storage::Mapping<AccountId, u32>,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new(count: u32) -> Self {
            // Esta llamada es requerida para inicializar correctamente los
            // `Mapping`s de nuestro contrato.
            ink_lang::utils::initialize_contract(|contract: &mut Self| {
                let caller = Self::env().caller();
                contract.map.insert(&caller, &count);
            })
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            // A pesar de que no estamos explicitamente inicializando el `Mapping`,
            // aún necesitamos llamar esto:
            ink_lang::utils::initialize_contract(|_| {})
        }

        // Coge el número del AccountID de la persona que llama, si existe
        #[ink(message)]
        pub fn get(&self) -> u32 {
            let caller = Self::env().caller();
            self.map.get(&caller).unwrap_or_default()
        }
    }
}
```
