---
title: ink! vs. Solidity
hide_title: true
slug: /ink-vs-solidity
---

<img src="/img/title/solidity.svg" className="titlePic" />

# ink! vs. Solidity

La siguiente tabla muestra una breve comparación de características entre ink! y Solidity:

<div class="comparison">

|                                  | ink!                        | Solidity      |
| :------------------------------- | :-------------------------- | :------------ |
| Máquina virtual                  | Cualquier VM Wasm           | EVM           |
| Codificación                     | Wasm                        | EVM Byte Code |
| Lenguaje                         | Rust                        | Standalone    |
| Protección contra desbordamiento | Habilitado por default      | Sí            |
| Funciones de constructor         | Multiple                    | Single        |
| Herramientas                     | Cualquiera que soporte Rust | Custom        |
| Versionado                       | Semántico                   | Semántico     |
| Contiene Metadata?               | Sí                          | Sí            |
| Proyecto de archivos múltiples   | Planeado                    | Sí            |
| Entradas de  Storage             | Variable                    | 256 bits      |
| Tipos soportados                 | Docs                        | Docs          |
| Contiene Interfaces?             | Sí (Traits de Rust)         | Sí            |

</div>

## Guía Solidity a ink!

### Tabla de Contenidos


- [ink! vs. Solidity](#ink-vs-solidity)
  - [Guía Solidity a ink!](#guía-solidity-a-ink)
    - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Convertir un contrato de Solidity a ink!](#convertir-un-contrato-de-solidity-a-ink)
    - [1. Generar un nuevo contrato de ink!](#1-generar-un-nuevo-contrato-de-ink)
    - [2. Compilar el contrato](#2-compilar-el-contrato)
    - [3. Convertir campos de clase de Solidity a Struct de Rust](#3-convertir-campos-de-clase-de-solidity-a-struct-de-rust)
    - [4. Convertir cada función](#4-convertir-cada-función)
  - [Mejores prácticas + Tips](#mejores-prácticas--tips)
  - [Equivalencias de sintaxis](#equivalencias-de-sintaxis)
    - [`función pública`](#función-pública)
    - [`declaración de mapping `](#declaración-de-mapping-)
    - [`uso de mapping`](#uso-de-mapping)
    - [`struct`](#struct)
    - [`assertions / requires`](#assertions--requires)
    - [`timestamp`](#timestamp)
    - [`caller del contrato`](#caller-del-contrato)
    - [`dirección de contrato`](#dirección-de-contrato)
    - [`bytes`](#bytes)
    - [`uint256`](#uint256)
    - [`payable`](#payable)
    - [`depósito recibido / pago`](#depósito-recibido--pago)
    - [`balance del contrato`](#balance-del-contrato)
    - [`transferir tokens desde el contrato`](#transferir-tokens-desde-el-contrato)
    - [`eventos e indexado`](#eventos-e-indexado)
    - [`errores y returns`](#errores-y-returns)
      - [`throw`](#throw)
      - [`assert`](#assert)
      - [`require y revert`](#require-y-revert)
    - [`mappings anidados + estructuras custom / avanzadas`](#mappings-anidados--estructuras-custom--avanzadas)
    - [`llamadas entre contratos`](#llamadas-entre-contratos)
    - [`enviar transacción genérica / llamadas dinámicas entre contratos`](#enviar-transacción-genérica--llamadas-dinámicas-entre-contratos)
  - [Limitaciones de ink! v3](#limitaciones-de-ink-v3)
  - [Solución de problemas y errores](#solución-de-problemas-y-errores)
  - [unit testing (off-chain)](#unit-testing-off-chain)

## Convertir un contrato de Solidity a ink!

### 1. Generar un nuevo contrato de ink! 

Ejecutar el siguiente comando para crear la estructura de un contrato de ink! El comando instalará el código repetitivo para ink! "Hola, Mundo!" (el contrato [`flipper`](https://github.com/paritytech/ink-examples/tree/main/flipper))

```
cargo contract new <contract-name>
```

### 2. Compilar el contrato

```
cargo contract build
```

### 3. Convertir campos de clase de Solidity a Struct de Rust

Solidity es un lenguaje orientado a objetos y utiliza clases. ink! (Rust) no utiliza clases. 

Un ejemplo de clase de Solidity se ve así:

<!-- Markdown syntax highlighting does not support Solidity. C++ seems to be the best match -->

```c++
contract MyContract {
    bool private _theBool;
    event UpdatedBool(bool indexed _theBool);

    constructor(bool theBool_) {
        require(theBool_ == true, "theBool_ must start as true");

        _theBool = theBool_;
    }

    function setBool(bool newBool) public returns (bool boolChanged) {
        if _theBool == newBool {
               boolChanged = false;
        } else {
            boolChanged = true;
        }

        _theBool = newBool;
        // emit event
        UpdatedBool(newBool);
    }
}
```

Y el equivalente en un contrato de ink! se ve así:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod mycontract {
    #[ink(storage)]
    pub struct MyContract {
        the_bool: bool, // las properties de clase se convierten en campos del struct
    }

    #[ink(event)]
    pub struct UpdatedBool {
        #[ink(topic)] // -> indexed
        the_bool: bool,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new(the_bool: bool) -> Self {
            assert!(the_bool == true, "the_bool must start as true");
            Self { the_bool }
        }

        #[ink(message)] // las funciones se vuelven implementaciones del struct
        pub fn set_bool(&mut self, new_bool: bool) -> bool {
            let bool_changed = true;

            if self.the_bool == new_bool{
                bool_changed = false;
            }else{
                bool_changed = true;
            }

            self.the_bool = new_bool;

            self.env().emit_event(UpdatedBool {
                the_bool: new_bool
            });

            // return
            bool_changed
        }
    }
}
```

Algunas diferencias clave son:

- Las variables de clase / miembros de Solidity se colocarán en el struct del contrato de ink!
- Todos lo métodos de clase en Solidity son `impl`ementados para el struct del contrato en ink!
- Solidity frecuentemente prefija variables con un guión bajo (`_name`). ink! / Rust solamente prefija con un guión bajo a las variables _no usadas_.
- Solidity usa camelCase. ink! usa snake_case.
- En Solidity, el tipo de variable aparece antes del nombre de la variable (Por ejemplo: bool myVar). Mientras que ink! especifica el tipo de var después del nombre de var (Por ejemplo: my_var: bool)

### 4. Convertir cada función 

- Comenzar a convertir cada función una por una.
    - Un enfoque recomendado es, de ser posible, evitar las llamadas cross-contract al principio y en su lugar utilizar datos simulados.
    - Este modo de prueba de unidad off-chain puede ser escrito para probar la funcionalidad básica.
        - las unidades de prueba son off-chain y no funcionan con llamadas cross-contract.
    - Una vez que se haya probado por completo, se comienza a agregar las llamadas cross-contract y se llevan a cabo pruebas on-chain manuales y de integración.
- Asegurarse que la función de visibilidad (pública y privada) se corresponda en ink!
- Si en Solidity una función devuelve `bool success`, ink! utilizará un `Result<()>` (`Result::Ok` o `Result::Err`).

  ```rust
  // ink!

  // result type
  pub type Result<T> = core::result::Result<T, Error>;

  // ...

  // función pública que devuelve un Result 
  #[ink(message)]
  pub fn my_function(&self) -> Result<()> {
      Ok(())
  }
  ```

## Mejores prácticas + Tips

- Si el contrato de Solidity utiliza un `string`, se recomienda utilizar un `Vec<u8>` para evitar la sobrecarga de un `String`. Ver [aquí](https://substrate.stackexchange.com/questions/1174/why-is-it-a-bad-idea-to-use-string-in-an-ink-smart-contract) para más detalles del porqué. El smart contract debería contener solamente la información que estrictamente necesita ubicarse en la blockchain y alcanzar un consenso. La UI (interfaz de usuario) debería usarse para visualizar strings.
- Comprobar todos los `.unwrap()`s ejecutados. Solidity no tiene un control tan estricto como ink! Por ejemplo, se puede acceder a un campo de mapping  tan simple como `myMapping[someKey]`. ink!, sin embargo, requiere de `self.my_mapping.get(some_key).unwrap()`. Un modo útil para manipular casos `None` es utilizar  `.unwrap_or(some_val)`.
- Ejecutar el nodo de los contratos con `substrate-contracts-node -lerror,runtime::contracts=debug` para que las impresiones depuradas y los errores se vizualicen en la consola de nodos.
- Al pasar parámetros a un helper, se recomienda pasar referencias (incluso para las primitivas) ya que Wasm es más eficiente con referencias.
  Por ejemplo (ver [erc20](https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs) ejemplo):

```rust
/// Devuelve el balance de la cuenta para el `owner` especificado.
///
/// Devuelve `0` si es una cuenta inexistente.
#[ink(message)]
pub fn balance_of(&self, owner: AccountId) -> Balance {
    self.balance_of_impl(&owner)
}

/// Devuelve el balance de la cuenta para el `owner` especificado. 
///
/// Regresa a `0` si es una cuenta inexistente.
///
/// # Nota
///
/// Es preferible llamar a este método antes que `balance_of` ya que este 
/// funciona usando referencias que son más eficientes en Wasm.
#[inline]
fn balance_of_impl(&self, owner: &AccountId) -> Balance {
    self.balances.get(owner).unwrap_or_default()
}
```

- Al igual que en Solidity, ink! no tiene números de punto flotante debido al carácter no determinista. En cambio el frontend debería agregar decimales de ser necesario.

## Equivalencias de sintaxis

### `función pública`

```c++
// solidity
function fnName() public {}
// o
// por default, las funciones son públicas
function fnName() {}
```

```rust
// ink!
#[ink(message)]
pub fn fn_name(&self) {}
```

### `declaración de mapping `

```c++
// solidity
mapping(address => uint128) private mapName;
```

```rust
//ink!
use ink_storage::{
    traits::SpreadAllocate,
    Mapping,
};

#[ink(storage)]
#[derive(SpreadAllocate)]
pub struct ContractName {
    map_name: Mapping<AccountId, u128>,
}
```

Cuando se usa un map en ink!, `ink_lang::utils::initialize_contract` se debe usar en el constructor. Ver [aquí](https://use.ink/datastructures/mapping) para más detalles.

### `uso de mapping`

```c++
// solidity

// insertar / actualizar
aMap[aKey] = aValue;

// obtener
aMap[aKey]
```

```rust
// ink!

// insertar / actualizar
self.a_map.insert(&a_key, &a_value);

// obtener
self.a_map.get(a_key).unwrap()
```

### `struct`

```c++
// solidity
struct MyPerson{
    address person;
    u64 favNum;
}
```

```rust
// ink!
struct MyPerson {
    person: AccountId,
    fav_num: u64,
}
```

### `assertions / requires`

```c++
// solidity
require(someValue < 10, "someValue is not less than 10");
```

```rust
// ink!
assert!(some_value < 10, "some_value is not less than 10");
```

### `timestamp`

```c++
// solidity
block.timestamp
// or
now
```

```rust
// ink!
self.env().block_timestamp()
```

### `caller del contrato`

```c++
// solidity
address caller = msg.sender;
```

```rust
// ink!
let caller: AccountId = self.env().caller();
```

### `dirección de contrato`

```c++
// solidity
address(this)
```

```rust
// ink!
self.env().account_id()
```

### `bytes`

Solidity tiene un tipo `bytes`. `bytes` es (esencialmente) equivalente a un array de uint8. Por lo tanto `bytes` en Solidity => `Vec<u8>` o `[u8; ...]` en ink!. Ver [aquí](https://ethereum.stackexchange.com/questions/91119/difference-between-byte-and-uint8-datatypes-in-solidity) para más detalles. Si se desea, un struct de `bytes` puede ser creado en ink! para replicar el tipo `bytes` en Solidity.

### `uint256`

Solidity utiliza `uint256` y `uint` para representar un tipo de 256 bits.

Solidity está optimizado para words de 256 bits / 32 bytes. Esto significa que si usamos `uint256` en los contratos Solidity se reducirá el uso de gas -- pero aumentará el uso del storage. El mayor tamaño que tiene ink! es un `u128`. ink! compila a Wasm. El mayor tamaño de primitiva de Wasm es 64bit(debido a que la mayoría de las computadoras usan 64bit). Por lo tanto no hay ningún beneficio en usar una primitiva más grande sobre una colección.

Cuando se transfiere un `uint256` de Solidity a ink!, se recomienda  determinar a discreción el rango del valor y elegir el tamaño adecuado (u8, u16, u32, u64, u128). Si se requiere un valor de hash de 256 bits, ink! tiene una primitiva de `Hash` disponible. En el caso que un valor necesite ser de 256 bits, se recomienda utilizar un array (ejemplo: `[u64; 4]`).

### `payable`

```c++
// solidity
function myFunction() payable returns (uint64) {}
```

```rust
#[ink(message, payable)]
pub fn my_function() -> (u64) {}
```

### `depósito recibido / pago`

```C++
// solidity
msg.value
```

```rust
// ink!
self.env().transferred_value()
```

### `balance del contrato`

```c++
// solidity
this.balance
```

```rust
// ink!
self.env().balance()
```

### `transferir tokens desde el contrato`

```c++
// solidity
recipient.send(amount)
```

```rust
// ink!
if self.env().transfer(recipient, amount).is_err() {
    panic!("error transferring")
}
```

### `eventos e indexado`

```c++
// solidity

event MyCoolEvent(
    u128 indexed indexedValue,
    u128 notIndexedValue,
);

// emitir evento
MyCoolEvent (someValue, someOtherValue)
```

```rust
// ink!

#[ink(event)]
pub struct MyCoolEvent {
    #[ink(topic)]
    indexed_value: u128,

    not_indexed_value: u128,
}

// emitir evento
self.env().emit_event(MyCoolEvent {
    indexed_value: some_value,
    not_indexed_value: some_other_value
});
```

### `errores y returns`

Solidity tiene varios mecanismos de manejo de errores: `assert`, `require`, `revert`, y `throw`. Cada uno de los cuales revertirá el estado modificado cuando sea solicitado. Ver [este artículo](https://medium.com/blockchannel/the-use-of-revert-assert-and-require-in-solidity-and-the-new-revert-opcode-in-the-evm-1a3a7990e06e) para detalles sobre esto. 

ink! usa un enum `Result` (`Ok(T)`, `Err(E)`), `assert!` y `panic!`. [Esta respuesta de Stack Exchange](https://substrate.stackexchange.com/questions/2391/panic-in-ink-smart-contracts) y [discusión de GitHub](https://github.com/paritytech/ink/issues/641) brindan más detalles sobre esto.

#### `throw`

Throw está deprecado en Solidity y daría un error de invalid opcode (sin detalles) y revertiría el estado. Como una alternativa para el patrón `if...{throw;}` en Solidity, un `Result::Err` debería ser devuelto para errores esperados, y un `assert!` debería ser usado para errores que no deberían ocurrir.

#### `assert`

En Solidity, `assert` se utiliza como un protector interno contra errores en el _código_. En general, un código que esté funcionando correctamente nunca debería tener un assert fallido. `assert` en Solidity no tiene strings de error. En ink!, usar `assert!`. `assert!` dará como resultado `panic!` si se evalúa como _falso_. El estado se revertirá, y se devolverá un `CalleeTrapped`. El string de error (opcional) se imprimirá en el búfer de depuración.

```rust
// ink!
assert!(caller == owner, "caller is not owner")
```

#### `require y revert`

En Solidity, `require` se usa para errores generales (normales) -- por ejemplo errores que ocurren basados en el input del usuario. `require` no tiene la opción para un string de error. `revert` es muy similar a `require` excepto que `revert` será llamado en cadenas `if ... else`. Ambos `require` y `revert` revertirán el estado de la chain. En ink!, `if ... { return Err(Error::SomeError) }` debería usarse para `require` o `revert`. Cuando un `Result::Err` se devuelve en ink! todo el estado se revierte.

En general, `Result::Err` debería usarse cuando un _calling contract_ necesita saber _por qué_ una función falló. De otro modo, `assert!` debería usarse ya que tiene menos sobrecarga que un `Result`.

```c++
// Solidity
function myFunction(bool returnError) public {
    require(!returnError, "my error here");

    // o

    if returnError {
        revert("my error here");
    }
}
```

```rust
// ink!

#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum Error {
    /// Proveer un comentario detallado sobre el error
    MyError,
}

// tipo Result
pub type Result<T> = core::result::Result<T, Error>;

// ...

#[ink(message)]
pub fn my_function(&self, return_error: bool) -> Result<()> {
    if return_error{
        return Err(Error::MyError)
    }
    Ok(())
}
```

### `mappings anidados + estructuras custom / avanzadas`

En Solidity, es fácil crear mappings anidados. En ink! no es tan sencillo.

imaginemos el siguiente escenario 

```c++
// solidity
contract Dao {
    struct Proposal {
        mapping (address => bool) votedYes
    }

    mapping (address => bool) public isWhitelisted;
    Proposal[] public proposals;
}
```

en ink! esto _parece_ como si se pudiera representar así:

```rust
#[ink::contract]
mod dao {

    #[derive(SpreadAllocate)]
    pub struct Proposal {
        voted_yes: Mapping<AccountId, bool>,
    }

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct Dao {
        proposals: Vec<Proposal>,
        is_whitelisted: Mapping<AccountId, bool>,
    }

    impl Dao{
        #[ink(constructor)]
        pub fn new(/*...*/) -> Self {
            //requerido para mappings
            ink_lang::utils::initialize_contract(|contract| {/*...*/})
        }
    }
}
```

Sin embargo, esto originará un error debido al mapping anidado.[Esta respuesta](https://substrate.stackexchange.com/questions/1659/how-to-have-a-mapping-in-a-custom-structure-inside-an-ink-contract) explica en detalle por qué no se permiten los mappings anidados.

Por lo tanto desde ahora será necesaria una estructura de datos alternativa para solucionar este problema. Una estructura de datos que puede ser intercambiable con la sintaxis de `Mapping` y con las implementaciones mínimas adicionales es el `BTreeMap`. `BTreeMap` es menos eficiente que `Mapping`, pero es una solución simple hasta que se permitan los mappings anidados. Esto se utilizará en el struct anidado. `derive`s adicionales deberán usarse para que sean compatibles con el struct #[ink(storage)] (ver abajo)

```rust
#[ink::contract]
mod dao {

    use ink_prelude::collections::BTreeMap;

    #[derive(
        scale::Encode,
        scale::Decode,
        SpreadLayout,
        PackedLayout,
        SpreadAllocate,
    )]
    #[cfg_attr(
        feature = "std",
        derive(scale_info::TypeInfo, ink_storage::traits::StorageLayout)
    )]
    pub struct Proposal {
        voted_yes: BTreeMap<AccountId, bool>,
    }

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct Dao {
        proposals: Vec<Proposal>,
        is_whitelisted: Mapping<AccountId, bool>,
    }

    impl Dao{
        #[ink(constructor)]
        pub fn new(/*...*/) -> Self {
            //requerido para mappings
            ink_lang::utils::initialize_contract(|contract| {/*...*/})
        }
    }
}
```

Esto funciona casi como sería de esperar. Sin embargo aún existe un problema. `SpreadAllocate` (usado con `Mapping`) requiere que `Vec<Proposal>` implemente `PackedAllocate`. Para solucionarlo, `Proposal` necesita implementar `PackedAllocate`. Ver [aquí](https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.PackedAllocate.html) para detalles + ejemplos. Ver lo siguiente para este ejemplo:

```rust
use ink_primitives::Key;

pub struct Proposal {
    voted_yes: BTreeMap<AccountId, bool>,
}

impl ink_storage::traits::PackedAllocate for Proposal {
    fn allocate_packed(&mut self, at: &Key){
        PackedAllocate::allocate_packed(&mut *self, at)
    }
}
```

### `llamadas entre contratos`

En ink!, para hacer [llamadas entre contratos](https://use.ink/basics/cross-contract-calling), se necesitará que el contrato sea agregado al proyecto. Asegurarse que el contrato esté exportando adecuadamente sus Structs. Ver el ejemplo de contrato `erc20`:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

// hacer visibles los structs
pub use self::erc20::{
    Erc20,
    // esto es necesario
    Erc20Ref,
};

#[ink::contract]
pub mod erc20 {}
```

En el Cargo.toml del nuevo contrato llamado, agregar (o editar) lo siguiente:

```
[lib]
name = "erc20"
path = "lib.rs"
crate-type = [
	# Usado para blobs Wasm de contrato normal.
	"cdylib",
    # Usado para generación de ABI. Necesario para importar como dependencia
    "rlib",
]

[features]
ink-as-dependency = []
```

`ink-as-dependency` "le dice al generador de código ink! que siempre o nunca compile el smart contract como si fuera usado como dependencia de otro smart contract de ink!" ([fuente](https://use.ink/basics/cross-contract-calling)).

Entonces, en el Cargo.toml del contrato principal, importar el contrato al que se llamará.

```rust
erc20 = { path = "erc20", default-features = false, features = ["ink-as-dependency"] }
```

Y asegurarse de agregarlo al campo `std` del archivo .toml.

```rust
[features]
default = ["std"]
std = [
    # ...

    "erc20/std",
]
```

Ahora, importar el contrato llamado al contrato principal:

```rust
// ejemplo
use erc20::Erc20Ref;
```

Hay dos métodos para configurar el otro contrato.

1. Instanciar el contrato llamado en el constructor del contrato principal.  
   Ver [aquí](https://use.ink/basics/cross-contract-calling/) para un tutorial, y [aquí](https://github.com/paritytech/ink-examples/tree/main/delegator) para un ejemplo.
2. O agregar el `AccountId` de un contrato ya deployado.
   Aquí hay un ejemplo de constructor para configurar esto:

   ```rust
   use my_other_contract::MyOtherContractRef;
   // ...
   fn new(contract_id: AccountId) -> Self {
        // para un contrato ya deployado
        let contract_ref: MyOtherContractRef =
            ink_env::call::FromAccountId::from_account_id(contract_id);
        Self {contract_ref}
   }
   ```

Ahora para realizar la llamada de contratos:

```rust
{
    self.contract_ref.some_external_function(a_param);
}
```

Nota: a partir de ahora (ink! v3.3.1), cuando se está haciendo llamadas entre contratos, emitir eventos no funcionará y ocurrirán errores de compilación. Ver [issue #1000](https://github.com/paritytech/ink/issues/1000). Además el compilador dará error diciendo (por ejemplo) Erc20Ref no implementa `SpreadAllocate`. Este [issue #1149](https://github.com/paritytech/ink/issues/1149) explica más y tiene una solución. Estos problemas serán resueltos en [issue #1134](https://github.com/paritytech/ink/issues/1134).

### `enviar transacción genérica / llamadas dinámicas entre contratos`

```c++
// solidity

// invoca una función encontrada en `addr`, envía el `_amount` al `addr` y el payload de la `_transactionData`.
addr.call.value(_amount)(_transactionData)
```

```rust
// ink!

// ...

use ink_env::call::{
    build_call,
    Call,
    ExecutionInput,
    Selector,
};

/// Un wrapper que nos permite codificar un blob de bytes.
///
/// Usamos esto para pasar el conjunto de parámetros no tipados (bytes) al `CallBuilder`.
struct CallInput<'a>(&'a [u8]);

impl<'a> scale::Encode for CallInput<'a> {
    fn encode_to<T: Output + ?Sized>(&self, dest: &mut T) {
        dest.write(self.0);
    }
}

// ...

// ver: https://github.com/paritytech/ink-examples/blob/main/multisig/lib.rs#L535
fn invoke_transaction(
    &mut self,
    callee: AccountId,
    transfer_amount: u128,
    function_selector: [u8; 4],
    transaction_data: Vec<u8>,
    gas_limit: u64) -> Result<()> {

    let result = build_call::<<Self as ::ink_lang::reflect::ContractEnv>::Env>()
        .call_type(
            Call::new()
                .callee(callee) // contrato a llamar
                .gas_limit(*gas_limit)
                .transferred_value(transfer_amount), // valor a transferir con la llamada
        )
        .exec_input(
            ExecutionInput::new(Selector::from(*function_selector))
                    .push_arg(CallInput(transaction_data)), // parámetros SCALE-encoded
        )
        .returns::<()>()
        .fire()
        .map_err(|_| Error::TransactionFailed);
    result
}

```

Nota: los bytes de `function_selector` pueden encontrarse en el `target/ink/<contract-name>.json` generado.

## Limitaciones de ink! v3

- Los proyectos multi archivo no son soportados con ink! puro.
    - implementar traits / interfaces no funcionará 
    - Hay alternativas que agregarán esta funcionalidad tal como OpenBrush 
- Structs anidados y estructuras de datos serán difíciles de usar.
- Las llamadas entre contratos evitarán que los eventos sean emitidos. Ver [aquí](https://github.com/paritytech/ink/issues/1000) para detalles. 
- Las llamadas entre contratos no pueden ser testeadas off-chain con tests unitarios.
 Se necesitará utilizar tests de integración On-chain.

## Solución de problemas y errores

- `ERROR: Validation of the Wasm failed.`

```
ERROR: Validation of the Wasm failed.

ERROR: An unexpected panic function import was found in the contract Wasm.
This typically goes back to a known bug in the Rust compiler:
https://github.com/rust-lang/rust/issues/78744

As a workaround try to insert `overflow-checks = false` into your `Cargo.toml`.
This will disable safe math operations, but unfortunately we are currently not
aware of a better workaround until the bug in the compiler is fixed.
```

**Solución**  
Agregar lo siguiente al Cargo.toml del contrato:

```
[profile.release]
overflow-checks = false
```

- `"failed to load bitcode of module '...' "`

Esto sucede cuando se está intentando importar un contrato para llamadas entre contratos.

**Solución**  
Asegurarse que lo siguiente se agregue a la importación del Cargo.toml del contrato:

```
features = ["ink-as-dependency"]
```

por lo tanto la importación se vería así:

```
mycontract = { path = "mycontract/", default-features = false, features = ["ink-as-dependency"]}
```

## unit testing (off-chain)

- Los unit tests son una parte integral del desarrollo de un smart contract y garantizan que el código funciona off-chain antes de testearlo on-chain. 
- Para ejecutar tests de ink!, _no_ usar `cargo +nightly contract test`. Usar `cargo +nightly test`. Agregar el indicador `--nocapture` para mostrar los prints de debug. Ver [aquí](https://substrate.stackexchange.com/questions/3197/how-to-understand-which-test-failed-in-ink) para más información sobre las razones.
- Desde el módulo del contrato, asegurarse que se hace público el struct del contrato y cualquier otra cosa que se use en el test de unidad.
   Por ejemplo:

```rust
// tope del archivo
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

pub use self::mycontract::{
    MyContract
};
```

- Los unit tests Off-chain no funcionarán con las llamadas entre contratos. 
  Una solución para asegurarse que los unit tests están pasando es proveer datos simulados.

Un enfoque sencillo es usar una compilación condicional con `#[cfg(test)]` y `#[cfg(not(test))]`.

Nota: Esta solución no es ideal. ink! v4.0 proveerá soluciones mucho mejores.

Por ejemplo, aquí hay una llamada entre contratos ERC20 sólo modo lectura:

```rust
// sólo compila cuando no está ejecutando tests
#[cfg(not(test))]
fn get_token_balance(&self, caller: &AccountId) -> Balance {
    // llama al contrato externo ERC-20 
    self.token.balance_of(*caller)
}

// sólo compila cuando está ejecutando tests
#[cfg(test)]
fn get_token_balance(&self, _: &AccountId) -> Balance {
    // valor arbitrario
    1
}
```

Y si la llamada entre contratos _escribe_ en el storage, un campo simulado puede agregase al struct del contrato. Por ejemplo:

```rust
#[ink(storage)]
pub struct MyContract {
    #[cfg(test)]
    mock_field: SomeStruct, // servirá como un storage falso
}

...

// on-chain, ejecuta llamadas entre contratos 
#[cfg(not(test))]
fn do_some_write(&mut self) {
    self.external_contract.write_to_field(0xDEADBEEF);
}


// sólo para ambiente de testing
#[cfg(test)]
fn do_some_write(&mut self) {
    self.mock_field.my_fake_storage_item = 0xDEADBEEF;
}
```

- código útil para interactuar y modificar el ambiente del contrato para testing

[ink_env docs](https://paritytech.github.io/ink/ink_env/test/index.html)

```rust
// obtener las cuentas default (alice, bob, ...)
let accounts = ink_env::test::default_accounts::<ink_env::DefaultEnvironment>();
accounts.alice //ejemplo de uso

// establecer cuál cuenta llama al contrato
ink_env::test::set_caller::<ink_env::DefaultEnvironment>(accounts.bob);

// obtener la dirección del contrato
let callee = ink_env::account_id::<ink_env::DefaultEnvironment>();

// establecer la dirección del contrato
// por default, ésta es la cuenta de alice
ink_env::test::set_callee::<ink_env::DefaultEnvironment>(callee);

// transferir la moneda nativa al contrato 
ink_env::test::set_value_transferred::<ink_env::DefaultEnvironment>(2);

// aumentar el número de bloque (y el timestamp del bloque).
// esto puede ser colocado en un bucle para adelantar el bloque varias veces
ink_env::test::advance_block::<ink_env::DefaultEnvironment>();

// generar un AccountId arbitrario
AccountId::from([0x01; 32]);

// generar un Hash arbitrario 
Hash::from([0x01; 32])

// macro para tests que se espera que entren en panic.
#[should_panic]
```