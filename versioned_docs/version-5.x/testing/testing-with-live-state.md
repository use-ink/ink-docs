---
title: Testing with Live State
hide_title: true
slug: /basics/contract-testing/with-live-state
---

<img src="/img/title/testing1.svg" className="titlePic" />

# Test End-to-End with Live Chain State

On this page we explain how to do End-to-End (E2E) testing of ink!
contracts with the state of a particular chain.

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

## Setup Chopsticks
[Chopsticks](https://github.com/AcalaNetwork/chopsticks) is a powerful tool in our ecosystem that will allow us to mirror a running node. We will run chopsticks and have it mirror the substrate-contracts-node that is already running on our machince from the previous step. This will allow us to have a node with live chain state to test our contracts off of.

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

:::note
In the example above chopsticks will be mirroring up until block 1 from the substrate-contracts-node. For real world use case you would want to use a different block number and this is the place where you can configure other variables such as a sudo key. Read the chopsticks docs for more info.
:::

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

:::info
Notice how we use the `CONTRACTS_NODE` environment variable to specify where our chopsticks node is running. This is essential.
:::

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
