---
title: useChainDecimals
description: A React hook for fetching the decimal count for the native token.
---

# useChainDecimals

A React hook for fetching the decimal count for the native token.

## Usage

```tsx
import { useChainDecimals } from 'useink'

function App() {
  const decimals = useChainDecimals('astar');

  if (!decimals) return null;

  return <p>Astar uses {decimals} decimals for their token.</p>;
}
```

## Return Value

```ts
number | undefined
```