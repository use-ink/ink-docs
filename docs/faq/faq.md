---
title: Frequently Asked Questions
slug: /faq
hide_table_of_contents: true
---

### Is it "ink" or "ink!"? What does the "!" stand for?

The DSL (domain specific language) is spelled "ink!" with small "i" and an exclamation mark at the end.
The main purpose behind this spelling is to have as many dots in its name as possible.

### Who is "Squink"?

<div class="squid-container">
<img src="./img/ink-squid.svg" alt="Squink ‒ the ink! mascot" class="squid" />
This little cute purle squid is Squink.

Squink is the mascot of ink! and guides new users and adventurers through our presentations
workshops and tutorials. It also has a romance with Rust's mascot, Ferris.

Generally it is very friendly and open to learning new Rustaceans but be aware to never upset
it by taking away dots from the word ink! by spelling it incorrectly!
It really is into dots. Stories tell that it demanded the spelling of ink! with as many dots as possible.
</div>

### What's ink!'s relationship to Substrate/Polkadot?

- Substrate is a modular framework to build decentralized applications on top of blockchain technology.
- Polkadot is a layer-0 blockchain built using Substrate that allows to orchestrate an entire
fleet of other blockchains to join forces and communicate with each other.
- Blockchains built with Substrate can include the so-called `contracts-pallet` module in order to
allow instantiating and executing smart contracts.

ink! was built to allow users to write smart contracts in Rust targeting blockchains built by
Substrate that have the aforementioned `contracts-pallet` included.

While ink! is currently the most advanced smart contract language targeting Substrate blockchains it is
not the only possible choice for users. There is also a Solidity to Wasm compiler called Solang that also
allows to target Substrate chains and there are other languages in plan and discovery phase for the same
purpose.

On the Substrate side the same is true for the `contracts-pallet`. It is just a module that defines
the basic set of features required for executing smart contracts on the blockchain that includes it.
However, it is not necessarily the only solution to do exactly that. There is also the `evm-pallet`
to run smart contracts targeting the EVM as well as the experimental `actors-pallet` that allows to
execute smart contracts written in the actor style programming model.
Over time the Substrate community might come up with yet other pallets for smart contracts execution. 

### How to call other smart contracts on the same blockchain?

See the [Cross-contract calling](/basics/cross-contract-calling) section.

### How to call other smart contracts on another parachain?

This feature has not yet been implemented by the Substrate side.

### What is a contract's ABI or Metadata?

In ink! a smart contract's metadata is retrieved by using the `cargo-contract` CLI tool and
invoking `cargo contract build` which outputs a `.contract` file that includes both the compiled
`.wasm` of the ink! smart contract as well as the so-called metadata information of the same
smart contract.
The metadata is especially important for third party tools such as Polkadot JS Apps or the Canvas UI
and provides useful information about the contract's constructors, messages, events, function selectors,
documentation and comments of the aforementioned structures as well as how inputs and outputs shall
be encoded and decoded respectively etc.

### Can a re-entrancy bug occur in ink! contracts?

Yes. However, the Substrate team is well aware of the associated problems and already through about
possible future additions to eliminate re-entrancy attacks.

### How can my smart contract interact with the runtime?

In the default configuration of the `contracts-pallet` a smart contract can only interact with the runtime
via its well defined set of basic smart contract interface. This API already allows a whole variety of
interaction between the `contracts-pallet` and the executed smart contract. For example it is possible
to call and instantiate other smart contracts on the same chain, emit events, query context information
or run built-in cryptographic hashing procedures.

If this basic set of features is not enough for a particular Substrate built blockchain it is possible
to easily extend this API using the so-called chain extension feature.

See the [Chain Extensions](/macros-attributes/chain-extension) section for more information.

### How can I use ink! with a Substrate chain with a custom chain config?

