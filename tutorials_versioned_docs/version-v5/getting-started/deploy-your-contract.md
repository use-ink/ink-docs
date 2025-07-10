---
title: Deploying Your Contract
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Rocket Title Picture](/img/title/rocket.svg)

# Deploying Your Contract

Learn how to deploy your compiled ink! smart contract to a blockchain.

## Prerequisites

Before deploying, ensure you have:
- [Built your contract](../building-your-contract) successfully
- A compiled `.contract` file in `target/ink/`
- Access to a compatible blockchain (we'll use a local node)

## Setting Up a Local Development Chain

For testing, let's use a local Substrate node with contracts support:

### Option 1: Using substrate-contracts-node

Install and run a local development chain:

```bash
# Install the contracts node
cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git

# Start the node
substrate-contracts-node --dev --tmp
```

### Option 2: Using Swanky Node (Alternative)

```bash
# Install Swanky suite
npm install -g @astar-network/swanky-cli

# Start local node
swanky node start
```

## Deploying via Command Line

### Using cargo-contract

Deploy your contract using the CLI:

```bash
# Deploy to local node
cargo contract instantiate \
  --constructor new \
  --args true \
  --suri //Alice \
  --execute

# Or deploy with the default constructor
cargo contract instantiate \
  --constructor default \
  --suri //Alice \
  --execute
```

### Understanding the Command

- `--constructor new`: Calls the `new` constructor
- `--args true`: Passes `true` as the initial value
- `--suri //Alice`: Uses Alice's account for deployment
- `--execute`: Actually performs the deployment (omit for dry-run)

## Deploying via Contracts UI

### Using Polkadot.js Apps

1. Open [Polkadot.js Apps](https://polkadot.js.org/apps/)
2. Connect to your local node (ws://127.0.0.1:9944)
3. Navigate to Developer → Contracts
4. Click "Upload & deploy code"
5. Upload your `.contract` file
6. Set constructor parameters
7. Deploy!

### Using Contracts UI

1. Open [Contracts UI](https://contracts-ui.substrate.io/)
2. Connect to your local node
3. Click "Add New Contract"
4. Upload your `.contract` file
5. Follow the deployment wizard

## Deployment Process

When you deploy, several things happen:

1. **Code Upload**: The Wasm binary is stored on-chain
2. **Instantiation**: A new contract instance is created
3. **Constructor Call**: Your chosen constructor runs
4. **Address Assignment**: The contract gets a unique address

## Getting Contract Information

After deployment, note down:
- **Contract Address**: Where your contract lives
- **Code Hash**: Identifies your contract code
- **ABI**: For frontend integration

Example output:
```
Contract deployed successfully!
Contract Address: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
Code Hash: 0x1234...abcd
```

## Verifying Deployment

Test that your contract was deployed correctly:

```bash
# Call a read-only message
cargo contract call \
  --contract 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY \
  --message get \
  --suri //Alice \
  --dry-run
```

## Common Deployment Networks

### Testnets
- **Shibuya (Astar)**: Good for testing
- **Rococo Contracts**: Polkadot testnet

### Mainnets  
- **Astar**: Production-ready Polkadot parachain
- **Shiden**: Kusama parachain

## Troubleshooting

### Issue: "Insufficient funds"
**Solution**: Ensure your account has enough tokens for gas fees.

### Issue: "Contract trap"
**Solution**: Check your constructor logic and parameters.

### Issue: "Connection failed"
**Solution**: Verify your node is running and accessible.

## What's Next?

Your contract is now deployed! Next steps:
1. [Learn to call your contract](../calling-your-contract)
2. Build a frontend to interact with it
3. Deploy to a testnet for others to use

## Key Points

- Always test on a local node first
- Save your contract address - you'll need it!
- Different networks have different gas costs
- The same code can be instantiated multiple times 