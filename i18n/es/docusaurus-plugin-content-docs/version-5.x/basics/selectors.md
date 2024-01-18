---
title: Selectores
hide_title: true
slug: /basics/selectors
---

# Selectores

Los selectors en ink! son una forma de lenguaje agnóstico para identificar constructores y mensajes. Son strings hexadecimales de cuatro bytes que se ven asi: `0x633aa551`.

Podemos encontrar el selector de un constructor de ink! o el mensaje en la [metadata del contrato](/basics/metadata) buscando el campo `selector` del dispatchable que nos interese.

Aquí hay un ejemplo de como se puede elegir el nombre del mensaje y el selector desde la metadata del contrato usando [`jq`](https://stedolan.github.io/jq/).

```
cat target/ink/flipper.json | jq '.spec.messages[0] | "\(.label): \(.selector)"'
"flip: 0x633aa551"
```

## Cálculo del selector 

Si no se tiene acceso a la metadata del contrato uno puede calcularlo por si mismo.

El algoritmo que ink! usa es bastante directo:

1. Obtener _solo_ el nombre del constructor o el mensaje
2. Computar el hash `BLAKE2` del nombre
3. Tomar los primeros cuatro bytes del hash como selector

Vamos a dar un breve ejemplo de cómo se ve en la práctica. Considerar el siguiente mensaje:

```rust
#[ink(message)]
fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {
    unimplemented!()
}
```

Para calcular el selector:
1. Tomar el nombre del mensaje, `frobinate`
2. Computar `BLAKE2("frobinate") = 0x8e39d7f22ef4f9f1404fe5200768179a8b4f2b67799082d7b39f6a8ca82da8f1`
3. Tomar los primeros cuatro bytes, `0x8e39d7f2`

## Cálculo del selector: Traits de ink! 

Estas reglas cambian un poco si se define cualquier mensaje usando el `[ink::trait_definition]` [macro](/basics/trait-definitions).
Para el primer paso, en lugar de tomar el nombre del mensaje _justo_ , ahora agregamos además el _nombre del trait_ para el cálculo del selector.
 
```
cat target/ink/trait-flipper.json | jq '.spec.messages[0] | "\(.label): \(.selector)"'
"Flip::flip: 0xaa97cade"
```

Veamos cómo se vería ésto en la práctica. Consideremos el siguiente trait:

```rust
#[ink::trait_definition]
pub trait Frobinate {
    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool;
}

-- snip --

impl Frobinate for Contract {
    #[ink(message)]
    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {
        unimplemented!()
    }
}
```

Para calcular el selector:
1. Tomar el nombre del trait **y** el nombre del mensaje, `Frobinate::frobinate`
2. Computar `BLAKE2("Frobinate::frobinate") = 0x8915412ad772b2a116917cf75df4ba461b5808556a73f729bce582fb79200c5b`
3. Tomar los primeros cuatro bytes, `0x8915412a`

:::tip

No preocuparse si no se puede calcular el hash de un string `BLAKE2` a mano. Se puede usar la [utilidad de Substrate de Shawn](https://www.shawntabrizi.com/substrate-js-utilities/) para que lo haga por uno!

:::