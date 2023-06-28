---
title: 'useCodeHash'
description: 'A React hook for validating code hash values for contract code on chain.'
---

# useCodeHash

A React hook for validating code hash values for contract code on chain.

## Usage

See [example in the playground dApp](https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx).

```tsx
import { useCodeHash } from 'useink'

export const DeployPage: React.FC = () => {
  const C = useCodeHash();

  return (
    <div>
      <label htmlFor='codeHash'>Code Hash</label>
      <input
        name='codeHash'
        value={C.codeHash}
        onChange={(e) => C.set(e.target.value)}
      />
      {C.error && <p>{C.error}</p>}
    </div>
  )
};
```

## Return Value

```ts
{
  codeHash: string;
  set: (hash: string) => void;
  error?: CodeHashError;
  resetState: () => void;
}

export enum CodeHashError {
  InvalidHash = "Invalid code hash value."
}
```