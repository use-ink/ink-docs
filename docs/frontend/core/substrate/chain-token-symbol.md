---
title: chainTokenSymbol
hide_title: true
description: Get a chain's token symbol as a string. e.g. "SBY"
---

# chainTokenSymbol

Get a chain's token symbol as a string. e.g. "SBY"

## Basic Usage

```ts
import { chainTokenSymbol } from 'useink/core'

const symbol = chainTokenSymbol('shibuya-testnet');

console.log(symbol); // e.g. "SBY"
```

## Returns

```ts
string | undefined
```
