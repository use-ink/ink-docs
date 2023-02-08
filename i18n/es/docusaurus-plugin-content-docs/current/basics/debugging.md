---
title: Contract Debugging
slug: /basics/contract-debugging
hide_title: true
---

<img src="/img/title/magnifying-glass.svg" className="titlePic" />

# Contract Debugging

:::note
TODO: translate

Please see [this file](https://github.com/paritytech/ink-docs/blob/7a62015b4ea9c020a175404017bb5492beb24328/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/faq/faq.md), some content can be recycled.
:::

There are three ways to debug your ink! contract currently:
* You can write tests using one of the mechanisms described on the
  [Contract Testing](/basics/contract-testing) page.
* You can interact with your contract via a UI or command-line. This is
  described on the [Call Your Contract](/getting-started/calling-your-contract) page.
* You can print debug statements in your contract. Those will appear
  on the Substrate node's `stdout`. This is described on this page.

### How do I print to the terminal console from ink!?

You can use those two macros:
* [`ink::env::debug_println!`](https://docs.rs/ink_env/4.0.0-beta/ink_env/macro.debug_println.html)
* [`ink::env::debug_print!`](https://docs.rs/ink_env/4.0.0-beta/ink_env/macro.debug_print.html)

There are three things you have to do for the debug messages to show up on the console:

1. __Enable the feature `pallet-contracts/unstable-interface` in the target runtime.__<br/>
   For `substrate-contracts-node` this is done by default [here](https://github.com/paritytech/substrate-contracts-node/blob/master/runtime/Cargo.toml).

1. __Enable the feature `ink-debug` for the `ink_env` crate.__<br/>
   `cargo-contract` does this automatically for you (for versions `>= 0.13.0`), except if
   you compile a contract in `--release` mode.

1. __Set the log level of your node to `runtime::contracts=debug`.__<br/>
   For example, to have only errors and debug output show up for the `substrate-contracts-node`:
  ```
  substrate-contracts-node --dev -lerror,runtime::contracts=debug
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
