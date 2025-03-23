---
title: XCM
slug: /basics/xcm
hide_title: true
---

![Xcm Title Picture](/img/title/xcm.svg)

# Cross-Consensus Messaging (XCM)

:::caution
This page has not yet been updated to ink! v6.

TODO 
:::

XCM allows for cross-chain communications, enabling ink! smart contract to interact with other chains.
You can learn more about XCM in the [Polkadot Wiki](https://wiki.polkadot.network/docs/learn/xcm).

As of ink! v5.1.0, two new functions, [`xcm_execute`](https://docs.rs/ink_env/5.1.0/ink_env/fn.xcm_execute.html) and [`xcm_send`](https://docs.rs/ink_env/5.1.0/ink_env/fn.xcm_send.html), have been introduced.
These functions enable sending and executing XCM from within ink! contracts.

:::info
In versions of ink! prior to v5.1.0, the [call_runtime](https://docs.rs/ink/5.1.0/ink/struct.EnvAccess.html#method.call_runtime) host function or a custom chain extension can be used to send or execute an XCM from ink! contracts.
:::

## `xcm_execute`

The [`xcm_execute`](https://docs.rs/ink/latest/ink/struct.EnvAccess.html#method.xcm_execute) function executes the XCM locally. It first checks the message to ensure that no barriers or filters will block the execution, and then executes it locally, using the contract's account as the origin.

The following code snippet demonstrates how to use `xcm_execute` to perform a [reserve-backed transfer](https://wiki.polkadot.network/docs/learn/xcm/journey/transfers-reserve#1-initiatereservewithdraw):

```rust
#[ink(message)]
pub fn reserve_transfer(&mut self, value: Balance) -> Result<(), RuntimeError> {
    // The beneficiary of the transfer.
    // Here, the beneficiary is the caller's account on the relay chain.
    let beneficiary: Location = AccountId32 {
        network: None,
        id: *self.env().caller().as_ref(),
    }.into();

    // Create an XCM message.
    let message: Xcm<()> = Xcm::builder_unsafe()

     // Withdraw the relay's native token derivative from the contract's account.
     .withdraw_asset((Parent, amount))

    // The initiate_reserve_withdraw instruction takes the derivative token from the holding register and burns it.
    // It then sends the nested XCM to the reserve in this example, the relay chain.
    // Upon receiving the XCM, the reserve will withdraw the asset from our chain's sovereign account, and deposit on the caller's account.
    .initiate_reserve_withdraw(
        All,
        Parent,
        Xcm::builder_unsafe()
            .buy_execution((Here, fee), Unlimited)
            .deposit_asset(All, beneficiary)
            .build(),
    )
    .build();

    self.env().xcm_execute(&VersionedXcm::V4(message))?;
    Ok(())
}
```

## `xcm_send`

The [`xcm_send`](https://docs.rs/ink_env/5.1.0/ink_env/fn.xcm_send.html) function enables sending XCM to be executed by another chain.
Messages sent originate from the contract's account. Consequently, the receiving chain will process the message using the contract's sovereign account as the origin.

The following example demonstrates how to use `xcm_send`. In this example, we send an XCM to the relay chain.
This XCM will execute using the contract's sovereign account as the origin of the call.
It will then transfer, some `value` from this account to the caller's account.

```rust
#[ink(message)]
pub fn send_funds(&mut self, value: Balance, fee: Balance) -> Result<(), RuntimeError> {
    // The destination of the XCM message. Assuming we run the contract on a parachain, the parent will be the relay chain.
    let destination: Location = Parent.into();

    // the asset to be sent, since we are sending the XCM to the relay chain,
    // this represents `value` amount of the relay chain's native asset.
    let assets: Asset = (Here, value).into();

    // The beneficiary of the asset.
    // Here, the beneficiary is the caller's account on the relay chain.
    let beneficiary: Location = AccountId32 {
        network: None,
        id: *self.env().caller().as_ref(),
    }.into();

    // Create an XCM message
    let message: Xcm<()> = Xcm::builder()

        // Withdraw the asset from the origin (the sovereign account of the contract on the relay chain)
        .withdraw_asset(assets.clone().into())

        // Buy execution to pay the fee on the relay chain
        .buy_execution((Here, fee).into(), WeightLimit::Unlimited)

        // Deposit the asset to the caller's account on the relay chain
        .deposit_asset(assets.into(), beneficiary)
        .build();

    // Send the constructed XCM message to the relay chain, using the xcm_send host function.
    self.env().xcm_send(
        &VersionedLocation::V4(destination),
        &VersionedXcm::V4(message),
    )?;

    Ok(())
}
```
