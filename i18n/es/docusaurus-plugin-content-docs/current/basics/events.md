---
title: Eventos
slug: /basics/eventos
hide_title: true
---

<img src="/img/title/balloons-1.svg" className="titlePic" />

# Eventos

Un smart contract en ink! puede definir eventos que pueden ser emitidos durante la execución del contrato.
Emitir eventos puede ser utilizado por herramientas de terceros para consultar información sobre la ejecución y el estado de un contrato.

El siguiente ejemplo de un contrato en ink! muestra como se define un evento `Transferred` y se emite en `#[ink(constructor)]`.

```rust
#[ink::contract]
mod erc20 {
    /// Definir un evento que es emitido
    /// cada vez que el valor se transfiere.
    #[ink(event)]
    pub struct Transferred {
        from: Option<AccountId>,
        to: Option<AccountId>,
        value: Balance,
    }

    #[ink(storage)]
    pub struct Erc20 {
        total_supply: Balance,
        // más campos ...
    }

    impl Erc20 {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self {
            let caller = Self::env().caller();
            Self::env().emit_event(Transferred {
                from: None,
                to: Some(caller),
                value: initial_supply,
            });
            Self { total_supply: initial_supply }
        }

        #[ink(message)]
        pub fn total_supply(&self) -> Balance {
            self.total_supply
        }
    }
}
```

Vea nuestro [`ERC20 contrato de ejemplo`](https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs) 
para un elaborado ejemplo que utiliza eventos.

## Definición de Eventos

Así es como la definición de eventos se ve:

```rust
#[ink(event)]
pub struct Transferred {
    #[ink(topic)]
    from: Option<AccountId>,

    #[ink(topic)]
    to: Option<AccountId>,

    amount: Balance

}
```

Añade el atributo tag `#[ink(topic)]` para cada elemento en tu evento que quieras tener indexado.
Una buena regla general es preguntarte si alguien podría querer buscar este tema.
Por esta razón el `amount` en el evento ejemplo de arriba no esta hecho indexado - probablemente habrá muchos eventos diferentes con
cantidades diferentes cada uno.

La firma del evento es por defecto uno de los temas del evento, excepto si anotas el evento con `#[ink(anonymous)]`.
Mira [aquí](/macros-attributes/anonymous) para ver más detalles de este atributo.


## Emitir Eventos en un Constructor

En un contructor los eventos son emitidos via  `Self::env().emit_event()`.
Mira este ejemplo:

```rust
#[ink(constructor)]
pub fn new(initial_value: Balance) -> Self {
    let caller = Self::env().caller();
    let mut balances = HashMap::new();
    balances.insert(caller, initial_supply);

    Self::env().emit_event(Transferred {
        from: None,
        to: Some(caller),
        amount: initial_supply
    });

    Self { total_supply: initial_supply, balances }
}
```

## Emitir Eventos desde Mensajes

En un mensaje los eventos se emiten via `self.env().emit_event()`:

```rust
#[ink(message)]
pub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {
    let from = self.env().caller();
    // implementación oculta
    self.env().emit_event(Transferred {
        from: Some(from),
        to: Some(to),
        amount
    });
    Ok(())
}
```
