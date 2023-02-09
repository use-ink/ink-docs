---
title: Funciones de Entorno
slug: /basics/environment-functions
---

ink! expone una serie de funciones de entorno.
Puedes encontrar una descripción completa [aquí](https://docs.rs/ink_env/4.0.0-rc/ink_env/#functions).

En `#[ink(constructor)]`  utiliza `Self::env()` para acceder a esos,
en `#[ink(message)]` utiliza `self.env()`.
Por ejemplo `Self::env().caller()` o `self.env().caller()`.

Algunas funciones útiles incluyen:

* [`caller()`](https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.caller.html): Devuelve la dirección de la persona que llama del contrato ejecutado.
* [`account_id()`](https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.account_id.html): Devuelve el account ID del contrato ejecutado.
* [`balance()`](https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.balance.html): Devuelve el balance del contrato ejecutado.
* [`block_number()`](https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.block_number.html): Devuelve el número de bloque actual.
* [`emit_event(…)`](https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.emit_event.html): Emite un evento con los datos del evento dado.
* [`transfer(…)`](https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.transfer.html): Transfiere valor desde el contrato hasta el account ID del destino.
* [`hash_bytes(…)`](https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.hash_bytes.html): Realiza el hash criptográfico de la entrada dada y almacena el resultado en la salida.
* […and many more](https://docs.rs/ink_env/4.0.0-rc/ink_env/#functions).
