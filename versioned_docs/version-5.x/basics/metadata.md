---
title: Metadata
hide_title: true
slug: /basics/metadata
---

<img src="/img/title/metadata.svg" className="titlePic" />

# ink! Metadata

The ink! metadata is used to describe a contract in a language agnostic way. It is
intended to be used by third party tools (e.g. UIs, block explorers) in order to correctly
call contract functions and interpret events.

The ink! metadata is generated when a contract is built using `cargo-contract`, e.g
`cargo contract build`.

The metadata can be found in your contract's target directory under the name
`<contract-name>.json`.

:::note

The metadata is also contained in your `<contract-name>.contract` file. The difference is
that the `.contract` file also contains the Wasm binary of your contract.

:::

## `<contract-name>.json`
The metadata is defined by the following **required** keys:
- `source`: Information about the contract's Wasm code.
- `contract`: Metadata about the contract.
- `abi`: Raw JSON of the contract's abi metadata, generated during contract compilation.

It may _optionally_ contain the following keys:
- `user`: Additional user-defined metadata.

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
  "spec": {
    "constructors": ["..."],
    "messages": ["..."]
  }
}
```

:::note

Notice that we don't have an `abi` key, but we instead use the `spec` field to specify
the contract's ABI. You can read more about that in the [ABI documentation](/basics/metadata#abi).

:::

The following sections will dive deeper into how these sections are made up.

### `source`
This object contains information about how the contract was built.

It consists of the following **required** keys:
- `hash`: The hash of the contract's Wasm code.
- `language`: The language used to write the contract.
- `compiler`: The compiler used to compile the contract.

It may _optionally_ include the following keys:
- `wasm`: The actual Wasm code of the contract, for optionally bundling the code with the metadata.
- `build_info`: Extra information about the environment in which the contract was built.

```json
"source": {
  "hash": "0x157014494527fee27a82e49bbd9eea10c0713bb0566f6def37f4595db86236ff",
  "language": "ink! 4.0.0",
  "compiler": "rustc 1.66.0"
}
```

:::info

If you're interested in the code reference from `cargo-contract`
see [here](https://github.com/paritytech/cargo-contract/blob/30ba1ec545d01c0479fe47c97d2c8911ab868d46/crates/metadata/src/lib.rs#L157).

:::

### `contract`
This object contains extra metadata about the contract.

The **required** keys include:
 - `name`: The name of the smart contract.
 - `version`: The version of the smart contract.
 - `authors`: The authors of the smart contract.

It can _optionally_ include the following keys:
 - `description`: The description of the smart contract.
 - `documentation`: Link to the documentation of the smart contract.
 - `repository`: Link to the code repository of the smart contract.
 - `homepage`: Link to the homepage of the smart contract.
 - `license`: The license of the smart contract.

```json
"contract": {
  "name": "flipper",
  "version": "4.0.0-beta.1",
  "authors": [
    "Parity Technologies <admin@parity.io>"
  ]
}
```

:::info

If you're interested in the code reference from `cargo-contract`
see [here](https://github.com/paritytech/cargo-contract/blob/30ba1ec545d01c0479fe47c97d2c8911ab868d46/crates/metadata/src/lib.rs#L432).

:::

### ABI
This is the specification of the contract.

Unlike the previous metadata sections the structure of the object stored here is not
defined. Instead, it is up to each programming language (e.g. ink!, ask!, Solidity) to
define their own metadata format which will then be stored here.

In this document we will focus on the ink! ABI.

The ink! metadata consists of the following **required** sections
 - `spec`: The description of the contract (e.g constructors, messages, events, etc.).
 - `storage`: The layout of the storage data structure
 - `types`: A read-only registry containing types in their portable form for
   serialization.
 - `version`: The version of the ink! metadata.

```json
"spec": { ... },
"storage": { ... },
"types": { ... },
"version": "..."
```

:::info

If you're interested in the code reference from `ink!`
see [here](https://github.com/paritytech/ink/blob/c8aa3ee41112b327d4f3cb3959f188945c8ccace/crates/metadata/src/lib.rs#L90).

:::

#### `spec`
The contract `spec` consists of the following **required** keys:
- `constructors`: The set of constructors of the contract.
    - `label`: The label of the constructor. In case of a trait provided constructor the
      label is prefixed with the trait label.
    - `selector`: The selector hash of the message.
    - `payable`: If the constructor accepts any `value` from the caller.
    - `default`: If the constructor is marked as default, useful for UIs.
    - `args`: The parameters of the deployment handler.
    - `docs`: The deployment handler documentation.
- `messages`: The external messages of the contract.
    - `label`: The label of the message. In case of trait provided messages and
      constructors the prefix by convention in ink! is the label of the trait.
    - `selector`: The selector hash of the message.
    - `mutates`: If the message is allowed to mutate the contract state.
    - `payable`: If the message accepts any `value` from the caller.
    - `default`: If the message is marked as default, useful for UIs.
    - `args`: The parameters of the message.
    - `return_type`: The return type of the message.
    - `docs`: The message documentation.
- `environment`: Configuration of the types that the host blockchain operates with. 
You can check default types in [Environment](https://use.ink/basics/chain-environment-types) section.
  - `accountId`: The type describing an account address.
  - `balance`: The type describing balance values.
  - `blockNumber`: The type describing a block number. 
  - `chainExtension`: The type describing the chain extension for the environment. 
For more information about usage and definition check [this section](https://use.ink/macros-attributes/chain-extension).
  - `maxEventTopics`: The maximum number of supported event topics provided by the runtime.
  - `timestamp`: the type describing a timestamp.
- `events`: The events of the contract.
    - `label`: The label of the event.
    - `args`: The event arguments.
    - `docs`: The event documentation.
- `docs`: The contract documentation.
- `lang_error`: The language specific error type.

:::note

While all these keys are required, they may be empty. For example, if a contract does not
define any events then the `events` key would contain an empty array `[]`.

:::

:::tip ink! 3.x Compatibility Note

The `lang_error` field was introduced as part of ink! 4.0. This represents an error which
comes from the smart contracting language itself, and not the contract nor the underlying
environment (e.g `pallet-contracts`).

All ink! messages and constructors now return a `Result` which uses this as the `Error`
variant (see the [`LangError`](https://docs.rs/ink/4.0.0/ink/enum.LangError.html) docs for more).

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
      "default": false,
      "selector": "0x9bae9d5e"
    }
  ],
  "docs": [],
  "events": [],
  "lang_error": {
    "displayName": [
      "ink",
      "LangError"
    ],
    "type": 3
  },
  "messages": [
    {
      "args": [],
      "docs": [
        " Flips the current value of the Flipper's boolean."
      ],
      "label": "flip",
      "mutates": true,
      "payable": false,
      "default": false,
      "returnType": null,
      "selector": "0x633aa551"
    }
  ]
}
```

