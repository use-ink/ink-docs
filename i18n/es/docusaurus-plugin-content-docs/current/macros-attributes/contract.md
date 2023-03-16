---
title: "#[ink::contract]"
slug: /macros-attributes/contract
hide_title: true
---

<img src="/img/title/text/contract.svg" className="titlePic" />

Esta macro es el punto de entrada para escribir smart contracts ink!.

Si eres un principiante aprendiendo ink! Le recomendamos que consulte nuestro amplio 
[workshop de ink! ](https://docs.substrate.io/tutorials/smart-contracts/).

## Descripción

La macro analiza el código del smart contract proporcionado y genera el código adecuado.

## Uso

### Argumentos del Header

A la macro `#[ink::contract]` se le puede proporcionar argumentos header adicionales separados por coma:

### `compile_as_dependency: bool`

Le dice al generador de código de ink! que  **siempre** o **nunca**
compile smart contract como si fuese utilizado como dependencia de otro smart contract de ink!

Normalmente este flag solo es útil para desarrolladores de ink! que
quieran inspeccionar el la generación de código de los ink! smart contracts.
El autor no tiene conocimiento de ningún caso de uso práctico particular para los usuarios que hagan uso de este flag, 
pero se alienta a los redactores de contratos a refutar esto.

Date cuenta que se recomienda hacer uso de las feature built-in crate.
`ink-as-dependency` para marcar las dependencias del smart contract
`Cargo.toml` como dependencia actual de ink!.

**Usage Example:**
```rust
#[ink::contract(compile_as_dependency = true)]
mod my_contract {
    #[ink(storage)]
    pub struct MyStorage;
    
    impl MyStorage {
        #[ink(constructor)]
        pub fn construct() -> Self { MyStorage {} }
        
        #[ink(message)]
        pub fn message(&self) {}
    }
    // ...
}
```

**Default value:** Depende de la propagación de la feature del crate de `Cargo.toml`.

### `env: impl Environment`

Le dice al generador de código ink! que entorno utilizar para el ink! smart contract.
El entorno debe implementar el trait `Environment` (definido en `ink_env`) y proporciona
todas las necesarias definiciones de tipo fundamentales para `Balance`, `AccountId` etc.

Cuando utilizamos la implementación personalizada de  `Environment` para smart contract todos los tipos
que se exponen en el smart contract ink! y los tipos reflejados utilizados en el runtima
deben ser alineados con respecto a la codificación y semanticos SCALE. 

**Ejemplo de Uso:**

Dada la implementación personalizada `Environment`:
```rust
pub struct MyEnvironment;

impl ink::env::Environment for MyEnvironment {
    const MAX_EVENT_TOPICS: usize = 3;
    
    type AccountId = u64;
    type Balance = u128;
    type Hash = [u8; 32];
    type Timestamp = u64;
    type BlockNumber = u32;
    type ChainExtension = ::ink::env::NoChainExtension;
}
```
Un usuario puede implementar su smart contract ink! utilizando la implementación personalizada
`Environment` de arriba, como se demuestra a continuación:

```rust
#[ink::contract(env = MyEnvironment)]
mod my_contract {
    pub struct MyEnvironment;
   
    impl ink::env::Environment for MyEnvironment {
        const MAX_EVENT_TOPICS: usize = 3;
        type AccountId = u64;
        type Balance = u128;
        type Hash = [u8; 32];
        type Timestamp = u64;
        type BlockNumber = u32;
        type ChainExtension = ::ink::env::NoChainExtension;
    }
    
    #[ink(storage)]
    pub struct MyStorage;
    
    impl MyStorage {
        #[ink(constructor)]
        pub fn construct() -> Self { MyStorage {} }
        
        #[ink(message)]
        pub fn message(&self) {}
    }
    // ...
}
```

**Valor por defecto:** `DefaultEnvironment` definido en el crate `ink_env`.

## Análisis

La macro `#[ink::contract]` macro analiza completamente el smart contract
del input contra argumentos y estructuras no válidas.

Algunas reglas de ejemplo incluyen pero no se limitan a:

- Debe existir exactamente una estructura `#[ink(storage)]`.

     Esta estructura define el diseño del storage sobre el que el smart contract de ink! opera.
     El usuario puede utilizar una variedad de facilidades built-in, combinandolas de diversas maneras
     o incluso proporcionando su propia implementacions de las estructuras de datos del storage.

     Para más información visita la documentación del crate `ink_storage`.

     **Ejemplo:**

     ```rust
     #[ink::contract]
     mod flipper {
         #[ink(storage)]
         pub struct Flipper {
             value: bool,
         }
  
         impl Flipper {
             #[ink(constructor)]
             pub fn construct() -> Self { Flipper { value: false } }
  
             #[ink(message)]
             pub fn message(&self) {}
         }
     }
     ```

- Tiene que haber al menos un `#[ink(constructor)]` método definido.

     Los métodos marcados con `#[ink(constructor)]` son especiales porque sonson despachables 
     tras la instanciación del contrato. Un contrato puede definir múltiples constructores 
     de este tipo que permitan a los usuarios del contrato instanciar un contrato de múltiples maneras diferentes.

     **Ejemplo:**

     Dada la definición del contrato `Flipper` de arriba, añadimos un `#[ink(constructor)]`
     como puedes ver:

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
  
             #[ink(message)]
             pub fn message(&self) {}
         }
     }
     ```

- Tiene que haber al menos un `#[ink(message)]` método definido.

     Los métodos marcados con `#[ink(message)]` son especiales porque sonson despachables 
     tras la instanciación del contrato. El conjunto de mensajes ink! definidos por un smart contract
     ink! define su superficie API con la que los usuarios pueden interactuar.

     Un ink! smart contract puede tener multiples mensajes ink! definidos.

     **Note:**

     - Un mensaje ink! con un receptor `&self` solo puede leer el estado mientras que un mensaje ink!
       con un receptor `&mut self` puede mutar el storage del contrato.

     **Ejemplo:**

     Dada la definición del contrato `Flipper` de arriba, añadimos algunas definiciones `#[ink(message)]`
     como puedes ver:

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
  
             /// Flips the current value.
             #[ink(message)]
             pub fn flip(&mut self) {
                 self.value = !self.value;
             }

             /// Returns the current value.
             #[ink(message)]
             pub fn get(&self) -> bool {
                 self.value
             }
         }
     }
     ```

     **Payable Messages:**

     Un mensaje ink! por defecto rechazara llamadas que adicionalmente financial el smart contract.
     Autores del smart contract de ink pueden hacer que el mensaje de ink! sea payable añadiendole 
     la marca `payable`. Un ejemplo a continuación:

     Date cuenta que los constructores ink! son implicitamente siempre payables y por lo tanto
     no puden marcarse como tal.

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
  
             /// Voltea el valor actual 
             #[ink(message)]
             #[ink(payable)] // Puedes especificar payable out-of-line.
             pub fn flip(&mut self) {
                 self.value = !self.value;
             }

             /// Devuelve el valor actual
             #[ink(message, payable)] // ...o especificar payable inline.
             pub fn get(&self) -> bool {
                 self.value
             }
         }
     }
     ```

     **Controlar el selector de mensajes:**

     Cada mensaje y constructor de ink! tiene un único selector con el que cada mensaje
     o constructor puede ser unicamente identificado dentro del smart contract de ink!.
     Estos selectores se utilizan principalmente para conducir el dispatch del contrato al llamarlo.

     El autor de un smart contract ink! puede controlar el selector de un mensaje o contructor ink!
     utilizando el flag `selector` flag. A continuación de muestra un ejemplo:

     ```rust
     #[ink::contract]
     mod flipper {
         #[ink(storage)]
         pub struct Flipper {
             value: bool,
         }
  
         impl Flipper {
             #[ink(constructor)]
             #[ink(selector = "0xDEADBEEF")] // Funciona en los constructores tambien.
             pub fn new(initial_value: bool) -> Self {
                 Flipper { value: false }
             }

             /// Voltea el valor actual.
             #[ink(message)]
             #[ink(selector = "0xCAFEBABE")] //Puedes especificar el selector out-of-line.
             pub fn flip(&mut self) {
                 self.value = !self.value;
             }
            
             /// Devuelve el valor actual.
             #[ink(message, selector = "0xFEEDBEEF")] // ...o puedes especificar el selector inline.
             pub fn get(&self) -> bool {
                 self.value
             }
         }
     }
     ```

