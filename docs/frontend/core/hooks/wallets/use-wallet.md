---
title: 'useWallet'
description: 'React Hook for connecting to a wallet extension, and accessing account information.'
---

# useWallet

This hook provides tools for connecting to a wallet, accessing account information, and disconnecting 
from a wallet. Account information will update in real time when changes are made in the wallet extension.

## Basic Usage

```tsx
import { useWallet, useAllWallets } from 'useink'

export const WalletConnect = () => {
  const wallets = useAllWallets()
  const { isConnected, connect, disconnect, setAccount } = useWallet()

  if (isConnected) return <button onClick={disconnect}>Disconnect</button>

  return (
    <ul>
      {wallets.map(w => (
        <li key={w.title}>
          {w.installed ? (
            <button onClick={() => connect(w.extensionName)}>
              <img src={w.logo.src} alt={w.logo.alt} />
              Connect to {w.title}
            </button>
          ) : (
            <a href={w.installUrl}>
              <img src={w.logo.src} alt={w.logo.alt} />
              Install {w.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
```

## Changing the Active Account

You can set the active `account` using `setAccount`. `account` is used in all hooks as the caller address.

```tsx
import { useWallet } from 'useink'

export const Accounts = () => {
  const { account, accounts, setAccount } = useWallet()

  if (!account) return null

  return (
    <div>
      <h1>You are connected as {account.name || account.address}</h1>

      <ul>
        {accounts.map(a => (
          <li key={a.address}>
            <button onClick={() => setAccount(a)} disabled={account === a}>
              Set account to {a.name || a.address}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## Return Type

```ts
{
  account?: WalletAccount | undefined;
  accounts: WalletAccount[] | undefined;
  connect: (walletName: WalletName) => void;
  disconnect: () => void;
  walletError?: WalletError;
  isConnected: boolean;
  setAccount: (account: WalletAccount) => void;
  getWallets: typeof getWallets;
  getWalletBySource: typeof getWalletBySource;
}
```