---
title: useUnixMilliToDate
description: A React hook for converting unix timestamps in milliseconds to a Date object.
---

# useUnixMilliToDate

A React hook for converting unix timestamps in milli seconds to a Date object. Values are
cached internally via `useMemo` to optimize page renders.

## Usage

```tsx
import { useUnixMilliToDate, useTimestampNow } from 'useink'

function Now() {
  // See `useTimestampDate`, which does this work for you.
  const now = useTimestampNow('phala');
  const date = useUnixMilliToDate(now);

  return <p>{date.toLocaleTimeString()}</p>;
}
```

## Return Value

```ts
Date | undefined
```