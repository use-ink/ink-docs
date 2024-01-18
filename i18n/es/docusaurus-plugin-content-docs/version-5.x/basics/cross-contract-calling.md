---
title: Llamadas Cross-Contract
slug: /basics/cross-contract-calling
hide_title: true
---

<img src="/img/title/cross-contract.svg" className="titlePic" />

# Llamadas Cross-Contract

En los contratos de ink! es posible llamar a mensajes y constructores de otros contratos on-chain.

Existen varios enfoques para realizar estas llamadas Cross-Contract en ink!:
1. Referencias de Contrato (`ContractRef`)
2. Builders (`CreateBuilder` y `CallBuilder`)

Las Referencias de Contrato sólo pueden utilizarse para llamadas Cross-Contract a otros contratos de ink!. Los Builders pueden utilizarse para realizar llamadas Cross-Contract a cualquier contrato Wasm, como los escritos en ink!, Solang o ask!.

## Referencias de Contrato

Las Referencias de Contrato se refieren a las structs generadas por el generador de código de ink! para las llamadas Cross-Contract.

Proporcionan a los desarrolladores una forma segura de interactuar con un contrato.

Una desventaja de su uso es que necesita importar el contrato al que desea llamar como una dependencia de su propio contrato.

Si quiere interactuar con un contrato que ya está on-chain, tendrás que utilizar el enfoque de los [`Builders`](/basics/cross-contract-calling#builders).

### Tutorial para `BasicContractRef`

Recorreremos el ejemplo de [`basic_contract_ref`](https://github.com/paritytech/ink/tree/master/integration-tests/basic_contract_caller) para demostrar cómo funcionan las llamadas Cross-Contract utilizando Referencias de Contratos.

El flujo general de trabajo será:
1. Preparar `OtherContract` para ser importado en otros contratos
1. Importar `OtherContract` en `BasicContractRef`
1. Cargar `OtherContract` on-chain
1. Instanciar `OtherContract` usando `BasicContractRef`
1. Llamar `OtherContract` usando `BasicContractRef`

#### Preparación de `OtherContract`

Debemos asegurarnos de que la Referencia de Contrato generada por ink! para `OtherContract` esté disponible para otras partes del código.

Para ello, re-exportaremos la Referencia de Contrato como se indica a continuación:

```rust
pub use self::other_contract::OtherContractRef;
```

#### Importando `OtherContract`

A continuación, tenemos que importar `OtherContract` a nuestro contrato `BasicContractRef`.

Primero, añadiremos las siguientes líneas a nuestro archivo `Cargo.toml`:

```toml
# En `basic_contract_ref/Cargo.toml`

other_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }

# -- snip --

[features]
default = ["std"]
std = [
    "ink/std",
    # -- snip --
    "other_contract/std",
]
```

Hay dos cosas a tener en cuenta:
1. Si no especificamos la característica `ink-as-dependency` terminaremos con errores de vinculación.
2. Si no habilitamos la característica `std` para construcciones `std` no podremos generar los metadatos de nuestro contrato.

#### Conectando `BasicContractRef`

En primer lugar, importaremos la Referencia de Contrato de `OtherContract`, y declararemos que la referencia forma parte de nuestra estructura de almacenamiento.

```rust
// En `basic_contract_ref/lib.rs`

use other_contract::OtherContractRef;

#[ink(storage)]
pub struct BasicContractRef {
    other_contract: OtherContractRef,
}
```

A continuación, añadiremos una forma de instanciar `OtherContract`. Lo haremos desde el constructor de nuestro contrato.

```rust
// En `basic_contract_ref/lib.rs`

#[ink(constructor)]
pub fn new(other_contract_code_hash: Hash) -> Self {
    let other_contract = OtherContractRef::new(true)
        .code_hash(other_contract_code_hash)
        .endowment(0)
        .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
        .instantiate();

    Self { other_contract }
}
```

Tenga en cuenta que para instanciar un contrato se necesitará acceder al `code_hash` cargado on-chain. Se detallará esto más adelante.

Una vez que se obtenga una referencia instanciada a `OtherContract`, se puede llamar a sus mensajes como si fueran métodos normales de Rust.

```rust
// En `basic_contract_ref/lib.rs`

#[ink(message)]
pub fn flip_and_get(&mut self) -> bool {
    self.other_contract.flip();
    self.other_contract.get()
}
```

#### Cargando `OtherContract`

Necesitaremos el [`substrate-contracts-node`](https://github.com/paritytech/substrate-contracts-node)
ejecutándose en segundo plano para los siguientes pasos.

Se puede cargar `OtherContract` usando `cargo-contract` de la siguiente manera:

```
# En la carpeta `basic_contract_ref`
cargo contract build --manifest-path other_contract/Cargo.toml
cargo contract upload --manifest-path other_contract/Cargo.toml --suri //Alice
```

Si tenemos éxito, esto dará como resultado un `code_hash` similar a:

```
Code hash "0x74a610235df4ff0161f0247e4c9d73934b70c1520d24ef843f9df9fcc3e63caa"
```

Se puede utilizar este code `code_hash` para instanciar nuestro contrato `BasicContractRef`.

#### Instanciando `OtherContract` a través de `BasicContractRef`

Primero tendremos que instanciar `BasicContractRef`.

```
# En la carpeta `basic_contract_ref`
cargo contract build
cargo contract instantiate \
    --constructor new \
    --args 0x74a610235df4ff0161f0247e4c9d73934b70c1520d24ef843f9df9fcc3e63caa \
    --suri //Alice --salt $(date +%s)
```

Si tenemos éxito, esto dará como resultado una dirección de contrato para `BasicContractRef` similar a:

```
Contract 5CWz6Xnivp9PSoZq6qPRP8xVAShZgtNVGTCLCsq3qzqPV7Rq
```

#### Llamando a `OtherContract` a través de `BasicContractRef`

Por último, podemos llamar a los métodos de `OtherContract` a través de `BasicContractRef` de la siguiente manera:

```
cargo contract call --contract 5CWz6Xnivp9PSoZq6qPRP8xVAShZgtNVGTCLCsq3qzqPV7Rq \
    --message flip_and_get --suri //Alice --dry-run
```

Lo que resultará en algo similar a:

```
Result Success!
Reverted false
Data Ok(true)
```

## Builders
[`CreateBuilder`](https://docs.rs/ink_env/latest/ink_env/call/struct.CreateBuilder.html)
y
[`CallBuilder`](https://docs.rs/ink_env/latest/ink_env/call/struct.CallBuilder.html)
ofrecen interfaces flexibles de bajo nivel para poder realizar llamadas entre contratos. El `CreateBuilder` permite instanciar contratos ya cargados, y el 
`CallBuilder` permite llamar mensajes en contratos instanciados.

### CreateBuilder
`CreateBuilder` ofrece una forma sencilla de **instanciar** un contrato. Tenga en cuenta que necesitará que este contrato haya sido cargado previamente.

:::note

Para repasar la diferencia entre `upload` e `instantiate` [dirigirse aquí](/getting-started/deploy-your-contract).

:::

Para instanciar un contrato necesitaremos una referencia a un contrato, al igual que en 
[la sección anterior](/basics/cross-contract-calling#referencias-de-contrato).

A continuación se muestra un ejemplo de cómo instanciar un contrato utilizando el `CreateBuilder`. Vamos a:
- instanciar el contrato cargado con un `code_hash` de `0x4242...`
- sin límite de gas especificado (`0` significa ilimitado)
- enviando `10` unidades de valor transferido a la instancia del contrato
- instanciando con el constructor `new` 
- con los siguientes argumentos
    - un `u8` con valor `42`
    - un `bool` con valor `true`
    - un vector de 32 `u8` con valor `0x10`
- generar la dirección (`AccountId`) utilizando los `salt_bytes` especificados
- y esperar que devuelva un valor de tipo `MyContractRef`

```rust
use contract::MyContractRef;
let my_contract: MyContractRef = build_create::<MyContractRef>()
    .code_hash(Hash::from([0x42; 32]))
    .gas_limit(0)
    .endowment(10)
    .exec_input(
        ExecutionInput::new(Selector::new(ink::selector_bytes!("new")))
            .push_arg(42)
            .push_arg(true)
            .push_arg(&[0x10u8; 32])
    )
    .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])
    .returns::<MyContractRef>()
    .instantiate();
```

Dado que `CreateBuilder::instantiate()` devuelve una referencia a un contrato, podemos utilizar esta referencia a un contrato para llamar a mensajes como en la 
[sección anterior](/basics/cross-contract-calling#referencias-de-contrato).

### CallBuilder
`CallBuilder` te ofrece algunas maneras de llamar a mensajes desde otros contratos. Hay dos enfoques principales para esto: `Call`s y `DelegateCall`s. Cubriremos brevemente ambos aquí.

#### CallBuilder: Call
Al utilizar `Call`s, el `CallBuilder` requiere un contrato ya instanciado.

Vimos un ejemplo de cómo utilizar el `CreateBuilder` para instanciar contratos en la
[sección anterior](/basics/cross-contract-calling#referencias-de-contrato).

A continuación, veremos un ejemplo de cómo llamar a un contrato utilizando el `CallBuilder`. Vamos a:
- hacer una `Call` normal
- a un contrato en la dirección `0x4242...`
- sin especificar límite de gas (`0` significa ilimitado)
- enviar `10` unidades de valor transferido a la instancia del contrato
- llamar al mensaje `flip`
- con los siguientes argumentos
    - un `u8` con valor `42`
    - un `bool` con valor `true`
    - un vector de 32 `u8` con valor `0x10`
- y esperar que devuelva un valor de tipo `bool`

```rust
let my_return_value = build_call::<DefaultEnvironment>()
    .call(AccountId::from([0x42; 32]))
    .gas_limit(0)
    .transferred_value(10)
    .exec_input(
        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))
            .push_arg(42u8)
            .push_arg(true)
            .push_arg(&[0x10u8; 32])
    )
    .returns::<bool>()
    .invoke();
```

Nota:

Los argumentos de los mensajes se codificarán en el orden en que se proporcionen al `CallBuilder`.
Esto significa que deben coincidir con el orden (y tipo) en que aparecen en la firma de la función.

No podrá obtener información sobre esto en tiempo de compilación. Sólo descubrirá que la llamada ha fallado en tiempo de ejecución.

#### CallBuilder: DelegateCall
También puedes utilizar el `CallBuilder` para crear llamadas utilizando la mecánica `DelegateCall`.
Si necesitas un repaso de lo que son las llamadas a delegados, 
[consulta este artículo](https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c).

En el caso de `DelegateCall`, no necesitamos un contrato ya instanciado. Sólo necesitamos el `code_hash` de un contrato subido.

A continuación se muestra un ejemplo de cómo realizar una llamada delegada a un contrato utilizando el `CallBuilder`. Vamos a:
- hacer una `DelegateCall`
- a un contrato `code_hash` (¡no una dirección de contrato!) de `0x4242...`
- sin límite de gas especificado (`0` significa "automático")
- enviar `10` unidades de valor transferido a la instancia del contrato
- llamar al mensaje `flip`
- con los siguientes argumentos
    - un `u8` con valor `42`
    - un `bool` con valor `true`
    - un vector de 32 `u8` con valor `0x10`
- y esperar que devuelva un `i32`

```rust
let my_return_value = build_call::<DefaultEnvironment>()
    .delegate(ink::primitives::Hash::from([0x42; 32]))
    .exec_input(
        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))
            .push_arg(42u8)
            .push_arg(true)
            .push_arg(&[0x10u8; 32])
    )
    .returns::<i32>()
    .invoke();
```

### Gestión de errores del Builder
Tanto `CreateBuilder` como el `CallBuilder` ofrecen gestión de errores con los métodos `try_instantiate()` y `try_invoke()` respectivamente.

Estos permiten a los desarrolladores de contratos gestionar dos tipos de errores:
1. Errores del entorno de ejecución subyacente (por ejemplo, el pallet `Contracts`)
2. Errores del lenguaje de programación (por ejemplo, `LangError`s)

Consulte la documentación de
[`try_instantiate`](https://docs.rs/ink_env/latest/ink_env/call/struct.CreateBuilder.html#method.try_instantiate),
[`try_invoke`](https://docs.rs/ink_env/latest/ink_env/call/struct.CallBuilder.html#method.try_invoke-2),
[`ink::env::Error`](https://docs.rs/ink_env/latest/ink_env/enum.Error.html)
y
[`ink::LangError`](https://docs.rs/ink/latest/ink/enum.LangError.html)
para más detalles sobre el manejo adecuado de errores.

:::tip

Dado que el `CallBuilder` sólo requiere el `AccountId` de un contrato y el `selector` de un mensaje, podemos llamar a contratos Solidity que estén compilados utilizando el compilador [Solang](https://github.com/hyperledger/solang)
y subidos a una chain que soporte `pallet-contracts`.
Vea [aquí](https://github.com/xermicus/call_solidity) un ejemplo de cómo hacerlo.

Por otro lado, las llamadas desde Solidity a ink! **no** están soportadas por Solang, pero hay planes para implementarlo en el futuro.

:::