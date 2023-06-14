---
title: 'useTransfer'
description: 'A React hook for transferring funds to an account'
---

# useTransfer

A React hook for transferring funds to an account

## Usage

```tsx
import { useTransfer } from 'useink'

function TransferWidget() {
  const transfer = useTransfer() 
  const receiver = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'
  const amount = 1_000_000;

  return (
    <div>
      <p>Hash {transfer?.result?.toHex() || '--'}</p>

      <button 
        type="button" 
        disabled={transfer.isSubmitting}
        onClick={() => transfer.signAndSend(receiver, amount)}
      >
        Send $$$
      </button>
    </div>
  )
}
```

## Return Value

```ts
interface TransferState {
  signAndSend: SignAndSendTransfer;
  hash: Hash | undefined;
  error: unknown | undefined;
  resetState: () => void; // clears the hash and error value
  isSubmitting: boolean;
}
```