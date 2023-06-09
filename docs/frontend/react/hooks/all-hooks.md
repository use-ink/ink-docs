---
title: All Hooks
hide_title: true
slug: /frontend/hooks
description: A list of all useink hooks
---

# All `useink` Hooks 🪝 

1. Like what you see? Please [give it a star ⭐](https://github.com/paritytech/useink)
2. Don't see a feature you need? [Create a feature request](https://github.com/paritytech/useink/issues). 
3. Have a question? Join the [useink Element chat](https://matrix.to/#/%23useink:parity.io).

## Contracts

* [useCall](/frontend/react/hooks/contracts/use-call) - call a contract and get the decoded result or an error.
* [useCallSubscription](/frontend/react/hooks/contracts/use-call-subscription) - call a contract and get the decoded result or an error on each new block.
* [useContract](/frontend/react/hooks/contracts/use-contract) - create a contract client instance containing metadata and the contract's address.
* [useDryRun](/frontend/react/hooks/contracts/use-dry-run) - send a dry run of a transaction to check if it will succeed and to determine gas costs.
* [useEvents](/frontend/react/hooks/contracts/use-events) - fetch the events for a contract from state. Optionally filter by event name.
* [useEventSubscription](/frontend/react/hooks/contracts/use-event-subscription) - subscribe to a contract's emitted events.
* [useTx](/frontend/react/hooks/contracts/use-tx) - sign and send a contract transaction and get the decoded result or an error.
* [useTxPaymentInfo](/frontend/react/hooks/contracts/use-tx-payment-info) - send a dry run of a transaction and get the total payment information required.

## Wallets

* [useAllWallets](/frontend/react/hooks/wallets/use-all-wallets) - get a list of all supported wallets including Talisman, PolkadotJs, and more.
* [useInstalledWallets](/frontend/react/hooks/wallets/use-installed-wallets) - get a list of all supported wallets that are installed in a user's browser extensions.
* [useUnInstalledWallets](/frontend/react/hooks/wallets/use-uninstalled-wallets) - get a list of all supported wallets that are **NOT** installed in a user's browser extensions.
* [useWallet](/frontend/react/hooks/wallets/use-wallet) - connect to a wallet browser extension, and get account information.

## Substrate Runtime

* [useApi](/frontend/react/hooks/substrate/use-api) - get the api client instance configured for a specific chain. This contains RPC information, and is used in many other hooks.
* [useBalance](/frontend/react/hooks/substrate/use-balance) - get an account's balance for a given chain.
* [useTransfer](/frontend/react/hooks/substrate/use-transfer) - transfer funds to another account.
* [useBlockHeader](/frontend/react/hooks/substrate/use-block-header) - get block header information for a chain on each new block.
* [useTimestampDate](/frontend/react/hooks/substrate/use-timestamp-date) - get block date on each new block.
* [useTimestampNow](/frontend/react/hooks/substrate/use-timestamp-now) - get block unix timestamp in miliseconds on each new block.
* [useTimestampQuery](/frontend/react/hooks/substrate/use-timestamp-query) - get a function that can be used to query timestamp info for a chain.

## Helpers

* [useUnixMiliToDate](/frontend/react/hooks/help/use-unix-mili-to-date) - convert a unix timestamp in miliseconds to a JavaScript Date object.