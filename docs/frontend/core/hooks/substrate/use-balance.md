---
title: 'useBalance'
description: 'A React hook for fetching balance information for Substrate chains.'
---

# useBalance

A React hook for fetching balance information for Substrate chains.

## Usage

```tsx
import { useBalance, useWallet } from 'useink'

function Balances() {
  const { account } = useWallet()

  // The default chain will be used if no chainId is given
  // The default chain is the first chain config set in <UseInkProvider> props
  const balance = useBalance(account) 

  // phala must be set in UseInkProvider config for this to work
  const phalaBalance = useBalance(account, 'phala') 

  return (
    <ul>
      <li>Default Chain Balance: {balance ? balance.freeBalance : '--'}</li>
      <li>Phala Balance: {balance ? balance.freeBalance : '--'}</li>
    </ul>
  )
}
```

## Return Value

```ts
{
  freeBalance: Balance;
  frozenFee: Balance;
  frozenMisc: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
} | undefined
```