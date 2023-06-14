---
title: useTimestampDate
description: A React hook for getting the unix timestamp in milliseconds on each new block.
---

# useTimestampDate

A React hook for getting the unix timestamp in milliseconds on each new block.

## Usage

```tsx
import { useTimestampDate } from 'useink'

function BlockTime() {
  const d = useTimestampDate('phala');

  // e.g. 4:40:54 PM
  return <p>{d.toLocaleTimeString()}</p>;
}
```

## Return Value

```ts
Date | undefined
```