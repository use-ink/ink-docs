---
title: non_fallible_api
hide_title: true
description: non_fallible_api lint documentation
---
# non_fallible_api
## What it does

The lint detects potentially unsafe uses of methods for which there are safer alternatives.

## Why is this bad?

In some standard collections in ink!, there are two types of implementations: non-fallible
(e.g. `get`) and fallible (e.g. `try_get`). Fallible alternatives are considered safer,
as they perform additional checks for incorrect input parameters and return `Result::Err`
when they are used improperly. On the other hand, non-fallible methods do not provide these
checks and will panic on incorrect input, placing the responsibility on the user to
implement these checks.

For more context, see: [ink#1910](https://github.com/use-ink/ink/pull/1910).

## Example

Consider the contract that has the following `Mapping` field:

```rust
#[ink(storage)]
pub struct Example { map: Mapping<String, AccountId> }
```

The following usage of the non-fallible API is unsafe:

```rust
// Bad: can panic if `input_string` doesn't fit into the static buffer
self.map.insert(input_string, &self.sender);
```

It could be replaced with the fallible version of `Mapping::insert`:

```rust
// Good: returns Result::Err on incorrect input
self.map.try_insert(input_string, &self.sender);
```

Otherwise, the user could explicitly check the encoded size of the argument in their code:

```rust
// Good: explicitly checked encoded size of the input
if String::encoded_size(&input_string) < ink_env::BUFFER_SIZE {
  self.map.insert(input_string, &self.sender);
}
```
