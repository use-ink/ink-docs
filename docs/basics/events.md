---
title: Events
slug: /basics/events
---

## Event Definition

```rust
#[ink(event)]
pub struct Transferred {
    #[ink(topic)]
    from: Option<AccountId>,
    #[ink(topic)]
    to: Option<AccountId>,
    amount: Balance

}
```

Add the `#[ink(topic)]` attribute tag to each item in your event that you want to have indexed.
A good rule of thumb is to ask yourself if somebody might want to search for this topic.

## Emitting Events in a Constructor

```rust
#[ink(constructor)]
pub fn new(initial_value: Balance) -> Self {
    let caller = Self::env().caller();
    let mut balances = HashMap::new();
    balances.insert(caller, initial_supply);
    Self::env().emit_event(Transferred {
        from: None,
        to: Some(caller),
        amount: initial_supply
    });
    Self { total_supply: initial_supply, balances }
}
```

See the ERC20 example.

## Emitting Events from Messages

```rust
#[ink(message)]
pub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {
    let from = self.env().caller();
    // implementation hidden
    self.env().emit_event(Transferred {
        from: Some(from),
        to: Some(to),
        amount
    });
    Ok(())
}


```

## Anonymous Events

`#[ink(anonymous)]`

Applicable to ink! events.

Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as topic upon emitting. Very similar to anonymous events in Solidity.
