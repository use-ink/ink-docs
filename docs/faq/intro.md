---
title: Frequently Asked Questions
slug: /faq
hide_table_of_contents: true
---

### Is it "ink" or "ink!"? What does the "!" stand for?

TODO

### Who is "Squink"?

<div class="squid-container">
    <img src="./img/ink-squid.svg" alt="Squink ‒ the ink! mascot" class="squid" />
    This is Squink
    
    <br/>
    TODO
    
    <br/>
    TODO
</div>

### What's ink!'s relationship to Substrate/Polkadot?

TODO

### How to do cross-contract calling?

See the [Cross-contract calling](/basics/cross-contract-calling) section.

### What is a contract's ABI or Metadata?

TODO

### Can a re-entrancy bug occur in ink! contracts?

TODO

### What are chain-extensions?

TODO

### How can I use ink! with a Substrate chain with a custom chain config?

Please see [the `env_types` argument](https://paritytech.github.io/ink/ink_lang_macro/attr.contract.html#header-arguments)
for the contract macro. It allows you to specify your environment a la 
`#[ink::contract(env_types = MyEnvironment)]`.

### What does the `#![cfg_attr(not(feature = "std"), no_std)]` at the beginning of each contract mean?

TODO

### Overflow Safety?

Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides [integrated checked, wrapped, and saturated math functions](https://doc.rust-lang.org/std/primitive.u32.html).

>Note: There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the Wasm blob. This feature may change or be iterated on in the future.

TODO explain the note above more concretely or provide links.

### What is the difference between memory and storage?

In ink!, memory refers to computer memory, while storage refers to the on-chain storage
used by a contract instance. Memory is temporary and only lasts until the contract
execution is done, while storage is persistent and lasts over many contract executions.
The contract storage is built on top of the runtime storage, and access is considered to be slow.

### How do I print something to the console from the runtime?

TODO

### Is it possible to do `println!("{:?}", foo)` on-chain for debugging purposes?

TODO

### Why is Rust's stdlib not available in ink!?

TODO
