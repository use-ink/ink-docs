---
title: Todos los Hooks
hide_title: true
slug: /frontend/hooks
description: Una lista de todos los hooks de useink
---

# Todos los hooks de `useink` 🪝

1. Te gusta lo que ves? Por favor [dale una estrella ⭐](https://github.com/paritytech/useink)
2. No ves una función que necesitas? [Crea una solicitud de funcionalidad](https://github.com/paritytech/useink/issues).
3. Tienes una duda? Únete al [chat Element de useink](https://matrix.to/#/%23useink:parity.io).

## Contratos

- [useCall](/frontend/react/hooks/contracts/use-call) - llama a un contrato y obtiene el resultado decodificado o un error.
- [useCallSubscription](/frontend/react/hooks/contracts/use-call-subscription) - llama a un contrato y obtiene el resultado decodificado o un error en cada nuevo bloque.
- [useContract](/frontend/react/hooks/contracts/use-contract) - crea una instancia del contrato en el cliente que contenga la metadata y la dirección del contrato.
- [useDryRun](/frontend/react/hooks/contracts/use-dry-run) - ejecuta una simulación de una transacción para validar si va a ejecutarse correctamente y determinar los costos de gas.
- [useEvents](/frontend/react/hooks/contracts/use-events) - obtiene los eventos de un contrato desde el estado. Opcionalmente filtra por el nombre del evento.
- [useEventSubscription](/frontend/react/hooks/contracts/use-event-subscription) - subscribe a los eventos emitidos por un contrato.
- [useTx](/frontend/react/hooks/contracts/use-tx) - firma y envía una transacción de un contrato y obtiene el resultado decodificado o un error.
- [useTxPaymentInfo](/frontend/react/hooks/contracts/use-tx-payment-info) - ejecuta una simulación de una transacción y obtiene la información del pago total requerido.

## Wallets

- [useAllWallets](/frontend/react/hooks/wallets/use-all-wallets) - obtiene una lista de todas las wallets soportadas incluyendo Talisman, PolkadotJs, y más.
- [useInstalledWallets](/frontend/react/hooks/wallets/use-installed-wallets) - obtiene una lista de todas las wallets soportadas que están instaladas en las extensiones de navegador del usuario.
- [useUnInstalledWallets](/frontend/react/hooks/wallets/use-uninstalled-wallets) - obtiene una lista de todas las wallets soportadas que **NO** están instaladas en las extensiones de navegador del usuario.
- [useWallet](/frontend/react/hooks/wallets/use-wallet) - conecta una wallet mediante una extensión de navegador y obtiene información de la cuenta.

## Runtime de Substrate

- [useApi](/frontend/react/hooks/substrate/use-api) - obtiene la instancia del cliente de la api configurada para una cadena específica. Esto contiene información del RPC y es utilizada en muchos otros hooks.
- [useBalance](/frontend/react/hooks/substrate/use-balance) - obtiene el balance de una cuenta para una cadena específica.
- [useBlockHeader](/frontend/react/hooks/substrate/use-block-header) - obtiene la información de la cabecera de bloque para una cadena en cada nuevo bloque.
