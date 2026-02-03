---
title: Unit Tests
hide_title: true
slug: /contract-testing/unit-tests
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Testing Title Picture](/img/title/testing1.svg)

# Unit Tests

Unit tests use the `#[ink::test]` attribute and run your contract logic in a simulated environment.

The examples below are based on the [ERC20 contract](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs).

## Basic Structure

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use ink::env::test::*;

    #[ink::test]
    fn new_works() {
        let erc20 = Erc20::new(100.into());
        assert_eq!(erc20.total_supply(), 100.into());
    }
}
```

## Running Tests

<Tabs>
  <TabItem value="pop" label="Pop CLI" default>
  ```bash
  pop test
  ```
  </TabItem>
  <TabItem value="cargo" label="cargo">
  ```bash
  cargo test
  ```
  </TabItem>
</Tabs>

## Test Environment API

All test utilities live in `ink::env::test`:

| Function | Description |
|----------|-------------|
| **Accounts** | |
| `default_accounts()` | Pre-funded test accounts (alice, bob, charlie, dave, eve, ferdie) |
| `set_caller(address)` | Set the caller for subsequent calls |
| `set_callee(address)` | Set the contract's own address |
| **Balances** | |
| `set_contract_balance(address, balance)` | Set a contract's balance |
| `set_value_transferred(value)` | Set the value sent with the call |
| **Block Context** | |
| `set_block_timestamp(timestamp)` | Set the current block timestamp |
| `set_block_number(number)` | Set the current block number |
| `advance_block()` | Advance to the next block |
| **Events** | |
| `recorded_events()` | Get all events emitted during the test |

## Asserting State

```rust
#[ink::test]
fn balance_of_works() {
    let accounts = default_accounts();
    set_caller(accounts.alice);

    let erc20 = Erc20::new(100.into());

    assert_eq!(erc20.balance_of(accounts.alice), 100.into());
    assert_eq!(erc20.balance_of(accounts.bob), 0.into());
}
```

## Testing Success

```rust
#[ink::test]
fn transfer_works() {
    let accounts = default_accounts();
    set_caller(accounts.alice);

    let mut erc20 = Erc20::new(100.into());

    assert_eq!(erc20.transfer(accounts.bob, 10.into()), Ok(()));
    assert_eq!(erc20.balance_of(accounts.bob), 10.into());
}
```

## Testing Errors

```rust
#[ink::test]
fn transfer_fails_insufficient_balance() {
    let accounts = default_accounts();
    set_caller(accounts.bob); // Bob has no tokens

    let mut erc20 = Erc20::new(100.into());

    assert_eq!(
        erc20.transfer(accounts.alice, 10.into()),
        Err(Error::InsufficientBalance)
    );
}
```

## Testing Events

```rust
#[ink::test]
fn transfer_emits_event() {
    let accounts = default_accounts();
    set_caller(accounts.alice);

    let mut erc20 = Erc20::new(100.into());
    erc20.transfer(accounts.bob, 10.into()).unwrap();

    let events = recorded_events();
    assert_eq!(events.len(), 2); // Constructor + transfer

    // Decode and verify
    let decoded = <Transfer as ink::scale::Decode>::decode(&mut &events[1].data[..]).unwrap();
    assert_eq!(decoded.from, Some(accounts.alice));
    assert_eq!(decoded.to, Some(accounts.bob));
    assert_eq!(decoded.value, 10.into());
}
```
