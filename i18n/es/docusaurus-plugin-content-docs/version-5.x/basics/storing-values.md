---
title: Almacenando Valores
slug: /basics/storing-values
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Almacenando Valores

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

Además, ink! proporciona tipos específicos de [substrate](https://substrate.io/) como `AccountId`, `Balance` y `Hash` a los contratos inteligentes como si fueran tipos primitivos.

### String, Vec y más

Como ink! opera en un entorno `no_std`, necesitamos traer nuestras propias definiciones para los tipos de datos incluidos en std, como `String` y `Vec`. La caja ink_prelude ofrece tales definiciones para la mayoría de los tipos de datos comunes de std y pueden ser utilizados de manera segura en un contrato ink!.

Puedes utilizar las definiciones del preludio de la siguiente manera:

```rust
#[ink::contract]
mod MyContractWithStringsAndArrays {
    use ink::prelude::string::String;
    use ink::prelude::vec::Vec;

    #[ink(storage)]
    pub struct MyContract {
        // Almacena una cadena
        my_string: String,
        // Almacena un u32 en un vector
        my_vector: Vec<u32>,
    }
    /* --snip-- */
}
```

### Mapping

ink! también proporciona el tipo de storage `Mapping`. Puedes leer más sobre este tipo [aquí](/datastructures/mapping).

### Substrate Types

Aquí hay un ejemplo de cómo almacenar los tipos de Substrate `AccountId`, `Balance` y `Hash`:

```rust
#[ink::contract]
mod MyContract {

    // Nuestra estructura utilizará esos tipos de tinta! por defecto
    #[ink(storage)]
    pub struct MyContract {
        // Almacena un AccountId
        my_account: AccountId,
        // Almacena un Balance
        my_balance: Balance,
        // Almacena un Hash
        my_hash: Hash,
    }
    /* --snip-- */
}
```

### Enum


La enumeración también se puede utilizar como tipo de datos. Su uso se muestra en la sección [Struct](#struct).

```rust
pub enum Status {
    /// Una subasta aún no ha comenzado.
    NotStarted,
    /// Estamos en el período de inicio de la subasta, recopilando ofertas iniciales.
    OpeningPeriod,
    /// Estamos en el período final de la subasta, donde estamos tomando instantáneas
    /// de las ofertas ganadoras.
}
```

### Struct

Puede combinar todos los tipos mencionados anteriormente incluso en una estructura personalizada que luego puede almacenar en el almacenamiento de contratos.

```rust
mod MyContract {
    use ink::prelude::string::String;
    use ink::prelude::vec::Vec;


    pub struct Auction {
        /// Nombre de marca del evento de subasta.
        name: String,
        /// Algún hash que identifica el tema de la subasta.
        subject: Hash,
        /// Estado de la subasta.
        status: Status, // Enum: Uso mostrado en la siguiente sección
        /// La subasta de vela no puede tener un ganador.
        /// Si se finaliza la subasta, eso significa que se determina el ganador.
        finalized: bool,
        /// vector
        vector: Vec<u8>,
    }

    #[ink(storage)]
    pub struct MyContract {
        // Almacena las subastas en un vec
        auctions: Vec<Auction>,
    }
}

```
## Use of enum

Enum puede ser usado como el tipo de un valor dentro de un `struct` como se ha mostrado antes en `struct Auction`.

```rust
pub enum Status {
    /// El auction aún no ha comenzado.
    NotStarted,
    /// El auction se encuentra en la parte inicial, acumulando pujas iniciales.
    OpeningPeriod,
    /// Nos encontramos en la parte final del auction, tomamos snapshots
    /// de las pujas ganadoras.
    EndingPeriod,
}
```

Los valores de un enum deben ser referenciados como `Status::OpeningPeriod`.

## Inicializar Storage en Constructores

Constructores es cómo se inicializan los valores
Cada ink! smart contract debe tener un constructor que se ejecuta una vez cuando el contrato es creado. Los ink! smart contracts pueden tener múltiples constructores:

Tenga en cuenta que si tiene un contrato cuyo almacenamiento contiene `Mapping` también puedes utilizar
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