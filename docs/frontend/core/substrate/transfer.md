---
title: transfer
hide_title: true
description: Transfer tokens to an address
---

# transfer

Transfer tokens to an address

## Basic Usage

```ts
import { transfer } from 'useink/core'

const to = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'
const amount = 1_000_000
const hash = await transfer(apiPromiseInstance, to, amount, signer)
console.log(hash.toHex())
```

## Returns

```ts
interface Hash extends H256;
```
