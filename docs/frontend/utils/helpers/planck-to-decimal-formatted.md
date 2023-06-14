---
title: planckToDecimalFormatted
description: Convert an integer (planck) number to a decimal and format the value.
---

# planckToDecimalFormatted

This function takes a large planck number, a decimal count for the chain, and converts it
to a string containing a formatted string with the token symbol if the chain has it
configured in their runtime. See
[planckToDecimal](/frontend/utils/helpers/planck-to-decimal) for more details.

## Basic Usage

```ts
import { planckToDecimalFormatted } from 'useink/utils';
import { getBalance } from 'useink/core';

const bal = await getBalance(apiPromise, address); // e.g. 1_500_000_000_000

const floatingPointVersion = planckToDecimalFormatted(apiPromise, bn);
console.log(floatingPointVersion); // e.g. 1.500000000000 ROC

const withFourDecimals = planckToDecimalFormatted(apiPromise, bn, { decimals: 4 });
console.log(withFourDecimals); // e.g. 1.5000 ROC
```

## Returns

```ts
string | undefined
```