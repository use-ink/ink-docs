---
title: Tracing API
slug: /contract-debugging/pallet-revive-tracing-api
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Tracing APIs

The `pallet-revive` has implemented a tracing API.
This is what the Ethereum-debugging tools use when interacting with `pallet-revive`.

You can utilize the tracing API in our E2E tests:

```rust
#[ink_e2e::test(backend(runtime_only))]
async fn e2e_contract_must_transfer_value_to_sender<Client: E2EBackend>(
    mut client: Client,
) -> E2EResult<()> {
    let call_res = client

        .call(&ink_e2e::eve(), &transfer)
        .submit()
        .await
        .expect("call failed");

    let outgoing_trace = &call_res.trace.unwrap().calls[0];
    assert_eq!(outgoing_trace.value, Some(U256::from(120_000_000)));
    assert_eq!(outgoing_trace.from, contract_addr);
}
```

:::note
todo code example above should be clearer
:::