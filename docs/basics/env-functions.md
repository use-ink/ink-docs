---
title: Environment Functions
slug: /basics/environment-functions
---

ink! exposes a number of handy environment functions.

In an `#[ink(constructor)]`  use `Self::env()` to access those,
in an `#[ink(message)]` use `self.env()`.
So e.g. `Self::env().caller()` or `self.env().caller()`.

Some handy functions include:

* `caller()`: Returns the address of the caller of the executed contract. An example
of how to utilize this particular call is [found here](/datastructures/hashmap#contract-caller).
* `account_id()`: Returns the account ID of the executed contract.
* `balance()`: Returns the balance of the executed contract.
* `block_number()`: Returns the current block number.
* `random()`: Returns a random hash seed.
* `emit_event(…)`: Emits an event with the given event data.
* `transfer(…)`: Transfers value from the contract to the destination account ID.
* `hash_bytes(…)`: Conducts the crypto hash of the given input and stores the result in output.
* …and many more ‒ [see here for a complete list](https://paritytech.github.io/ink/ink_env/#functions).
