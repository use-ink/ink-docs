---
title: Contract Testing
slug: /basics/off-chain-testing
---

## Unit Tests

Testing contracts off-chain is done by `cargo test` and users can simply use the standard routines
of creating unit test modules within the ink! project:

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

See the [flipper example](https://github.com/paritytech/ink/blob/master/examples/flipper/src/lib.rs).


## Off-chain Testing

The `#[ink::test]` proc. macro enables more elaborate off-chain testing.

If you annotate a test with this attribute it will be executed in a simulated
environment, similar to as it would be run on-chain.
You then have fine-grained control over how a contract is called; 
for example you can influence the block advancement, the value transferred to it,
by which account it is called, which storage it is run with, etc..

See the [`examples/erc20`](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs#L278-L280) contract on how to utilize those or [the documentation](https://paritytech.github.io/ink/ink_lang/attr.test.html) for details.

At the moment there are some known limitations to our off-chain environment and we are working
on making it behave as close to the real chain environment as possible.

## On-chain Testing

The easiest way to do on-chain testing is to
[run a local substrate node](/getting-started/running-substrate),
deploy your contract there and interact with it.

