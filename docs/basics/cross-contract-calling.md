---
title: Cross-Contract Calling
slug: /basics/cross-contract-calling
---

In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow
delegation and ink! messages can easily call other ink! messages.

Given another ink! contract like `mod Adder { ... }`, we can call any of its functions:

```rust
use adder::Adder;
//--snip--
#[ink(storage)]
struct Delegator {
    adder: storage::Value<Adder>,
}
//--snip--
let result = self.adder.inc(by);
```

See the [delegator example](https://github.com/paritytech/ink/blob/master/examples/delegator/lib.rs)
for an elaborate code example.


