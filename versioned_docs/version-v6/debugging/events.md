---
title: Debug Events
slug: /contract-debugging/debug-events
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Emit debugging events

When building a contract without the `--release` flag,
`cargo-contract` automatically enables the feature `ink/ink-debug`.

You can utilize this to emit debugging events in your contract:

```rust
#[cfg(feature = "ink-debug")]
use ink::prelude::string::String;

#[cfg(feature = "ink-debug")]
#[ink::event]
pub struct DebugEvent {
    message: String,
}

#[ink::message]
fn insert(&mut self) {
    #[cfg(feature = "ink-debug")]
    self.env().emit(DebugEvent {
        message: format!("received {:?}", self.env().transferred_value());
    });
    // …
}
```

This event will be shown when you call a contract. You can also access it in E2E tests.

:::note
TODO add example code
:::
