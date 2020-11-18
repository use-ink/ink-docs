---
title: Events
slug: /basics/events
---

Event Definitions

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

Emitting Events 1
```rust
#[ink(constructor)]
pub fn new(initial_supply: Balance) -> Self {
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

Emitting Events 2
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
