---
title: formatEventName
description: A helper function to get a formatted name for an event.
---

# formatEventName

A helper function to get a formatted name for an event.

## Basic Usage

See [example in the playground dApp](https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx).

```ts
import { formatEventName } from 'useink/utils';

console.log(formatEventName(eventRecord)) // a string formatted as `${event.section}:${event.method}`
```

## Returns

```ts
string
```