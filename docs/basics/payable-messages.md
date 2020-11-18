---
title: Payable Messages
slug: /basics/payable-messages
---

```rust
impl Flipper {
    #[ink(message)]
    #[ink(payable)]
    fn flip(&mut self) { self.value = !self.value; }

    #[ink(message, payable)]
    fn get(&self) -> bool { self.value }
}
```

TODO