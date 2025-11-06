---
title: no_main
hide_title: true
description: no_main lint documentation
---
# no_main
## What it does
Checks if a contract is annotated with the `no_main` inner attribute.

## Why is this necessary?
Contracts must be annotated with `no_main` inner attribute when compiled for on-chain
execution.

## Example

```rust
// Bad: Contract does not contain the `no_main` attribute,
// so it cannot be compiled to Wasm
#![cfg_attr(not(feature = "std"), no_std)]
#[ink::contract]
mod my_contract { /* ... */ }
```

Use instead:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]
#[ink::contract]
mod my_contract { /* ... */ }
```
