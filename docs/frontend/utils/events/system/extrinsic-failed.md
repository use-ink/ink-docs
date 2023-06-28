---
title: System::ExtrinsicFailed
description: u
---

# System::ExtrinsicFailed

Utilties for use with the ExtrinsicFailed emitted by the System pallet during a
transaction.

## Basic Usage

See [example in the playground dApp](https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx).

```ts
import { formatExtrinsicFailed, isExtrinsicFailedEvent, asExtrinsicFailedEvent } from 'useink/utils';

console.log(isExtrinsicFailedEvent(eventRecord)) // true or false

const failed = asExtrinsicFailedEvent(eventRecord);
console.log(failed); // ExtrinsicFailed or undefined

const errorMessage = formatExtrinsicFailed(eventRecord, api);
console.log(errorMessage); // string or undefined
```

## Returns

```ts

// asExtrinsicFailedEvent
{
  name: string;
  event: {
    data: {
      dispatchError: DispatchError;
      dispatchInfo: DispatchInfo;
    };
  };
  phase: Phase;
  event: Event;
  topics: Vec<Hash>;
};
```