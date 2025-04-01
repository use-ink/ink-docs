---
title: "E2E: Sandbox"
hide_title: true
slug: /contract-testing/drink
---

![Drink Title Picture](/img/title/drink.svg)

:::note
TODO This page has not yet been reviewed for ink! v6.
:::

# DRink!

Apart from the core ink! testing framework, we also provide the [DRink!](https://github.com/use-ink/drink) library.
It offers an intermediate solution between integration and E2E testing.

Intuitively, DRink! maintains a full in-memory blockchain state and allows you to interact with it directly.
This gives a notably robust methodology in contrast to the off-chain engine facilitated by the `ink::test` macro.
Nevertheless, it is essential to note that the absence of the entire node layer makes the environment less realistic compared to the comprehensive setup employed in the end-to-end tests.

## Comparison to the other testing strategies

To better assess when DRink! performs better than other testing methods, it is crucial to gain a deeper understanding of the consequences of its unique design and the trade-offs it entails.

1. **Speed:** since DRink! doesn't spawn any node or background process, everything happens locally, within the testing thread.
This means that the execution can be synchronous and significantly faster than the E2E tests.
Therefore, its performance should be comparable to the unit or integration testing.
Also, there is no block production or finalization delay, which is a noticeable factor in the E2E tests.
Thanks to that, we can launch long-running simulations in a reasonable time.

2. **Testing multiple contracts:** since we are working with a full blockchain state, we can perform any interaction with the contracts, which includes working with mutliple contracts at the same time.
Of course, this is the same as in the E2E tests, but it is not possible in either the unit or integration tests.

3. **Working with arbitrary runtimes:** similarly to the E2E tests, where we can spawn any node with customized runtime (Polkadot's term for the state transition function), in DRink! tests we can work with any blockchain runtime we want.

4. **Full control over runtime state:** we hold the state of the blockchain and exercise full control over it, so we can easily manipulate it however we want.
This covers manipulating block number, timestamp, account balances, etc.
Some of these are also possible in the E2E tests, but usually they require more effort or overhead.

5. **Powerful features:** thanks to the unique design of DRink!, we can easily take advantage of some powerful, not available in other testing strategies, features:

   - **contract mocking:** you can mock any contract or message you want, specifying the default behavior or the exact return value.
   - **enhanced debugging and call tracing:** you can get more insights into the contract execution process, like stack trace, debug buffers and more.

Nevertheless, there are some drawbacks of DRink! as well:

1. **No node layer:** since we don't spawn any node, we don't have access to the node layer, which means that we can't test any node-related functionality, like RPC calls, block production, etc.

2. **Artificial, isolated environment:** this is the main trade-off of DRink!.
It might give a false sense of security, while in the real environment, the contract could behave differently.
The discrepancy can be mitigated by a careful and precise simulation and setup of the environment, but it is still a factor to consider.

3. **No typed contract API:** currently, DRink! works with string-encoded arguments and values, which means that we lose the type safety and convenience that was present in the other testing frameworks.
Fortunately, this is going to change soon, as there is an ongoing effort to integrate it with [ink-wrapper](https://github.com/Cardinal-Cryptography/ink-wrapper) library.

## When to use `DRink!`?

Usually, DRink! is a good choice for the development phase of your project.
When the iteration speed is crucial, and you want to quickly test your contracts, DRink! will offer a versatile, yet highly efficient testing environment.
However, you must not forget that it is not a replacement for the E2E tests, which should be run before the deployment to the production network, as well as in your CI/CD pipelines.

DRink! also comes in handy when you need to:
 - mock some parts of your contract suite
 - debug the execution process
 - launch long-running simulations, that would normally take a lot of time when relying on a real block-time

## How to use DRink!?

There are three ways to use DRink!:

### Directly as a library

This way you gain access to full DRink! power in your test suites.

`drink` library is continuously published to [crates.io](https://crates.io/crates/drink), so you can use it in your project with either `cargo add drink` or by adding the following line to your `Cargo.toml`:
```toml
drink = { version = "0.8" }
```

Then, you can write your tests like this:
```rust
#[cfg(test)]
mod tests {
    /// This will take care of building all contract dependencies in the compilation phase and gather all contract 
    /// bundles (metadata and the compiled code) into a single registry.
    #[drink::contract_bundle_provider]
    enum BundleProvider {}

   /// Within `drink::test` macro, you are provided with a `session` object, which is a wrapper around the
   /// blockchain state. You can use it to deploy contracts, call their methods, and more.
    #[drink::test]
    fn deploy_and_call_a_contract(mut session: Session) -> Result<(), Box<dyn Error>> {
        let result: bool = sesison
            .deploy_bundle_and(BundleProvider::local(), "new", &["true"], NO_SALT, NO_ENDOWMENT)?
            .call_and("flip", NO_ARGS, NO_ENDOWMENT)?
            .call_and("flip", NO_ARGS, NO_ENDOWMENT)?
            .call_and("flip", NO_ARGS, NO_ENDOWMENT)?
            .call("get", NO_ARGS, NO_ENDOWMENT)??;
        assert_eq!(result, false);
    }
}
```

You can check some helpful and verbose examples [here](https://github.com/inkdevhub/drink/tree/main/examples), including the [**quick start guide**](https://github.com/inkdevhub/drink/tree/main/examples/quick-start-with-drink).

### As an alternative backend to ink!'s E2E testing framework

DRink! is already integrated with the ink! framework and can be used as a drop-in replacement for the standard E2E testing environment.
Just use corresponding argument in the test macro:
```rust
#[ink_e2e::test(backend(runtime_only))]
```
to your test function and you have just switched from E2E testcase to DRink!-based one, that doesn't use any running node in the background!

For a full example check out [ink! repository](https://github.com/use-ink/ink-examples/tree/main/e2e-runtime-only-backend).

### With a command line tool

We provide a CLI which puts DRink! behind friendly TUI.
For more details, consult [its README](https://github.com/inkdevhub/drink/blob/main/drink-cli/README.md).

Similarly to `drink` library, `drink-cli` is published to [crates.io](https://crates.io/crates/drink-cli) as well.
You can install it with:
```shell
cargo install drink-cli
```
