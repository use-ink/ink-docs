---
title: Chain Environment Types
slug: /basics/chain-environment-types
hide_title: true
---

<img src="/img/title/environment.svg" className="titlePic" />

# Chain Environment Types

:::caution
¡ Si escribes un contrato para una cadena que no usa los tipos Substrate
por defecto, tienes que comprobar que configuras el `Environment` para
el contrato!
:::

ink! define un trait [`Environment`](https://paritytech.github.io/ink/ink_env/trait.Environment.html)
y también una implementación por defecto del trait - [`DefaultEnvironment`](https://paritytech.github.io/ink/ink_env/enum.DefaultEnvironment.html). 

Estos son los tipos que utiliza ink! si no se toman medidas explícitas:

```rust
/// Los tipos fundamentales de la configuración por defecto.
#[derive(Debug, Clone, PartialEq, Eq)]
#[cfg_attr(feature = "std", derive(TypeInfo))]
pub enum DefaultEnvironment {}

impl Environment for DefaultEnvironment {
    const MAX_EVENT_TOPICS: usize = 4;

    type AccountId = ink_primitives::AccountId;
    type Balance = u128;
    type Hash = ink_primitives::Hash;
    type Timestamp = u64;
    type BlockNumber = u32;
    type ChainExtension = NoChainExtension;
}
```
El contexto es que puedse usar ink! en cualquier blockchain que haya sido
construida con [Substrate](https://substrate.io) e incluya el módulo
[`pallet-contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts).

Las cadenas construidas con Substrate pueden decidir que tipos quieres usar
para, por ejemplo, el numero de bloque o el id de una cuenta. Las cadenas
que quieran ser compatibles con Ethereum tendrán a usar su mismo `AccountId`.

La mayoría de cadenas Substrate mantienen los tipos por defecto de Substrate y
ink! también los usa. Es posible configurar el entorno de manera diferente en
la macro de contrato ([documentación aquí](https://paritytech.github.io/ink/ink/attr.contract.html#header-arguments)):

```rust
#[ink::contract(env = MyCustomTypes)]
```