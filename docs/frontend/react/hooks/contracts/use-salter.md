---
title: 'useSalter'
description: 'A React hook for generating random salt hex values and validating them.'
---

# useSalter

A React hook for generating random salt hex values and validating them.

## Usage

See [example in the playground dApp](https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx).

```tsx
import { useSalter } from 'useink'

export const DeployPage: React.FC = () => {
  const S = useSalter();

  return (
    <div>
      <label htmlFor='salt'>Salt</label>
      <input
        value={S.salt}
        onChange={(e) => S.set(e.target.value)}
      />

      {S.error && <p>{S.error}</p>

      <button
        type='button'
        onClick={S.regenerate}
      >
        Regenerate
      </button>
    </div>
  )
};
```

## Return Value

```ts
{
  salt: string;
  regenerate: () => void;
  set: (salt: string) => void;
  error?: SalterError;
  resetState: () => void;
}

export enum SalterError {
  InvalidHash = 'Invalid salt hash value.',
}
```