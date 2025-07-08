---
title: Solidity Frontend Libraries Compatibility
slug: /frontend/solidity-compatibility
hide_title: true
---

![Use Solidity tooling](/img/title/solidity.svg)

# Use Solidity Tooling with ink! Contracts
In this guide, you'll learn how to:

1. [Enable Solidity Compatibility in ink!](#create-and-compile-with-solidity-compatibility)
2. [Connect your Metamask wallet](#connect-your-wallet)
3. [Deploy and interact with ink! Contracts with Hardhat](#using-hardhat--ethersjs)
4. [Build a Frontend dApp with Wagmi](#using-wagmi-for-dapp-development)
5. [Explore Other Ethereum-Compatible Libraries](#other-libraries)

:::caution
The Rust/ink! to Solidity ABI type mapping is still a work in progress. Some limitations are known - [see details here](../background/solidity-metamask-compat.md#rustink-to-solidity-abi-type-mapping).
To ensure compatibility with the latest updates:
- Install the latest `cargo-contract` from GitHub:
```bash
cargo install --locked --git https://github.com/use-ink/cargo-contract
```
- Import `ink!` from the latest GitHub branch in your `Cargo.toml`:
```toml
ink = { git = "https://github.com/use-ink/ink.git", branch = "master", default-features = false, features = ["unstable-hostfn"] }
```
:::
## Create and Compile with Solidity Compatibility

To create your ink! contract, follow the [Create a new project](../getting-started/creating.md) guide:
```bash
cargo contract new flipper_evm
cd flipper_evm
```

Then, in your `Cargo.toml`, change:
```toml
[package.metadata.ink-lang]
abi = "ink"
```
to
```toml
[package.metadata.ink-lang]
abi = "sol"
```

Now build the contract with Solidity metadata support:
```bash
cargo contract build --release --metadata solidity
```
More information in [Rust/ink! to Solidity ABI type mapping](../basics/metadata/solidity-format.md).

## Connect Your Wallet 

You can use [MetaMask](https://metamask.io/) to interact with your `ink!` smart contract via the Solidity ABI.

To set up your wallet and connect to the appropriate network, follow this quick start guide: [Connect MetaMask to Polkadot Hub Testnet](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/wallets/#metamask)

:::info Network Details – Polkadot Hub Testnet
*Network name:* Polkadot Hub TestNet

*Currency symbol:* PAS

*Chain ID:* 420420422

*RPC URL:* https://testnet-passet-hub-eth-rpc.polkadot.io

*Block explorer URL:* https://blockscout-passet-hub.parity-testnet.parity.io/
:::

For more detailed configuration steps (RPC URL, chain ID, symbol, block explorer),see the complete guide:
 [Connect to Polkadot - Full Guide](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/connect-to-polkadot/)


## Using Hardhat & Ethers.js
[Hardhat](https://hardhat.org/) is a popular Ethereum development framework. With [`@parity/hardhat-polkadot`](https://github.com/paritytech/hardhat-polkadot), you can use it to deploy and interact with `ink!` smart contracts on Polkadot-compatible environments. 

This guide walks you through the essentials of using Hardhat to deploy and interact `ink!` smart contracts on Polkadot Hub.

1. Create a Hardhat Project
```bash
mkdir hardhat-example
cd hardhat-example
npm init -y
```
To interact with Polkadot, Hardhat requires the following plugin to compile contracts to PolkaVM bytecode and to spawn a local node compatible with PolkaVM:
```bash
npm install --save-dev @parity/hardhat-polkadot
```
Initialize the project
```bash
npx hardhat-polkadot init
npm install
```
:::note
By default, it will create a basic project with a Solidity smart contract. If you want to work with Solidity—compiling and testing smart contracts—you can follow this guide [Compile your contract (Hardhat)](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/dev-environments/hardhat/#compile-your-contract). 
In this tutorial, we’ll skip that step since we already have our `ink!` smart contract compiled.
:::


### Deploying Your Contract
1. Get `PAS` Test Tokens

Use the [Polkadot Hub Testnet faucet](https://faucet.polkadot.io/?parachain=1111) to fund your account with test PAS tokens.

2. Export your private key and save it in your Hardhat environment:
```bash
npx hardhat vars set PRIVATE_KEY "INSERT_PRIVATE_KEY"
```
Replace `INSERT_PRIVATE_KEY` with your actual private key. For further details on private key exportation, refer to the article [How to export an account's private key](https://support.metamask.io/configure/accounts/how-to-export-an-accounts-private-key/).

3. Configure `hardhat.config.js`

:::info
In this guide, we’ll deploy the contract to the Polkadot Hub Testnet. If you prefer to deploy to a local network instead, check out the [Local Development Environment](#local-development-environment) section for setup instructions.
:::

Update your Hardhat config with network settings for the Polkadot Hub Testnet:
```js
require('@nomicfoundation/hardhat-toolbox');

require('@parity/hardhat-polkadot');

const { vars } = require('hardhat/config');

module.exports = {
    ...
    networks: {
      hardhat: {
        ...
      },
      polkadotHubTestnet: {
        polkavm: true,
        url: 'https://testnet-passet-hub-eth-rpc.polkadot.io',
        accounts: [vars.get('PRIVATE_KEY')],
      },
  },
};
```
4. After building the `ink!` smart contract with Solidity metadata, you'll find 3 key files in your contract’s target directory:
- `<contract-name>.polkavm`: This is the raw contract bytecode that will be deployed on-chain.
- `<contract-name>.abi`: follows the Solidity ABI JSON format for describing a contract's interface. It's used by tools for contract interaction (e.g. ethers.js)
- `<contract-name>.json`: follows the Solidity contract metadata specification. It's used for reproducible builds/compilation and verification of deployed contracts (e.g. by block explorers and contract verification tools).

You can create a script to deploy your contract using the above `.polkavm` and `.json` files. To do so, create a file called `scripts/deploy.js` and add some logic to deploy your contract.
```js
const hre = require('hardhat');
const { join } = require('path');
const { readFileSync } = require('fs');

// Import the ABI of the contract from the flipper_evm.json file.
const abi = require("../../target/ink/flipper_evm.json").output.abi;

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    // Fetch the bytecode of the contract.
    const bytecodePath = join(__dirname, "../../target/ink", "flipper_evm.polkavm");
    const bytecode = `0x${readFileSync(bytecodePath).toString('hex')}`;

    const flipper = new hre.ethers.ContractFactory(abi, bytecode, deployer);

    // Deploy the contract with the constructor arguments.
    const contract = await flipper.deploy(true);
    await contract.waitForDeployment();
    
    // Get the address of the deployed contract.
    const address = await contract.getAddress();
    console.log(`Contract deployed at: ${address}`);

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Run your deployment script:
```bash
npx hardhat run scripts/deploy.js --network polkadotHubTestnet
```

This will print the smart contract address once deployment is complete. For example:
```bash
Contract deployed at: YOUR_CONTRACT_ADDRESS
```
:::note
Make sure to save this address, you'll need it in the next step to interact with your deployed contract.
:::

### Interact with Your Deployed Contract

Once deployed, you can create a script to interact with your contract. To do so, create a file called `scripts/interact.js` and add some logic to interact with the contract.

```js
const hre = require('hardhat');

// Import the ABI of the contract from the flipper_evm.json file.
const abi = require("../../target/ink/flipper_evm.json").output.abi;

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    // Replace with your deployed contract address
    const contractAddress = 'INSERT_CONTRACT_ADDRESS';

    const flipper = new hre.ethers.Contract(contractAddress, abi, deployer);
    // Read contract state
    const state = await flipper.get();
    console.log(`State: ${state}`);

    // Call the flip message
    await flipper.flip();
    // Read contract state again to see the change
    const state_after = await flipper.get();
    console.log(`State: ${state_after}`);

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Run your interaction script:
```bash
npx hardhat run scripts/interact.js --network polkadotHubTestnet
```

### Local Development Environment
Hardhat allows you to spin up a local testing environment to test and validate your smart contract functionalities before deploying to live networks. The `hardhat-polkadot` plugin provides support to spin up a local node with an ETH-RPC adapter for running local tests.
1. Download `ink-node` and `eth-rpc` adapter.
Download the latest release from:
👉 https://github.com/use-ink/ink-node/releases

The release includes:

- `ink-node` binary (the PolkaVM-compatible node)
- `eth-rpc` adapter binary (adapts the node to EVM-style JSON-RPC)

2. Configure `hardhat.config.js`
Update your Hardhat config to include the downloaded binaries:
```js
require('@nomicfoundation/hardhat-toolbox');

require('@parity/hardhat-polkadot');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    ...
    networks: {
      hardhat: {
        polkavm: true,
        nodeConfig: {
          nodeBinaryPath: 'INSERT_PATH_TO_INK_NODE',
          rpcPort: 8000,
          dev: true,
        },
        adapterConfig: {
          adapterBinaryPath: 'INSERT_PATH_TO_ETH_RPC_ADAPTER',
          dev: true,
        },
      },
      localNode: {
        polkavm: true,
        url: `http://127.0.0.1:8545`,
      },
  },
};
```
Replace `INSERT_PATH_TO_INK_NODE` and `INSERT_PATH_TO_ETH_RPC_ADAPTER` with the actual file paths to the binaries you downloaded.

3. Start the local testing environment
```bash
npx hardhat node
```
This command will launch the `ink-node` along with the `eth-rpc` adapter, providing you with a complete testing environment ready for contract deployment and interaction. By default, the `ink-node` will be running on `localhost:8000` and the `eth-rpc` adapter on `localhost:8545`.

4. Interact using Hardhat scripts with the flag `--network localNode`:
```bash
npx hardhat run scripts/interact.js --network localNode
```

## Using Wagmi for dApp Development

Now that you’ve deployed your Now that you’ve deployed your `ink!` smart contract and interacted with it via Hardhat and MetaMask, you can build a full frontend dApp using Ethereum-compatible libraries like [Wagmi](https://wagmi.sh/).

Wagmi is a popular library of React Hooks designed to work with Solidity ABI-compatible contracts — which makes it fully compatible with `ink!` contracts compiled using `abi = "sol"`.

This section walks you through building a frontend React dApp for the Flipper contract you deployed on the Polkadot Hub Testnet.

### Set Up the Project
To start working with Wagmi, create a new React project and initialize it by running the following commands in your terminal:

```bash
npx create-next-app@latest wagmi-asset-hub
cd wagmi-asset-hub
npm install wagmi viem @tanstack/react-query
```

### Configure Wagmi for Polkadot Hub
Create a configuration file to initialize Wagmi with Polkadot Hub. In your project, create a file named `src/lib/wagmi.ts`
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

### Set Up the Wagmi Provider
To enable Wagmi in your React application, you need to wrap your app with the [WagmiProvider](https://wagmi.sh/react/api/WagmiProvider#wagmiprovider). Update your `app/layout.tsx` file (for Next.js app router) with the following code:

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

### Connect a Wallet

Create a component to connect wallets to your dApp. Create a file named `app/components/ConnectWallet.tsx`:

```js
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

### Interact with Deployed Contract
:::info
This guide assumes the Flipper contract has already been deployed to the Polkadot Hub Testnet.  
If you haven’t deployed it yet, follow the [Deploying Your Contract](#deploying-your-contract) section first.
:::

Create a component to interact with your deployed contract. Create a file named `app/components/FlipperContract.tsx`:

```js
"use client";

import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

const CONTRACT_ADDRESS =
  "INSERT_CONTRACT_ADDRESS" as `0x${string}`;

export function FlipperContract() {
  // Import the ABI of the contract from the flipper_evm.abi file.
  const abi = [{"type":"constructor","inputs":[{"name":"init_value","type":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"flip","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"get","inputs":[],"outputs":[{"name":"","type":"bool"}],"stateMutability":"view"}];

  // Read the current stored number
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
      <h2>Storage Contract Interaction</h2>
      <div>
        <p>Contract Address: {CONTRACT_ADDRESS}</p>
        <p>Current Stored  Value: {value?.toString() || "Loading..."}</p>
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

### Interact with Deployed Contract
Update your main page to combine all the components, the file `src/app/page.tsx`:

```js
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

### Run Your dApp
```bash
pnpm dev
```
Now you have a modern frontend dApp that connects to Polkadot Hub using MetaMask and interacts with your `ink!` contract compiled with Solidity ABI support.

## Other Libraries
Solidity ABI compatibility lets you use a wide range of Ethereum-compatible libraries.

📚 Learn more in [Explore the key libraries for interacting with smart contracts on Polkadot-based networks](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/libraries/)
