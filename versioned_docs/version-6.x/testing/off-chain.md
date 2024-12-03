---
title: Off-chain Tests
hide_title: true
slug: /basics/contract-testing/off-chain
---

<img src="/img/title/testing1.svg" className="titlePic" />

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

# Integration Tests

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

See the [`examples/erc20`](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs) contract on how to utilize those or [the documentation](https://docs.rs/ink/5.0.0/ink/attr.test.html) for details.

At the moment there are some known limitations to our off-chain environment,
and we are working on making it behave as close to the real chain environment
as possible.

:::note
One limitation of the off-chain testing framework is that it
currently only supports a `DefaultEnvironment`.

See [here](../basics/environment.md) for an explanation of what an environment is.
:::

## How do you find out if your test requires the off-chain environment?

Normally if the test recursively uses or invokes some contract methods that
call a method defined in `self.env()` or `Self::env()`.

An example is the following:

```rust
let caller: AccountId = self.env().caller();
```

## Example

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
