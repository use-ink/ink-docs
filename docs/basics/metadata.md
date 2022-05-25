---
title: Metadata
slug: /metadata
---

# ink! Metadata

The ink! metadata is used to describe a contract in a language agnostic way. It is
intended to be used by third party tools (e.g UIs, block explorers) in order to correctly
call contract functions and interpret events.

The ink! metadata is generated when a contract is built using `cargo-contract`, e.g
`cargo +nightly contract build`.

The metadata can be found in your contract's target directory under the name
`metadata.json`.

Note: The metadata is also contained in your `$contract_name.contract` file. The
difference is that the `.contract` file also contains the Wasm binary of your contract.

## metadata.json

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

The metadata is defined by the following **required** keys:
    - `source`: Information about the contract's Wasm code.
    - `contract`: Metadata about the contract.
    - `abi`: Raw JSON of the contract's abi metadata, generated during contract compilation.

It may _optionally_ contain the following keys:
    - `user`: Additional user-defined metadata.

The following sections will dive deeper into how these sections are made up.

### `source`
This object contains information about how the contract was built.

```json
"source": {
  "hash": "0x157014494527fee27a82e49bbd9eea10c0713bb0566f6def37f4595db86236ff",
  "language": "ink! 3.1.0",
  "compiler": "rustc 1.63.0-nightly"
}
```

It consists of the following **required** keys:
    - `hash`: The hash of the contract's Wasm code.
    - `language`: The language used to write the contract.
    - `compiler`: The compiler used to compile the contract.

It may _optionally_ include the following keys:
    - `wasm`: The actual Wasm code of the contract, for optionally bundling the code with the metadata.

Code reference from `cargo-contract`: https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L127

### `contract`
This object contains extra metadata about the contract.

```json
"contract": {
  "name": "flipper",
  "version": "3.1.0",
  "authors": [
    "Parity Technologies <admin@parity.io>"
  ]
}
```

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

Code reference from `cargo-contract`: https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L395

### ABI
This is the specification of the contract. The "outer" metadata format does not dicate how
this looks, and instead will be driven by each smart contracting language. In this
document we will focus on the ink! ABI.

The ink! metadata consists of the following **required** sections
    - `spec`: The description of the contract (e.g constructors, messages, events, etc.).
    - `storage`: The layout of the storage data structure
    - `types`: A read-only registry containing types in their portable form for
      serialization.

#### `spec`
The contract `spec` consists of the following **required** keys:
    - `constructors`: The set of constructors of the contract.
        - `label`: The label of the constructor. In case of a trait provided constructor
          the label is prefixed with the trait label.
        - `selector`: The selector hash of the message.
        - `payable`: If the constructor accepts any `value` from the caller.
        - `args`: The parameters of the deployment handler.
        - `docs`: The deployment handler documentation.
    - `messages`: The external messages of the contract.
        - `label`: The label of the message. In case of trait provided messages and
          constructors the prefix by convention in ink! is the label of the trait.
        - `selector`: The selector hash of the message.
        - `mutates`: If the message is allowed to mutate the contract state.
        - `payable`: If the message accepts any `value` from the caller.
        - `args`: The parameters of the message.
        - `return_type`: The return type of the message.
        - `docs`: The message documentation.
    - `events`: The events of the contract.
        - `label`: The label of the event.
        - `args`: The event arguments.
        - `docs`: The event documentation.
    - `docs`: The contract documentation.

Note that while all these keys are required, they may be empty. For example, if a
contract does not define any events then the `events` key would contain an empty array
`[]`.

#### `storage`
This key describes the storage layout of an ink! contract. It tracks some of the
different structures which can be placed in storage. It consists of the following
_optional_ keys (depending on what data structures are used by the contract):
    - `cell`: An encoded cell.
        - `key`: The offset key into the storage.
        - `ty`: The type of the encoded entity.
    - `hash`: A layout that hashes values into the entire storage key space.
        - `offset`: The key offset used by the strategy.
        - `strategy`: The hashing strategy to layout the underlying elements.
        - `layout`: The storage layout of the unbounded layout elements.
    - `array`: An array of associated storage cells encoded with a given type.
        - `offset`: The offset key of the array layout. This is the same key as the
          element at index 0 of the array layout.
        - `len`: The number of elements in the array layout.
        - `cells_per_elem`: The number of cells each element in the array layout consists
          of.
        - `layout`: The layout of the elements stored in the array layout.
    - `struct`: A struct layout with fields of different types.
        - `fields`: The fields of the struct layout.
    - `enum`: An enum layout with a discriminant telling which variant is layed out.
        - `dispatch_key`: The key where the discriminant is stored to dispatch the
          variants.
        - `variants`: The variants of the enum.

TODO: Look at doc comments again and beef up.
TODO: Talk about type references

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
This object contains the type registry for the smart contract. It consists of an array of
type objects, each of which is defined as follows:
    - `id`: Numerical ID for referencing the type.
    - `ty`: The definition of the type.
        - `path`: The unique path to the type. Can be empty for built-in types.
        - `params`: The generic type parameters of the type in use. Empty for non generic types.
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

### `user`
This is an _optional_ field used to add user-defined metadata. Some examples of things
you may want to include here:
    - `moon_phase`: Phase of the moon during which the smart contract works.
    - `favorite_blockchain`: The favorite blockchain of the contract authors (answer: Polkadot!).