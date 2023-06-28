---
title: 'useMetadata'
description: 'A React hook for loading and validating contract metadata from a file.'
---

# useMetadata

A React hook for loading and validating contract metadata from a file.

## Usage

See [example in the playground dApp](https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx).

```tsx
import { useMetadata } from 'useink'

export const DeployPage: React.FC = () => {
  // When requireWasm is set to true you must upload a full <name>.contract file containing a valid Wasm field.
  // -- The file and Wasm blob will be validated on calling `set(file)`
  // When requireWasm is set to false you must upload a <name>.json metadata file.
  // -- The file will be validated on calling `set(file)`
  const M = useMetadata({ requireWasm: true });

  if (M.abi) {
    return (
      <>
        <p>{M.formattedFileName}</p>
        <button onClick={M.clear}>Reset State</button>
      </>
    );
  }

  return (
    <>
      <MyDropzoneComponent
        onDrop={(f: File[]) => M.set(f?.[0])}
        cta='Upload a contract file. e.g. "flipper.contract"'
      />

      {M.error && <p>{M.error}</p>}
    </>
  );
};


```

## Return Value

```ts
{
  abi?: Abi;
  source?: Record<string, unknown>;
  name: string;
  formattedFileName: string;
  set: (file: File) => void;
  clear: () => void;
  error?: MetadataError;
}

// Errors are exposed as enums for your convenience. 
// If you are using i18n you can check for one of these types and translate accordingly.
export enum MetadataError {
  InvalidFile = 'Invalid file.',
  EmptyWasm = 'Wasm field not found.',
  InvalidWasm = 'Invalid Wasm field.',
}
```