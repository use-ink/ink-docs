---
title: chainDecimals
hide_title: true
description: Get a chain's decimal count for the native token.
---

# chainDecimals

Get a chain's decimal count for the native token.

## Basic Usage

```ts
import { chainDecimals } from 'useink/core'

const decimals = chainDecimals('rococo-contracts-testnet');

console.log(symbol); // e.g. 12
```

## Returns

```ts
string | undefined
```
