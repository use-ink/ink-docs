---
title: decodeCallResult
hide_title: true
description: Decode the result of a contract call
---

# decodeCallResult

A function to decode the response of a [call](/frontend/core/contracts/call) result (or
results of [useCall](/frontend/react/hooks/contracts/use-call) and similar hooks).

## Usage

```tsx
import { decodeCallResult, call } from 'useink/core';

const result = await call<boolean>(contract, ...additionalArgs);

decodeCallResult(result); // { Ok: true, value: boolean } | { Ok: false, error: DispatchError }
```

## Returns

```ts
{ Ok: true, value: T } | { Ok: false, error: DispatchError }
```