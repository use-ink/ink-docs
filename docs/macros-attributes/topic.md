---
title: "#[ink(topic)]"
slug: /macros-attributes/topic
hide_title: true
---

<img src="/img/title/text/topic.svg" className="titlePic" />

Applied on fields of ink! event types to indicate that they are topics.

Tells the ink! codegen to provide a topic hash for the given field. Every ink! event can only have a limited number of such topic field.
The semantics are similar to indexed event arguments in Solidity.

## Example

```rust
#[ink(event)]
pub struct Transferred {
    #[ink(topic)]
    from: Option<AccountId>,

    #[ink(topic)]
    to: Option<AccountId>,

    amount: Balance
}
```
