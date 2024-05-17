---
title: Contract Testing
hide_title: true
slug: /basics/contract-testing
---

<img src="/img/title/testing1.svg" className="titlePic" />

# Contract Testing

ink! supports three different stages of testing: unit, integration
and end-to-end tests. On this page we'll explain what the purpose
of each stage is about and how to use it.

<img src="/img/testing.png" />

Generally you can think of those three types of testing as a pyramid
with the top being the most elaborate test. The End-to-End (E2E)
tests at the top will test the lower layers of the pyramid as part
of them.

## Unit Tests

Testing contracts off-chain is done by `cargo test` and users can simply use the standard Rust
routines of creating unit test modules within the ink! project:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn my_test() { ... }
}
```

Test instances of contracts can be created with something like:

```rust
let contract = MyContract::my_constructor(a, b);
```

Messages can simply be called on the returned instance as if `MyContract::my_constructor` returns a
`Self` instance.

See the [flipper example](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).

## Off-chain Tests

For integration tests, the test is annotated with our `#[ink::test]`
attribute instead of `#[test]`. Our attribute denotes that
the test is then executed in a simulated, mocked blockchain environment.
here are functions available to influence how the test environment
is configured (e.g. setting a specified balance of an account to
simulate how a contract would behave when interacting with it).

If you annotate a test with the `#[ink::test]` attribute it
will be executed in a simulated environment, similar to as it
would be run on-chain.
You then have fine-grained control over how a contract is called; 
for example you can influence the block advancement, the value transferred to it,
by which account it is called, which storage it is run with, etc..

See the [`examples/erc20`](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs) contract on how to utilize those or [the documentation](https://docs.rs/ink/4.0.0/ink/attr.test.html) for details.

At the moment there are some known limitations to our off-chain environment,
and we are working on making it behave as close to the real chain environment
as possible.

:::note
One limitation of the off-chain testing framework is that it
currently only supports a `DefaultEnvironment`.

See [here](./environment.md) for an explanation of what an environment is.
:::

### How do you find out if your test requires the off-chain environment?

Normally if the test recursively uses or invokes some contract methods that
call a method defined in `self.env()` or `Self::env()`.

An example is the following:

```rust
let caller: AccountId = self.env().caller();
```

### Example

```rust
#[cfg(test)]
mod tests {
    // Conventional unit test that works with assertions.
    #[ink::test]
    fn test1() {
        // test code comes here as usual
    }

    // Conventional unit test that returns some Result.
    // The test code can make use of operator-`?`.
    #[ink::test]
    fn test2() -> Result<(), ink::env::Error> {
        // test code that returns a Rust Result type
    }
}
```

## End-to-End (E2E) Tests

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

### Example

The following code example illustrates a basic E2E test for the
[flipper example](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).

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
[the ink! examples directory](https://github.com/use-ink/ink-examples/tree/main).

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
