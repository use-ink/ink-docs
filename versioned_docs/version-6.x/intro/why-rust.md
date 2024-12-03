---
title: Why Rust for Smart Contracts?
hide_title: true
slug: /why-rust-for-smart-contracts
---

<img src="/img/title/rust.svg" className="titlePic" />

# Why Rust for Smart Contracts?

ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.
If this doesn't already convince you, you find many more good reasons here:

* <span class="highlight">Rust is an ideal smart contract language:</span> It is type safe, memory safe, and free of undefined behaviors. It generates small binaries because it doesn’t include extra bloat, like a garbage collector, and advanced optimizations and tree shaking remove dead code. Through compiler flags, Rust can automatically protect against integer overflow.

* <span class="highlight">Rust ecosystem:</span> You gain from all of the support available to the Rust ecosystem for free. As the language develops, ink! will automatically gain access to new features and functionality, improving how you can write smart contracts in the future.

* <span class="highlight">Tooling:</span> Because ink! follows Rust standards, tools like rustfmt, clippy and rust-analyzer already work out of the box.
The same goes for code formatting and syntax highlighting in most modern text editors.
Also, Rust has an integrated test and benchmark runner,

* <span class="highlight">No overhead:</span> Minimal runtime.

* <span class="highlight">Safe & Efficient:</span> Zero-cost & safe abstractions.

* <span class="highlight">Productive:</span> Cargo + <a href="https://crates.io">crates.io</a> Ecosystem.

* <span class="highlight">1st class Wasm:</span> Rust provides the first class support for the WebAssembly.

* <span class="highlight">Small Size:</span> In the space-constrained blockchain world size is important. 
The Rust compiler is a great help for that, since it reorders struct fields in order 
to make each type as small as possible. Thus, Rust data structures are very compact,
in many cases even more compact than in C.
