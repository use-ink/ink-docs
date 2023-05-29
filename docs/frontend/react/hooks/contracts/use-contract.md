---
title: 'useContract'
description: 'A React hook for creating contract client instances scoped to a specific chain.'
---

# useContract

This hook is the foundation for many other hooks in **useink**. It returns a
`ChainContract<T>` type and will automatically set the RPC url for the chain you specify.

## Usage

```tsx
import { useContract } from 'useink'

const CONTRACT_ADDRESS = '..'
const ALEPH_CONTRACT_ADDRESS = '..'

export const MyContractView: React.FC = () => {
  // The default chain will be used if you omit chainId as the third argument
  // The default chain is the first item in the chain config for UseInkProvider
  const contract = useContract(CONTRACT_ADDRESS, metadata)
  const alephContract = useContract(ALEPH_CONTRACT_ADDRESS, metadata, 'aleph')

  // use with other hooks...
  // e.g. useCall, useCallSubscription, useTx, etc

  return null
}
```

## Return Value

```ts
{
  // A contract object that contains metadata, and an api client set with a specific RPC url
  contract: ChainContract<T>, 
  // A strongly typed chain name found in `useink/chains`
  chainId: ChainId,
} | undefined
```