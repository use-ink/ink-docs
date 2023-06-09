---
title: getBalance
hide_title: true
description: Get the balance of an address
---

# getBalance

Get the balance of an address.

## Basic Usage

```ts
import { getBalance } from 'useink/core'
import { planckToDecimalFormatted } from 'useink/uitls'

const address = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'
const bal = await getBalance(apiPromise, address)

// e.g. 89976200000000
console.log(bal.freeBalance.toString())

// e.g. 89.0762 ROC
console.log(planckToDecimalFormatted(bal.freeBalance, apiPromise, { decimals: 4 }))
```

## Returns

```ts
interface DeriveBalancesAccount extends DeriveBalancesAccountData {
    accountId: AccountId;
    accountNonce: Index;
    additional: DeriveBalancesAccountData[];
}
```
