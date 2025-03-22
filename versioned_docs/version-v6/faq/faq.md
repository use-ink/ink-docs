---
title: Frequently Asked Questions
hide: true
slug: /faq
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Faq Title Picture](/img/title/faq.svg)

# Frequently Asked Questions

### Who is "Squink"?

<img src={useBaseUrl('/img/ink-squink.svg')} alt="Squink ‒ the ink! mascot" className="squid" />
This little cute purple squid is Squink.<br/><br/>

Squink is the mascot of ink! and guides new users and adventurers through our presentations
workshops and tutorials. It also has a romance with Rust's mascot, Ferris.

Generally it is very friendly and open to learning new Rustaceans but be aware to never upset
it by taking away dots from the word ink! by spelling it incorrectly!
It really is into dots. Stories tell that it demanded the spelling of ink! with as many dots as possible.

<h3 id="correct-spelling">Is it "ink" or "ink!"? What does the "!" stand for?</h3>

The correct spelling is _ink!_ ‒ with a lowercase "i" and an exclamation mark at the end.
The history here is that:

* …in the very first iteration ink! was originally a [declarative Rust macro](https://doc.rust-lang.org/book/ch19-06-macros.html#declarative-macros-with-macro_rules-for-general-metaprogramming). A contract was invoked by writing `ink!{ … }`.
* …there is a real-world analogy here of writing a paper contract using ink.
* …we wanted to have as many DOTs as possible in the name 😉.
* …the symmetry of the top and bottom dot of i and ! is aesthetically pleasing 🌻.

So please don't make poor Squink cry having to read !ink, ink, Ink!, or Ink.

<center>
<img src={useBaseUrl('/img/sad-squid.svg')} alt="Squink ‒ the ink! mascot" width="300" />
</center>

### What's ink!'s relationship to Substrate/Polkadot?

Please see our page [Polkadot SDK](../background/polkadot-sdk.md) for more information.

### How to call other smart contracts on the same blockchain?

See the [Cross-contract calling](../basics/cross-contract-calling.md) section.

### How to call other smart contracts on another parachain?

This feature has not yet been implemented by the Substrate side.

### What is a contract's ABI or Metadata?

In ink! a smart contract's metadata is retrieved by using the `cargo-contract` CLI tool and
invoking `cargo contract build` which outputs a `.contract` file that includes both the compiled
`.polkavm` of the ink! smart contract as well as the so-called metadata information of the same
smart contract.
The metadata is especially important for third party tools such as Polkadot JS Apps or the Contracts UI
and provides useful information about the contract's constructors, messages, events, function selectors,
documentation and comments of the aforementioned structures as well as how inputs and outputs shall
be encoded and decoded respectively etc.

### Can a re-entrancy bug occur in ink! contracts?

Yes. However, the Substrate team is well aware of the associated problems and already through about
possible future additions to eliminate re-entrancy attacks.

### How can my smart contract interact with the runtime?

See the [Chain Extensions](../macros-attributes/chain-extension.md) section for more information.

### How can I use ink! with a Substrate chain with a custom chain config?

Please see [this section](../macros-attributes/contract.md#env-impl-environment) in our documentation.

Detailed documentation is found in [the Rust docs](https://docs.rs/ink_macro/5.0.0/ink_macro/attr.contract.html#header-arguments)
for the `#[ink(contract)]` macro. It allows you to specify your environment a la
`#[ink::contract(env = MyEnvironment)]`.

### What does the `#![cfg_attr(not(feature = "std"), no_std, no_main)]` at the beginning of each contract mean?

The `#[cfg(..)]` or `#[cfg_attr(..)]` annotations are how Rust does conditional compilation.

ink! smart contracts can be compiled in two different modes.

Through `#![cfg_attr(not(feature = "std"), no_std, no_main)]` an ink! smart contract tells the Rust compiler
in which mode they are being compiled. This also plays a significant role in how ink! generates
the smart contract code.

The two modes are as follows:

1. On-chain mode: This is the mode chosen when compiling an ink! smart contract for deployment on a blockchain.
   The resulting binary is a `.polkavm` file and as such it is not possible to use certain parts of Rust's standard
   library.
2. Off-chain mode: This is the mode chosen when trying to test an ink! smart contract using the off-chain
   environment. Off-chain environment testing is very useful to check if certain ink! constructors or messages
   are well behaving and allow for better debuggability than when trying to debug the same smart contract deployed
   on a chain.

### Overflow Safety?

Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides [integrated checked, wrapped, and saturated math functions](https://doc.rust-lang.org/std/primitive.u32.html).

:::note
There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the binary blob. This feature may change or be iterated on in the future.
:::

### What is the difference between memory and storage?

In ink!, memory refers to computer memory, while storage refers to the on-chain storage
used by a contract instance. Memory is temporary and only lasts until the contract
execution is done, while storage is persistent and lasts over many contract executions.
The contract storage is built on top of the runtime storage, and access is considered to be slow.

### How do I print something to the console from the runtime?

Please see our page on [Contract Debugging](../testing/debugging.md).

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
   By default ink! authors use definitions from the `alloc` crate through `ink::prelude` crate.

   3. `std` library is what people generally call Rust's standard library.

   >    The Rust Standard Library is the foundation of portable Rust software, a set of minimal and battle-tested shared abstractions for the broader Rust ecosystem.

      It requires several operating system capabilities in order to work correctly such as input and
      output systems for files, networking etc.

      Since our RISC-V compilation target does not support Rust's
      standard library ink! authors cannot use it either for their own purposes. Instead the [`pallet-revive`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive)
      tries to provide some common functionality that would otherwise be missing for common smart contract
      operations.

### How do I hash a value?

A number of crypto hashes are built into [pallet-revive](../background/polkadot-sdk.md) and
therefore very efficient to use. We currently support a handful of those, you
can view the complete list [here](https://docs.rs/ink_env/5.0.0/ink_env/hash/trait.CryptoHash.html).

If you have the urgent need for another crypto hash you could introduce it through
[Chain Extensions](../macros-attributes/chain-extension.md)
or make a proposal to include it into the default set of the `pallet-revive`.

Using one of the built-in crypto hashes can be done as explained here:
* [`self.env().hash_bytes()`](https://docs.rs/ink_env/5.0.0/ink_env/fn.hash_bytes.html)
* [`self.env().hash_encoded()`](https://docs.rs/ink_env/5.0.0/ink_env/fn.hash_encoded.html)

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

You can use them! They are exposed via the `ink_prelude` crate (e.g. `ink::prelude::vec::Vec`)
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


### What are the `Encode`, `Decode` and `TypeInfo` arguments in `#[ink::scale_derive(Encode, Decode, TypeInfo)]` ?

Substrate-based blockchains use the [SCALE codec](https://github.com/paritytech/parity-scale-codec)
to encode data.
As a consequence the data for every interaction with Substrate needs to
be SCALE-encodable ‒ i.e. it needs to implement either `scale::Encode`,
`scale::Decode`, or both. This affects e.g. data you want to return to a caller,
data that you want to take as input, or data you want to store on-chain.

ink! re-exports these traits and provides a useful macro `#[ink::scale_derive(Encode, Decode, TypeInfo)]` that allows to derive them
in a concise way.

A common error you might get when a necessary SCALE trait is not implemented
for a data structure could be along the lines of `the trait "WrapperTypeEncode"
is not implemented for "Foo"`.
For example, you might encounter this error if you try to store a custom data
structure in the contract's storage. Or e.g. when attempting to return
a custom error from an ink! message.

:::note
The error `the trait "WrapperTypeEncode" is not implemented for …` is also
a common error when a mismatching version of `parity-scale-codec` is used
in the contract opposed to the version used by ink!.
:::

The solution typically is to add a fitting implementation of the trait
for your data structure:

* `Encode` is used for encoding a data structure when it is e.g. returned
to a caller or when it is persisted to the contracts storage.

* `Decode` is used for the inverse, e.g. when reading from storage or
taking an input from a user (or another contract).

* `TypeInfo` is used to encode the information about the type that is
often used for the generation of metadata.

It's possible to derive those traits and oftentimes the simplest way
is to just derive the missing trait for the object for which its implementation
is missing using the ink! macro:

```rust
#[ink::scale_derive(Encode, Decode)]
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
the `String` [from the ink! prelude](https://docs.rs/ink_prelude/5.0.0/ink_prelude/string/struct.String.html).

<h3 id="type-comparison">Getting a warning in <code>cargo-contract</code> about type compatibility?</h3>

ink! and Substrate both support the possibility of deciding to deviate
from the default types for `Balance`, `BlockNumber`, etc.
These types are called environment types.

If a chain decides on custom environment types, contract authors need
to specify these types that deviate from the ink! default environment in their
contracts. Otherwise, undefined behavior can occur when uploading a contract
with deviating types to a chain.

Custom environment types can be specified in ink! via the `#[contract(env = MyCustomEnvironment)]`
attribute. You can read more are about this [here](../macros-attributes/contract.md#env-impl-environment).

When using `cargo-contract` to interact with a chain you might get a warning along those lines:

```
Warning: This chain does not yet support checking for compatibility of your contract types.
```

This warning appears when the chain that you are targeting (via the `--url` cli flag)
does not contain a version of `pallet-revive` that does support type comparison.
Type comparison is a feature that we introduced, it means we check that the environmental
types of your contract are equivalent to the environmental types of the chain that you are
targeting.
It's a safety feature to make sure that you are not accidentally deploying a contract with
e.g. `type Balance = u128` to a chain with a different `Balance` type.

The `cargo-contract` warning means this check for compatible types cannot be performed.
This check is only available on chains from `polkadot-1.2.0` on, specifically from
[this commit](https://github.com/paritytech/polkadot-sdk/commit/d8a74901462ffb49345af6db7c5a7a6e2b3c92ed).

If a chain indeed requires that contract developers have to use custom environment types,
this should be communicated prominently by them. 