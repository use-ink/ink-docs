---
title: useUnixMiliToDate
description: A React hook for converting unix timestamps in mili seconds to a Date object.
---

# useUnixMiliToDate

A React hook for converting unix timestamps in mili seconds to a Date object. Values are
cached internally via `useMemo` to optimize page renders.

## Usage

```tsx
import { useUnixMiliToDate, useTimestampNow } from 'useink'

function Now() {
  // See `useTimestampDate`, which does this work for you.
  const now = useTimestampNow('phala');
  const date = useUnixMiliToDate(now);

  return <p>{date.toLocaleTimeString()}</p>;
}
```

## Return Value

```ts
Date | undefined
```