Please see [the `env_types` argument](https://paritytech.github.io/ink/ink_lang_macro/attr.contract.html#header-arguments)
for the contract macro. It allows you to specify your environment a la 
`#[ink::contract(env = MyEnvironment)]`.

### What does the `#![cfg_attr(not(feature = "std"), no_std)]` at the beginning of each contract mean?

The `#[cfg(..)]` or `#[cfg_attr(..)]` annotations are how Rust does conditional compilation.

ink! smart contracts can be compiled in two different modes.

Through `#![cfg_attr(not(feature = "std"), no_std)]` an ink! smart contract tells the Rust compiler
in which mode they are being compiled. This also plays a significant role in how ink! generates
the smart contract code.

The two modes are as follows:

1. Wasm mode: This is the mode chosen when compiling an ink! smart contract for deployment on a blockchain.
   The resulting binary is a `.wasm` file and as such it is not possible to use certain parts of Rust's standard
   library.
2. Off-chain mode: This is the mode chosen when trying to test an ink! smart contract using the off-chain
   environment. Off-chain environment testing is very useful to check if certain ink! constructors or messages
   are well behaving and allow for better debuggability than when trying to debug the same smart contract deployed
   on a chain.

### Overflow Safety?

Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides [integrated checked, wrapped, and saturated math functions](https://doc.rust-lang.org/std/primitive.u32.html).

>Note: There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the Wasm blob. This feature may change or be iterated on in the future.

### What is the difference between memory and storage?

In ink!, memory refers to computer memory, while storage refers to the on-chain storage
used by a contract instance. Memory is temporary and only lasts until the contract
execution is done, while storage is persistent and lasts over many contract executions.
The contract storage is built on top of the runtime storage, and access is considered to be slow.

### How do I print something to the console from the runtime?

In your ink! message or constructor write the following:

```rust
#[ink(constructor)]
fn print_contents_1(contents: &str) -> Self {
    Self::env().debug_println(contents);
    Self { .. }
}

#[ink(message)]
fn print_contents_2(&self, contents: &str) {
    self.env().debug_println(contents);
}
```

Note that this will only print to console if the smart contract is either tested off-chain
or if it is run on an on-chain with `--dev` (development) configuration. Trying to deploy a smart contract
that uses `debug_println` will always fail for non `--dev` chains.

### Is it possible to do `println!("{:?}", foo)` on-chain for debugging purposes?

The ink! team has not yet provided a cleaner solution than using `self.env().debug_println(..)` as mentioned
in the last question.
The `debug_println` method only takes a static `str` argument which cannot be formatted.
However, it is possible to use Rust's `format!` macro in order to have the same benefits in the end:

```rust
#[ink(message)]
fn print_formatted(&self, contents: &str) {
    self.env().debug_println(&format!("message: {}", contents));
}
```

Note that it might be required to import the `format!` macro from the `ink_prelude` crate first.

### Why is Rust's standard library (stdlib) not available in ink!?

Rust's standard library consists of three different layers:

1. `core` library which defines everything that has no dependencies outside of Rust itself.
   Included are types such as `Option`, `Result` as well as a whole variety of modules,
   functions and macro.

   ink! smart contracts allow authors to use Rust's `core` crate.

2. `alloc` library which is depending on a global allocator and mainly defines collections
   that spill their elements on to the execution's heap memory.
   Examples for collections are `Box`, `String`, `Vec`, `HashMap`, `LinkedList` and modules
   such as `fmt`, `rc` (ref-counted pointers) or borrows.

   ink! smart contracts allow authors to use Rust's `alloc` crate.
   By default ink! authors use definitions from the `alloc` crate through `ink_prelude` crate.

3. `std` library is what people generally call Rust's standard library.

   > The Rust Standard Library is the foundation of portable Rust software, a set of minimal and battle-tested shared abstractions for the broader Rust ecosystem.

   It requires several operating system capabilities in order to work correctly such as input and
   output systems for files, networking etc.

   Since the Wasm (a.k.a. `wasm32-unknown-unknown`) compilation target does not support Rust's
   standard library ink! authors cannot use it either for their own purposes. Instead the `contracts-pallet`
   tries to provide some common functionality that would otherwise be missing for common smart contract
   operations.

### Why is `nightly` required for ink!?

ink! requires a `nightly` Rust compiler as of 2021-01 since it relies on a few unstable nightly features
around allocation handlers for `no_std` (no standard library) code.

As soon as the Rust team decides to stabilize these features ink! will be available for stable Rust.
