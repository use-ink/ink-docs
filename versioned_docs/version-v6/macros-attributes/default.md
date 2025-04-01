---
title: "#[ink(default)]"
slug: /macros-attributes/default
hide_title: true
---

![Text/default Title Picture](/img/title/text/default.svg)

Applicable to ink! messages and constructors.

Works as a hint for UIs to determine if constructor/message should be picked as default.

It's also used to select the constructor to include in Solidity compatible metadata.

At most one constructor or message can be marked as default.

## Example

```rust
#[ink(message, default)]
pub fn im_default(&self) {    
}
```