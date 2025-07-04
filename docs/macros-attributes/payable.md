---
title: "#[ink(payable)]"
slug: /macros-attributes/payable
hide_title: true
---

![Text/payable Title Picture](/img/title/text/payable.svg)

Applicable to ink! messages.

Allows receiving value as part of the call of the ink! message.
ink! constructors are implicitly payable, due to the initial endowment which a contract requires.

An ink! message by default will reject calls that additional fund the smart contract.
Authors of ink! smart contracts can make an ink! message payable by adding the `payable`
flag to it. An example below:

Note that payable ink! messages inherently modify the blockchain state, 
and therefore must have a `&mut self` receiver.

Note that ink! constructors are always implicitly payable and thus cannot be flagged
as such.

```rust
#[ink::contract]
mod flipper {

    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        #[ink(constructor)]
        pub fn new(initial_value: bool) -> Self {
            Flipper { value: false }
        }

        /// Flips the current value.
        #[ink(message)]
        #[ink(payable)] // You can either specify payable out-of-line.
        pub fn flip(&mut self) {
            self.value = !self.value;
        }
        
        /// Flips the current value.
        #[ink(message, payable)] // or specify payable inline.
        pub fn flip_2(&mut self) {
            self.value = !self.value;
        }

        /// Returns the current value.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```

## Example

```rust
#[ink(message, payable)]
pub fn pay_me(&mut self) {
    let _transferred = self.env().transferred_value();
}
```

See the [`examples/contract-transfer`](https://github.com/use-ink/ink-examples/blob/main/contract-transfer/lib.rs) contract for a more extensive example.
