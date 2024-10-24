---
title: strict_balance_equality
hide_title: true
description: strict_balance_equality lint documentation
---
# strict_balance_equality
## What it does
Looks for strict equalities with balance in ink! contracts.

## Why is this bad?
The problem with strict balance equality is that it is always possible to forcibly send
tokens to a contract. For example, using
[`terminate_contract`](https://use-ink.github.io/ink/ink_env/fn.terminate_contract.html).
In such a case, the condition involving the contract balance will work incorrectly, what
may lead to security issues, including DoS attacks and draining contract's gas.

## Known problems
There are many ways to implement balance comparison in ink! contracts. This lint is not
trying to be exhaustive. Instead, it addresses the most common cases that may occur in
real-world contracts and focuses on precision and lack of false positives.

## Example
Assume, there is an attacker contract that sends all its funds to the target contract when
terminated:

```rust
#[ink::contract]
pub mod attacker {
  // ...
  #[ink(message)]
  pub fn attack(&mut self, target: &AccountId) {
      self.env().terminate_contract(target);
  }
}
```

If the target contains a condition with strict balance equality, this may be manipulated by
the attacker:

```rust
#[ink::contract]
pub mod target {
  // ...
  #[ink(message)]
  pub fn do_something(&mut self) {
      if self.env().balance() != 100 { // Bad: Strict balance equality
          // ... some logic
      }
  }
}
```

This could be mitigated using non-strict equality operators in the condition with the
balance:

```rust
#[ink::contract]
pub mod target {
  // ...
  #[ink(message)]
  pub fn do_something(&mut self) {
      if self.env().balance() < 100 { // Good: Non-strict equality
          // ... some logic
      }
  }
}
```
