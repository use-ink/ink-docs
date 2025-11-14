---
title: "Sandboxed E2E"
hide_title: true
slug: /contract-testing/drink
---

![Drink Title Picture](/img/title/drink.svg)

:::note
TODO This page is still WIP for ink! v6.
:::

# DRink!

Apart from the core ink! testing framework, we also provide the [DRink!](https://github.com/use-ink/drink) library.
It offers an intermediate solution between integration and E2E testing.

Intuitively, DRink! maintains a full in-memory blockchain state and allows you to interact with it directly.
This gives a notably robust methodology in contrast to the off-chain engine facilitated by the `ink::test` macro.
Nevertheless, it is essential to note that: 
- Drink! directly depends on Polkadot-SDK pallets (including `pallet-revive`, `pallet-balances` e.t.c), 
  which incurs significant compile-time costs that are not suffered by other testing strategies (including E2E tests).
- The absence of the entire node layer makes the environment less realistic compared to the comprehensive setup employed in the E2E tests.

## Comparison to the other testing strategies

To better assess the tradeoffs between DRink! and other testing methods, 
it is crucial to gain a deeper understanding of the consequences that its unique design entails 
for different use-cases.

1. **In-process execution speed at the cost of compilation time:** 
since DRink! doesn't spawn any node or background process, everything happens locally, within the testing thread.
This means that the execution can be synchronous, with in-process execution performance comparable to 
unit or integration testing, and significantly faster than E2E tests.
However, this comes at the cost of significantly increased compilation time 
compared to all other testing strategies (including E2E tests), 
because Drink! directly depends on (and hences compiles) Polkadot-SDK pallets including `pallet-revive`, 
which notably includes a significant number of [REVM][revm]-only dependencies that aren't relevant 
to ink! contracts, but which still have to be compiled for every contract.
Also, there is no block production or finalization delay for Drink!, 
which can be a noticeable factor in the E2E tests depending on the target node.
However, it's notable that unlike production nodes, development focused nodes like [`ink-node`][ink-node] 
use instant/manual seal to produce blocks immediately and skip consensus related processing, 
thus minimizing their execution overhead for the same use-cases.

2. **Testing multiple contracts:** 
since we are working with a full blockchain state, we can perform any interaction with the contracts, 
which includes working with mutliple contracts at the same time.
Of course, this is the same as in the E2E tests, but it is not possible in either the unit or integration tests.

3. **Working with arbitrary runtimes:** 
similarly to the E2E tests, where we can spawn any node with customized runtime 
(Polkadot's term for the state transition function), 
in DRink! tests we can work with any blockchain runtime we want.

4. **Full control over runtime state:** 
we hold the state of the blockchain and exercise full control over it, so we can easily manipulate it however we want. 
This covers manipulating block number, timestamp, account balances, e.t.c.
Some of these are also possible in the E2E tests, but usually they require more effort or overhead.

5. **Powerful features:** 
thanks to the unique design of DRink!, we can easily take advantage of some powerful, 
not available in other testing strategies, features:
   - **contract mocking:** you can mock any contract or message you want, specifying the default behavior or the exact return value.
   - **enhanced debugging and call tracing:** you can get more insights into the contract execution process, like stack trace, debug buffers and more.

Nevertheless, we'll reemphasize some of DRink!'s drawbacks as well:

1. **Increased compile-times due to Polkadot-SDK dependencies**:
as detailed previously, this is one of the most significant trade-offs of Drink!. 
This significant compile-time comes from Drink!'s direct dependence on Polkadot-SDK pallets, 
including `pallet-revive`, which notably also requires compilation of a significant number 
of [REVM][revm]-only dependencies that aren't relevant to ink! contracts, 
but which still have to be compiled for every contract.

2. **Artificial, isolated environment:** 
this is another major trade-off of DRink!.
It might give a false sense of security, while in the real environment, the contract could behave differently.
The discrepancy can be mitigated by a careful and precise simulation and setup of the environment, but it is still a factor to consider.

3. **No node layer:** 
since we don't spawn any node, we don't have access to the node layer, 
which means that we can't test any node-related functionality, like RPC calls, block production, etc.

4. **No typed contract API:** currently, DRink! works with string-encoded arguments and values, 
which means that we lose the type safety and convenience that was present in the other testing frameworks.
Fortunately, this is going to change soon, as there is an ongoing effort to integrate it with [ink-wrapper] library.

[revm]: https://crates.io/crates/revm
[ink-node]: https://github.com/use-ink/ink-node
[ink-wrapper]: https://github.com/Cardinal-Cryptography/ink-wrapper

## When to use `DRink!`?

DRink! is a good choice for the development phase of your project, 
if your test cases require complex state orchestration, 
or some unique Drink! feature that isn't available in other testing strategies.
For these cases, DRink! offers a versatile, yet highly efficient testing environment.

However, you must not forget that it is not a replacement for the E2E tests, 
which should be run before the deployment to the production network, as well as in your CI/CD pipelines.

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
        let result: bool = session
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

Import `ink_sandbox` in your Cargo.toml:
```toml
ink_sandbox = { git = "https://github.com/use-ink/ink", branch = "6.0.0-beta.1" }
```

And just use corresponding argument in the test macro:
```rust
#[ink_sandbox::test(backend(runtime_only(
    sandbox = sandbox_runtime::ContractCallerSandbox,
    client  = ink_sandbox::SandboxClient
)))]
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
