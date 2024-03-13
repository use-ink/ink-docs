---
title: Why WebAssembly for Smart Contracts?
hide_title: true
slug: /why-webassembly-for-smart-contracts
---

<img src="/img/title/wasm.svg" className="titlePic" />

# Why WebAssembly for Smart Contracts?

We made a conscious decision for WebAssembly as the target architecture of ink!.
Our decision was made up by these reasons:

* <span class="highlight">High performance: </span>Wasm is high performance — it’s built to be as close to native machine code as possible while still being platform independent.

* <span class="highlight">Small size: </span>It facilitates small binaries to ship over the internet to devices with potentially slow internet connection.
This is a great fit for the space-constrained blockchain world.

* <span class="highlight">General VM & bytecode: </span>
It was developed so that code can be deployed in any browser with the same result.
Contrary to the EVM it was not developed towards a very specific use case,
this has the benefit of a lot of tooling being available and large
companies putting a lot of resources into furthering Wasm development.

* <span class="highlight">Efficient JIT execution: </span>
64 and 32-bit integer operation support that maps one-to-one with CPU instructions.

* <span class="highlight">Minimalistic: </span> Formal spec that fits on a single page.

* <span class="highlight">Deterministic execution: </span>
Wasm is easily made deterministic by removing floating point operations, which is necessary for consensus algorithms.

* <span class="highlight">Open Standards > Custom Solutions: </span>
Wasm is a standard for web browsers developed by W3C workgroup that includes Google, Mozilla, and others.
There’s been many years of work put into Wasm, both by compiler and standardization teams.

* <span class="highlight">Many languages available: </span> Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe, and Kotlin. This means you can write smart contracts in whichever language you’re familiar with, though we’re partial to Rust due to its lack of runtime overhead and inherent security properties.

* <span class="highlight">Memory-safe, sandboxed, and platform-independent.</span>

* <span class="highlight">LLVM support: </span>
Supported by the LLVM compiler infrastructure project, meaning that Wasm benefits from over a decade of LLVM’s compiler optimization.

* <span class="highlight">Large companies involved: </span> Continually developed by major companies such as Google, Apple, Microsoft, Mozilla, and Facebook.
