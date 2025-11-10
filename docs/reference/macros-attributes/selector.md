---
title: "#[ink(selector = S:u32)]"
slug: /macros-attributes/selector
hide_title: true
---

![Text/selector Title Picture](/img/title/text/selector.svg)

:::note
ink! v6 supports both the native ink! and [Solidity][sol-abi] ABI 
(Application Binary Interface) specifications for contract interactions 
(i.e. calling conventions used for message calls).

When support for Solidity ABI calling conventions is enabled 
(see [here][abi-declaration] for details), 
Solidity ABI selectors for messages are **always** generated according to the
[Solidity ABI specification for function selectors][sol-abi-selector].

So the instructions below for **controlling message selectors only apply to 
native ink! ABI selectors** (i.e. message selector manual overrides are ignored
when generating Solidity ABI selectors for messages).

Learn more about ink!'s support for multiple ABIs [here][abi-support].
:::

[sol-abi]: https://docs.soliditylang.org/en/latest/abi-spec.html
[sol-abi-selector]: https://docs.soliditylang.org/en/latest/abi-spec.html#function-selector
[abi-support]: ../../reference/abi/overview.md
[abi-declaration]: ../../reference/abi/overview.md#declaring-the-abi

Applicable to ink! messages and ink! constructors.

By default, ink! creates a selector for each message and constructor.
This is necessary since the contract is compiled to a binary blob and functions are invoked by invoking the
selector, which identifies a method ‒ method names are no longer available in these underlying layers.

Using this attribute it is possible to specify a concrete dispatch selector for the flagged entity. This allows a contract author to precisely control the selectors of their APIs making it possible to rename their API without breakage.

A selector must be a `u32` decodable integer. For example

- `selector = 0xCAFEBABE`
- `selector = 42`

An exception is the fallback selector `_`, allowing contract calls not matching any of the other message selectors to be dispatched to a fallback message. Fallback messages can be `payable`.

:::info
The term wildcard selector is just a synonym for fallback selector.
:::

## Examples

```rust
#[ink(message, selector = 0xC0DECAFE)]
fn my_message_1(&self) {}

#[ink(message, selector = 42)]
fn my_message_2(&self) {}

#[ink(message, payable, selector = _)]
fn my_fallback(&mut self) {}
```
… then the selector of `my_message_1` is `[0xC0, 0xDE, 0xCA, 0xFE]` and the selector of `my_message_2` is `[0, 0, 0, 42]`
since setting the selector manually overrides the automatically generated selector.

## Controlling message and constructor selectors

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
