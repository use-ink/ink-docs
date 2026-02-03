---
title: Node Tests
hide_title: true
slug: /contract-testing/node-tests
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Testing Title Picture](/img/title/testing1.svg)

# Node Tests

Node tests use `#[ink_e2e::test]` and deploy your contract to an actual Substrate node.

The examples below are based on the [assets-precompile-node contract](https://github.com/use-ink/ink/blob/master/integration-tests/public/assets-precompile-node/lib.rs).

## Basic Structure

```rust
#[cfg(all(test, feature = "e2e-tests"))]
mod e2e_tests {
    use super::*;
    use ink_e2e::{ContractsBackend, alice, bob, assert_ok, assert_noop, assert_last_event};

    type E2EResult<T> = Result<T, Box<dyn std::error::Error>>;

    #[ink_e2e::test]
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
  Requires `ink-node`. See [Setup](../../../getting-started/setup.md#ink-node) for installation.

  ```bash
  export CONTRACTS_NODE=ink-node
  cargo test --features e2e-tests
  ```
  </TabItem>
</Tabs>

## Asserting State

```rust
#[ink_e2e::test]
async fn balance_of_works(mut client: Client) -> E2EResult<()> {
    let asset_id: u32 = 1;

    client.create(&asset_id, &alice(), 1u128).await?;
    client.mint_into(&asset_id, &alice(), &alice(), 1000u128).await?;

    let contract = client
        .instantiate("assets_precompile_node", &alice(), &mut AssetHubPrecompileRef::new(asset_id))
        .submit()
        .await?;

    let call_builder = contract.call_builder::<AssetHubPrecompile>();
    let result = client.call(&alice(), &call_builder.balance_of(alice().address())).dry_run().await?;
    assert_eq!(result.return_value(), U256::from(1000));

    Ok(())
}
```

## Testing Success

```rust
use ink_e2e::assert_ok;

#[ink_e2e::test]
async fn transfer_works(mut client: Client) -> E2EResult<()> {
    // Setup asset and contract...

    let result = client
        .call(&alice(), &call_builder.transfer(bob_addr, 1_000.into()))
        .submit()
        .await?;

    assert_ok!(&result);

    Ok(())
}
```

## Testing Errors

```rust
use ink_e2e::assert_noop;

#[ink_e2e::test]
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
use ink_e2e::assert_last_event;

#[ink_e2e::test]
async fn transfer_emits_event(mut client: Client) -> E2EResult<()> {
    // Setup and transfer...

    let result = client
        .call(&alice(), &call_builder.transfer(bob_addr, 1_000.into()))
        .submit()
        .await?;

    assert_ok!(&result);
    assert_last_event!(
        &result,
        Transfer {
            from: contract.addr,
            to: bob_addr,
            value: 1_000.into()
        }
    );

    Ok(())
}
```

## Cargo.toml

```toml
[dev-dependencies]
ink_e2e = { version = "6.0.0-beta.1" }

[features]
default = ["std"]
std = ["ink/std"]
e2e-tests = []
```
