---
title: Return value
slug: /contract-debugging/return-value
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Return an error message
Return a specific error message via `ink::return_value(REVERT, err);`
and do a dry-run of the contract call. The result of the dry-run will
then present this data.

```rust
#[ink::message]
fn insert(&self) {
    #[cfg(feature = "ink-debug")]
    ink::return_value(
        ink::env::ReturnFlags::REVERT,
        format!("received {:?}", self.env().transferred_value()).as_bytes();
    );
}
```

:::note
TODO add example code for E2E test + `cargo-contract`
:::

:::note
This output is not printed if you execute a transaction on-chain!
The transaction will just fail with `ExtrinsicFailed`.

It is only printed for RPC calls, so for dry-runs.
In the E2E tests you have to execute `.dry_run()` to get
this information.
:::

