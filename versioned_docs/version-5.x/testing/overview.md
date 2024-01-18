---
title: Overview
hide_title: true
slug: /basics/contract-testing/overview
---

<img src="/img/title/testing1.svg" className="titlePic" />

# Overview

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

See the [flipper example](https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs).
