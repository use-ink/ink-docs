---
title: "#[ink(name = \"…\")]"
slug: /macros-attributes/name
hide_title: true
---

![Text/name Title Picture](/img/title/text/name.svg)

Applicable to ink! messages, ink! constructors and ink! events.

Specifies a name/identifier override that is used in place of the item's name/identifier for:
- [Selector][selector] computation for ink! messages and ink! constructors
- [Signature topic][signature-topic] computation for ink! events
- [Contract metadata][metadata] generation for the ink! messages, ink! constructors or ink! events

[selector]: ./selector.md
[signature-topic]: ../basics/events.md#signature-topic
[metadata]: ../basics/metadata/overview.md#topics

In general, `name` overrides should mainly be used to:
- Implement contracts compliant with Ethereum/Solidity contract standards (i.e. ERCs)
  that require/use overloaded interfaces
- Define interfaces (e.g. via trait definitions) for interacting with
  existing Solidity ABI encoded contracts with overloaded interfaces
- As a more transparent alternative to custom selectors for the
  "name-changing while maintaining the same selector" use case for ink! ABI contracts

:::note
For native/ink! ABI, message and constructor selectors are computed from the item name/identifier alone,
so multiple messages with the same `name` attribute override will have the same computed selector,
which results in a compilation error about the overlapping selectors.

In general, more semantic interfaces with descriptive and unique item names/identifiers
are encouraged for new contracts (especially contracts that support the ink! ABI
i.e. "ink" or "all" ABI mode).
:::

## Examples

```rust
#[ink(constructor, name = "myConstructor")]
fn my_constructor(&self) {}

#[ink(message, name = "myMessage")]
fn my_message(&self) {}

#[ink::event(name = "MyEvent")]
pub struct Event { ... }
```
    
This changes the resulting selectors of the ink! message and ink! constructor,
and the signature topic for the ink! event, as well as their names in contract metadata.

:::note
For native/ink! ABI, the [`selector` attribute][selector] has higher precedence than the `name` attribute.
This means that the manually provided selector is used when an ink! message or ink! constructor
is annotated with both the `selector` and `name` attributes e.g.
in the example below, the selector for the ink! message is `0x1`.

```
#[ink(message, name = "myMessage", selector = 0x1)]
fn my_message(&self) {}
```
:::