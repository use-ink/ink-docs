---
title: 'useTx'
description: 'A React hook for signing and sending a transaction for a contract and tracking state.'
---

# useTx

A hook for sending a transaction for a contract and decoding successful responses or
receiving errors. This hook is used in combination with the result of
[useContract](/frontend/core/hooks/contracts/use-contract).

See [useink/utils helpers](/frontend/utils/pick) for compatible functions that work
well with this hook. 

## Basic Usage

```tsx
import { useTx, useContract, shouldDisable } from 'useink'
import { pickDecoded } from 'useink/utils'
import metadata from './metadata.json'

interface Result {
  color: string;
}

export const MyContractView: React.FC = () => {
  const contract = useContract('..address', metadata)
  const setColor = useTx<Result>(contract, 'setColor')
  const args = ['blue']

  return (
    <>
      <button onClick={() => setColor.signAndSend(args)} disable={shouldDisable(setColor)}>
        {shouldDisable(setColor) ? 'Changing Color...' : 'Change Color'}
      </button>

      <h2>Get the result the hard way: {setColor.result.ok ? setColor.result.value.decoded.color : '--'}</h2>
      <h2>Or the easy way: {pickDecoded(get.result)?.color || '--'}</h2>
    </>
  )
}
```

## Return Value

```tsx
export interface Tx<T> {
  signAndSend: (
    args?: unknown[],
    options?: ContractOptions,
    cb?: ContractSubmittableResultCallback,
  ) => void;
  status: Status;
  result: ContractSubmittableResult | undefined;
  resetState: () => void;
}
```

## Transaction Statuses

**useink** extends transaction statuses defined in the Substrate `transaction-pool`
pallet. These are used for pre-transaction senarios such as awaiting signature in a
wallet, dry runs, or handling a JavaScript error.

```ts
export type Status =
  | 'None'             
  | 'PendingSignature' // A user is prompted to sign a transaction in their wallet extension.
  | 'DryRun'           // A pre-flight is being sent without any payments.
  | 'Errored'          // A JavaScript error occured
  | 'Future'           
  | 'Ready'            
  | 'Broadcast'        
  | 'InBlock'          
  | 'Retracted'        
  | 'FinalityTimeout'  
  | 'Finalized'        
  | 'Usurped'          
  | 'Dropped'          
  | 'Invalid';          
```

## Want to Learn More?

* Learn more about [the Substrate transaction-pool](https://github.com/paritytech/substrate/blob/65e7ab604d109e316a69b8801c3b182a7fa46bcb/client/transaction-pool/api/src/lib.rs#L59)
* Read [Substrate documentation](https://docs.substrate.io/learn/transaction-lifecycle/)
* Watch a [video on transaction lifecycles](https://www.youtube.com/watch?v=3pfM0GOp02c)

## Common Patterns With useTx

See [shouldDisable](/frontend/utils/tx-utils#shoulddisable) and
[shouldDisableStrict](/frontend/utils/tx-utils#shoulddisablestrict).