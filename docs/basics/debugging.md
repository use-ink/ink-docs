---
title: Contract Debugging
slug: /basics/contract-debugging
hide_title: true
---

<img src="/img/title/magnifying-glass.svg" className="titlePic" />

# Contract Debugging

There are three ways to debug your ink! contract currently:
* You can write tests using one of the mechanisms described on the
  [Contract Testing](/basics/contract-testing) page.
* You can interact with your contract via a UI or command-line. This is
  described on the [Call Your Contract](/getting-started/calling-your-contract) page.
* You can print debug statements in your contract. Those will appear
  on the Substrate node's `stdout`. This is described on this page.

### How do I print to the terminal console from ink!?

You can use those two macros:
* [`ink::env::debug_println!`](https://docs.rs/ink_env/4.0.0/ink_env/macro.debug_println.html)
* [`ink::env::debug_print!`](https://docs.rs/ink_env/4.0.0/ink_env/macro.debug_print.html)

There are things you could do to enable debug messages on the client console:

1. __Enable the feature `ink-debug` for the `ink_env` crate.__<br/>
   `cargo-contract` does this automatically for you (for versions `>= 0.13.0`), except if
   you compile a contract in `--release` mode.

1. __Set the log level of your node to `runtime::contracts=debug`.__<br/>
   For example, to have only errors and debug output show up for the `substrate-contracts-node`:
  ```
  substrate-contracts-node -lerror,runtime::contracts=debug
  ```

1. __Set the log level of your node to `runtime::contracts::strace` to trace host function calls.
   These function calls logs will also be displayed in the `Debug message` panel of [Contracts UI](https://github.com/paritytech/contracts-ui).
   For example, to view these traces in addition to the logs described above:
  ```
  substrate-contracts-node -lerror,runtime::contracts=debug,runtime::contracts::strace=trace
  ```

## Example

The following code depicts how to print debug statements
from a message or constructor.

```rust
#[ink(constructor)]
fn new() -> Self {
    ink::env::debug_println!("created new instance at {}", Self::env().block_number());
    Self { }
}

#[ink(message)]
fn print(&self) {
   let caller = self.env().caller();
   let message = ink_prelude::format!("got a call from {:?}", caller);
   ink::env::debug_println!(&message);
}
```


:::note
Debug output is not printed for transactions!

It is only printed for RPC calls or off-chain tests.
:::
