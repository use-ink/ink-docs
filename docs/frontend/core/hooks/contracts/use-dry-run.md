---
title: 'useDryRun'
description: 'A React hook for calling a transaction as a dry run.'
---

# useDryRun

A hook for calling a transaction as a dry run - a transction without spending any gas. Dry
runs are useful to test if a transaction will be successful and for querying the exact
Weight amount a transaction will need to succeed. This hook is used under the hood in
[useTx](/frontend/core/hooks/contracts/use-tx), so you should only use this if you wish to
display Dry Run information to the user before triggering a transaction.

## Usage

```tsx
import { useDryRun, useContract } from 'useink'

export const MyContractView: React.FC = () => {
  const contract = useContract('...address', metadata, 'zeitgeist')
  
  const get = useDryRun<boolean>(contract, 'get')

  return (
    <button onClick={() => get.send()}>
      {get.result.ok ? get.result.value.partialFee : '--'}
    </div>
  )
}
```

## Return Value

```ts
interface DryRun<T> {
  send: Send<T>;
  isSubmitting: boolean;
  result?: DryRunResult<T>;
  resolved: Boolean;
  resetState: () => void; // A convenience function to reset result state
}
```