---
title: storage_never_freed
hide_title: true
description: storage_never_freed lint documentation
---
# storage_never_freed
## What it does
This lint ensures that for every storage field with a collection type, when there is an
operation to insert new elements, there's also an operation for removing elements.

## Why is this bad?
When a user executes a contract function that writes to storage, they have to put a
deposit down for the amount of storage space used. Whoever frees up that storage at some
later point gets the deposit back. Therefore, it is always a good idea to make it possible
for users to free up their storage space.

## Example
In the following example there is a storage field with the `Mapping` type that has an
function that inserts new elements:

```rust
#[ink(storage)]
pub struct Transaction {
    values: Mapping<AccountId, AccountId>,
}

fn add_value(&mut self, k: &AccountId, v: &AccountId) {
    // ...
    self.values.insert(k, v);
    // ...
}
```

But, ideally, there also should be a function that allows the user to remove elements from
the Mapping freeing storage space:

```rust
fn del_value(&mut self, k: &AccountId) {
    // ...
    self.values.remove(k);
    // ...
}
```
