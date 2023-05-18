---
title: decodeError
hide_title: true
description: A utility function to easily display an error message 
---

# decodeError

A utility function that decodes an error response and returns a message for different
module errors. [Here](https://polkadot.js.org/docs/substrate/errors#contracts) is a list
of module errors you may encounter.

## Basic Usage

```tsx
export const MyContract: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata);
  const foo = useCall<string>(contract, 'foo');
  const t = useI18n();

  useEffect(() => { foo?.send() }, []);

  // If result.ok is false then one of many Substrate modules errored.
  // NOTE: If you call panic! in your ink! contract it will trigger `ContractTrapped`
  // NOTE: If you call assert! in your ink! contract and it fails it will trigger `ContractTrapped`
  // See https://polkadot.js.org/docs/substrate/errors#contracts for possible errors
  if (!foo.result.ok) {
    return (
      <div>
        <p>An error occurred in in a Substrate module...</p>
        <p>
          {decodeError(getMood, contract, {
              ContractTrapped: t('contractTrapped'),
              StorageDepositLimitExhausted: t('storageDepositLimitExhausted'),
              StorageDepositNotEnoughFunds: t('storageDepositNotEnoughFunds'),
            },
          )}
        </p>
      </div>
    )
  }

  return <p>{foo.result.value.decoded}</p>
}

## Return Type

```ts
interface DecodedErrorResult {
  message?: string;
  registryError?: {
    args: string[];
    docs: string[];
    index: number;
    method: string;
    name: string;
    section: string;
  }
}
```