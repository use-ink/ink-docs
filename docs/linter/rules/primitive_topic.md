---
title: primitive_topic
hide_title: true
description: primitive_topic lint documentation
---
# primitive_topic
## What it does
Checks for ink! contracts that use the
[`#[ink(topic)]`](../../macros-attributes/topic.md) annotation with primitive number
types. Topics are discrete events for which it makes sense to filter. Typical examples of
fields that should be filtered are `AccountId`, `bool` or `enum` variants.

## Why is this bad?
It typically doesn't make sense to annotate types like `u32` or `i32` as a topic, if those
fields can take continuous values that could be anywhere between `::MIN` and `::MAX`. An
example of a case where it doesn't make sense at all to have a topic on the storage field
is something like `value: Balance` in the examle below.

## Example
```rust
// Bad
// It typically makes no sense to filter `Balance`, since its value may varies from `::MAX`
// to `::MIN`.
#[ink(event)]
pub struct Transaction {
    #[ink(topic)]
    src: Option<AccountId>,
    #[ink(topic)]
    dst: Option<AccountId>,
    #[ink(topic)]
    value: Balance,
}
```

Use instead:

```rust
// Good
// Filtering transactions based on source and destination addresses.
#[ink(event)]
pub struct Transaction {
    #[ink(topic)]
    src: Option<AccountId>,
    #[ink(topic)]
    dst: Option<AccountId>,
    value: Balance,
}
```
