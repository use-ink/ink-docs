---
title: "#[ink(default)]"
slug: /macros-attributes/default
hide_title: true
---

<img src="/img/title/text/default.svg" className="titlePic" />

Applicable to ink! messages and constructors.

Works as a hint for UIs to determine if constuctor/message should be picked as default.

At most one constructor or message can be marked as default.

## Example

```rust
#[ink(message, default)]
pub fn im_default(&self) {    
}
```