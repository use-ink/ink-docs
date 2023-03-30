---
title: Frequently Asked Questions
slug: /faq
hide_table_of_contents: true
---

### Is it "ink" or "ink!"? What does the "!" stand for?

The correct spelling is _ink!_ ‒ with a lowercase "i" and an exclamation mark at the end.
The history here is that:

* …in the very first iteration ink! was originally a [declarative Rust macro](https://doc.rust-lang.org/book/ch19-06-macros.html#declarative-macros-with-macro_rules-for-general-metaprogramming). A contract was invoked by writing `ink!{ … }`.
* …there is a real-world analogy here of writing a paper contract using ink.
* …we wanted to have as many DOTs as possible in the name 😉.

So please don't make poor Squink cry having to read !ink, ink, Ink!, or Ink.

### Who is "Squink"?

<div class="squid-container">
<img src="/img/ink-squink.svg" alt="Squink ‒ the ink! mascot" height="90" className="squid" />
This little cute purple squid is Squink.

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
The metadata is especially important for third party tools such as Polkadot JS Apps or the Contracts UI
and provides useful information about the contract's constructors, messages, events, function selectors,
documentation and comments of the aforementioned structures as well as how inputs and outputs shall
be encoded and decoded respectively etc.

### Can a re-entrancy bug occur in ink! contracts?

Yes. However, the Substrate team is well aware of the associated problems and already through about
possible future additions to eliminate re-entrancy attacks.

### How can my smart contract interact with the runtime?

See the [Chain Extensions](/macros-attributes/chain-extension) section for more information.

### How can I use ink! with a Substrate chain with a custom chain config?

Please see [the `env_types` argument](https://docs.rs/ink_lang_macro/3.3.1/ink_lang_macro/attr.contract.html#header-arguments)
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

You can use those two macros:
* [`ink_env::debug_println!`](https://docs.rs/ink_env/3.3.1/ink_env/macro.debug_println.html)
* [`ink_env::debug_print!`](https://docs.rs/ink_env/3.3.1/ink_env/macro.debug_print.html)

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

__Important: Debug output is only printed for RPC calls or off-chain tests ‒ not for transactions!__

In your ink! message or constructor you can write the following:

```rust
#[ink(constructor)]
fn new() -> Self {
    ink_env::debug_println!("created new instance at {}", Self::env().block_number());
    Self { }
}

#[ink(message)]
fn print(&self) {
   let caller = self.env().caller();
   let message = ink_prelude::format!("got a call from {:?}", caller);
   ink_env::debug_println!(&message);
}
```


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

### How do I hash a value?

A number of crypto hashes are built into the [contracts-pallet](/how-it-works) and
therefore very efficient to use. We currently support a handful of those, you 
can view the complete list [here](https://docs.rs/ink_env/3.3.1/ink_env/hash/trait.CryptoHash.html).

If you have the urgent need for another crypto hash you could introduce it through
[Chain Extensions](/macros-attributes/chain-extension)
or make a proposal to include it into the default set of the `contracts-pallet`.

Using one of the built-in crypto hashes can be done as explained here:
* [`self.env().hash_bytes()`](https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_bytes.html)
* [`self.env().hash_encoded()`](https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_encoded.html)

### Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?

Floats are cool for all kinds of reasons, but they also have one important
drawback. Floating point arithmetic is non-deterministic which means that
different processors compute (slightly) different results for the same
operation. Although there is an IEEE spec, non-determinism can come from specific
libraries used, or even hardware. In order for the nodes in a blockchain network
to reach agreement on the state of the chain, all operations must be completely
deterministic. Hence we don't allow floating point data types in ink!.

Consequently it's not possible to return a decimal number from an ink! message.
What you should do instead is to have your user interface denominate the returned
number to decimals.

Note, that it's typical for blockchains to have the number of available tokens
defined as a non-floating number and determine the denomination in the user
interface. For example, 1 Bitcoin is equivalent to the smallest unit of 100,000,000
Satoshi and all Bitcoin implementations internally persist account balances in
Satoshi, not as a decimal number of Bitcoin.


### Why can't I just use the standard Rust data collections in ink!?

You can use them! They are exposed via the `ink_prelude` crate (e.g. `ink_prelude::vec::Vec`)
and you can return them from ink! messages and also persist them to storage.

_However, the Rust stdlib collections are not optimized for smart contract usage!_ So for example,
if you use them to persist your data on the chain they will always occupy a single storage cell
and thus always be loaded eagerly, in their entirety. This can be very costly! Just think about
a `Vec` or a `HashMap` where the smart contract might only need access to a few elements, rather
than the entire data collection.

### Why am I getting a `ContractTrapped` error when interacting with a contract?

When it does not constitute a deliberate assertion, like for example a permission check,
it is most likely a bug in your contract or in ink!. 

A common source of `ContractTrapped` are Integer overflows, those can cause
your contract to trap as well. 
There is a [known bug in the Rust compiler](https://github.com/rust-lang/rust/issues/78744)
with respect to safe math operations. As a workaround for this particular bug
try to insert `overflow-checks = false` into your `Cargo.toml`.
This will disable safe math operations altogether, but unfortunately we are currently
not aware of a better workaround until the bug in the compiler is fixed.

If you don't find the issue you can also ask for help in our public 
[Element](https://riot.im/app/#/room/#ink:matrix.parity.io) or 
[Discord](https://discord.gg/j2DKRRbSJr) channel.


### What are the `scale::Encode` and `scale::Decode` traits?

Substrate-based blockchains use the [SCALE codec](https://github.com/paritytech/parity-scale-codec)
to encode data.
As a consequence the data for every interaction with Substrate needs to
be SCALE-encodable ‒ i.e. it needs to implement either `scale::Encode`,
`scale::Decode`, or both. This affects e.g. data you want to return to a caller,
data that you want to take as input, or data you want to store on-chain.

A common error you might get when a necessary SCALE trait is not implemented
for a data structure could be along the lines of `the trait "WrapperTypeEncode"
is not implemented for "Foo"`.
For example, you might encounter this error if you try to store a custom data
structure in the contract's storage. Or e.g. when attempting to return 
a custom error from an ink! message.

> Note: The error `the trait "WrapperTypeEncode" is not implemented for …` is also
> a common error when a mismatching version of `parity-scale-codec` is used
> in the contract opposed to the version used by ink!.

The solution typically is to add a fitting implementation of the trait
for your data structure:

* `Encode` is used for encoding a data structure when it is e.g. returned
to a caller or when it is persisted to the contracts storage.
  
* `Decode` is used for the inverse, e.g. when reading from storage or
taking an input from a user (or another contract).

It's possible to derive those traits and oftentimes the simplest way
is to just derive the missing trait for the object for which its implementation
is missing:

```rust
#[derive(scale::Encode, scale::Decode)]
struct MyCustomDataStructure { … }
```

### How do I use `String` in my contract?

In general, you should think twice if you really need `String`.
Smart contracts usually don't use strings; those are typically
used for user interactions and should live in your UI and not on the chain.

Minimizing storage usage of your contract is a best practice
and you should only persist items which you need to derive state transitions
in your contract.

If you still, for some reason, need to use `String`, then you should use
the `String` [from the ink! prelude](https://docs.rs/ink_prelude/latest/ink_prelude/string/struct.String.html).
