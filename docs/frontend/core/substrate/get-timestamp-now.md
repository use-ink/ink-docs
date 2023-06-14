---
title: getTimestampNow
hide_title: true
description: Get the unix timestamp of a chain in miliseconds.
---

# getTimestampQuery

Get the unix timestamp of a chain in miliseconds.

## Basic Usage

```ts
import { getTimestampNow } from 'useink/core'

const now = await getTimestampNow(apiPromise); // e.g. 1686775494865
```

## Returns

```ts
Promise<number> // unix time in miliseconds.
```
