---
title: 'useUninstalledWallets'
description: 'React Hook for getting a list of uninstalled wallet extensions'
---

# useUninstalledWallets

This hook returns a list of all supported wallet extensions that are not installed in the user&apos;s browser.

## Usage

```tsx
import { useUninstalledWallets } from 'useink'

function PrintWallets() {
  const wallets = useUninstalledWallets()
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