---
title: "#[ink(payable)]"
slug: /macros-attributes/payable
hide_title: true
---

<img src="/img/title/text/payable.svg" className="titlePic" />

Aplicable a los mensajes ink!.

Permite recibir valor como parte de la llamada del mensaje ink!.
Los constructores ink! son implicitamente payables, dada la dotación inicial que requiere un contrato.

Un mensaje ink! por defecto rechazara las llamadas que adicionalmente financian el smart contract.
Los autores de los smart contracts ink! pueden hacer que los mensajes ink! sean payable 
añadiendole la marca `payable`. Un ejemplo a continuación: 


Date cuenta que los constructores ink! son siempre implicitamente payable y por lo tanto no pueden
ser marcados como tal.


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
        #[ink(payable)] // Tu puedes especificar payable out-of-line.
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Devuelve el valor actual.
        #[ink(message, payable)] // o especificar payable inline.
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```

## Ejemplo

```rust
#[ink(message, payable)]
pub fn pay_me(&self) {
    let _transferred = self.env().transferred_balance();
}
```

Mira el contrato [`examples/contract-transfer`](https://github.com/paritytech/ink-examples/blob/master/contract-transfer/lib.rs) para un ejemplo más externo.
