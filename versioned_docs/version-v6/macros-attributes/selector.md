---
title: "#[ink(selector = S:u32)]"
slug: /macros-attributes/selector
hide_title: true
---

![Text/selector Title Picture](/img/title/text/selector.svg)

Applicable to ink! messages and ink! constructors.

By default ink! creates a selector for each message and constructor.
This is necessary since the contract is compiled to a binary blob and functions are invoked by invoking the
selector, which identifies a method ‒ method names are no longer available in these underlying layers.

Using this attribute it is possible to specify a concrete dispatch selector for the flagged entity. This allows a contract author to precisely control the selectors of their APIs making it possible to rename their API without breakage.

A selector must be a `u32` decodable integer. For example

- `selector = 0xCAFEBABE`
- `selector = 42`

An exception is the fallback selector `_`, allowing contract calls not matching any of the other message selectors to be dispatched to a fallback message. Fallback messages can be `payable`.

## Examples

```rust
#[ink(message, selector = 0xC0DECAFE)]
fn my_message_1(&self) {}

#[ink(message, selector = 42)]
fn my_message_2(&self) {}

#[ink(message, payable, selector = _)]
fn my_fallback(&self) {}
```
… then the selector of `my_message_1` is `[0xC0, 0xDE, 0xCA, 0xFE]` and the selector of `my_message_2` is `[0, 0, 0, 42]`
since setting the selector manually overrides the automatically generated selector.

## Controlling the messages selector

Every ink! message and ink! constructor has a selector with which the
message or constructor can be uniquely identified within the ink! smart contract.
Non-unique message or constructor selector lead to a compile time error.
These selectors are mainly used to drive the contract's dispatch upon calling it.

An ink! smart contract author can control the selector of an ink! message or ink!
constructor using the `selector` flag. An example is shown below:

```rust
#[ink::contract]
mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        #[ink(constructor)]
        #[ink(selector = 0xDEADBEEF)] // Works on constructors as well.
        pub fn new(initial_value: bool) -> Self {
            Flipper { value: initial_value }
        }

        #[ink(message)]
        #[ink(selector = 0xCAFEBABE)] // You can either specify selector out-of-line.
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        #[ink(message, selector = 0xC0DECAFE)] // ...or specify the selector inline.
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```
