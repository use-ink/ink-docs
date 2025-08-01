---
title: Building a Frontend with Inkathon
sidebar_position: 1
---

# Building a Frontend for an ink! ERC20 Smart Contract with Inkathon

In this tutorial, you'll learn how to build a frontend interface that interacts with an ERC20 smart contract written in ink! on a Substrate-based chain. You'll start from the [Inkathon](https://github.com/scio-labs/inkathon) boilerplate, remove the default Flipper contract, and integrate a new ERC20 contract. 

ink!athon is a starter kit for full-stack dApp development with ink! smart contracts and a React-based frontend in one place. Under the hood, it leverages the power of the [PAPI ink-sdk](https://papi.how/sdks/ink-sdk), [ReactiveDOT](https://reactivedot.dev/react/guides/smart-contract), and other developer tools to simplify contract interaction.

### Prerequisites

Before you begin, make sure you have:
- Understand ink! and Rust at a basic level.
- Set up your development environment with the Pop CLI: [Guide](https://learn.onpop.io/welcome/install-pop-cli)
- Installed [Node.js](https://nodejs.org/en).

### Getting Started

### 1. Setup the Inkathon Boilerplate

```bash
git clone https://github.com/scio-labs/inkathon.git
cd inkathon

# Install the dependencies
pnpm install
# Start the project
pnpm run dev
```

### 2. Add the ERC20 Smart Contract
The project is divided into two main folders:

- `contracts`: where the smart contracts and deployment scripts live.
- `frontend`: the React-based UI to interact with the contracts.

To scaffold the ERC20 contract, run:
```bash
cd contracts/src
pop new contract erc20 -c erc -t erc20
```
Then, in `contracts/Cargo.toml`, update the members list:
```toml
members = ["src/flipper", "src/erc20"]
```

Now build and generate contract metadata:

```bash
# Executed from the /contracts directory
bun run build

# Executed from the /contracts directory
bun run codegen
```

### 3. Deploy the ERC20 Contract on Passet Hub
:::note
If you're using an already deployed contract, you can skip this section.
:::

We’ll deploy the contract to Passet Hub
```bash
# Executed from the /contracts directory
# If `CHAIN` is not set, it will default to `dev`
CHAIN=passethub bun run deploy
```

By default, the `//Alice` account is used. If you want to use another account, put your signers `ACCOUNT_URI` in `.env.<chain>` (e.g. `.env.passethub`).

:::info
Use the [Passet Hub Faucet](https://faucet.polkadot.io/?parachain=1111) to fund your account with test tokens.
:::

Successful deployment will look like:
```bash
$ bun run scripts/deploy.ts

✔ Initialized chain 'passethub' with account '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'

⠇ Deploying contract…WS halt (3)
✔ 📜 Deployed contract 'erc20' at address '5EnYcjJg88Ccg5Fco4L5zFR3r9QtFKknqbW9uubqbNXEgkbr' (0x7861ab0f2b73aceb7fbf661585caeff7dbad7140)

✔ Exported deployment info to file 'deployments/erc20/passethub.ts'
```

:::info
To deploy on another chain:
```bash
bunx papi add -w <websocket-url> <chain-name>
CHAIN=<chain-name> bun run deploy
```
:::

### 4. Interact with the ERC20 Contract in the Frontend

In `frontend/src/lib/inkathon/deployments.ts`, replace the Flipper contract with ERC20:
```ts
import {
  evmAddress as evmAddressPassethub,
  ss58Address as ss58AddressPassethub,
} from "@inkathon/contracts/deployments/erc20/passethub"

import { contracts } from "@polkadot-api/descriptors"


export const erc20 = {
  contract: contracts.erc20,
  evmAddresses: {
    passethub: evmAddressPassethub,
  },
  ss58Addresses: {
    passethub: ss58AddressPassethub,
  },
}
```

Update `frontend/src/components/web3/contract-card.tsx` to replace Flipper logic with ERC20 interaction logic.

### 4.1. Querying the Contract
To read values like `total_supply` or an account’s balance, use storage queries or message calls:

#### 4.1.1. Get Total Supply (via [storage](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs#L16))

```ts
const [erc20TotalSupply, setErc20TotalSupply] = useState<FixedSizeArray<4, bigint>>()
// Create SDK & contract instance
const sdk = createReviveSdk(api as ReviveSdkTypedApi, erc20.contract)
const contract = sdk.getContract(erc20.evmAddresses[chain])

// Query storage directly
const storageResult = await contract.getStorage().getRoot()
const total_supply = storageResult.success ? storageResult.value.total_supply : undefined
setErc20TotalSupply(total_supply)
```

#### 4.1.2. Get Balance (via [balance_of message](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs#L87)):

```ts
const { signer, signerAddress } = useSignerAndAddress()
const [accountErc20MyBalance, setAccountErc20MyBalance] = useState<FixedSizeArray<4, bigint>>()
// Create SDK & contract instance
const sdk = createReviveSdk(api as ReviveSdkTypedApi, erc20.contract)
const contract = sdk.getContract(erc20.evmAddresses[chain])

// NOTE: Unfortunately, as `origin` is mandatory, every passed accounts needs to be mapped in an extra transaction first 
// before it can be used for querying.
if (!api || !chain || !signer) return
    const isMapped = await sdk.addressIsMapped(signerAddress)
    if (!isMapped) {
        toast.error("Account not mapped. Please map your account first.")
    return
}
// Query my balance
const resultQueryMyBalance = await contract.query("balance_of", { origin: signerAddress , data: {
    owner: ss58ToEthereum(signerAddress)
}});
const mybalance = resultQueryMyBalance.success ? resultQueryMyBalance.value.response : undefined
setAccountErc20MyBalance(mybalance)
```

### 4.2. Sending Transactions ([Transfer](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs#L134))
To transfer ERC20 tokens:

```ts
// Check if account is mapped
const isMapped = await sdk.addressIsMapped(signerAddress)
if (!isMapped) {
    toast.error("Account not mapped. Please map your account first.")
    return
}

// Send transfer transaction
const tx = contract
    .send("transfer", { 
    origin: signerAddress, 
    data: {
        to: Binary.fromHex(inputAddress),
        value: [1n, 0n, 0n, 0n] // Transfer 1 token
    }
    })
    .signAndSubmit(signer)
    .then((tx) => {
    queryContract() // Refresh data after transfer
    if (!tx.ok) throw new Error("Failed to send transaction", { cause: tx.dispatchError })
    })

toast.promise(tx, {
    loading: "Transferring token...",
    success: "Token transferred successfully",
    error: "Failed to transfer token",
})
```


### Conclusion

You’ve successfully replaced the default Flipper contract in Inkathon with an ERC20 ink! contract, deployed it to a testnet, and built a frontend interface using Inkathon, PAPI ink-sdk, and ReactiveDOT.

If you'd like to explore or customize the full React component that interacts with the ERC20 contract, here's the complete implementation of  `frontend/src/components/web3/contract-card.tsx`: 

```ts
import { createReviveSdk, ss58ToEthereum, type ReviveSdkTypedApi } from "@polkadot-api/sdk-ink"
import { useChainId, useTypedApi } from "@reactive-dot/react"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import { useSignerAndAddress } from "@/hooks/use-signer-and-address"
import { erc20 } from "@/lib/inkathon/deployments"
import { CardSkeleton } from "../layout/skeletons"
import { Button } from "../ui/button-extended"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { Table, TableBody, TableCell, TableRow } from "../ui/table"
import { Binary, FixedSizeArray } from "polkadot-api"

export function ContractCard() {
  // State
  const [queryIsLoading, setQueryIsLoading] = useState(true)
  const [erc20TotalSupply, setErc20TotalSupply] = useState<FixedSizeArray<4, bigint>>()
  const [accountErc20MyBalance, setAccountErc20MyBalance] = useState<FixedSizeArray<4, bigint>>()
  const [accountErc20InputBalance, setAccountErc20InputBalance] = useState<FixedSizeArray<4, bigint>>()
  const [inputAddress, setInputAddress] = useState<string>("0x41dccbd49b26c50d34355ed86ff0fa9e489d1e01") // BOB by default

  // Hooks
  const api = useTypedApi()
  const chain = useChainId()
  const { signer, signerAddress } = useSignerAndAddress()

  /**
   * Query contract data (total supply, my balance, and input address balance)
   */
  const queryContract = useCallback(async () => {
    setQueryIsLoading(true)
    try {
      if (!api || !chain) return

      // Create SDK & contract instance
      const sdk = createReviveSdk(api as ReviveSdkTypedApi, erc20.contract)
      const contract = sdk.getContract(erc20.evmAddresses[chain])

      // Query total supply from storage
      const storageResult = await contract.getStorage().getRoot()
      const total_supply = storageResult.success ? storageResult.value.total_supply : undefined
      setErc20TotalSupply(total_supply)

      // Check if account is mapped before querying balances
      if (!api || !chain || !signer) return
      const isMapped = await sdk.addressIsMapped(signerAddress)
      if (!isMapped) {
        toast.error("Account not mapped. Please map your account first.")
        return
      }

      // Query my balance
      const resultQueryMyBalance = await contract.query("balance_of", { 
        origin: signerAddress, 
        data: {
          owner: ss58ToEthereum(signerAddress)
        }
      })
      const mybalance = resultQueryMyBalance.success ? resultQueryMyBalance.value.response : undefined
      setAccountErc20MyBalance(mybalance)

      // Query input address balance
      const resultQueryInputAddressBalance = await contract.query("balance_of", { 
        origin: signerAddress, 
        data: {
          owner: Binary.fromHex(inputAddress)
        }
      })
      const balance = resultQueryInputAddressBalance.success ? resultQueryInputAddressBalance.value.response : undefined
      setAccountErc20InputBalance(balance)
    } catch (error) {
      console.error(error)
    } finally {
      setQueryIsLoading(false)
    }
  }, [api, chain, inputAddress, signer, signerAddress])

  useEffect(() => {
    queryContract()
  }, [queryContract])

  /**
   * Transfer 1 ERC20 token to the input address
   */
  const transfer = useCallback(async () => {
    if (!api || !chain || !signer || !inputAddress) return

    const sdk = createReviveSdk(api as ReviveSdkTypedApi, erc20.contract)
    const contract = sdk.getContract(erc20.evmAddresses[chain])

    // Check if account is mapped
    const isMapped = await sdk.addressIsMapped(signerAddress)
    if (!isMapped) {
      toast.error("Account not mapped. Please map your account first.")
      return
    }

    // Send transfer transaction
    const tx = contract
      .send("transfer", { 
        origin: signerAddress, 
        data: {
          to: Binary.fromHex(inputAddress),
          value: [1n, 0n, 0n, 0n] // Transfer 1 token
        }
      })
      .signAndSubmit(signer)
      .then((tx) => {
        queryContract() // Refresh data after transfer
        if (!tx.ok) throw new Error("Failed to send transaction", { cause: tx.dispatchError })
      })

    toast.promise(tx, {
      loading: "Transferring token...",
      success: "Token transferred successfully",
      error: "Failed to transfer token",
    })
  }, [signer, api, chain, inputAddress, queryContract])

  if (queryIsLoading) return <CardSkeleton />

  return (
    <Card className="inkathon-card">
      <CardHeader>
        <CardTitle>ERC20 Contract</CardTitle>
      </CardHeader>
      
      <Table className="inkathon-card-table">
        <TableBody>
          <TableRow>
            <TableCell>Total Supply</TableCell>
            <TableCell>{erc20TotalSupply}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>My Balance</TableCell>
            <TableCell>{accountErc20MyBalance}</TableCell>
          </TableRow>
          {inputAddress && (
            <TableRow>
              <TableCell>Balance of {inputAddress}</TableCell>
              <TableCell>{accountErc20InputBalance}</TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell>Contract Address</TableCell>
            <TableCell>{erc20.evmAddresses[chain]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Enter address to transfer 1 ERC20 token"
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setInputAddress(inputAddress)
              }
            }}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
          <Button
            onClick={transfer}
            size="sm"
            variant="default"
          >
            Transfer
          </Button>
        </div>
      </div>
    </Card>
  )
}
```

### Conclusion

- [Inkathon GitHub](https://github.com/scio-labs/inkathon)
- [PAPI ink-sdk](https://papi.how/sdks/ink-sdk)
- [ReactiveDOT](https://reactivedot.dev/)
- [Source code of this tutorial](https://github.com/AlexD10S/inkathon/tree/tutorial)
