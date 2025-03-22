---
title: End-to-End (E2E) Tests
hide_title: true
slug: /basics/contract-testing/end-to-end-e2e-testing
---

![Testing1 Title Picture](/img/title/testing1.svg)

# End-to-End (E2E) Tests

E2E testing enables developers to write a test that will not only test the contract in an
isolated manner; instead the contract will be tested _together_ with all components that
will be involved on-chain – so from end to end. This way of testing resembles closely
how the contract will actually behave in production.

As part of the test, the contract will be compiled and deployed to a Substrate node that
is running in the background. ink! offers API functions that enable developers to then
interact with the contract via transactions that they create and submit to the blockchain.

You as a developer can define assertions on the outcome of their transactions, such as checking
for state mutations, transaction failures or incurred gas costs.

Your chain configuration will be tested together with the smart contract. And if your
chain has pallets that are involved with the smart contract execution, those will be
part of the test execution as well.

ink! does not put any requirements on the Substrate node in the background – for example,
you can run a node that contains a snapshot of a live network.

## Example

The following code example illustrates a basic E2E test for the
[flipper example](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).

```rust
#[ink_e2e::test]
async fn default_works<Client: E2EBackend>(mut client: Client) -> E2EResult<()> {
    // When the function is entered, the contract was already
    // built in the background via `cargo contract build`.
    // The `client` object exposes an interface to interact
    // with the Substrate node.
    
    // given
    let mut constructor = FlipperRef::new_default();

    // when
    let contract = client
        .instantiate("flipper", &ink_e2e::bob(), &mut constructor)
        .submit()
        .await
        .expect("instantiate failed");
    let call_builder = contract.call_builder::<Flipper>();

    // then
    let get = call_builder.get();
    let get_res = client.call(&ink_e2e::bob(), &get).dry_run().await?;
    assert!(matches!(get_res.return_value(), false));

    Ok(())
}
```

You can run the above test by going to the `flipper` folder in
[the ink! examples directory](https://github.com/use-ink/ink-examples/tree/main).

Before you can run the test, you have to install a Substrate
node with `pallet-revive`. By default, e2e tests require that you install [`ink-node`](https://github.com/use-ink/ink-node). You do not need to run it in the background since the node is started for each test independently.
To install the latest version:

```sh
cargo install ink-node --git https://github.com/use-ink/ink-node.git
```
If you want to run any other node with `pallet-revive` you need to change `CONTRACTS_NODE` environment variable:

```sh
export CONTRACTS_NODE="YOUR_CONTRACTS_NODE_PATH"
```

And finally execute the following command to start e2e test execution.

```sh
cargo test --features e2e-tests
```
