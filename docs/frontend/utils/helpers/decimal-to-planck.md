---
title: decimalToPlanck
description: Convert a decimal to a planck integer based on a chain's decimal count.
---

# decimalToPlanck

Convert a decimal to a planck integer based on a chain's decimal count. This is useful
when converting an input field in a form to the planck value for a transaction. e.g. A
user sets a value of `1.5 ROC` in a number input field, but under the hood you use
`decimalToPlanck` to convert the value to `1_500_000_000_000`.

## Basic Usage

```ts
import { decimalToPlanck } from 'useink/utils';

const planck = decimalToPlanck(1.5, someContractOnRococo.api);

console.log(planck.toString()); // e.g. 1_500_000_000_000
```

## Returns

```ts
BigInt | undefined
```