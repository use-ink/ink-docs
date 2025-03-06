---
title: "#[ink(topic)]"
slug: /macros-attributes/topic
hide_title: true
---

![Text/topic Title Picture](/img/title/text/topic.svg)

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
