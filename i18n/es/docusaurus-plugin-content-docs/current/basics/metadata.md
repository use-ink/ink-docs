---
title: Metadata
slug: /metadata
---

# ink! Metadata

Los metadatos ink! se utiliza para describir un lenguaje mediante lenguaje agnóstico.
metadata is used to describe a contract in a language agnostic way. 
Está destinado a ser utilizado por herramientas de terceros (p.ej UIs, explorador de bloques) 
para poder llamar correctamente a las funciones de contrato e interpretar eventos.

Los metadatos ink! son generados cuando un contrato es construido utilizando `cargo-contract`, p.ej
`cargo contract build`.

Los metadatos se pueden encontrar en tu en el directorio de destino de su contrato bajo el nombre
`<contrato-nombre>.json`.

:::note

Los metadatos también están contenidos en el fichero `$contract_name.contract`. La diferencia
es que el fichero `.contract` también contiene el binario Wasm de tu contrato.

:::

## <contract-nombre>.json
Los metadatos se definen con las siguietes claves **requeridas**:
- `source`: Información sobre el código Wasm.
- `contract`: Metadatos sobre el contrato.
- `abi`: El JSON en "crudo" del metadata abi del contrato, generado durante la compilación del contrato.

_Opcionalmente_ puede contener las siguientes claves:
- `user`: Metadatos adicionales definidos por el usuario.

```json
{
  "source": {
    "hash": "...",
    "language": "...",
    "compiler": "..."
  },
  "contract": {
    "name": "...",
    "version": "...",
    "authors": [
      "..."
    ]
  },
  "V3": {
    "spec": { ... },
    "storage": { ... },
    "types": { ... }
  }
}
```

:::note

