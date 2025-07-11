---
title: Why Rust for Smart Contracts?
hide_title: true
slug: /background/why-rust-for-smart-contracts
---

<head>
    <meta name="description" content="Explanation why Rust is a great language for smart contracts." />
    <meta name="keywords" content="ink!, Rust, Smart Contracts" />
    <meta property="og:title" content="Why Rust for Smart Contracts?" />
    <meta property="og:description" content="Explanation why Rust is a great language for smart contracts." />
</head>

![Rust Title Picture](/img/title/rust.svg)

# Why Rust for Smart Contracts?

ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.
If this doesn't already convince you, you find many more good reasons here:

* <span class="highlight">Rust is an ideal smart contract language:</span> It is type safe, memory safe, and free of undefined behaviors. It generates small binaries because it doesn’t include extra bloat, like a garbage collector, and advanced optimizations and tree shaking remove dead code. Through compiler flags, Rust can automatically protect against integer overflow.

* <span class="highlight">Rust ecosystem:</span> You gain all the support available to the Rust ecosystem for free. As the language develops, ink! will automatically gain access to new features and functionality, improving how you can write smart contracts in the future.

* <span class="highlight">Tooling:</span> Because ink! follows Rust standards, tools like rustfmt, clippy and rust-analyzer already work out of the box.
The same goes for code formatting and syntax highlighting in most modern text editors.
Also, Rust has an integrated test and benchmark runner,

* <span class="highlight">No overhead:</span> Minimal runtime.

* <span class="highlight">Safe & Efficient:</span> Zero-cost & safe abstractions.

* <span class="highlight">Productive:</span> Cargo + <a href="https://crates.io">crates.io</a> Ecosystem.

* <span class="highlight">1st class RISC-V:</span> The Rust compiler has excellent support for the RISC-V bytecode architecture.
That's because it leverages LLVM as its backend to generate machine code for the RISC-V architecture.

* <span class="highlight">Small Size:</span> In the space-constrained blockchain world size is important. 
The Rust compiler is a great help for that, since it reorders struct fields in order 
to make each type as small as possible. Thus, Rust data structures are very compact,
in many cases even more compact than in C.

ink! is an [Embedded Domain Specific Language](https://wiki.haskell.org/Embedded_domain_specific_language) (eDSL):
a domain-specific language of the Rust programming language.
That means:

* we allow only a subset of the Rust programming language features to be used
  for writing smart contracts. For example, it is not possible do any 
  multi-threading operations or access the web.
* we provide annotations, macros, and primitives that are needed when writing
  smart contracts. For example, annotations on what the smart contract's storage
  struct is or what an event is.

ink! is just standard Rust in a well-defined "contract format" with specialized `#[ink(…)]` attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Polkadot SDK compatible RISC-V bytecode!
