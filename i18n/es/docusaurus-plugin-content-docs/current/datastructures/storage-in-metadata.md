---
title: Formato de la Metadata 
slug: /datastructures/storage-in-metadata
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Formato de la Metadata 

La estructura del storage de un contrato se ve reflejada dentro de la metadata. Permite a herramientas de terceros trabajar con un contrato y poder mejorar la comprensión de la estructura del storage de cualquier contrato.

Dado un contrato con el siguiente storage:

```rust
#[ink(storage)]
pub struct MyContract {
    balance: Balance,
    block: BlockNumber,
    lazy: Lazy<bool>,
}
```

El storage se verá reflejado dentro de la metadata de la siguiente manera:

```json
"root": {
  "layout": {
    "struct": {
      "fields": [
        {
          "layout": {
            "leaf": {
              "key": "0x00000000",
              "ty": 0
            }
          },
          "name": "balance"
        },
        {
          "layout": {
            "leaf": {
              "key": "0x00000000",
              "ty": 1
            }
          },
          "name": "block"
        },
        {
          "layout": {
            "root": {
              "layout": {
                "leaf": {
                  "key": "0xb1f4904e",
                  "ty": 2
                }
              },
              "root_key": "0xb1f4904e"
            }
          },
          "name": "lazy"
        }
      ],
      "name": "MyContract"
    }
  },
  "root_key": "0x00000000"
}
```

Observamos que la estructura del storage se representa con un árbol, en el cual los valores tangibles de storage terminan dentro de una `leaf`. A causa de la codificación [`Packed`](https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html), las hojas pueden compartir la misma key del storage, y para acceder a ellas es necesario buscar y decodificar toda la celda que corresponde a esa key.

Una `root_key` está destinada ya sea a ser utilizada para acceder directamente a un campo de storage `Packed` o para servir como la key base para calcular las keys reales necesarias para acceder a los valores de los campos non-`Packed` (por ejemplo `Mapping`s)

## Cálculo de la key del storage para valores de un ink! `Mapping` 

Las keys base del storage siempre tienen un tamaño de 4 bytes. Sin embargo, la API de storage del pallet `contracts` soporta keys de longitudes arbitrarias. Para acceder a un valor de un mapping, la key del storage de dicho valor se calcula en tiempo de ejecución.

La fórmula para calcular la key base de un storage `S` utilizada para acceder a un valor de mapping que corresponde a la key `K` para un mapping con una key base `B` puede expresarse de la siguiente manera:

```
S = scale::encode(B) + scale::encode(K)
```

En donde la key base `B` es la `root_key` (de tipo `u32`) encontrada en la metadata del contrato.

En otras palabras, codificar con SCALE la key base (root) del mapping y concatenarla con la key codificada con SCALE del valor de mapping para obtener la key del storage real utilizada para acceder al valor mapeado.

Dado el siguiente storage de un contrato, que mapea cuentas a un balance:

```rust
#[ink(storage)]
pub struct Contract {
    roles: Mapping<AccountId, Balance, ManualKey<0x12345678>>,
}
```

Ahora supongamos que estamos interesados en encontrar el balance para la cuenta `5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY`. La key del storage se calcula así:

1. Codificar en SCALE la key base del mapping (`0x12345678u32`), da como resultado `0x78563412`
2. Codificar en SCALE la `AccountId`, que será
   `0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d`.
   Tener en cuenta que primero será necesario convertir el SS58 en una `AccountId32`.
3. Concatenar estas dos dará como resultado la key
   `0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d`.

```rust
let account_id = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
let account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();
let storage_key = &(0x12345678u32, account).encode();
println!("0x{}", hex::encode(storage_key));
// 0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d
```

## Accediendo a elementos del storage con la llamada de runtime `contractsApi` 

