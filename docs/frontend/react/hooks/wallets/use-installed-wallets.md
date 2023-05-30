---
title: 'useInstalledWallets'
description: 'A hook for getting a list of installed wallet extensions'
---

# useInstalledWallets

This hook returns a list of all supported wallet extensions that are installed in the user&apos;s browser.

## Usage

```tsx
import { useInstalledWallets } from 'useink'

function PrintWallets() {
  const wallets = useInstalledWallets()
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