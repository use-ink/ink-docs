---
title: Tracing API
slug: /contract-debugging/pallet-revive-tracing-api
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Tracing APIs

The [`pallet-revive`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive/src) 
has implemented a tracing API.
This is what the Ethereum-debugging tools use when interacting with `pallet-revive`.

You can utilize the tracing API in your E2E tests:

```rust
/// This test illustrates how to use the `pallet-revive` tracing functionality.
#[ink_e2e::test]
async fn e2e_tracing<Client: E2EBackend>(mut client: Client) -> E2EResult<()> {
    // given
    let mut constructor = DebuggingStrategiesRef::new();
    let contract = client
        .instantiate("debugging_strategies", &ink_e2e::bob(), &mut constructor)
        .submit()
        .await
        .expect("instantiate failed");
    let call_builder = contract.call_builder::<DebuggingStrategies>();

    let call = call_builder.instantiate_and_call(contract.code_hash);
    let call_res = client
        .call(&ink_e2e::alice(), &call)
        .value(1_337_000_000)
        .submit()
        .await?;

    // when
    let trace: ink_e2e::CallTrace = call_res.trace.expect("trace must exist");
    assert_eq!(trace.calls.len(), 2);
    // This is how the object looks:
    // ```
    // CallTrace {
    //     from: 0x9621dde636de098b43efb0fa9b61facfe328f99d,
    //     gas: 1497105168000,
    //     gas_used: 1548337586000,
    //     to: 0xd71ff7085ed0e3e8b6c8e95eb6094f4311ae8e2f,
    //     input: Bytes(
    //         0x829da98747d85e35d0b3ca3c7ceeac09b63ec2754e6a05eb6d2d5b92fb916da126364dd4,
    //     ),
    //     output: Bytes(0x0001),
    //     error: None,
    //     revert_reason: None,
    //     calls: [
    //         CallTrace {
    //             from: 0xd71ff7085ed0e3e8b6c8e95eb6094f4311ae8e2f,
    //             gas: 711404887000,
    //             gas_used: 205987649000,
    //             to: 0xfd8bf44f34a2d2cec42b8ab31ede1bb1bc366e8e,
    //             input: Bytes(0x9bae9d5e),
    //             output: Bytes(0x0000),
    //             error: None,
    //             revert_reason: None,
    //             calls: [],
    //             logs: [],
    //             value: Some(0),
    //             call_type: Call,
    //         },
    //         CallTrace {
    //             from: 0xd71ff7085ed0e3e8b6c8e95eb6094f4311ae8e2f,
    //             gas: 124370129000,
    //             gas_used: 163567881000,
    //             to: 0xfd8bf44f34a2d2cec42b8ab31ede1bb1bc366e8e,
    //             input: Bytes(0x2f865bd9),
    //             output: Bytes(0x0001),
    //             error: None,
    //             revert_reason: None,
    //             calls: [],
    //             logs: [],
    //             value: Some(0),
    //             call_type: Call,
    //         },
    //     ],
    //     logs: [],
    //     value: Some(0),
    //     call_type: Call,
    // }
    // ```

    // then
    #[allow(non_upper_case_globals)]
    const NativeToEthRatio: u128 = 1_000_000; // todo add to environment
    assert_eq!(
        trace.value,
        Some(ink::U256::from(1_337_000_000 * NativeToEthRatio))
    );

    Ok(())
}
```

We've put the above into a complete example. You can see the full source code
[here](https://github.com/use-ink/ink/tree/master/integration-tests/public/debugging-strategies/lib.rs).
