---
title: MetaMask Setup
sidebar_position: 3
---

# MetaMask Setup

You can use [MetaMask](https://metamask.io/) to interact with your ink! smart contracts via the Solidity ABI. This guide shows you how to configure MetaMask to connect to Polkadot networks.

## Quick Setup

To set up your wallet and connect to the appropriate network, follow this quick start guide: [Connect MetaMask to Polkadot Hub Testnet](https://docs.polkadot.com/develop/smart-contracts/wallets/#metamask)

## Network Configuration

### Polkadot Hub Testnet

Use these network details to configure MetaMask for Polkadot Hub Testnet:

:::info Network Details – Polkadot Hub Testnet
**Network name:** Polkadot Hub TestNet

**Currency symbol:** PAS

**Chain ID:** 420420422

**RPC URL:** https://testnet-passet-hub-eth-rpc.polkadot.io

**Block explorer URL:** https://blockscout-passet-hub.parity-testnet.parity.io/
:::

## Adding the Network to MetaMask

1. **Open MetaMask** and click on the network dropdown
2. **Click "Add Network"** at the bottom of the list
3. **Select "Add a network manually"**
4. **Enter the network details** from the info box above
5. **Click "Save"** to add the network

## Detailed Setup Guide

For more comprehensive configuration steps including other networks and detailed troubleshooting, see the complete guide: [Connect to Polkadot - Full Guide](https://docs.polkadot.com/develop/smart-contracts/connect-to-polkadot/)

## Getting Test Tokens

Once connected to the testnet, you'll need test tokens to interact with contracts. Visit the appropriate faucet for the network you're using.

## Next Steps

With MetaMask configured, you can now:
- [Deploy contracts using Hardhat](./hardhat-deployment.md)
- [Build frontend applications with Wagmi](./wagmi-integration.md)
- Use any Ethereum-compatible wallet interface to interact with your ink! contracts

## Troubleshooting

If you encounter issues:
- Ensure you're using the correct network details
- Check that the RPC endpoint is accessible
- Verify your MetaMask version is up to date
- Clear MetaMask cache if experiencing connection issues
