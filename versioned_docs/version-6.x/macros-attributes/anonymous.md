---
title: "#[ink(anonymous)]"
slug: /macros-attributes/anonymous
hide_title: true
---

<img src="/img/title/text/anon.svg" className="titlePic" />

Applicable to ink! events.

Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as 
topic upon emitting. Similar to anonymous events in Solidity. 

Anonymous events have similar semantics as in Solidity in that their event signature won't be 
included in their event topics serialization to reduce event emitting overhead. This is 
especially useful for user defined events.
    
The signature of the event is by default one of the topics of the event, except if you annotate the
event with `#[ink(anonymous)]`. The attribute implies that it is not possible to filter for 
specific anonymous events by the signature topic.

## Example

```rust
#[ink(event)]
#[ink(anonymous)]
pub struct MyEvent {
    #[ink(topic)]
    field_1: i32,
    field_2: bool,
}
```

The equivalent syntax for standalone `#[ink::event]` definitions (not defined inline in a 
contract) is:

```rust
#[ink::event(anonymous)]
pub struct MyEvent {
    #[ink(topic)]
    field_1: i32,
    field_2: bool,
}
```



