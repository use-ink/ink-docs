---
title: "#[ink(selector = S:u32)]"
slug: /macros-attributes/selector
hide_title: true
---

<img src="/img/title/text/selector.svg" className="titlePic" />

Aplicable a los mensajes y constructores ink!.

Por defecto ink! crea un selector para cada mensaje y constructor.
Esto es necesario ya que el contrato es compilado a un Wasm blob y las funciones son invocadas invocando el
selector, que identifica un método - los nombres de los métodos ya no están disponibles en estas capas subyacentes.

Utilizando este atributo es posible especificar un selector de dispatch concreto para la entidad marcada. Esto permite que el autor de un contrato controle con precisión los selectores de sus APIs, lo que permite cambiar el nombre de su API sin interrupciones.

Un selector debe ser un entero decodificable `u32`. Por ejemplo

- `selector = 0xCAFEBABE`
- `selector = 42`

Una excepción es el selector fallback `_`, permitiendo que las llamadas a contratos no concuerden con ninguno
de los otros selectores de mensajes se envíen a un mensaje fallback. Mensajes fallback pueden ser `payable`.

## Ejemplos

```rust
#[ink(message, selector = 0xC0DECAFE)]
fn my_message_1(&self) {}

#[ink(message, selector = 42)]
fn my_message_2(&self) {}

#[ink(message, payable, selector = _)]
fn my_fallback(&self) {}
```
… Entonces el selector de `my_message_1` es `[0xC0, 0xDE, 0xCA, 0xFE]` y el selector de `my_message_2` es `[0, 0, 0, 42]`
ya que configurar el selector manualmente anula el selector generado automáticamente.

## Controlar el selector de mensajes

Cada mensaje y constructor ink! tiene un selector con el que el mensaje o constructor 
se puede identificar de forma única dentro del smart contract de ink!.
Los selectores de mensaje o constructor no único conduce a un error de tiempo de compilación.
Estos selectores principalmente pueden conducir el dispatch del contrato al llamarlo. 

Un autor de un smart contract ink! puede controlar el selector de un mensaje o constructor ink!
utilizando la marca `selector` flag. Un ejemplo se muestra a continuación:

```rust
#[ink::contract]
mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        #[ink(constructor)]
        #[ink(selector = 0xDEADBEEF)] // Funciona en constructores tambien.
        pub fn new(initial_value: bool) -> Self {
            Flipper { value: initial_value }
        }

        #[ink(message)]
        #[ink(selector = 0xCAFEBABE)] // Puedes específicar el selector out-of-line.
        pub fn flip(&mut self) {
            self.value = !self.value;
        }
        
        #[ink(message, selector = 0xC0DECAFE)] // ...o especificar el selector inline.
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```
