---
title: decodeError
hide_title: true
description: Return an error message for a RegistryError if it exists.
---

# decodeError

A function to easily check for an error emitted from a pallet, a.k.a. a "registry error",
and return a string. This is used heavily throughout **useink**. See [example use
here](/). See [this list of common pallet
errors](https://polkadot.js.org/docs/substrate/errors) you may want to check for.

## Basic Usage

```ts
import { call, decodeError } from 'useink/core';
const result = await call(chainContract, ...additionalArgs);

const err = decodeError(
  result, 
  chainContract,
  { 
    ContractTrapped: 'Something blew up in the contract',
    OutOfGas: 'The call ran are out of gas',
    // See https://polkadot.js.org/docs/substrate/errors for a list of more errors
    // you may want to check for.
  },
  'Something went wrong. This is a default error.'
);

console.error(err);
```

## Return Type

```ts
string | undefined
```