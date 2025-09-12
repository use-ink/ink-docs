---
title: Environment Functions
slug: /basics/environment-functions
---

![Env Function Title Picture](/img/title/env-function.svg)

# Environment Functions

ink! exposes a number of handy environment functions.
A full overview [is found here](https://use-ink.github.io/ink/ink_env/#functions).

In an `#[ink(constructor)]`  use `Self::env()` to access those,
in an `#[ink(message)]` use `self.env()`.
So `Self::env().caller()` or `self.env().caller()`.

Some handy functions include:

* [`caller()`](https://use-ink.github.io/ink/ink_env/fn.caller.html): Returns the address of the caller of the executed contract.
* [`address()`](https://use-ink.github.io/ink/ink_env/fn.address.html): Returns the address of the executed contract.
* [`balance()`](https://use-ink.github.io/ink/ink_env/fn.balance.html): Returns the balance of the executed contract.
* [`block_number()`](https://use-ink.github.io/ink/ink_env/fn.block_number.html): Returns the current block number.
* [`emit_event(…)`](https://use-ink.github.io/ink/ink_env/fn.emit_event.html): Emits an event with the given event data.
* [`transfer(…)`](https://use-ink.github.io/ink/ink_env/fn.transfer.html): Transfers value from the contract to the destination account ID.
* [`hash_bytes(…)`](https://use-ink.github.io/ink/ink_env/fn.hash_bytes.html): Conducts the crypto hash of the given input and stores the result in output.
* […and many more](https://use-ink.github.io/ink/ink_env/#functions).
