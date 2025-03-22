---
title: Testing with Chain Snapshots
hide_title: true
slug: /basics/contract-testing/chain-snapshot
---

![Blockchain Fork Title Picture](/img/title/blockchain-fork.svg)

# Test your Contract with a Chain Snapshot

On this page we explain how to test ink! contracts with the
fork of an existing chain. We'll take a snapshot of an existing
chain for this purpose. The snapshot contains the chains full state,
but can be modified locally without affecting the live chain. 
We'll use the [Chopsticks](https://github.com/AcalaNetwork/chopsticks)
tool for this purpose.

This is a powerful workflow that you can use to e.g.

* Test a contract upgrade or migration locally before running it in production.
* Debug the behavior of an on-chain contract with on-chain state locally.
* Get detailed debug info and replay blocks as you want.
* …and much more!

In the first section of this page we explain the general concept, using a local
`ink-node` that will play the role of our "live chain".
The `ink-node` is just for exemplary purposes, you can also 
apply the exact same workflow to production chains like Astar, Aleph Zero,
Pendulum and others.

## General Concept

First you need a node that has produced some blocks with state. We'll
use `ink-node` for this purpose.
[See here](../getting-started/running.md) for how to run it.

You should get output similar to:

```
$ ink-node
2023-09-26 07:58:28.885  INFO main sc_cli::runner: Substrate Contracts Node    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: ✌️  version 0.30.0-124c159ba94    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: ❤️  by Parity Technologies <admin@parity.io>, 2021-2023    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 📋 Chain specification: Development    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 🏷  Node name: chilly-desire-6458    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 👤 Role: AUTHORITY    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 💾 Database: ParityDb at /tmp/substrateoKCAts/chains/dev/paritydb/full    
2023-09-26 07:58:38.723  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]  
```

Note that the node is running on port 9944.

