---
title: Contratos Actualizables
slug: /basics/upgradeable-contracts
hide_title: true
---

<img src="/img/title/upgradeable-contract.svg" className="titlePic" />

# Contratos Actualizables

A pesar de que los smart contracts están destinados a ser inmutables por diseño,
a menudo es necesario realizar una actualización del smart contract.

Para este escenario, ink! tiene diferentas estrategias de actualización.
- [Proxy Forwarding](#proxy-forwarding)
  - [Propiedades](#properties)
- [Reemplazar el Código del Contrto con `set_code_hash()`](#replacing-contract-code-with-set_code_hash)
  - [Propiedades](#properties-1)
  - [Compatibilidad del Storage](#storage-compatibility)
  - [Una pequeña nota sobre el determinismo de las direcciones de los contratos](#a-little-note-on-the-determinism-of-contract-addresses)
- [Ejemplos](#examples)

## Proxy Forwarding

Este método se basa en la capacidad de los contratos para hacer llamadas proxy con otros contratos.

### Propiedades

- Reenvía cualquier llamada en la que no coincidan  un selector propio con el de otro contrato.
- El otro contrato necesita ser desplegado on-chain.
- El estado es almacenado en el storage del contrato en la que se desvían las llamadas.

```
User ---- tx ---> Proxy ----------> Implementation_v0
                     |
                      ------------> Implementation_v1
                     |
                      ------------> Implementation_v2
```

Nuestro contrato proxy tendra estos dos campos en el storage:

```rust
#[ink(storage)]
pub struct Proxy {
    /// The `AccountId` of a contract where any call that does not match a
    /// selector of this contract is forwarded to.
    forward_to: AccountId,
    /// The `AccountId` of a privileged account that can update the
    /// forwarding address. This address is set to the account that
    /// instantiated this contract.
    admin: AccountId,
}
```

Necesitamos una manera de cambiar la dirección de un contrato al que desviamos las llamadas
y el selector de mensajes actual para hacer proxy de la llamada:

```rust
impl Proxy {
    /// Changes the `AccountId` of the contract where any call that does
    /// not match a selector of this contract is forwarded to.
    #[ink(message)]
    pub fn change_forward_address(&mut self, new_address: AccountId) {
        assert_eq!(
            self.env().caller(),
            self.admin,
            "caller {:?} does not have sufficient permissions, only {:?} does",
            self.env().caller(),
            self.admin,
        );
        self.forward_to = new_address;
    }

    /// Fallback message for a contract call that doesn't match any
    /// of the other message selectors.
    ///
    /// # Note:
    ///
    /// - We allow payable messages here and would forward any optionally supplied
    ///   value as well.
    /// - If the self receiver were `forward(&mut self)` here, this would not
    ///   have any effect whatsoever on the contract we forward to.
    #[ink(message, payable, selector = _)]
    pub fn forward(&self) -> u32 {
        ink::env::call::build_call::<ink::env::DefaultEnvironment>()
            .call_type(
                Call::new()
                    .callee(self.forward_to)
                    .transferred_value(self.env().transferred_value())
                    .gas_limit(0),
            )
            .call_flags(
                ink::env::CallFlags::default()
                    .set_forward_input(true)
                    .set_tail_call(true),
            )
            .fire()
            .unwrap_or_else(|err| {
                panic!(
                    "cross-contract call to {:?} failed due to {:?}",
                    self.forward_to, err
                )
            });
        unreachable!(
            "the forwarded call will never return since `tail_call` was set"
        );
    }
}
```

:::consejo

Eche un vistazo al patrón selector en el atribut de la macro, declarando `selector = _`
especificamos que todos los demás mensajes deben ser manejados por este selector de mensajes.

:::

Con este patrón, puede introducir otro mensaje en su contrato proxy.
Cualquier mensaje que no coincida con el contrato proxy
se reenviará a la dirección del contrato especificada.

## Reemplazar el Código del Contrto con `set_code_hash()`

Siguiendo la filosofia de [Substrate's runtime upgradeability](https://docs.substrate.io/maintain/runtime-upgrades/),
ink! también soporta una manera sencilla de actualizar el código de tus contratos via la función especial
[`set_code_hash()`](https://paritytech.github.io/ink/ink_env/fn.set_code_hash.html).

### Propiedades

- Actualizar el código del contrato con `set_code_hash()`. 
Esto reemplaza de manera efectiva el código que se ejecuta para la dirección del contrato.
- El otro contrato necesita ser desplegado on-chain.
- El estado es almacenado en el storage del contrato instanciado originalmente.

Simplemente añade la siguiente función al contrato que quieres actualizar en el futuro.

```rust 
/// Modifies the code which is used to execute calls to this contract address (`AccountId`).
///
/// We use this to upgrade the contract logic. We don't do any authorization here, any caller
/// can execute this method. In a production contract you would do some authorization here.
#[ink(message)]
pub fn set_code(&mut self, code_hash: [u8; 32]) {
    ink::env::set_code_hash(&code_hash).unwrap_or_else(|err| {
        panic!(
            "Failed to `set_code_hash` to {:?} due to {:?}",
            code_hash, err
        )
    });
    ink::env::debug_println!("Switched code hash to {:?}.", code_hash);
}
```

### Compatibilidad del Storage

Es responsabilidad del desarrollador asegurarse que el storage del nuevo contrato es compatible con el storage del contrato que esta siendo reemplazado.

:::danger ¡Atención!

No deberias cambiar el otden en el que las variables de estado del contrato son declaradas, ni su tipo!

Violar esta restricción no impedirá una exitosa compilación,
pero podria resultar en  **el mix-up de valores** o **fallos al leer correctamente el storage**.
Esto podría resultar en errores severos en la aplicación que utiliza el contrato.

:::


Si el storage de tu contrato tiene esta pinta:
```rust
#[ink(storage)]
pub struct YourContract {
    x: u32,
    y: bool,
}
```

Los procedimientos enumerados a continuación harán que sea ***invalido***

Cambiar el orden de las variables:

```rust
#[ink(storage)]
pub struct YourContract {
    y: bool,
    x: u32,
}
```

Eliminar una variable existente:

```rust
#[ink(storage)]
pub struct YourContract {
    x: u32,
}
```

Cambiar el tipo de la variable

```rust
#[ink(storage)]
pub struct YourContract {
    x: u64,
    y: bool,
}
```

Introducir una nueva variable antes de una de las ya existentes:

```rust
#[ink(storage)]
pub struct YourContract {
    z: Vec<u32>,
    x: u32,
    y: bool,
}
```

### Una pequeña nota sobre el determinismo de las direcciones de los contratos

:::note

Si tu contato utiliza este enfoque, ya no mantiene la suposición de address determinista.
Ya no puedes asumir que la dirección del contrato identifica un código hash específico.
Por favor vaya [al error](https://github.com/paritytech/substrate/pull/10690#issuecomment-1025702389) 
para más detaller.

:::

## Ejemplos

Puedes ver ejemplos de actualizaciones de contratos en el  
[repositorio ink!](https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts).
