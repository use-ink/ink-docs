---
title: Solidity Frontend Libraries Compatibility
slug: /frontend/solidity-compatibility
hide_title: true
---

![Use Solidity tooling](/img/title/solidity.svg)

# Use Solidity Tooling with ink! Contracts
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
1. Connect Your Wallet

In this guide, we'll use [MetaMask](https://metamask.io/) to connect to Polkadot Hub. To set up your wallet and network connection:
- Follow this quick start: [Connect MetaMask to Polkadot](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/wallets/#metamask)

- For more detailed configuration steps (RPC URL, chain ID, symbol, block explorer), refer to:
👉 [Connect to Polkadot - Full Guide](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/connect-to-polkadot/)

2. Get `PAS` Test Tokens

Use the [Polkadot Hub Testnet faucet](https://faucet.polkadot.io/?parachain=1111) to fund your account with test PAS tokens.

3. Export your private key and save it in your Hardhat environment:
```bash
npx hardhat vars set PRIVATE_KEY "INSERT_PRIVATE_KEY"
```
Replace `INSERT_PRIVATE_KEY` with your actual private key. For further details on private key exportation, refer to the article [How to export an account's private key](https://support.metamask.io/configure/accounts/how-to-export-an-accounts-private-key/).

4. Configure `hardhat.config.js`

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
5. After building the `ink!` smart contract with Solidity metadata, you'll find 3 key files in your contract’s target directory:
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

## Other Libraries
Solidity ABI compatibility lets you use a wide range of Ethereum-compatible libraries.

📚 Learn more in [Explore the key libraries for interacting with smart contracts on Polkadot-based networks](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/libraries/)
