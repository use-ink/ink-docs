---
title: "#[ink(message)]"
slug: /ink-macros-attributes/message
---

Applicable to methods.
 
Flags a method for the ink! storage struct as message making it available to the API for calling the contract. 

## Messages Return Value

TODO

## Example

```rust
#[ink(message)]
pub fn mutates_storage(&mut self, from: AccountId) -> Result<(), Error> {
    // actual implementation
}
```
