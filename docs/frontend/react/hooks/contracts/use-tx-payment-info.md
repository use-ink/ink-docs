---
title: 'useTxPaymentInfo'
description: 'React hook for getting the payment information and gas price of a transaction'
---

# useTxPaymentInfo

A hook for getting the partial fee and weight for a transaction before signing and
sending. See [useink/utils helpers](/frontend/utils/pick#picktxinfo) for compatible
functions that work well with this hook. 

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

## Calling with a default caller address

You must first define a default caller in [configuration](/frontend/configuration#configprops), then call the contract with options:

```tsx
const paymentInfo = useTxPaymentInfo(cRococoContract, 'flip');
const args = [];

paymentInfo.send(args, { defaultCaller: true });
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