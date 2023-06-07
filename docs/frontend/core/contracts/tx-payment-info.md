---
title: txPaymentInfo
hide_title: true
description: Get the gas required for a contract call
---

# txPaymentInfo

## Basic Usage

```ts
import { txPaymentInfo } from 'useink/core';
import { formatBalance } from 'useink/';

const info = await txPaymentInfo(contractPromise, 'flip', callerAddress);

// format `partialFee` (gas required). Example output: 75.9965 µUnit
formatBalance(info?.partialFee, { decimals: 12, withSi: true })
```

## Returns

```ts
interface RuntimeDispatchInfo extends Struct {
    readonly weight: Weight;
    readonly class: DispatchClass;
    readonly partialFee: Balance;
}
```