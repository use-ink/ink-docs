---
title: "#[ink(namespace = \"…\")]"
slug: /macros-attributes/namespace
hide_title: true
---

<img src="/img/title/text/namespace.svg" className="titlePic" />

Applicable to ink! trait implementation blocks.

Applied on ink! trait implementation blocks to disambiguate other trait
implementation blocks with equal names.

## Example

```rust
#[ink(namespace = "my_namespace")]
impl MyTrait for MyStorage {
    #[ink(message)]
    fn my_message(&self) {}
}
```
    
This changes the resulting selectors of all the ink! messages and ink! constructors within the trait implementation.
Thus allowing disambiguation between trait implementations with overlapping message or constructor names.
