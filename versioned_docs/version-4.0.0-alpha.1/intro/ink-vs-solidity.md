---
title: ink! vs. Solidity
hide_title: true
slug: /ink-vs-solidity
---

<header>
    <h1 class="customTitle">
        <img src="/img/icons/interop.svg" />
        ink! vs. Solidity
    </h1>
</header>

Here is a brief comparison of features between ink! and Solidity:

<div class="comparison">

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

</div>
