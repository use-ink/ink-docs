---
title: useTimestampNow
description: A React hook for getting the unix timestamp in miliseconds on each new block.
---

# useTimestampNow

A React hook for getting the unix timestamp in miliseconds on each new block.

## Usage

```tsx
import { useTimestampNow } from 'useink'

function Now() {
  const now = useTimestampNow('phala');

  return <p>{now}</p>;
}
```

## Return Value

```ts
number | undefined // number is a unix timestamp in miliseconds
```