---
title: Spread Storage Layout
slug: /datastructures/spread-storage-layout
---

:::caution
TODO

Beware, this page is no longer up to date for 4.0!
:::

### Storage Organization

The following schema depicts the storage which is exposed
to ink! by the contracts pallet:

<div class="schema">
    <img src="/img/kv.svg" alt="Storage Organization: Layout" />
</div>

ink!'s storage operates by storing and loading entries into and from a single storage
cell. At the moment there is no way to customize this behaviour. Depending on the data
we're dealing with, this can end up being good or bad.

For example, if we have a somewhat small `ink_prelude::vec::Vec` loading all the elements
at the same time can be advantegous - especially if we expect our message to interact
with most of them in a single call.

On the other hand, this can be problematic if we're loading a large `Vec` and only
operating on a few elements.

### Spreading

ink! spreads information to as many cells as possible. For example if you have the
following `#[ink(storage)]` struct every field will live in its own single storage cell.
Note that for `b` all 32 bytes will share the same cell!

```rust
#[ink(storage)]
pub struct Spread {
    a: i32,
    b: [u8; 32],
}
```

The following schema depicts the storage layout for a vector with three elements,
persisted to storage in a spread layout.

<div class="schema">
    <img src="/img/spread.svg" alt="Storage Organization: Spreading" />
</div>
