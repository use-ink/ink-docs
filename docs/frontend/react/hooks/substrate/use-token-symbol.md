---
title: useTokenSymbol
description: A React hook for fetching a chain's token symbol if it is configured in the runtime.
---

# useTokenSymbol

A React hook for fetching a chain's token symbol if it is configured in the runtime.

## Usage

```tsx
import { useTokenSymbol } from 'useink'

function App() {
  const symbol = useTokenSymbol('shibuya-testnet');

  // e.g. "Shibuya token symbol: SBY"
  return <p>Shibuya token symbol: {symbol || --}</p>;
}
```

## Return Value

```ts
string | undefined // Many chains have configured the chain symbol, but some have not.
```