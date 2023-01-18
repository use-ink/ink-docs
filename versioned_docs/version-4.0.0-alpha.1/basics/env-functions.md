---
title: Environment Functions
slug: /basics/environment-functions
---

ink! exposes a number of handy environment functions.
A full overview [is found here](https://docs.rs/ink_env/4.0.0-beta/ink_env/#functions).

In an `#[ink(constructor)]`  use `Self::env()` to access those,
in an `#[ink(message)]` use `self.env()`.
So e.g. `Self::env().caller()` or `self.env().caller()`.

Some handy functions include:

* [`caller()`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.caller.html): Returns the address of the caller of the executed contract.
* [`account_id()`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.account_id.html): Returns the account ID of the executed contract.
* [`balance()`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.balance.html): Returns the balance of the executed contract.
* [`block_number()`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.block_number.html): Returns the current block number.
* [`random()`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.random.html): Returns a random hash seed.
* [`emit_event(…)`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.emit_event.html): Emits an event with the given event data.
* [`transfer(…)`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.transfer.html): Transfers value from the contract to the destination account ID.
* [`hash_bytes(…)`](https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.hash_bytes.html): Conducts the crypto hash of the given input and stores the result in output.
* […and many more](https://docs.rs/ink_env/4.0.0-beta/ink_env/#functions).
