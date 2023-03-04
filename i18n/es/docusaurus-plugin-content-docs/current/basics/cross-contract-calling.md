---
title: Llamadas Cross-Contract
slug: /basics/cross-contract-calling
hide_title: true
---

<img src="/img/title/cross-contract.svg" className="titlePic" />

# Llamadas Cross-Contract

En contratos ink! es posible llamar a mensajes ink! y constructores ink!. Por lo tanto, constructores ink! permiten delegar y mensajes ink! permiten
llamar fácilmente a otros mensajes ink!
Dado otro contrato ink!, es posible llamar a cualquiera de sus funciones.


Vea nuestro [`delegator contrato de ejemplo`](https://github.com/paritytech/ink-examples/blob/main/delegator/lib.rs) 
para ver un elaborado ejemplo que utiliza llamadas cross-contract.

### Cómo funciona

Para implementar el smart contract del delegador, primero
tenemos que añadir manualment el código del otro contrato, recibir 
el hash del código del evento signalled y poner el hash del código 
en nuestro smart contract que llamara al anterior.

Nuestro smart contract se ve así:

```rust
use other_contract::OtherContract;

//--snip--
#[ink(storage)]
struct MyContract {
    /// El otro contracto.
    other_contract: OtherContract,
}

impl MyContract {
    /// Instanciar `MyContract con lo siguiente
    /// el código del sub-contract y algún valor inicial.
    #[ink(constructor)]
    pub fn new(
        other_contract_code_hash: Hash,
    ) -> Self {
        let other_contract = OtherContract::new(1337)
            .endowment(total_balance / 4)
            .code_hash(other_contract_code_hash)
            .instantiate()
            .expect("failed at instantiating the `OtherContract` contract");
        Self {
            other_contract
        }
    }

    /// Calls the other contract.
    #[ink(message)]
    pub fn call_other_contract(&self) -> i32 {
        self.other_contract.get_value()
    }
}
//--snip--
```

El fichero `Cargo.toml` contiene
```toml
other_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }
```

El `other_contract/Cargo.toml` contiene:

```toml
[features]
ink-as-dependency = []
```

Esto le dice al código generador de ink! que  **always** o **never**
compila el smart contract como si fuese utilizado como una dependencia del otro ink! smart contract

El `other_contract/lib.rs`:

```rust
#[ink::contract]
pub mod other_contract {
    /// Storage del otro contrato.
    #[ink(storage)]
    pub struct OtherContract {
        value: i32,
    }

    impl OtherContract {
        /// Inicializa el contrato.
        #[ink(constructor)]
        pub fn new(value: i32) -> Self {
            Self { value }
        }

        /// Devuelve el estado actual.
        #[ink(message)]
        pub fn get_value(&self) -> i32 {
            self.value
        }
    }
}
```
