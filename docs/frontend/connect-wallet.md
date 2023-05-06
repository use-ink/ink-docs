---
title: 2. Connect Wallet
description: 'Connect to a browser wallet extension'
---

# Connect Wallet

A user must first grant permission in a browser wallet extension for your dApp before it can read account information or request a signature for a transaction. `useWallet()` gives you everything you need to do this. `useAllWallets()` returns a list of supported extensions so that you can let the user choose which wallet they would like to connect. e.g. Talisman, PolkadotJS, Subwallet, etc.

## useWallet()

```tsx
import { useWallet, useAllWallets } from 'useink';

export const ConnectWallet = ({ children }) => {
  const { account, connect, disconnect } = useWallet()
  const wallets = useAllWallets();
  
  if (!account) {
    return (
      <ul>
        {wallets.map((w) => (
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

  return (
    <>
      <p>You are connected as {account?.name || account.address}</p>

      <button onClick={disconnect}>
        Disonnect Wallet
      </button>
    </>
  )
}
```

After a wallet has been connected any changes made in permissions in the wallet will automatically update in the React application.
`useWallet` has many more features including tools for switching between accounts. You can [learn more about useWallet here](/frontend/core/hooks/wallets/use-wallet).