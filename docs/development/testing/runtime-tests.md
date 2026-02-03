---
title: Runtime Tests
hide_title: true
slug: /contract-testing/runtime-tests
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Testing Title Picture](/img/title/testing1.svg)

# Runtime Tests

Runtime tests use `#[ink_e2e::test(runtime)]` and compile the Polkadot SDK runtime in-process alongside your tests.

The examples below are based on the [assets-precompile contract](https://github.com/use-ink/ink/blob/master/integration-tests/public/assets-precompile/lib.rs).

## Basic Structure

```rust
#[cfg(all(test, feature = "e2e-tests"))]
mod e2e_tests {
    use super::*;
    use ink_e2e::ContractsBackend;

    type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;

    #[ink_e2e::test(runtime)]
    async fn it_works(mut client: Client) -> E2EResult<()> {
        let contract = client
            .instantiate("my-contract", &alice(), &mut MyContractRef::new(42))
            .submit()
            .await?;

        let call_builder = contract.call_builder::<MyContract>();
        let result = client.call(&alice(), &call_builder.get()).dry_run().await?;
        assert_eq!(result.return_value(), 42);

        Ok(())
    }
}
```

## Running Tests

<Tabs>
  <TabItem value="pop" label="Pop CLI" default>
  ```bash
  pop test --e2e
  ```
  </TabItem>
  <TabItem value="cargo" label="cargo">
  ```bash
  cargo test --features e2e-tests
  ```
  </TabItem>
</Tabs>

## Runtime API

Use `client.runtime()` to interact directly with runtime pallets:

| Function | Description |
|----------|-------------|
| **Assets** | |
| `create(&asset_id, &admin, min_balance)` | Create a new asset |
| `mint_into(&asset_id, &account, amount)` | Mint tokens to an account |
| `balance_of(&asset_id, &account)` | Get token balance |
| `allowance(&asset_id, &owner, &spender)` | Get spending allowance |
| `approve(&asset_id, &owner, &spender, amount)` | Approve spending |
| **Accounts** | |
| `map_account(&account)` | Map account for EVM compatibility |

## Asserting State

```rust
#[ink_e2e::test(runtime)]
async fn balance_of_works(mut client: Client) -> E2EResult<()> {
    let asset_id: u32 = 1;

    client.runtime().create(&asset_id, &alice(), 1u128)?;
    client.runtime().mint_into(&asset_id, &alice(), 1000u128)?;

    let balance = client.runtime().balance_of(&asset_id, &alice());
    assert_eq!(balance, 1000u128);

    Ok(())
}
```

## Testing Success

```rust
use ink_runtime::assert_ok;

#[ink_e2e::test(runtime)]
async fn transfer_works(mut client: Client) -> E2EResult<()> {
    // Setup asset and contract...

    let result = client
        .call(&alice(), &call_builder.transfer(bob_addr, 100.into()))
        .submit()
        .await?;

    assert_ok!(result);

    Ok(())
}
```

## Testing Errors

```rust
use ink_runtime::assert_noop;

#[ink_e2e::test(runtime)]
async fn transfer_fails_insufficient_balance(mut client: Client) -> E2EResult<()> {
    // Setup asset and contract...

    let result = client
        .call(&alice(), &call_builder.transfer(bob_addr, 1_000_000.into()))
        .submit()
        .await?;

    assert_noop!(result, "BalanceLow");

    Ok(())
}
```

## Testing Events

```rust
use ink_runtime::assert_last_event;

#[ink_e2e::test(runtime)]
async fn transfer_emits_event(mut client: Client) -> E2EResult<()> {
    // Setup and transfer...

    assert_last_event!(
        &mut client,
        Transfer {
            from: contract_addr,
            to: bob_addr,
            value: 100.into()
        }
    );

    Ok(())
}
```

## Cargo.toml

```toml
[dev-dependencies]
ink_e2e = { version = "6.0.0-beta.1" }
ink_runtime = { git = "https://github.com/use-ink/ink.git", branch = "6.0.0-beta.1" }

[features]
default = ["std"]
std = ["ink/std"]
e2e-tests = []
```
