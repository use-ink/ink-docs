---
title: Contract Testing
hide_title: true
slug: /basics/contract-testing
---

<img src="/img/title/testing1.svg" className="titlePic" />

# Contract Testing

ink! supports different stages of testing for different purposes.
On this page we'll explain what each stage is about and how to use it.

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

See the [flipper example](https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs).


## Off-chain Testing

:::note
TODO: mention that only supports `DefaultEnvironment`
TODO: For integration tests, the test is annotated with our `#[ink::test]` attribute instead. This attribute denotes that the test is then executed in a simulated, mocked blockchain environment. There are functions available to influence how the test environment is configured (e.g. setting a specified balance of an account to simulate how a contract would behave when interacting with it).
:::

ink! smart contracts can compile in several different modes.
There are two main compilation models using either
- on-chain mode: `no_std` + WebAssembly as target
- off-chain mode: `std`

We generally use the on-chain mode for actual smart contract deployment
whereas we use the off-chain mode for smart contract testing using the
off-chain environment provided by the `ink_env` crate.


The `#[ink::test]` proc. macro enables more elaborate off-chain testing.

If you annotate a test with this attribute it will be executed in a simulated
environment, similar to as it would be run on-chain.
You then have fine-grained control over how a contract is called; 
for example you can influence the block advancement, the value transferred to it,
by which account it is called, which storage it is run with, etc..

See the [`examples/erc20`](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs) contract on how to utilize those or [the documentation](https://docs.rs/ink_lang/4.0.0-beta/ink_lang/attr.test.html) for details.

At the moment there are some known limitations to our off-chain environment and we are working
on making it behave as close to the real chain environment as possible.

Defines a unit test that makes use of ink!'s off-chain testing capabilities.

If your unit test does not require the existence of an off-chain environment
it is fine to not use this macro since it bears some overhead with the test.

Note that this macro is not required to run unit tests that require ink!'s
off-chain testing capabilities but merely improves code readability.

### How do you find out if your test requires the off-chain environment?

Normally if the test recursively uses or invokes some contract methods that
call a method defined in `self.env()` or `Self::env()`.

An examples is the following:

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

## End-to-End (E2E) Testing

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

```rust
#[ink_e2e::test]
async fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
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