---
title: Testing del Contrato
slug: /basics/contract-testing
---

## Unit Tests

El testing de los contractos off-chain se hace mediante `cargo test` y los usuarios pueden simplemente utilizar las rutinas estándar para 
crear módulos de unit test dentro del projecto de ink!:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn my_test() { ... }
}
```

Se pueden crear instancias de test de los contratos así:

```rust
let contract = MyContract::my_constructor(a, b);
```

Los mensajes se pueden llamar simplemente en la instancia devuelta como si `MyContract::my_constructor` devolviese
una instancia `Self`.

Vea el [ejemplo flipper](https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs).


## Off-chain Testing

Los ink! smart contracts se pueden compilar de diversas maneras.
Existen 2 principales modelos de compilación utilizando
- modo on-chain: `no_std` + WebAssembly as target
- modo off-chain: `std`

Generalmente utilizamos el modo on-chain para el despliegue del smart contract mientras que
utilizamos el modo off-chain para el testing de smart contracts utilizando el entorno off-chain
proporcionado por el crate `ink_env`.


La proc. macro `#[ink::test]` permite off-chain testing más elaborado.

Si anotas un test con este atributo se ejecutara en un entorno simulado, 
similar a como se ejecutaría on-chain.
Entonces tienes un control detallado sobre cómo llamar al contrato;
por ejemplo puedes influir en el avance del bloque, el valor transferido al mismo,
por qué cuenta se llama, con qué almacenamiento se ejecuta, etc.


Vea el contrato [`examples/erc20`](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs) csobre como utilizarlo o [la documentación](https://docs.rs/ink_lang/3.3.1/ink_lang/attr.test.html) para más detalles.

En este momento hay algunas limitaciones conocidas para nuestro entorno off-chain y estamos trabajando
en hacer que el comportamiento sea lo más cercano posible a un entorno de una red real.

Define un unit test que utilice las capacidades del ink! testing off-chain.

Si tu unit test no requiere de la existencia de un entorno off-chain esta bien no 
utilizar esta macro ya que tiene algunos gastos generales con el test.

Date cuenta que esta macro no es necesaria para ejecutar los unit tests que requieren
las capacidades del ink! testing off-chain pero simplemente mejora la legibilidad del código.

## ¿Cómo saber si su test requiere el entorno off-chain?

Normalmente si el test utiliza recursivamente o invoca algunos metodos del contrato que
llaman a un metodo definido en `self.env()` o `Self::env()`.

Un ejemplo es el siguiente:

```rust
let caller: AccountId = self.env().caller();
```

## Ejemplo

```rust
use ink_lang as ink;

#[cfg(test)]
mod tests {
    // Conventional unit test that works with assertions.
    #[ink::test]
    fn test1() {
        // test code comes here as usual
    }

    // Unit test convencional que devuelve algún Result.
    // El código del test puede utilizar el operador-`?`.
    #[ink::test]
    fn test2() -> Result<(), ink_env::Error> {
        // El código del test que devuelve un tipo Rust Result
    }
}
```


## On-chain Testing

La manera más sencilla de hacer un test on-chain es
[ejecutar un nodo substrate local](/getting-started/running-substrate),
desplegar tu contrato alli e interactuar con el.

```rust
use ink_lang as ink;

#[ink::contract]
mod greeter {
    #[ink(storage)]
    pub struct Greeter;

    impl Greeter {
        #[ink(constructor)]
        pub fn new() -> Self {
            let caller = Self::env().caller();
            let message = format!("thanks for instantiation {:?}", caller);
            ink_env::debug_println(&message);
            Greeter {}
        }

        #[ink(message, payable)]
        pub fn fund(&mut self) {
            let caller = self.env().caller();
            let value = self.env().transferred_balance();
            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);
            ink_env::debug_println(&message);
        }
    }
}
```

