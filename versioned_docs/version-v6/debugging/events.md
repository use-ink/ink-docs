---
title: Debug Events
slug: /contract-debugging/debug-events
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Emit debugging events

The idea here is to add a feature to your contract's `Cargo.toml`. You can 
name it e.g. `debug`.
In your contract you would then emit debug information if the flag is set.

This allows for emitting debug events in the contract, that can be checked 
for in your tests.

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod debugging_strategies {
    #[cfg(feature = "debug")]
    use ink::prelude::{
        borrow::ToOwned,
        format,
        string::String,
    };

    #[ink::event]
    #[cfg(feature = "debug")]
    pub struct DebugEvent {
        message: String,
    }

    #[ink(storage)]
    #[derive(Default)]
    pub struct DebuggingStrategies {}

    impl DebuggingStrategies {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message)]
        pub fn get(&self) {
            #[cfg(feature = "debug")]
            self.env().emit_event(DebugEvent {
                message: format!("received {:?}", self.env().transferred_value())
                    .to_owned(),
            });
            // …
        }
    }
}
```

This event will be shown when you call a contract. You can also access it in E2E tests:

```rust
#[ink_e2e::test(features = ["debug"])]
async fn e2e_debugging_event_emitted<Client: E2EBackend>(
    mut client: Client,
) -> E2EResult<()> {
    // given
    // create contract
    /* --snip-- */

    // when
    // call contract
    /* --snip-- */

    // then
    // the contract wil have emitted an event
    let contract_events = call_res.contract_emitted_events()?;
    assert_eq!(1, contract_events.len());
    let contract_event = &contract_events[0];
    let debug_event: DebugEvent =
        ink::scale::Decode::decode(&mut &contract_event.event.data[..])
            .expect("encountered invalid contract event data buffer");
    assert_eq!(debug_event.message, "received 0");

    Ok(())
}
```

We've put the above into a complete example. You can see the full source code
[here](https://github.com/use-ink/ink/tree/master/integration-tests/public/debugging-strategies/lib.rs).
