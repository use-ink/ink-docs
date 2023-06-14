---
title: getTimestampNow
hide_title: true
description: Get the unix timestamp of a chain in miliseconds.
---

# getTimestampQuery

Get the unix timestamp of a chain in miliseconds.

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