Tenga en cuenta que no tenemos una clave `abi`, pero en su lugar utilizamos la versión de metadatos como nombre
de la clave (`V3` en este caso). Puedes leer más sobre esto en la [documentación ABI](/metadata#abi).

:::


Las siguientes secciones profundizan en cómo se componen estas secciones.

### `source`
Este objecto contiene información sobre como el contrato fue construido.

Consiste en las siguientes claves **requeridas**:

- `hash`: El hash del código Wasm del contrato.
- `language`: El lenguaje utilizado para escribir el contrato.
- `compiler`: El compilador utilizado para compilar el contrato.

_Opcionalmente_ podría incluir las siguientes claves:
- `wasm`: El actual código Wasm del contrato, para empaquetar opcionalmente el código con los metadatos.

```json
"source": {
  "hash": "0x157014494527fee27a82e49bbd9eea10c0713bb0566f6def37f4595db86236ff",
  "language": "ink! 4.0.0",
  "compiler": "rustc 1.66.0"
}
```

:::info

Si estas interesado en el código referencia de `cargo-contract`
mira [aquí](https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L127).

:::

### `contract`
Este objeto contiene metadatos extra sobre el contrato.

Las claves **requeridas** incluyen:
 - `name`: El nombre de los smart contract.
 - `version`: La versión de los smart contract.
 - `authors`: Los autores de los smart contract.

Puede _opcionalmente_ incluir las siguientes claves:
 - `description`: La descripción de los smart contract.
 - `documentation`: Link a la documentación de los smart contract.
 - `repository`: Link al repositorio del código de los smart contract.
 - `homepage`: Link a la página principal de los smart contract.
 - `license`: La licencia de los smart contract.

```json
"contract": {
  "name": "flipper",
  "version": "3.1.0",
  "authors": [
    "Parity Technologies <admin@parity.io>"
  ]
}
```

:::info

Si estas interesado en el código referencia de `cargo-contract`
mira [aquí](https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L395).

:::

### ABI
Esta es la especificación del contrato

A diferencia de las secciones de metadatos anteriores, la estructura del objeto almacenado aquí no está definida.
En su lugar, depende de cada lenguaje de programación (p.ej ink!, ask!, Solidity) para definir
su propio formato de metadatos que sera almacenado aquí.

En este documento nos centraremos en el ink! ABI.

El ABI comienza con el número de versión de los metadatos ink!. En nuestro ejemplo a continuación 
estamos utilizando la versión 3 de los metadatos ink!, denotado por la clave `V3`.

:::note
La versión del ABI es distinto de cualquier concepto del versionado Rust's crate.
:::

```json
"V3": {
  "spec": { ... },
  "storage": { ... },
  "types": { ... }
}
```

Los metadatos ink! consisten en  las siguientes secciones **requeridas**
 - `spec`:La descripción del contrato (p.ej constructores, mensajes, eventos, etc.).
 - `storage`: El diseño de la estructura de datos de almacenamiento.
 - `types`: Un registro de solo lectura que contiene tipos en su forma portable para la serialización.

:::info

Si estas interesado en el código referencia de`ink!`
mira [aquí](https://github.com/paritytech/ink/blob/80d302eb9b9cddb726200a9a86c71ae344d1b042/crates/metadata/src/lib.rs#L91).

:::

#### `spec`
El contrato `spec` consiste en las siguientes claves **requeridas**:
- `constructors`: El conjunto de constructores del contrato..
    - `label`: La etiqueta del contructor. En el caso de un trait proporcionado por un constructor a la etiqueta
      se le pone de prefijo la etiqueta del trait.
    - `selector`: El hash selector del mensaje.
    - `payable`: Si el constructor accepta cualquier `valor` de la persona que lo llama.
    - `args`: Los parámetros del controlador del despliegue.
    - `docs`: La documentación del controlador del despliegue.
- `messages`: Los mensajes externos del contrato.
    - `label`: La etiqueta del mensaje.  En el caso de un trait proporcionado por los mensajes y
      constructores el prefijo por convención de ink! es la etiqueta del trait.
    - `selector`: El hash selector del mensaje.
    - `mutates`: Si se permite que el mensaje cambie el estado del contrato.
    - `payable`: Si el mensaje acepta cualquier `valor` de la persona que lo llama.
    - `args`: Los parámetros del mensaje.
    - `return_type`: El tipo de retorno del mensaje.
    - `docs`: La documentación del mensaje.
- `events`: Los eventos del contrato.
    - `label`: La etiqueta del evento.
    - `args`: Los argumentos del evento.
    - `docs`: La documentación del evento.
- `docs`: La documentación del contrato.

:::note

Si bien todas estas claves son necesarias, es posible que estén vacías. Por ejemplo, si un contrato no define ningún evento, 
entonces la clave `events` contendra un array vacío `[]`.

:::

```json
"spec": {
  "constructors": [
    {
      "args": [
        { ... }
      ],
      "docs": [
        "Creates a new flipper smart contract initialized with the given value."
      ],
      "label": "new",
      "payable": false,
      "selector": "0x9bae9d5e"
    }
  ],
  "docs": [],
  "events": [],
  "messages": [
    {
      "args": [],
      "docs": [
        " Flips the current value of the Flipper's boolean."
      ],
      "label": "flip",
      "mutates": true,
      "payable": false,
      "returnType": null,
      "selector": "0x633aa551"
    }
  ]
}
```

#### `storage`
Esta clave describe el diseño del storage de un contrato ink!
This key describes the storage layout of an ink! contract. Realiza un seguimiento de algunas de las diferentes estructuras que se pueden almacenar. 

Consiste en las siguientes claves
_opcionales_ (dependiendo de qué estructuras de datos se utilizan en el contrato):
- `cell`: Una celda codificada.
    - `key`: La clave offset en el storage.
    - `ty`: El tipo de la entidad codificada.
- `hash`: El diseño de los valores hashes en todo el espacio de la clave de almacenamiento.
    - `offset`: La clave offset utilizado por la estrategia.
    - `strategy`: La estrategia hashing para diseñar los elementos subyacentes.
    - `layout`: El diseño del storage layout de los elementos de diseño ilimitados.
- `array`: Un array de celdas de almacenamiento asociadas codificadas con un tipo dado.
    - `offset`: La clave offset del diseño del array. Esta es la misma clave que el elemento en el índice 0 
       del diseño del array.
    - `len`: El número de elementos del diseño del layout.
    - `cells_per_elem`: El número de celdas de las que consta cada elemento en el diseño del array.
    - `layout`: El diseño de los elementos almacenados en el diseño del array.
- `struct`: Un diseño de struct con campos de diferentes tipos..
    - `fields`: Los campos del diseño del struct.
- `enum`: Un diseño del enum con un discriminante que indica qué variante se presenta.
    - `dispatch_key`: La clave donde se almacena el discriminante para despachar las variantes.
    - `variants`: Las variantes del enum.

```json
"storage": {
  "struct": {
    "fields": [
      {
        "layout": {
          "cell": {
            "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "ty": 0
          }
        },
        "name": "value"
      }
    ]
  }
}
```

#### `types`
Este objecto contiene el registro del tipo de un smart contract. Consiste en un array de 
tipo objects, cada uno de los cuales se define asi:

- `id`: ID númerico para referenciar el tipo.
- `ty`: La definición del tipo.
    - `path`: La ruta única del tipo. Puede estar vacío para tipos integrados.
    - `params`: Los parámetros de tipo genérico del tipo en uso. Vacío para tipos no genéricos.
    - `def`: La actual definición del tipo.
    - `docs`: Documentación.

El objeto de definición de tipo (`def`) soporta los siguientes tipos `primitive`:
- `bool`, `char`, `str`, `u8`, `u16`, `u32`, `u64`, `u128`, `i8`, `i16`, `i32`, `i64`, `i128`.

También admite una variedad de tipos complejos integrados y definidos por el usuario. Sin embargo,
no lo veremos con mucho detalle aquí. Si estás interesado en aprender más echa un vistazo al crate 
[`scale-info`](https://github.com/paritytech/scale-info).

```json
"types": [
  {
    "id": 0,
    "type": {
      "def": {
        "primitive": "bool"
      }
    }
  }
]
```

Otras partes de los metadatos, como el objeto `storage`, hará referencia a tipos individuales de este registro de tipo 
utilizando la clave `id`.

### `user`
Este es un campo _opcional_ utilizado para añadir metadatos definidos por el usuario. Algunos ejemplos de cosas 
que puedes incluir aquí:
- `moon_phase`: Fase de la luna durante la cual funciona esmart contract.
- `favorite_blockchain`: El blockchain favrito del los autores del contrato (answer: Polkadot!).
