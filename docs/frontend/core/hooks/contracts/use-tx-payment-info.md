---
title: 'useTxPaymentInfo'
description: 'React hook for getting the payment information and gas price of a transaction'
---

# useTxPaymentInfo

A hook for getting the partial fee and weight for a transaction before signing and sending.

## Usage

```tsx
import { useTxPaymentInfo } from 'useink'

export const MyContractView: React.FC = () => {
  const contract = useContract('..address', metadata, 'astar')
  const get = useTxPaymentInfo<boolean>(contract, 'get')

  return (
    <button onClick={get.send} disabled={get.isSubmitting}>
      {get.result?.paritalFee ? (
          `Gas price: ${get.result?.paritialFee.toString()}`
        ) : '--'}
    </button>
  )
}
```

## Return Value

```ts
interface DispatchInfo {
  readonly weight: Weight; 
  readonly partialFee: Balance;
}

// useTxPaymentInfo retun type
interface PaymentInfoResult {
  isSubmitting: boolean;
  result?: DispatchInfo;
  send: (
    options?: ContractOptions,
    params?: unknown[],
    signerOptions?: Partial<SignerOptions>,
  ) => Promise<DispatchInfo | undefined>;
  resolved: boolean;
}
```