---
title: XCM
slug: /basics/xcm
hide_title: true
---

![Xcm Title Picture](/img/title/xcm.svg)

# Cross-Consensus Messaging (XCM)

XCM allows for cross-chain communication, enabling ink! smart contract to interact with other chains.
You can learn more about XCM in the [Polkadot Wiki](https://wiki.polkadot.network/docs/learn/xcm).

We have an example contract that demonstrates how to use XCM from ink!:
[`contract-xcm`](https://github.com/use-ink/ink-examples/tree/main/contract-xcm).

The documentation of the relevant functions can be found here:

* [`xcm_send`](https://use-ink.github.io/ink/ink_env/fn.xcm_send.html)
* [`xcm_weigh`](https://use-ink.github.io/ink/ink_env/fn.xcm_weigh.html)
* [`xcm_execute`](https://use-ink.github.io/ink/ink_env/fn.xcm_execute.html)

:::note
In ink! v6, you need to enable the `xcm` feature in your contract's `Cargo.toml` to use the XCM functions.

```toml
[dependencies]
ink = {
  version = "6.0.0-beta",
  default-features = false,
  features = ["xcm"]
}
```
:::

## `xcm_execute`

The [`xcm_execute`](https://use-ink.github.io/ink/ink/struct.EnvAccess.html#method.xcm_execute) function executes the XCM locally. It first checks the message to ensure that no barriers or filters will block the execution, and then executes it locally, using the contract's account as the origin.

The following code snippet demonstrates how to use `xcm_execute` to perform a [reserve-backed transfer](https://wiki.polkadot.network/docs/learn/xcm/journey/transfers-reserve#1-initiatereservewithdraw):

```rust
#[ink(message)]
pub fn reserve_transfer(
    &mut self,
    amount: Balance,
    fee: Balance,
) -> Result<(), RuntimeError> {
    // The beneficiary of the transfer.
    // Here, the beneficiary is the caller's account on the relay chain.
    let caller_account_id = self.env().to_account_id(self.env().caller());
    let beneficiary: Location = AccountId32 {
        network: None,
        id: caller_account_id.0,
    }.into();

    // Create an XCM message.
    let message: Xcm<()> = Xcm::builder_unsafe()
        // Withdraw the relay's native token derivative from the 
        // contract's account.
        .withdraw_asset((Parent, amount))

        // The `initiate_reserve_withdraw` instruction takes the 
        // derivative token from the holding register and burns it.
        // It then sends the nested XCM to the reserve in this 
        // example, the relay chain.
        // Upon receiving the XCM, the reserve will withdraw the 
        // asset from our chain's sovereign account, and deposit
        // on the caller's account.
        .initiate_reserve_withdraw(
            All,
            Parent,
            Xcm::builder_unsafe()
                .buy_execution((Here, fee), Unlimited)
                .deposit_asset(All, beneficiary)
                .build(),
        )
        .build();

    let msg = VersionedXcm::V5(message);
    let weight = self.env().xcm_weigh(&msg).expect("`xcm_weigh` failed");
    self.env()
        .xcm_execute(&msg, weight)
        .map_err(|_| RuntimeError::XcmExecuteFailed)
}
```

## `xcm_send`

The [`xcm_send`](https://use-ink.github.io/ink/ink_env/fn.xcm_send.html) function enables sending XCM to be executed by another chain.
Messages sent originate from the contract's account. Consequently, the receiving chain will process the message using the contract's sovereign account as the origin.

The following example demonstrates how to use `xcm_send`. In this example, we send an XCM to the relay chain.
This XCM will execute using the contract's sovereign account as the origin of the call.
It will then transfer, some `value` from this account to the caller's account on the relay chain.

```rust
#[ink(message)]
pub fn send_funds(
    &mut self,
    value: Balance,
    fee: Balance,
) -> Result<(), RuntimeError> {
    // The destination of the XCM message. Assuming we run the contract
    // on a parachain, the parent will be the relay chain.
    let destination: ink::xcm::v5::Location = ink::xcm::v5::Parent.into();

    // The asset to be sent, since we are sending the XCM to the relay chain,
    // this represents `value` amount of the relay chain's native asset.
    let asset: Asset = (Here, value).into();

    // The beneficiary of the asset.
    // Here, the beneficiary is the caller's account on the relay chain.
    let caller_account_id = self.env().to_account_id(self.env().caller());
    let beneficiary = AccountId32 {
        network: None,
        id: caller_account_id.0,
    };

    // Create an XCM message
    let message: Xcm<()> = Xcm::builder()
        // Withdraw the asset from the origin (the sovereign account of the
        // contract on the relay chain)
        .withdraw_asset(asset.clone())

        // Buy execution to pay the fee on the relay chain
        .buy_execution((Here, fee), WeightLimit::Unlimited)

        // Deposit the asset to the caller's account on the relay chain
        .deposit_asset(asset, beneficiary)
        .build();

    // Send the constructed XCM message to the relay chain.
    self.env()
        .xcm_send(
            &VersionedLocation::V5(destination),
            &VersionedXcm::V5(message),
        )
        .map_err(|_| RuntimeError::XcmSendFailed)
}
```
