---
title: 'useTxEvents'
description: 'React hook for collecting and caching events emitted when a transaction is `In Block`'
---

# useTxEvents

React hook for collecting and caching events emitted when a transaction is `In Block`.
This differs from [useEvents](/frontend/react/hooks/contracts/use-events). `useEvents`
will subscribe to any events emitted by a contract. `useTxEvents` accepts a transaction as
an argument and will collect and cache the events emitted by that single transaction only.
This is used internally in transaction hooks, which will already provide `events` as state.

## Usage

See [useage inside of the useink library](https://github.com/paritytech/useink/blob/0f44e1b0eee56cb2724a5b39edfc73937b8c4677/packages/useink/src/react/hooks/contracts/useDeployer/useDeployer.ts#L45).

## Return Value

```ts
{
  resetState: () => void;
  events: EventRecord[];
}
```