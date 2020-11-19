---
title: ink! vs. Solidity
slug: /docs/docs/ink-vs-solidity
---

Rust is an ideal smart contract language. It is type safe, memory safe, and free of undefined behaviors. It generates small binaries because it doesn’t include extra bloat, like a garbage collector, and advanced optimizations and tree shaking remove dead code. Through compiler flags, Rust can automatically protect against integer overflow.

ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve this purpose. As a result, you gain from all of the tooling and support available to the Rust ecosystem for free. In addition, as the language develops, ink! will automatically gain access to new features and functionality, improving how you can write smart contracts in the future.

Here is a brief comparison of features between ink! and Solidity:

||ink!|Solidity|
|:---|:---|:---|
|Virtual Machine|Any Wasm VM|EVM|
|Encoding|Wasm|EVM Byte Code|
|Language|Rust|Standalone|
|Overflow Protection|Enabled by default|None|
|Constructor Functions|Multiple|Single|
|Tooling|Anything that supports Rust|Custom|
|Versioning|Semantic|Semantic|
|Has Metadata?|Yes|Yes|
|Multi-File Project|Planned|Yes|
|Storage Entries|Variable|256 bits|
|Supported Types|Docs|Docs|
|Has Interfaces?|Yes (Rust Traits)|Yes|


