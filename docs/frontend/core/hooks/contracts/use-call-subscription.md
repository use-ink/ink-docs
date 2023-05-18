---
title: useCallSubscription
description: 'React hook for calling a contract message on every new block.'
---

# useCallSubscription

A React hook for calling a contract message on each new block and decoding a successful
response or receiving an error. This is similar to
[useCall](/frontend/core/hooks/contracts/use-call), except that there is no `send()`
function in the response. The contract message will automatically be called on each new
block. See [useCall](/frontend/core/hooks/contracts/use-call) to learn about more shared
features.

## Usage

```tsx
import { useCallSubscription } from 'useink'
import metadata from 'contract/metadata.json'

const CONTRACT_ADDRESS = '...'

// We define a response type so that `get.result.value.decoded` is of type SuccessfulResponse
interface SuccessfulResponse {
  foo: 'bar'
}

export const CallGetOnNewBlocks: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata, 'aleph') 
  const args = ['arg-1', 2]
  const get = useCallSubscription<SuccessfulResponse>(contract, 'get', args)

  return <h1>Result: {get.result?.ok ? get.result.value.decoded.foo : '--'}</h1>
}
```

## Return Value

```ts
{
  isSubmitting: boolean;
  result?: {
    ok: true;
    value: {
      raw: ContractExecResult; 
      decoded: T; // The response is decoded using contract Metadata, and of type `T`
    } | {
      ok: false;
      // error is set if a contract panics or has a failed assert(), or some other pallet errors.
      error: DispatchError | undefined; 
    }
  }
}
```