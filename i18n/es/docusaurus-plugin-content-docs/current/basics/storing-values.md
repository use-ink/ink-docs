---
title: Almacenando Valores
slug: /basics/storing-values
---

Así es como se almacenan valores simples en el `storage`:

```rust
#[ink(storage)]
pub struct MyContract {
    // Store a bool
    my_bool: bool,
    // Store some number
    my_number: u32,
}
/* --snip-- */
```

## Tipos Soportados

Los contratos de Substrate pueden almacenar tipos que sean codificables y decodificables con [Parity Codec](https://github.com/paritytech/parity-codec) 
que incluye la mayoría de los tipos de datos comunes de Rust, como `bool`, `u{8,16,32,64,128}`, `i{8,16,32,64,128}`, `String`, tuplas, y arrays.

ink! proporciona tipos específicos como `AccountId`, `Balance`, y `Hash` para smart contracts como si fuesen tipos primitivos.

ink! también proporciona el tipo de storage `Mapping`. Puedes leer más sobre este tipo [aquí](/datastructures/mapping).

Aquí tienes un ejemplo de como puedes almacenar un `AccountId` y `Balance`:

```rust
#[ink::contract]
mod MyContract {

    // Our struct will use those default ink! types
    #[ink(storage)]
    pub struct MyContract {
        // Store some AccountId
        my_account: AccountId,
        // Store some Balance
        my_balance: Balance,
    }
    /* --snip-- */
}
```

<div class="translateTodo">
Here is an example of a structure storing `String` and  `Hash` values.

 ```rust
 pub struct Auction {
     /// Branded name of the auction event.
     name: String,
     /// Some hash identifying the auction subject.
     subject: Hash,
     /// Auction status.
     status: Status, // Enum: Usage shown in next section
     /// Candle auction can have no winner.
     /// If auction is finalized, that means that the winner is determined.
     finalized: bool,
     /// vector
     vector: Vec<u8>,
 }
 ```

## Use of enum

Enum can be used as a datatype in `struct` as depicted above in `struct Auction`.

 ```rust
 pub enum Status {
     /// An auction has not started yet.
     NotStarted,
     /// We are in the starting period of the auction, collecting initial bids.
     OpeningPeriod,
     /// We are in the ending period of the auction, where we are taking snapshots
     /// of the winning bids. 
 }
 ```
The values of an enum should be referenced as `Status::OpeningPeriod`.
</div>

## Inicializar Storage en Constructores

Constructores es cómo se inicializan los valores
Cada ink! smart contract debe tener un constructor que se ejecuta una vez cuando el contrato es creado. Los ink! smart contracts pueden tener múltiples constructores:

Tenga en cuenta que si tiene un contrato cuyo almacenamiento contiene `Mapping'` también puedes utilizar
`ink_lang::utils::initialize_contract` en tu constructor. Mira la
[documentación de `Mapping`](/datastructures/mapping) para más detalles.

```rust
#[ink::contract]
mod mycontract {

    #[ink(storage)]
    pub struct MyContract {
        number: u32,
    }

    impl MyContract {
        /// Constructor that initializes the `u32` value to the given `init_value`.
        #[ink(constructor)]
        pub fn new(init_value: u32) -> Self {
            Self {
                number: init_value,
            }
        }

        /// Constructor that initializes the `u32` value to the `u32` default.
        #[ink(constructor)]
        pub fn default() -> Self {
            Self {
                number: Default::default(),
            }
        }
    /* --snip-- */
    }
}
```
