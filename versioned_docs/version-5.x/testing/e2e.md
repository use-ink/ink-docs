---
title: Overview
hide_title: true
slug: /basics/contract-testing/end-to-end-e2e-testing
---

<img src="/img/title/testing1.svg" className="titlePic" />

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
[flipper example](https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs).

```rust
#[ink_e2e::test]
async fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
    // When the function is entered, the contract was already
    // built in the background via `cargo contract build`.
    // The `client` object exposes an interface to interact
    // with the Substrate node.
    
    // given
    let constructor = FlipperRef::new_default();

    // when
    let contract_acc_id = client
        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)
        .await
        .expect("instantiate failed")
        .account_id;

    // then
    let get = build_message::<FlipperRef>(contract_acc_id.clone())
        .call(|flipper| flipper.get());
    let get_res = client
        .call(&ink_e2e::bob(), get, 0, None)
        .await
        .expect("get failed");
    assert!(matches!(get_res.return_value(), false));

    Ok(())
}
```

You can run the above test by going to the `flipper` folder in
[the ink! examples directory](https://github.com/paritytech/ink-examples/tree/main).

Before you can run the test, you have to install a Substrate
node with `pallet-contracts`. By default e2e tests require that you install [`substrate-contracts-node`](https://github.com/paritytech/substrate-contracts-node). You do not need to run it in the background since the node is started for each test independently.
To install the latest version:

```sh
cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git
```
If you want to run any other node with `pallet-contracts` you need to change `CONTRACTS_NODE` environment variable:

```sh
export CONTRACTS_NODE="YOUR_CONTRACTS_NODE_PATH"
```

And finally execute the following command to start e2e test execution.

```sh
cargo test --features e2e-tests
```

# End-to-End (E2E) testing of ink! contracts off of live chain state

## Run a node
In a real world case you will already have a live node. This will be the node you want to test you contracts off of. For example purposes we will be running a `substrate-contracts-node`.

Clone substrate-contracts-node:
```
git clone https://github.com/paritytech/substrate-contracts-node
```

Compile and run it:
```
cargo build
./target/debug/substrate-contracts-node
```

You should get output similar to:
```
 % ./target/debug/substrate-contracts-node
2023-09-26 07:58:28.885  INFO main sc_cli::runner: Substrate Contracts Node    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: ✌️  version 0.30.0-124c159ba94    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: ❤️  by Parity Technologies <admin@parity.io>, 2021-2023    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 📋 Chain specification: Development    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 🏷  Node name: chilly-desire-6458    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 👤 Role: AUTHORITY    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 💾 Database: ParityDb at /tmp/substrateoKCAts/chains/dev/paritydb/full    
2023-09-26 07:58:38.723  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]  
```

Next, produce one or two blocks by running `system.remark()` extrinsics. You can use the PolkadotJs Apps to do this. This is so we have 1 or 2 blocks produced on the node for the next step.

## Setup [chopsticks](https://github.com/AcalaNetwork/chopsticks)
Chopsticks is a powerful tool in our ecosystem that will allow us to mirror a running node. We will run chopsticks and have it mirror the substrate-contracts-node that is already running on our machince from the previous step. This will allow us to have a node with live chain state to test our contracts off of.

Clone chopsticks:
```
git clone https://github.com/AcalaNetwork/chopsticks
```

Modify the dev.yml config file in the repo or create one from scratch that you can reference later:
```
endpoint: ws://127.0.0.1:9944
mock-signature-host: true
block: 1
db: ./db.sqlite
```
> Note: In the example above chopsticks will be mirroring up until block 1 from the substrate-contracts-node. For real world use case you would want to use a different block number and this is the place where you can configure other variables such as a sudo key. Read the chopsticks docs for more info.

You can either run chopsticks locally by following the instructions here:
- https://github.com/AcalaNetwork/chopsticks#install

Or you can run chopsticks using npx:
```
npx @acala-network/chopsticks@latest --config=configs/dev.yml
```

You should get output similar to:
```
npx @acala-network/chopsticks@latest --config=configs/dev.yml
[08:22:31.231] INFO (rpc/3037748): Development RPC listening on port 8000
```

Recap: We have our live node running on port 9944 and our test node running on port 8000.

## Run ink! e2e tests

Next we would like to run the integration tests for our ink! smart contract. For example purposes we will use the flipper ink! integration tests which reside in the ink! repo.

Let's get started, clone ink!:
```
git clone https://github.com/paritytech/ink
```

`cd` into `integration-tests/flipper`:
```
cd integration-tests/flipper
```

Let's now run our flipper integration tests against the chopsticks node (which has the live chain state):
```
CONTRACTS_NODE=/home/bruno/src/substrate-contracts-node/target/debug/substrate-contracts-node WS_PORT=8000 cargo test --features e2e-tests
```
> Notice how we use the `CONTRACTS_NODE` environment variable to specify where our chopsticks node is running. This is essential.

You will get output similar to the following:
```
running 4 tests
test flipper::tests::it_works ... ok
test flipper::tests::default_works ... ok
test flipper::e2e_tests::default_works ... ok
test flipper::e2e_tests::it_works ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.29s

   Doc-tests flipper

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

Success! We just ran ink! integration tests against live chain state!
