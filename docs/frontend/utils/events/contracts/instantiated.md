---
title: Contracts::Instantiated
description: Utilties for use with Contracts::Instantiated events
---

# Contracts::Instantiated

Utilties for use with ContractInstantiated events that are emitted in the `In Block` phase
of a transaction. This is emitted during the successful deployment of a contract.

## Basic Usage

See [example in the playground dApp](https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx).

```ts
import { isContractInstantiatedEvent, asContractInstantiatedEvent } from 'useink/utils';

console.log(isContractInstantiatedEvent(eventRecord)) // true or false

const instantiated = asContractInstantiatedEvent(eventRecord);
console.log(instantiated?.contractAddress) // string | undefined
console.log(instantiated?.deployer) // string | undefined
```

## Returns

```ts
// asContractInstantiatedEvent
{
  name: string;
  deployer: string;
  contractAddress: string;
}
```