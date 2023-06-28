---
title: 'useDeployer'
description: 'A React hook for deploying a contract from a Wasm blob or code hash.'
---

# useDeployer

A React hook for deploying a contract from a Wasm blob or code hash.

## Usage

See [example in the playground dApp](https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx).

```tsx
import { useDeployer } from 'useink'

export const DeployPage: React.FC = () => {
  // Optionally pass in a ChainId to deploy to another chain. 
  // e.g. `useDeployer('shibuya-testnet')`.
  // ChainId must be configured in your UseInkProvider config props.
  const D = useDeployer();
  // The code to load metadata this is omitted from this example. See useMetata docs.
  const M = useMetadata(); 

  return (
    <>
      {D.isSubmitting && <p>Submitting...</p>}
      {D.error && <p>{D.error}</p>}

      <button onClick={D.dryRun(M.abi, 'new')}>Dry Run</button>
      <button onClick={D.signAndSubmit(M.abi, 'new')}>Deploy</button>
    </>
  );
};
```

## Return Value

```ts
{
  dryRun: DeploySignAndSend<Promise<DeployTx | undefined>>;
  signAndSend: DeploySignAndSend<Promise<void>>;
  contractAddress: string | undefined;
  status: TransactionStatus;
  result: ContractSubmittableResult | undefined;
  isSubmitting: boolean;
  error: string | undefined;
  resetState: () => void;
  gasConsumed?: WeightV2;
  gasRequired?: WeightV2;
  storageDeposit?: StorageDeposit;
  willBeSuccessful: boolean;
  events: EventRecord[];
}
```