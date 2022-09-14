---
title: "#[ink(anonymous)]"
slug: /macros-attributes/anonymous
---

Applicable to ink! events.

Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as topic upon emitting. Very similar to anonymous events in Solidity. 

Anonymous events have similar semantics as in Solidity in that their
event signature won't be included in their event topics serialization
to reduce event emitting overhead. This is especially useful for user
defined events.
    
The signature of the event is by default one of the topics of the event, except
if you annotate the event with `#[ink(anonymous)]`.
The attribute implies that it is not possible to filter for specific anonymous events by name.
