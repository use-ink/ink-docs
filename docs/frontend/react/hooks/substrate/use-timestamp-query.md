---
title: useTimestampQuery
description: A React hook for getting a function that can be used to fetch timestamp data.
---

# useTimestampQuery

A React hook for getting a function that can be used to fetch timestamp data.

## Usage

```tsx
import { useTimestampQuery } from 'useink'

function Query() {
  const q = useTimestampQuery('phala');
  const b = useBlockNumber();

  // see `useTimestampNow` and `useTimestampDate`, which does this for you.
  const now = useMemo(() => {
    return await q.now();
  }, [b.blockNumber])

  console.log(now);

  return <p>{now}</p>;
}
```

## Return Value

```ts
QueryableModuleCalls<'promise'> | undefined
```