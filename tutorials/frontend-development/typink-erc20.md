---
title: Building a Frontend with Typink
sidebar_position: 2
---

![Frontend Title Picture](/img/title/frontend.svg)

# Build an ERC20 dapp with Typink and ink! v6

In this tutorial, we'll guide you through building a complete ERC20 token dapp using Typink with ink! v6 on PolkaVM (pallet-revive). You'll learn how to create, deploy, and interact with an ERC20 token contract, including transfers and real-time event notifications.

**What We'll Build:**

* ERC20 token contract using ink! v6
* Token transfer interface with real-time balance updates
* Transaction notifications with txToaster
* Live Transfer event monitoring with toast notifications

**Technologies:**

* [Typink](https://typink.dev/) - React hooks for contract interactions
* [ink! v6](https://use.ink/docs/v6) - Latest ink! on PolkaVM (pallet-revive)
* [POP CLI](https://learn.onpop.io/contracts/welcome/install-pop-cli) - Contract development tool
* [Next.js](https://nextjs.org/) - Frontend framework

### Prerequisites

* Node.js v20 or higher
* pnpm (or npm/yarn/bun)
* Rust and cargo-contract (for contract compilation)

### Step 1: Create New Typink Project

Let's start by creating a new project using the Typink CLI:

```bash
pnpm create typink@latest
```

Follow the interactive prompts:

1. **Project name:** `erc20-dapp`
2. **Contract type:** Select `Ink! v6 (PolkaVM, pallet-revive)`
3. **Networks:** Select `Passet Hub`

The CLI will:

* Create the project structure
* Install dependencies
* Setup TypinkProvider with Passet Hub
* Initialize git repository

Navigate to your project:

```bash
cd erc20-dapp
```

### Step 2: Create ERC20 Contract with POP CLI

We'll use POP CLI to create our ERC20 contract. First, install POP CLI if you haven't:

```bash
cargo install --git https://github.com/r0gue-io/pop-cli
```

Create a new contract using POP CLI:

```bash
pop new contract
```

When prompted:

* **Template type:** `ERC`
* **Select contract:** `erc20`
* **Project name:** `erc20`

This creates an `erc20` folder with the ERC20 contract template.

### Step 3: Compile the Contract

Navigate to the contract directory and build it:

```bash
cd erc20
pop build
# or
cargo contract build --release
```

After successful compilation, you'll find the artifacts in `target/ink/`:

* `erc20.contract` - Bundle file (metadata + wasm)
* `erc20.json` - Contract metadata
* `erc20.wasm` - Contract bytecode

Copy these files to your project's contracts folder:

```bash
mkdir -p ../src/contracts/artifacts/erc20
cp target/ink/erc20.* ../src/contracts/artifacts/erc20/
cd ..
```

### Step 4: Get Testnet Tokens

Before deploying, you'll need PAS testnet tokens on Passet Hub:

1. **Get PAS on Passet Hub:**
    * Visit [Paseo Faucet for Passet Hub](https://faucet.polkadot.io/?parachain=1111)
    * Request PAS tokens for your Passet Hub wallet address

### Step 5: Deploy Contract via ui.use.ink

Now let's deploy the ERC20 contract:

1. **Visit** [**ui.use.ink**](https://ui.use.ink/)
2. **Connect Your Wallet:**
    * Click "Connect Wallet"
    * Select SubWallet, Talisman, or PolkadotJS
3. **Select Network:**
    * Choose "Paseo Asset Hub" from the network dropdown
4. **Upload Contract:**
    * Click "Add New Contract"
    * Select "Upload New Contract Code"
    * Upload `erc20.contract` file
5. **Deploy Contract:**
    * Constructor: `new`
    * `total_supply`: Enter `1000000000000000000000000` (1M tokens with 18 decimals)
    * Click "Deploy"
    * Sign the transaction
6. **Save Contract Address:**
    * After successful deployment, copy the contract address
    * Example: `0x1234...5678`

### Step 6: Register Contract Deployment

Update `src/contracts/deployments.ts` to register your ERC20 contract:

```tsx
import { ContractDeployment, passetHub } from 'typink';
import erc20Metadata from './artifacts/erc20/erc20.json';

export enum ContractId {
  ERC20 = 'erc20',
}

export const deployments: ContractDeployment[] = [
  {
    id: ContractId.ERC20,
    metadata: erc20Metadata,
    network: passetHub.id,
    address: '0x1234...5678', // Replace with your contract address
  },
];
```

### Step 7: Generate TypeScript Bindings

The project includes a pre-configured typegen script. Run it to generate type-safe bindings:

```bash
pnpm typegen
```

This generates TypeScript types in `src/contracts/types/erc20/` including the `Erc20ContractApi` interface.

### Step 8: Display Token Information

Create a new component `src/components/erc20-board.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { formatBalance, useContract, useContractQuery, useTypink } from 'typink';
import { toEvmAddress } from 'dedot/contracts';
import { Erc20ContractApi } from '@/contracts/types/erc20';
import { ContractId } from '@/contracts/deployments';

export function ERC20Board() {
  const { connectedAccount } = useTypink();
  const { contract } = useContract<Erc20ContractApi>(ContractId.ERC20);

  // Fetch total supply
  const { data: totalSupply, isLoading: loadingSupply } = useContractQuery({
    contract,
    fn: 'totalSupply',
  });

  // Fetch user balance with real-time updates
  const { data: balance, isLoading: loadingBalance } = useContractQuery(
    connectedAccount?.address
      ? {
          contract,
          fn: 'balanceOf',
          args: [toEvmAddress(connectedAccount.address) as `0x${string}`],
          watch: true, // Auto-refresh on new blocks
        }
      : undefined,
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">ERC20 Token</h2>
      </div>

      {/* Token Info */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <div className="space-y-2">
          <div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Total Supply:</span>
            <p className="text-lg font-semibold">
              {loadingSupply ? 'Loading...' : formatBalance(totalSupply, { decimals: 18, symbol: 'UNIT' })}
            </p>
          </div>

          {connectedAccount && (
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Your Balance:</span>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {loadingBalance ? 'Loading...' : formatBalance(balance, { decimals: 18, symbol: 'UNIT' })}
              </p>
            </div>
          )}
        </div>
      </div>

      {!connectedAccount && (
        <p className="text-sm text-gray-600">Connect your wallet to view balance and transfer tokens.</p>
      )}
    </div>
  );
}
```

Update `src/app/page.tsx` to use the new component:

```tsx
import { ERC20Board } from '@/components/erc20-board';

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <ERC20Board />
    </main>
  );
}
```

Start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000/) and connect your wallet to see your token balance!

<img src="/img/typink-tutorial-01.png" alt="" />

### Step 9: Create Transfer Form

Now let's add a transfer form. Update `src/components/erc20-board.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { formatBalance, useContract, useContractQuery, useContractTx, useTypink, txToaster } from 'typink';
import { toEvmAddress } from 'dedot/contracts';
import { Erc20ContractApi } from '@/contracts/types/erc20';
import { ContractId } from '@/contracts/deployments';

export function ERC20Board() {
  const { connectedAccount } = useTypink();
  const { contract } = useContract<Erc20ContractApi>(ContractId.ERC20);

  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  // ... (previous code for totalSupply and balance queries)

  // Transfer transaction
  const transferTx = useContractTx(contract, 'transfer');

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recipient || !amount || !connectedAccount) return;

    const toaster = txToaster('Transferring tokens...');

    try {
      // Validate recipient address
      if (recipient === toEvmAddress(connectedAccount.address)) {
        throw new Error('Cannot transfer to yourself');
      }

      // Convert amount to wei (18 decimals)
      const amountInWei = BigInt(Math.floor(parseFloat(amount) * 1e18));

      await transferTx.signAndSend({
        args: [recipient, amountInWei],
        callback: (result) => {
          toaster.onTxProgress(result);

          // Clear form on success (balance auto-refreshes with watch: true)
          if (result.status.type === 'BestChainBlockIncluded' && !result.dispatchError) {
            setRecipient('');
            setAmount('');
          }
        },
      });
    } catch (error: any) {
      console.error('Transfer failed:', error);
      toaster.onTxError(error);
    }
  };

  const isValidTransfer = recipient && amount && parseFloat(amount) > 0;

  return (
    <div className="space-y-6">
      {/* ... (previous token info display) */}

      {/* Transfer Form */}
      {connectedAccount && (
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Transfer Tokens</h3>

          <form onSubmit={handleTransfer} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Recipient Address
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="0x..."
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Amount (UNIT)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                step="0.0001"
                min="0"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!isValidTransfer || transferTx.inBestBlockProgress}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
              {transferTx.inBestBlockProgress ? 'Transferring...' : 'Transfer'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
```

The form will look like below:

<img src="/img/typink-tutorial-02.png" alt="" />

### Step 10: Watch Transfer Events

Let's add real-time Transfer event monitoring with toast notifications. Update `src/components/erc20-board.tsx`:

```tsx
'use client';

import { useCallback, useState } from 'react';
import { toast } from 'sonner';
import { formatBalance, useContract, useContractQuery, useContractTx, useTypink, useWatchContractEvent, txToaster } from 'typink';
import { toEvmAddress } from 'dedot/contracts';
import { Erc20ContractApi } from '@/contracts/types/erc20';
import { ContractId } from '@/contracts/deployments';
import { shortenAddress } from '@/lib/utils';

export function ERC20Board() {
  const { connectedAccount } = useTypink();
  const { contract } = useContract<Erc20ContractApi>(ContractId.ERC20);

  // ... (all previous code)

  // Watch Transfer events
  useWatchContractEvent(
    contract,
    'Transfer',
    useCallback((events) => {
      events.forEach((event) => {
        const { from, to, value } = event.data;

        // Check if current user is involved (case-insensitive EVM address comparison)
        const userEvmAddress = connectedAccount?.address ? toEvmAddress(connectedAccount.address).toLowerCase() : '';
        const isReceiver = to && userEvmAddress === to.toString().toLowerCase();
        const isSender = from && userEvmAddress === from.toString().toLowerCase();

        if (isReceiver || isSender) {
          const direction = isReceiver ? 'received' : 'sent';
          const otherParty = isReceiver ? from : to;

          toast.success('Transfer Event', {
            description: `You ${direction} ${formatBalance(value, { decimals: 18, symbol: 'UNIT' })} ${
              isReceiver ? 'from' : 'to'
            } ${shortenAddress(otherParty?.toString())}`,
            duration: 5000,
          });
        }
      });
    }, [connectedAccount?.address])
  );

  return (
    <div className="space-y-6">
      {/* ... (all previous JSX) */}

      {/* Recent Events */}
      <div className="text-xs text-gray-500 mt-4">
        <p>💡 Transfer events are monitored in real-time</p>
        <p>You'll see notifications when tokens are transferred to/from your account</p>
      </div>
    </div>
  );
}
```

The notification appears when the contract emits a Transfer event.

<img src="/img/typink-tutorial-03.png" alt="" />

### Final Result

Congratulations! You've built a complete ERC20 token dapp with:

* ✅ **Real-time Balance Display** - Auto-updates on new blocks
* ✅ **Token Transfer Form** - Send tokens to any address
* ✅ **Transaction Notifications** - Real-time progress with txToaster
* ✅ **Event Monitoring** - Live Transfer event notifications
* ✅ **Type-Safe Interactions** - Full TypeScript support

#### Features Demonstrated

**Contract Queries:**

* `useContractQuery` with `watch: true` for real-time updates
* Auto-refresh balance after transactions

**Contract Transactions:**

* `useContractTx` for sending transfers
* `txToaster` for transaction progress tracking
* Error handling and validation

**Event Watching:**

* `useWatchContractEvent` for Transfer events
* Filtered notifications for user-relevant events
* Real-time balance refresh on events

### Resources

* [POP CLI Documentation](https://learn.onpop.io)
* [Typink Documentation](https://docs.typink.dev)
* [Dedot Documentation](https://docs.dedot.dev)

***

**Happy Building! 🎉**