Hay dos maneras de consultar los campos del storage de los smart contracts desde afuera de un contrato. Ambos métodos son accesibles a través de la UI web de [`polkadot-js`](https://polkadot.js.org/apps/).

La manera directa de consultar el storage de contratos es a través de una llamada [`runtime API`](https://polkadot.js.org/apps/#/runtime), utilizando el endpoint `contractsApi` provisto por el contracts pallet. El endpoint provee un método `getStorage`, que sólo espera una dirección de contrato y una key del storage como argumentos.

Por ejemplo, para acceder al struct del root storage correspondiente a la key `0x00000000` de un contrato, sólo especifique la dirección el contrato y la key del storage `0x00000000`. La llamada a la API devolverá el struct del root del contrato codificado en SCALE.

## Accediendo a elementos del storage con la llamada RPC `childState`

Por detrás, cada contrato tiene su propio [child trie](https://paritytech.github.io/substrate/master/frame_support/storage/child/index.html), donde los elementos del storage son almacenados.

Además, el pallet `contracts` usa [`Blake2 128 Concat`](https://paritytech.github.io/substrate/master/frame_support/struct.Blake2_128Concat.html) [`Algoritmo de hashing transparente`](https://docs.substrate.io/build/runtime-storage/#transparent-hashing-algorithms) para calcular las keys de storage para cada item almacenado dentro del child trie. Deberá tener eso en cuenta.

Con eso en mente, para acceder directamente a lo items de storage de cualquier contrato on-chain usando una [`llamada RPC`](https://polkadot.js.org/apps/#/rpc) childState, necesitará lo siguiente:
- El ID del child trie del contrato, representado como una [`PrefixedStorageKey`](https://docs.rs/sp-storage/10.0.0/sp_storage/struct.PrefixedStorageKey.html)
- La key hasheada del campo del storage

### Encontrando el ID del child trie de los contratos

El ID del child trie es el hash `Blake2_256` del nonce de instanciación del contrato concatenado a su `AccountId`. Puede encontrarlo en [`polkadot-js chainstate query interface`](https://polkadot.js.org/apps/#/chainstate), donde debe ejecutar la query de estado `contracts_contractInfoOf`.

También puede ser calculado manualmente de acuerdo al siguiente snippet de código. El nonce de instanciación del contrato debe ser conocido. Puede obtenerlo usando la query de estado `contracts_nonce` en la UI de polkadot-js.

```rust
use sp_core::crypto::Ss58Codec;
use parity_scale_codec::Encode;

// Dado que nuestro contract ID es 5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4
let account: AccountId32 =
    Ss58Codec::from_string("5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4").unwrap();
// Dado que nuestro nonce de instanciación fue 1
let nonce: u64 = 1;

// El ID del child trie puede ser calculado así:
let trie_id = (&account, nonce).using_encoded(Blake2_256::hash);
```

### Calcular el `PrefixedStorageKey` del ID del child trie

Una `PrefixedStorageKey` basada en el ID del child trie puede ser construida usando la primitiva `ChildInfo` así:

```rust
use sp_core::storage::ChildInfo;
let prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();
```

### Calcular la key del storage usando hasheo transparente

Finalmente, calculamos la key del storage hasheada del item de storage al que queremos acceder. El algoritmo es simple: Hashear la storage con `Blake2_128` y luego concatenarla con la key sin hashear. Dado que quiera acceder al item de storage correspondiente a `0x00000000`, el código se verá así:

```rust
use frame_support::Blake2_128Concat;

// La key base es 0x00000000
let storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);
```

### Ejemplo completo

Repasemos los últimos párrafos a través de un ejemplo completo. Dado:

* Un contrato en la dirección `5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4`
* Con un nonce de instanciación de `1`
* La struct del root storage será encontrado en la key base `0x00000000`

El siguiente programa Rust demuestra como calcular la `PrefixedStorageKey` del child trie del contrato, así como también la key hasheada del struct del storage, la cual puede ser usada con la función `getStorage` del endpoint RPC `childstate` en polkadot-js para recibir el struct del storage root del contrato: 

```rust
use frame_support::{sp_runtime::AccountId32, Blake2_128Concat, Blake2_256, StorageHasher};
use parity_scale_codec::Encode;
use sp_core::{crypto::Ss58Codec, storage::ChildInfo};
use std::ops::Deref;

fn main() {
    // Encontrar el ID trie del storage hijo
    let account_id = "5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4";
    let account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();
    let instantiation_nonce = 1u64;
    let trie_id = (account, instantiation_nonce).using_encoded(Blake2_256::hash);
    assert_eq!(
        hex::encode(trie_id),
        "2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b"
    );

    // Calcular la PrefixedStorageKey basada en el trie ID
    let prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();
    println!("0x{}", hex::encode(prefixed_storage_key.deref()));
    // 0x3a6368696c645f73746f726167653a64656661756c743a2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b

    // Calcular la key del storage usando hashing transparente
    let storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);
    println!("0x{}", hex::encode(&storage_key));
    // 0x11d2df4e979aa105cf552e9544ebd2b500000000
}
```