---
title: Testing del Contrato
hide_title: true
slug: /basics/contract-testing
---

<img src="/img/title/testing1.svg" className="titlePic" />

# Contract Testing

ink! soporta tres diferentes etapas de testing: unitarios, de integración
y tests end-to-end. En esta página explicaremos cual es el proposito de cada
etapa y como utilizarlas.

<img src="/img/testing.png" />

Generalmente puedes pensar en estos tres tipos de testing como una piramide
donde el top es el más elaborados de los tests. Los tests End-to-End (E2E)
en el top testearan las capas más bajas de la piramide como parte de ellos.



## Tests Unitarios

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

Para tests de integración, el test se anota con nuestro atributo `#[ink::test]`
en lugar del `#[test]`. Nuestro atributo denota que el test se ejecuta
en un entorno simulado, en un mocked blockchain. Aquí están las funciones disponibles
para influenciar en como el entorno del test es configurado (por ejemplo configurar un balance específico 
de una cuenta para simular como el contrato se comportaria al interaccionar con el).

Si anotas un test con este atributo se ejecutara en un entorno simulado, 
similar a como se ejecutaría on-chain.
Entonces tienes un control detallado sobre cómo llamar al contrato;
por ejemplo puedes influir en el avance del bloque, el valor transferido al mismo,
por qué cuenta se llama, con qué almacenamiento se ejecuta, etc.


Vea el contrato [`examples/erc20`](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs) csobre como utilizarlo o [la documentación](https://docs.rs/ink_lang/4.0.0-rc/ink_lang/attr.test.html) para más detalles.

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


## End-to-End (E2E) Tests


El testing E2E permite a los desarroladores escribir un test que no solo testeara el contrato de 
manera aislada; en su lugar el contrato sera testado _todo junto_ con todos los componentes 
que están involucrados on-chain – por lo que de extremo a extremo (end to end). De esta manera el testing This way of testing se parece mucho cómo se comportará realmente el contrato en la producción.

Como parte del test, el contrato sera compilado y desplegado a un nodo Substrate node que este corriendo en el background.
ink! ofrece funciones API que permiten a los desarrolladores interaccionar con el contrato via transacciones
que ellos crean y cargan en la blockchain.

Tú, como desarrollador, puede definir aserciones sobre el resultado de sus transacciones, como la verificación de mutaciones de estado, transaccione fallidas o costos de gas incurridos.

La configuración de tu cadena sera testeada junto al smart contract. Y si tu cadena tiene pallets que 
estan involucrados con la ejecución del smart contract, estos también seran parte de la ejecución del test.

ink! no pone ningún requerimiento para el nodo Substrate en el background - por ejemplo,
puedes correr un nodo que contiene una instantánea de una red en vivo.

### Ejemplo

El código de ejemplo a continuación ilustra un test básico E2E para el
[ejemplo flipper](https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs).

```rust
#[ink_e2e::test]
async fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
    // Cuando se ingresa la función, el contrato ya estaba
    // construido en el background via `cargo contract build`.
    // El objeto `client`expone una interfaz para interactuar
    // con el nodo Substrate.
    
    // dado
    let constructor = FlipperRef::new_default();

    // cuando
    let contract_acc_id = client
        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)
        .await
        .expect("instantiate failed")
        .account_id;

    // entonces
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

Puedes correr el test de arriba yendo a la carpeta `flipper` en
[el directorio ink! examples](https://github.com/paritytech/ink/tree/master/examples).

Antes de que puedas arrancar el test, tienes que arrancar un nodo Substrate
con `pallet-contracts` en el background.
Para esto puedes utilizar por ejemplo nuestro[`substrate-contracts-node`](https://github.com/paritytech/substrate-contracts-node). Arranca el nodo en una terminal/sesión shell via

```
substrate-contracts-node
```

Entonces, mientras el nodo este corriendo ejecuta el siguiente comando
en otra ventana la terminal/sesión shell con:

```
cargo test --features e2e-tests
```
