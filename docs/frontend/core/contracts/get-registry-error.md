---
title: getRegistryError
hide_title: true
description: Get the RegistryError if it exists
---

# getRegistryError

Return a RegistryError if a result errored in one of many Substrate pallets, or undefined if not.

## Basic Usage

See
[dispatchError](https://github.com/paritytech/useink/blob/8b8e8383f0adbe1054a3aec7f300131f09969a18/core/contracts/decodeError.ts#L15)
code implementation.

```tsx
import { call, getRegistryError } from 'useink/core';

const result = await call(contract, ...additionalArgs);

if (!result.ok) {
  const registryError = getRegistryError(result, { contract });
}

```

## Return Type

```ts
interface RegistryError {
    args: string[];
    docs: string[];
    index: number;
    method: string;
    name: string;
    section: string;
}
```