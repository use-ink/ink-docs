---
title: "#[ink(payable)]"
slug: /ink-macros-attributes/payable
---

Applicable to ink! messages.

Allows receiving value as part of the call of the ink! message.
ink! constructors are implicitly payable, due to the initial endowment which a contract requires.

## Example

```rust
#[ink(message, payable)]
pub fn pay_me(&self) {
    let _transferred = self.env().transferred_balance();
}
```

See the [`examples/contract-transfer`](https://github.com/paritytech/ink/blob/master/examples/contract-transfer/lib.rs) contract for a more extensive example.
