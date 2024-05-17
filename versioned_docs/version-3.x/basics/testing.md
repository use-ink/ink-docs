---
title: Contract Testing
slug: /basics/contract-testing
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

See the [flipper example](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).


## Off-chain Testing

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

See the [`examples/erc20`](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs) contract on how to utilize those or [the documentation](https://docs.rs/ink_lang/3.3.1/ink_lang/attr.test.html) for details.

At the moment there are some known limitations to our off-chain environment and we are working
on making it behave as close to the real chain environment as possible.

Defines a unit test that makes use of ink!'s off-chain testing capabilities.

If your unit test does not require the existence of an off-chain environment
it is fine to not use this macro since it bears some overhead with the test.

Note that this macro is not required to run unit tests that require ink!'s
off-chain testing capabilities but merely improves code readability.

## How do you find out if your test requires the off-chain environment?

Normally if the test recursively uses or invokes some contract methods that
call a method defined in `self.env()` or `Self::env()`.

An examples is the following:

```rust
let caller: AccountId = self.env().caller();
```

## Example

```rust
use ink_lang as ink;

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
    fn test2() -> Result<(), ink_env::Error> {
        // test code that returns a Rust Result type
    }
}
```


## On-chain Testing

The easiest way to do on-chain testing is to
[run a local substrate node](../getting-started/running.md),
deploy your contract there and interact with it.

```rust
use ink_lang as ink;

#[ink::contract]
mod greeter {
    #[ink(storage)]
    pub struct Greeter;

    impl Greeter {
        #[ink(constructor)]
        pub fn new() -> Self {
            let caller = Self::env().caller();
            let message = format!("thanks for instantiation {:?}", caller);
            ink_env::debug_println(&message);
            Greeter {}
        }

        #[ink(message, payable)]
        pub fn fund(&mut self) {
            let caller = self.env().caller();
            let value = self.env().transferred_balance();
            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);
            ink_env::debug_println(&message);
        }
    }
}
```

