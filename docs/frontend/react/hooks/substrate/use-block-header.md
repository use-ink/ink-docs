---
title: 'useBlockHeader'
description: 'A React hook for fetching block header information on each new block'
---

# useBlockHeader

A React hook for fetching block header information on each new block. This hook is used 
internally to trigger subscriptions when a block updates.

## Usage

```tsx
import { useBlockHeader } from 'useink'

function Balances() {
  // This will use the first chain in the configuration array (aka 'default chain')
  const blockHeader = useBlockHeader() 
  // 'zeitgeist' must be configured in UseInkProvider
  const zeitBlockHeader = useBlockHeader('zeitgeist')

  return (
    <ul>
      <li>Current Block: {blockHeader?.blockNumber ? blockHeader.blockNumber : '--'}</li>
      <li>Zeitgeist Current Block: {zeitBlockHeader?.blockNumber ? zeitBlockHeader.blockNumber : '--'}</li>
    </ul>
  )
}
```

## Return Value

```ts
{
  blockNumber: number | undefined;
  header: undefined | {
    readonly parentHash: Hash;
    readonly number: Compact<BlockNumber>;
    readonly stateRoot: Hash;
    readonly extrinsicsRoot: Hash;
    readonly digest: Digest;
  }
} | undefined
```