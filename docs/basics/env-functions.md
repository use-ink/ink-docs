---
title: Environment Functions
slug: /basics/environment-functions
---

ink! exposes a number of handy environment functions.
A full overview [is found here](https://paritytech.github.io/ink/ink_env/#functions).

In an `#[ink(constructor)]`  use `Self::env()` to access those,
in an `#[ink(message)]` use `self.env()`.
So e.g. `Self::env().caller()` or `self.env().caller()`.

Some handy functions include:

* [`caller()`](https://paritytech.github.io/ink/ink_env/fn.caller.html): Returns the address of the caller of the executed contract. An example
of how to utilize this particular call is [found here](/datastructures/hashmap#contract-caller).
* [`account_id()`](https://paritytech.github.io/ink/ink_env/fn.account_id.html): Returns the account ID of the executed contract.
* [`balance()`](https://paritytech.github.io/ink/ink_env/fn.balance.html): Returns the balance of the executed contract.
* [`block_number()`](https://paritytech.github.io/ink/ink_env/fn.block_number.html): Returns the current block number.
* [`random()`](https://paritytech.github.io/ink/ink_env/fn.random.html): Returns a random hash seed.
* [`emit_event(…)`](https://paritytech.github.io/ink/ink_env/fn.emit_event.html): Emits an event with the given event data.
* [`transfer(…)`](https://paritytech.github.io/ink/ink_env/fn.transfer.html): Transfers value from the contract to the destination account ID.
* [`hash_bytes(…)`](https://paritytech.github.io/ink/ink_env/fn.hash_bytes.html): Conducts the crypto hash of the given input and stores the result in output.
* […and many more](https://paritytech.github.io/ink/ink_env/#functions).
