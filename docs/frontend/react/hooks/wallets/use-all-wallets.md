---
title: 'useAllWallets'
description: 'A React hook for getting a list of all supported wallet extensions'
---

# useAllWallets

This hook returns a list of all supported wallet extensions.

## Usage

```tsx
import { useAllWallets } from 'useink'

function PrintWallets() {
  const wallets = useAllWallets()
  useEffect(() => console.log(wallets), [wallets])

  return null;
}
```

## Return Type

```ts
{
  extensionName: string;
  title: string;
  noExtensionMessage?: string;
  installUrl: string;
  logo: WalletLogoProps;
  installed: boolean | undefined;
  extension: any;
  signer: any;
  enable: (dappName: string) => unknown;
  getAccounts: (anyType?: boolean) => Promise<WalletAccount[]>;
  subscribeAccounts: (callback: SubscriptionFn) => unknown;
  sign?: (address: string, payload: string) => unknown;
  transformError: (err: WalletError) => Error;
}[]
```