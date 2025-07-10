---
title: Calling Your Contract
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Frontend Title Picture](/img/title/frontend.svg)

# Calling Your Contract

Learn how to interact with your deployed ink! smart contract.

## Prerequisites

Before calling your contract, ensure you have:
- [Deployed your contract](../deploy-your-contract) successfully
- The contract address from deployment
- A local node running (if testing locally)

## Calling via Command Line

### Using cargo-contract

The `cargo-contract` CLI provides an easy way to call your contract methods:

#### Read-only Calls (Queries)

For read-only operations that don't modify state:

```bash
# Call the 'get' method to read the current value
cargo contract call \
  --contract 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY \
  --message get \
  --suri //Alice \
  --dry-run
```

#### State-changing Calls (Transactions)

For operations that modify the contract state:

```bash
# Call the 'flip' method to toggle the value
cargo contract call \
  --contract 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY \
  --message flip \
  --suri //Alice \
  --execute
```

### Understanding the Parameters

- `--contract`: Your deployed contract address
- `--message`: The method name to call
- `--suri //Alice`: Account to call from (use Alice for testing)
- `--dry-run`: Simulate without executing (for queries)
- `--execute`: Actually send the transaction

## Calling via Web Interface

### Using Polkadot.js Apps

1. Go to [Polkadot.js Apps](https://polkadot.js.org/apps/)
2. Connect to your node
3. Navigate to Developer → Contracts
4. Find your contract or add it by address
5. Select a method to call
6. Fill in parameters (if required)
7. Call the method

### Using Contracts UI

1. Open [Contracts UI](https://contracts-ui.substrate.io/)
2. Connect to your network
3. Add your contract by address
4. Browse available methods
5. Execute calls with a user-friendly interface

## Understanding Return Values

### Successful Query Response
```json
{
  "result": {
    "Ok": true
  },
  "gasConsumed": "123456789",
  "gasRequired": "123456789"
}
```

### Transaction Receipt
```json
{
  "blockHash": "0x1234...abcd",
  "blockNumber": 42,
  "gasUsed": "123456789",
  "success": true
}
```

## Building a Frontend

### Using Polkadot.js API

Here's a simple example of calling your contract from JavaScript:

```javascript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';

// Connect to the blockchain
const wsProvider = new WsProvider('ws://127.0.0.1:9944');
const api = await ApiPromise.create({ provider: wsProvider });

// Contract setup
const contractAddress = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const abi = require('./flipper.json'); // Your contract metadata
const contract = new ContractPromise(api, abi, contractAddress);

// Query the contract
const { result, output } = await contract.query.get(
  alice.address,  // Caller address
  { value: 0, gasLimit: -1 }  // Options
);

console.log('Current value:', output.toHuman());

// Send a transaction
await contract.tx.flip({ value: 0, gasLimit: 1000000000 })
  .signAndSend(alice, (result) => {
    if (result.status.isInBlock) {
      console.log('Transaction included in block');
    }
  });
```

### Using useInkathon (React Hook)

For React applications, you can use the useInkathon library:

```javascript
import { useInkathon, useRegisteredContract } from '@scio-labs/use-inkathon';

function ContractInteraction() {
  const { api, activeAccount } = useInkathon();
  const { contract } = useRegisteredContract('flipper');

  const getValue = async () => {
    if (!contract || !activeAccount) return;
    
    const result = await contract.query.get(
      activeAccount.address,
      { value: 0, gasLimit: -1 }
    );
    
    console.log('Value:', result.output?.toHuman());
  };

  const flipValue = async () => {
    if (!contract || !activeAccount) return;
    
    await contract.tx.flip({ value: 0, gasLimit: 1000000000 })
      .signAndSend(activeAccount.address);
  };

  return (
    <div>
      <button onClick={getValue}>Get Value</button>
      <button onClick={flipValue}>Flip Value</button>
    </div>
  );
}
```

## Gas and Fees

### Understanding Gas

- **Gas Limit**: Maximum gas you're willing to pay
- **Gas Used**: Actual gas consumed by the transaction
- **Gas Price**: Cost per unit of gas

### Estimating Gas

Use dry-run calls to estimate gas before sending transactions:

```bash
cargo contract call \
  --contract 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY \
  --message flip \
  --suri //Alice \
  --dry-run
```

## Troubleshooting

### Issue: "Contract not found"
**Solution**: Verify the contract address and ensure it's deployed.

### Issue: "Out of gas"
**Solution**: Increase the gas limit for your transaction.

### Issue: "Invalid method"
**Solution**: Check the method name matches your contract's ABI.

### Issue: "Insufficient balance"
**Solution**: Ensure the calling account has enough tokens.

## What's Next?

Now that you can call your contract:
1. Build a complete frontend application
2. Add events and event listening
3. Deploy to a testnet for public use
4. Explore more complex contract patterns

## Key Points

- Use `--dry-run` for read-only operations
- Always estimate gas before sending transactions
- Save your contract ABI for frontend integration
- Test thoroughly on local networks first 