#### `storage`
This key describes the storage layout of an ink! contract. It tracks some of the
different structures which can be placed in storage.

It consists of the following _optional_ keys (depending on what data structures are used
by the contract):

- `root`: The root cell defines the storage key for all sub-trees
    - `root_key`: The root key of the sub-tree.
    - `layout`: The storage layout of the unbounded layout elements.
- `leaf`: The root cell defines the storage key for all sub-trees
    - `key`: The offset key into the storage.
    - `ty`: The type of the encoded entity.
- `hash`: A layout that hashes values into the entire storage key space.
    - `offset`: The key offset used by the strategy.
    - `strategy`: The hashing strategy to layout the underlying elements.
    - `layout`: The storage layout of the unbounded layout elements.
- `array`: An array of associated storage cells encoded with a given type.
    - `offset`: The offset key of the array layout. This is the same key as the element
      at index 0 of the array layout.
    - `len`: The number of elements in the array layout.
    - `layout`: The layout of the elements stored in the array layout.
- `struct`: A struct layout with fields of different types.
    - `name`: The name of the struct.
    - `fields`: The fields of the struct layout.
- `enum`: An enum layout with a discriminant telling which variant is layed out.
    - `name`: The name of the enum.
    - `dispatch_key`: The key where the discriminant is stored to dispatch the variants.
    - `variants`: The variants of the enum.

```json
"storage": {
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
            "name": "value"
          }
        ],
        "name": "Flipper"
      }
    },
    "root_key": "0x00000000"
  }
}
```

#### `types`
This object contains the type registry for the smart contract. It consists of an array of
type objects, each of which is defined as follows:
- `id`: Numerical ID for referencing the type.
- `ty`: The definition of the type.
    - `path`: The unique path to the type. Can be empty for built-in types.
    - `params`: The generic type parameters of the type in use. Empty for non generic
      types.
    - `def`: The actual type definition.
    - `docs`: Documentation.

The type definition object (`def`) supports the following `primitive` types:
- `bool`, `char`, `str`, `u8`, `u16`, `u32`, `u64`, `u128`, `i8`, `i16`, `i32`, `i64`, `i128`.

It also supports a variety of complex built-in and user-defined types. However, we will
not dig into them here. If you are interested in learning more take a look at the
[`scale-info`](https://github.com/paritytech/scale-info) crate.

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

Other parts of the metadata, such as the `storage` object, will reference individual
types from this type registry using the `id` key.

#### `version`
This indicates the version of the ABI format the generated metadata conforms to. This is
distinct from any concept of Rust's crate versioning.

```json
"version": "4"
```

:::tip ink! 3.x Compatibility Note

In version 3 of the ink! metadata the version was specified as a key which wrapped the
ABI (e.g `"V3": { ... }`). This is no longer the case with version 4.

:::

### `user`
This is an _optional_ field used to add user-defined metadata. Some examples of things
you may want to include here:
- `moon_phase`: Phase of the moon during which the smart contract works.
- `favorite_blockchain`: The favorite blockchain of the contract authors (answer: Polkadot!).