Next, we'll create some state and produce a bunch of blocks. You can do this by deploying [our
`flipper` example](https://github.com/use-ink/ink-examples/tree/main/flipper):

```
cd ink-examples/flipper/
cargo contract build --release
cargo contract instantiate --suri //Alice --args true -x
```

You can check that the contract exists by querying its state via `cargo-contract`:

```
$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s
+-------+----------+--------+-------------------------+
| Index | Root Key | Parent | Value                   |
+=====================================================+
| 0     | 00000000 | root   | Flipper { value: true } |
+-------+----------+--------+-------------------------+
```

### Setup Chopsticks

We will now set up [Chopsticks](https://github.com/AcalaNetwork/chopsticks),
a powerful tool in our ecosystem that allows us to create a parallel reality
of an existing network.

We will run it and have it mirror the `ink-node` that is already running
on our machine from the previous step.

The following schema illustrates the setup that we will create:

<img className="schema2" width title="Test your smart contract on a Chopsticks branch" src="/img/test-smart-contract-with-chain-snapshot.svg" alt="Chain Snapshot" />

Clone chopsticks:

```
git clone https://github.com/AcalaNetwork/chopsticks
```

Modify the `dev.yml` config file in the cloned repository (or create one from scratch) :

```
endpoint: ws://127.0.0.1:9944
mock-signature-host: true
block: 1
db: ./db.sqlite
```

:::info
In the example above chopsticks will be mirroring up until block 1 from the
`ink-node`.

For production chains (like Aleph Zero or Astar) you would want to use a different
block number and different endpoint. The Chopsticks repository already contains a
wide number of configurations for ink! production chains (see [here](https://github.com/AcalaNetwork/chopsticks/tree/master/configs)).
If you don't find a fitting configuration there, see the section
"[Application to Production Chains](#application-to-production-chains)".
:::

You can either run chopsticks locally by following the instructions
[here](https://github.com/AcalaNetwork/chopsticks#install), or
you can run it using npx:

```
npx @acala-network/chopsticks@latest --config=configs/dev.yml
```

You should get output similar to:

```
npx @acala-network/chopsticks@latest --config=configs/dev.yml
[08:22:31.231] INFO (rpc/3037748): Development RPC listening on port 8000
```

The Chopsticks node is running on port 8000.
If you now execute the `cargo-contract` storage command against this node, you'll see
that the `flipper` contract exists there as well:

```
$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:8000
+-------+----------+--------+-------------------------+
| Index | Root Key | Parent | Value                   |
+=====================================================+
| 0     | 00000000 | root   | Flipper { value: true } |
+-------+----------+--------+-------------------------+
```

Chopsticks has branched off from the live chain.
You can now submit transactions to the Chopsticks node on port 8000,
without affecting the node/chain on port 9944.

### Run ink! E2E Tests

Recap: We have our "live" `ink-node` running on port 9944
and our test node with the branched state running on port 8000.

Next we would like to run some tests against the contract on our forked chain. 
Our `flipper/lib.rs` contains a test that illustrates how to do this.
The test reads an environment variable `CONTRACT_ADDR_HEX` that refers to
the `flipper` on-chain address.

Here's the code for it:

```rust
#[ink_e2e::test]
#[ignore]
async fn e2e_test_deployed_contract<Client: E2EBackend>(
    mut client: Client,
) -> E2EResult<()> {
    // given
    let addr = std::env::var("CONTRACT_ADDR_HEX")
        .unwrap()
        .replace("0x", "");
    let acc_id = hex::decode(addr).unwrap();
    let acc_id = AccountId::try_from(&acc_id[..]).unwrap();

    // when
    // Invoke `Flipper::flip()` from Bob's account
    let call_builder = ink_e2e::create_call_builder::<Flipper>(acc_id);
    let flip = call_builder.flip();
    let _flip_res = client.call(&ink_e2e::bob(), &flip).submit().await?;
    
    // then
    let get = call_builder.get();
    let get_res = client.call(&ink_e2e::bob(), &get).dry_run().await?;
    assert!(matches!(get_res.return_value(), false));
    Ok(())
}
```

The test is marked as `#[ignore]`, as it requires the pre-conditions that we went through
above to succeed.

:::info
You can convert SS58 addresses to hex using [the `subkey` tool](https://crates.io/crates/subkey):

```
subkey inspect <YOUR-SS58>
```
:::

Here's the process to execute the above test:

```
# Address of your on-chain contract
export CONTRACT_HEX=0x2c75f0aa09dbfbfd49e6286a0f2edd3b4913f04a58b13391c79e96782f5713e3

# This env variable needs to be set to reference the Chopsticks node.
# If this env variable is not set, `ink_e2e` will spawn a new node
# process (typically of `ink-node`) for each test.
export CONTRACTS_NODE_URL=ws://127.0.0.1:8000

cargo test --features e2e-tests e2e_test_deployed_contract -- --ignored
```

You will get output similar to the following:

```
running 1 tests
test flipper::e2e_tests::e2e_test_deployed_contract ... ok
```

If you query the contract storage on our Chopsticks fork, you'll see that the E2E test
flipped the boolean:

```
$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:8000
+-------+----------+--------+-------------------------+
| Index | Root Key | Parent | Value                   |
+=====================================================+
| 0     | 00000000 | root   | Flipper { value: false } |
+-------+----------+--------+-------------------------+
```

On the "original" `ink-node` chain the boolean will be untouched.

```
$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:9944
+-------+----------+--------+-------------------------+
| Index | Root Key | Parent | Value                   |
+=====================================================+
| 0     | 00000000 | root   | Flipper { value: true } |
+-------+----------+--------+-------------------------+
```

Success! We just ran an ink! end-to-end test against the snapshot of a chain!

## Application to Production Chains

You can apply the workflow explained above to ink! production chains.

You would want to use a different block number and different endpoint.
The Chopsticks repository already contains a wide number of configurations for
ink! production chains (see [here](https://github.com/AcalaNetwork/chopsticks/tree/master/configs)).

If a pre-made config for chain you want to fork from is not available, you can just
modify the `dev.yml`. You can use [polkadot-js/apps](https://polkadot.js.org/apps) to
the URL of an endpoint to use:

<img src="/img/polkadot-js-rpc-endpoint.png"  />
