---
title: Contract Testing
slug: /basics/off-chain-testing
---

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


### Off-chain Testing

The `#[ink::test]` proc. macro enables off-chain testing. See e.g. the [`examples/erc20`](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs#L278-L280) contract on how to utilize those or [the documentation](https://paritytech.github.io/ink/ink_lang/attr.test.html) for details.

TODO
