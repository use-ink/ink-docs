---
title: Mutating Storage Values
slug: /basics/mutating-values
hide_title: true
---

<img src="/img/title/storage-mutating.svg" className="titlePic" />

# Mutating Storage Values

It's time to modify some storage!

## Mutable and Immutable Functions

You may have noticed that the function template included `self` as the first parameter of the
contract functions. It is through `self` that you gain access to all your contract functions and
storage items.

If you are simply _reading_ from the contract storage, you only need to pass `&self`. But
if you want to _modify_ storage items, you will need to explicitly mark it as mutable,
`&mut self`.

```rust
impl MyContract {
    #[ink(message)]
    pub fn my_getter(&self) -> u32 {
        self.my_number
    }

    #[ink(message)]
    pub fn my_setter(&mut self, new_value: u32) {
        self.my_number = new_value;
    }
}
```
