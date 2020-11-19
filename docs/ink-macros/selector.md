---
title: "#[ink(selector = \"…\")]"
slug: /ink-macros-attributes/selector
---

Applicable to ink! messages and ink! constructors.

By default ink! creates a selector for each message and constructor.
This is necessary since the contract is compiled to a Wasm blob and functions are invoked by invoking the
selector, which identifies a method ‒ method names are no longer available in these underlying layers.

Using this attribute it is possible to speficy a concrete dispatch selector for the flagged entity. This allows a contract author to precisely control the selectors of their APIs making it possible to rename their API without breakage.

A selector must consist of four bytes in hex (e.g. `selector = "0xCAFEBABE"`).

## Examples

```rust
impl MyStorage {
    #[ink(message, selector = "0xDEADBEEF")]
    fn my_message(&self) {}
}
/// ... then the selector of `my_message` is simply `0xDEADBEEF` since it overrides
/// the composed selector.