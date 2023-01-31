---
title: Testing del Contrato
hide_title: true
slug: /basics/contract-testing
---

# Contract Testing

ink! supports three different stages of testing: unit, integration
and end-to-end tests. On this page we'll explain what the purpose
of each stage is about and how to use it.

<img src="/img/testing.png" />

Generally you can think of those three types of testing as a pyramid
with the top being the most elaborate test. The End-to-End (E2E)
tests at the top will test the lower layers of the pyramid as part
of them.


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

<div class="translateTodo">
For integration tests, the test is annotated with our `#[ink::test]`
attribute instead of `#[test]`. Our attribute denotes that
the test is then executed in a simulated, mocked blockchain environment.
here are functions available to influence how the test environment
is configured (e.g. setting a specified balance of an account to
simulate how a contract would behave when interacting with it).
</div>

Si anotas un test con este atributo se ejecutara en un entorno simulado, 
similar a como se ejecutaría on-chain.
Entonces tienes un control detallado sobre cómo llamar al contrato;
por ejemplo puedes influir en el avance del bloque, el valor transferido al mismo,
por qué cuenta se llama, con qué almacenamiento se ejecuta, etc.


Vea el contrato [`examples/erc20`](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs) csobre como utilizarlo o [la documentación](https://docs.rs/ink_lang/4.0.0-beta/ink_lang/attr.test.html) para más detalles.

En este momento hay algunas limitaciones conocidas para nuestro entorno off-chain y estamos trabajando
en hacer que el comportamiento sea lo más cercano posible a un entorno de una red real.

Define un unit test que utilice las capacidades del ink! testing off-chain.

Si tu unit test no requiere de la existencia de un entorno off-chain esta bien no 
utilizar esta macro ya que tiene algunos gastos generales con el test.

Date cuenta que esta macro no es necesaria para ejecutar los unit tests que requieren
las capacidades del ink! testing off-chain pero simplemente mejora la legibilidad del código.

### ¿Cómo saber si su test requiere el entorno off-chain?

Normalmente si el test utiliza recursivamente o invoca algunos metodos del contrato que
llaman a un metodo definido en `self.env()` o `Self::env()`.

Un ejemplo es el siguiente:

```rust
let caller: AccountId = self.env().caller();
```

### Ejemplo

```rust
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
    fn test2() -> Result<(), ink::env::Error> {
        // El código del test que devuelve un tipo Rust Result
    }
}
```

<div class="translateTodo">
## End-to-End (E2E) Tests

E2E testing enables developers to write a test that will not only test the contract in an
isolated manner; instead the contract will be tested _together_ with all components that
will be involved on-chain – so from end to end. This way of testing resembles closely
how the contract will actually behave in production.

As part of the test, the contract will be compiled and deployed to a Substrate node that
is running in the background. ink! offers API functions that enable developers to then
interact with the contract via transactions that they create and submit to the blockchain.

You as a developer can define assertions on the outcome of their transactions, such as checking
for state mutations, transaction failures or incurred gas costs.

Your chain configuration will be tested together with the smart contract. And if your
chain has pallets that are involved with the smart contract execution, those will be
part of the test execution as well.

ink! does not put any requirements on the Substrate node in the background – for example,
you can run a node that contains a snapshot of a live network.

### Example

The following code example illustrates a basic E2E test for the
[flipper example](https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs).

```rust
#[ink_e2e::test]
async fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
    // When the function is entered, the contract was already
    // built in the background via `cargo contract build`.
    // The `client` object exposes an interface to interact
    // with the Substrate node.
    
    // given
    let constructor = FlipperRef::new_default();

    // when
    let contract_acc_id = client
        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)
        .await
        .expect("instantiate failed")
        .account_id;

    // then
    let get = build_message::<FlipperRef>(contract_acc_id.clone())
        .call(|flipper| flipper.get());
    let get_res = client
        .call(&ink_e2e::bob(), get, 0, None)
        .await
        .expect("get failed");
    assert!(matches!(get_res.return_value(), false));

    Ok(())
}
```

You can run the above test by going to the `flipper` folder in
[the ink! examples directory](TODO).

Before you can run the test, you have to start a Substrate
node with `pallet-contracts` in the background.
You can use e.g. our [`substrate-contracts-node`](TODO) for this.
Start the node in one shell session/terminal window via

```
substrate-contracts-node
```

Then, while keeping the node running, execute the following command
in another shell session/terminal window.

```
cargo test --features e2e-tests
```
</div>