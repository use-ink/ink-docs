---
title: getTimestampNow
hide_title: true
description: Get the unix timestamp of a chain in milliseconds.
---

# getTimestampQuery

Get the unix timestamp of a chain in milliseconds.

## Basic Usage

```ts
import { getTimestampDate } from 'useink/core'

const date = await getTimestampDate(apiPromise);

console.log(date.toLocaleTimeString()) // e.g. 4:40:54 PM
```

## Returns

```ts
Promise<Date> // javascript Date object
```
