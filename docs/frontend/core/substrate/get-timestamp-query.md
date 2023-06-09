---
title: getTimestampQuery
hide_title: true
description: Get a function that can then be used to query a chain's timestamp data.
---

# getTimestampQuery

Get a function that can then be used to query a chain's timestamp data. 

## Basic Usage

```ts
import { getTimestampQuery } from 'useink/core'

const q = await getTimestampQuery(apiPromise);
const now = await q.now();
```

## Returns

```ts
QueryableModuleCalls<'promise'>
```
