---
title: Wagmi Integration
sidebar_position: 5
---

# Build dApps with Wagmi

Now that you've deployed your ink! smart contract, you can build a full frontend dApp using Ethereum-compatible libraries like [Wagmi](https://wagmi.sh/).

Wagmi is a popular library of React Hooks designed to work with Solidity ABI-compatible contracts — which makes it fully compatible with ink! contracts compiled using `abi = "sol"`.

This guide walks you through building a frontend React dApp for the Flipper contract deployed on the Polkadot Hub Testnet.

## Prerequisites

Before starting, ensure you have:
- [Deployed your contract with Hardhat](./hardhat-deployment.md)
- The contract address and ABI from your deployment

## Project Setup

Create a new React project and install required dependencies:

```bash
npx create-next-app@latest wagmi-asset-hub
cd wagmi-asset-hub
npm install wagmi viem @tanstack/react-query
```

## Configure Wagmi for Polkadot Hub

Create a configuration file to initialize Wagmi with Polkadot Hub. In your project, create a file named `src/lib/wagmi.ts`:

```js
import { http, createConfig } from 'wagmi';

// Configure the Polkadot Hub chain
const assetHub = {
  id: 420420422,
  name: 'polkadot-hub-testnet',
  network: 'polkadot-hub-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'PAS',
    symbol: 'PAS',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-passet-hub-eth-rpc.polkadot.io'],
    },
  },
} as const;

// Create wagmi config
export const config = createConfig({
  chains: [assetHub],
  transports: {
    [assetHub.id]: http(),
  },
});
```

## Set Up the Wagmi Provider

To enable Wagmi in your React application, wrap your app with the [WagmiProvider](https://wagmi.sh/react/api/WagmiProvider#wagmiprovider). Update your `app/layout.tsx` file (for Next.js app router):

```js
// For app router (src/app/layout.tsx)
"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./lib/wagmi";

// Create a query client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
```

## Connect a Wallet

Create a component to connect wallets to your dApp. Create a file named `app/components/ConnectWallet.tsx`:

```tsx
"use client";

import React from "react";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

export function ConnectWallet() {
  const { connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div>
        <div>Connected to {address}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return (
    <button onClick={() => connect({ connector: injected() })}>
      Connect Wallet
    </button>
  );
}
```

## Interact with Your Contract

Create a component to interact with your deployed contract. Create a file named `app/components/FlipperContract.tsx`:

:::info
This assumes your Flipper contract has already been deployed to the Polkadot Hub Testnet. If you haven't deployed it yet, follow the [Hardhat Deployment](./hardhat-deployment.md) guide first.
:::

```tsx
"use client";

import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

const CONTRACT_ADDRESS = "INSERT_CONTRACT_ADDRESS" as `0x${string}`;

export function FlipperContract() {
  // Import the ABI of the contract from the flipper_evm.abi file.
  const abi = [
    {
      "type": "constructor",
      "inputs": [{"name": "init_value", "type": "bool"}],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "flip",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "get",
      "inputs": [],
      "outputs": [{"name": "", "type": "bool"}],
      "stateMutability": "view"
    }
  ];

  // Read the current stored value
  const { data: value, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "get",
  });

  // Call the contract
  const { writeContract, data: hash, error, isPending } = useWriteContract();

  // Wait for transaction to be confirmed
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const flip = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: "flip",
      args: [],
    });
  };

  return (
    <div>
      <h2>Flipper Contract Interaction</h2>
      <div>
        <p>Contract Address: {CONTRACT_ADDRESS}</p>
        <p>Current Value: {value?.toString() || "Loading..."}</p>
      </div>

      <div>
        <button onClick={flip} disabled={isPending || isConfirming}>
          {isPending
            ? "Waiting for approval..."
            : isConfirming
            ? "Confirming..."
            : "Flip Value"}
        </button>
      </div>

      {error && <div className="error-message">Error: {error.message}</div>}

      {isConfirmed && (
        <div className="success-message">
          Successfully updated!{" "}
          <button onClick={() => refetch()}>Refresh</button>
        </div>
      )}
    </div>
  );
}
```

## Main Application

Update your main page to combine all the components in `src/app/page.tsx`:

```tsx
"use client";

import { ConnectWallet } from "./components/ConnectWallet";
import { FlipperContract } from "./components/FlipperContract";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main>
      <h1>Wagmi - Polkadot Hub Smart Contracts</h1>
      <ConnectWallet />
      {isConnected ? <FlipperContract /> : <span>Connect your wallet</span>}
    </main>
  );
}
```

## Run Your dApp

Start the development server:

```bash
npm run dev
```

Now you have a modern frontend dApp that connects to Polkadot Hub using MetaMask and interacts with your ink! contract compiled with Solidity ABI support.

## Key Features

Your dApp now supports:
- **Wallet Connection**: Connect/disconnect MetaMask wallet
- **Contract Reading**: Query current contract state
- **Contract Writing**: Send transactions to modify state
- **Transaction Tracking**: Monitor transaction status and confirmations
- **Error Handling**: Display user-friendly error messages

## Next Steps

With Wagmi integration complete, you can:
- Add more complex contract interactions
- Implement additional UI components
- Integrate with other Ethereum-compatible libraries
- Deploy your dApp to production

## Other Libraries

Solidity ABI compatibility allows you to use a wide range of Ethereum-compatible libraries beyond Wagmi.

📚 Learn more in [Explore the key libraries for interacting with smart contracts on Polkadot-based networks](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/libraries/)
