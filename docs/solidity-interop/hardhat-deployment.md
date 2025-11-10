---
title: Hardhat Deployment
sidebar_position: 4
---

# Deploy with Hardhat & Ethers.js

[Hardhat](https://hardhat.org/) is a popular Ethereum development framework. With [`@parity/hardhat-polkadot`](https://github.com/paritytech/hardhat-polkadot), you can use it to deploy and interact with ink! smart contracts on Polkadot-compatible environments.

This guide walks you through using Hardhat to deploy and interact with ink! smart contracts on Polkadot Hub.

## Prerequisites

Before starting, ensure you have:
- [Configured your ink! contract with Solidity ABI](./use-ink-with-solidity-abi.md)
- [Configured MetaMask](./metamask-setup.md) and obtained test tokens

## Project Setup

1. **Create a Hardhat Project**

```bash
mkdir hardhat-example
cd hardhat-example
npm init -y
```

2. **Install Required Dependencies**

To interact with Polkadot, Hardhat requires the following plugin to compile contracts to PolkaVM bytecode and to spawn a local node compatible with PolkaVM:

```bash
npm install --save-dev @parity/hardhat-polkadot
```

3. **Initialize the Project**

```bash
npx hardhat-polkadot init
npm install
```

:::note
By default, this creates a basic project with a Solidity smart contract. Since we already have our ink! smart contract compiled, we'll skip the Solidity compilation step.
:::

## Configuration

### Network Configuration

Update your `hardhat.config.js` with network settings for the Polkadot Hub Testnet:

```js
require('@nomicfoundation/hardhat-toolbox');
require('@parity/hardhat-polkadot');

const { vars } = require('hardhat/config');

module.exports = {
  // ... other config
  networks: {
    hardhat: {
      // ... local config
    },
    polkadotHubTestnet: {
      polkavm: true,
      url: 'https://testnet-passet-hub-eth-rpc.polkadot.io',
      accounts: [vars.get('PRIVATE_KEY')],
    },
  },
};
```

### Private Key Setup

Export your private key and save it in your Hardhat environment:

```bash
npx hardhat vars set PRIVATE_KEY "INSERT_PRIVATE_KEY"
```

Replace `INSERT_PRIVATE_KEY` with your actual private key. For details on private key exportation, refer to [How to export an account's private key](https://support.metamask.io/configure/accounts/how-to-export-an-accounts-private-key/).

### Get Test Tokens

Use the [Polkadot Hub Testnet faucet](https://faucet.polkadot.io/?parachain=1111) to fund your account with test PAS tokens.

## Contract Deployment

### Understanding Contract Files

After building your ink! smart contract with Solidity metadata, you'll find 3 key files in your contract's target directory:

- `<contract-name>.polkavm`: Raw contract bytecode that will be deployed on-chain
- `<contract-name>.abi`: Solidity ABI JSON format for contract interaction (used by ethers.js)
- `<contract-name>.json`: Solidity contract metadata specification for verification

### Deployment Script

Create a file called `scripts/deploy.js`:

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

### Run Deployment

```bash
npx hardhat run scripts/deploy.js --network polkadotHubTestnet
```

This will print the smart contract address once deployment is complete:

```bash
Contract deployed at: YOUR_CONTRACT_ADDRESS
```

:::note
Save this address - you'll need it to interact with your deployed contract.
:::

## Contract Interaction

Create a file called `scripts/interact.js`:

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

Run the interaction script:

```bash
npx hardhat run scripts/interact.js --network polkadotHubTestnet
```

## Local Development Environment

For local testing, you can spin up a local testing environment:

### Download Required Binaries

Download the latest release from [ink-node releases](https://github.com/use-ink/ink-node/releases). The release includes:

- `ink-node` binary (the PolkaVM-compatible node)
- `eth-rpc` adapter binary (adapts the node to EVM-style JSON-RPC)

### Configure Local Network

Update your `hardhat.config.js`:

```js
require('@nomicfoundation/hardhat-toolbox');
require('@parity/hardhat-polkadot');

module.exports = {
  // ... other config
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

### Start Local Environment

```bash
npx hardhat node
```

This launches the `ink-node` (on `localhost:8000`) and the `eth-rpc` adapter (on `localhost:8545`).

### Interact with Local Network

```bash
npx hardhat run scripts/interact.js --network localNode
```

## Next Steps

With your contract deployed via Hardhat, you can now:
- [Build frontend applications with Wagmi](./wagmi-integration.md)
- Use any Ethereum-compatible tools and libraries
- Integrate with existing Ethereum dApp infrastructure
