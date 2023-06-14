---
title: bnToBalance
description: Convert a BN to a Balance type
---

# bnToBalance

Convert a BN to a Balance type.

## Basic Usage

```ts
import { bnToBalance } from 'useink/utils';

const bn = new BN('1000');
const bal = bnToBalance(contractPromise?.api, bn);
```

## Returns

```ts
Balance | undefined
```