## Interactuando con el Ejecutor del Contrato

El crate `ink_env` provee facilidades para interactuar con el ejecutor del contrato
que conecta el smart contract ink! con el mundo exterior.

Por ejemplo es posible consultar la persona que llama en la llamada actual a través de:

```rust
use ink_env;
ink::env::test::run_test::<ink::env::DefaultEnvironment, _>(|_| {
    let caller = ink::env::caller::<ink::env::DefaultEnvironment>();
    let _caller = caller;
    Ok(())
}).unwrap();
```

Sin embargo, ink! provee una manera mucho más simple de interactuar con el ejecutor 
del contrato a través de su entorno de acceso. Un ejemplo a continuación:

```rust
#[ink::contract]
mod greeter {
    #[ink(storage)]
    pub struct Greeter;

    impl Greeter {
        #[ink(constructor)]
        pub fn new() -> Self {
            let caller = Self::env().caller();
            let message = format!("thanks for instantiation {:?}", caller);
            ink::env::debug_println(&message);
            Greeter {}
        }

        #[ink(message, payable)]
        pub fn fund(&mut self) {
            let caller = self.env().caller();
            let value = self.env().transferred_balance();
            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);
            ink::env::debug_println(&message);
        }
    }
}
```

## Eventos

Un smart contract ink! puede definir eventos que puedan emitir durante la ejecución del contrato.
Emitir eventos puede ser utilizado por herramientas de terceras partes para consultar información
acerca de la ejecución y el estado del contrato.

El siguiente ejemplo de un contrato ink! muestra como un evento `Transferred` es definido y 
emitido en el `#[ink(constructor)]`.

```rust
 #[ink::contract]
 mod erc20 {
     /// Define un evento que es emitido cada vez que el valor es transferido.
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

## Ejemplo: Flipper

El código a continuación muestra la implementación completa del smart contract ink! Flipper.
Para nosotros actua como el "Hello, World!" de los smart contracts ink! porque
es minimo pero a la vez proporciona más o menos una funcionalidad útil.

Controla un simple valor  `bool` que puede ser tanto `false` como `true`
y permite al usuario voltear el valor utilizando el mensaje `Flipper::flip` 
o recuperar el valor actual utilizando `Flipper::get`.

```rust
#[ink::contract]
pub mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        /// Crea un nuevo smart contract flipper inicializando el valor dado
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        /// Voltea el valor actual del booleano de Flipper.
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Devuelve el valor actual del boolean de Flipper.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```
