---
title: 2. Conectar Wallet
description: 'Conectar una wallet mediante una extensión de navegador'
---

# Conectar Wallet

Un usuario primero debe dar permiso a una wallet mediante una extensión de navegador para que su dApp pueda leer información de cuentas o solicitar una firma para una transacción. `useWallet()` le da todo lo necesario para realizar esto. `useAllWallets()` devuelve una lista de las extensiones soportadas para que el usuario pueda elegir qué wallet le gustaría conectar. e.g. Talisman, PolkadotJS, Subwallet, etc.

## useWallet()

```tsx
import { useWallet, useAllWallets } from 'useink'

export const ConnectWallet = ({ children }) => {
  const { account, connect, disconnect } = useWallet()
  const wallets = useAllWallets()

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

      <button onClick={disconnect}>Disonnect Wallet</button>
    </>
  )
}
```

Luego de que una wallet ha sido conectada, cualquier cambio de permisos en la wallet va a actualizar automáticamente la aplicación en React.
`useWallet` tiene muchas más funcionalidades, incluyendo herramientas para cambiar la cuenta seleccionada. Usted puede [aprender más sobre useWallet aquí](/frontend/core/hooks/wallets/use-wallet).
