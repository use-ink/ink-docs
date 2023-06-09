---
title: planckToDecimal
description: Convert an integer (planck) number to a decimal.
---

# planckToDecimal

Convert a planck number (large integer) to a decimal. Blockchains do not use floating
point values for tokens. Instead they a large integer for the value and a second integer
to define how the decimals. For instance, Contracts on Rococo uses 12 decimals for the
native token `ROC`. Therefore `1 ROC` equals `1_000_000_000_000`, or `1 * 10^12`. These
values are difficult for humans to read so we created `planckToDecimal` to easily convert
large values to human-readible ones.

This function will look up the chain's decimal count and do the math for you.

## Basic Usage

```ts
import { planckToDecimal } from 'useink/utils';
import { getBalance } from 'useink/core';

const bal = await getBalance(apiPromise, address); // e.g. 1_500_000_000_000
const floatingPointVersion = planckToDecimal(apiPromise, bn);

console.log(floatingPointVersion); // e.g. 1.5
```

## Returns

```ts
number | undefined
```