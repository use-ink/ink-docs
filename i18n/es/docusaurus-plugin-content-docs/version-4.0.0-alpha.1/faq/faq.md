---
title: Preguntas Frequentes
slug: /faq
hide_table_of_contents: true
---

### ¿Es "ink" o "ink!"? ¿Qué representa el "!"?

La ortografía correcta es _ink!_ ‒con "i" en miniscula y un simbolo de exclamación al final.
La historia es que:

* …en la primera iteración ink! era originalmente un [declarative Rust macro](https://doc.rust-lang.org/book/ch19-06-macros.html#declarative-macros-with-macro_rules-for-general-metaprogramming). Un contrato se invocaba escribiendo `ink!{ … }`.
* …hay una analogía del mundo real de escribir un contrato en papel usando tinta.
* …queriamos tener todos los puntos (DOTs) posibles en el nombre 😉.

Así que por favor no hagan llorar al pobre Squink teniendo que leer !ink, ink, Ink!, or Ink.

### ¿Quién es "Squink"?

<div class="squid-container">
<img src="/img/ink-squink.svg" alt="Squink ‒ the ink! mascot" height="90" className="squid" />
Este pequeño y lindo calamar morado es Squink.

Squink es la mascota de ink! y guia a los nuevos usuarios y aventureros a través de nuestras presentaciones,
workshops y tutoriales. También tiene un romance con la mascota de Rust, Ferris.

Generalmente es muy amigable y abierto a aprender nuevos Rustaceans pero ten cuidado de
nunca molestarlo quitando puntos de la palabra ink! deletreándolo incorrectamente!
Realmente es en los puntos. Las historias cuentan que exigía la ortografía de ink! con tantos puntos como sea posible.
</div>

### ¿Cual es la relación de ink! con Substrate/Polkadot?

- Substrate es un framework modular para construir aplicaciones descentralizadas sobre la tecnología Blockchain.
- Polkadot es una blockchain de capa-0 construida utilizando Substrate que permite orquestar toda una flota de otras blockchains para unir fuerzas y comunicarse entre sí.
- Blockchains construidas con Substrate pueden incluir el módulo ya visto `contracts-pallet` para permitir 
instanciar y ejecutar smart contracts.

ink! fue construido para permitir usuarios escribir smart contracts en Rust apuntando a blockchains construidas con
Substrate que tengan el ya mencionado `contracts-pallet` incluido.

Mientras que ink! es actualmente el lenguaje de smart contract más avanzado para Substrate blockchains no es
la única opción posible de los usuarios. Existe también un compilador de Solidity a Wasm llamado Solang 
que también permite ser utilizado en cadenas Substrate y existen otros lenguaje 
allows to target Substrate chains y existen otros lenguajes en fase de proyecto y descubrimiento con el mismo proposito.

En el lado de Substrate es igualmente cierto para el `contracts-pallet`.  Es solo un módulo que define
el conjunto básico de características requeridas para ejecutar smart contracts que lo incluyan en la blockchain.
Sin embargo, no es necesariamente la única solución para hacer exactamente esto. También esta el `evm-pallet`
para ejecutar smart contracts sobre la EVM así como el experimental `actors-pallet` que permite ejecutar
smart contracts escritor en el modelo de programación de estilo actor.
Con el tiempo la comunidad de Substrate hacer surgir otros pallets para la ejecución de smart contracts. 

### ¿Como llamar a otros smart contracts en la misma blockchain?

Mira la sección [Cross-contract calling](/basics/cross-contract-calling).

### ¿Como llamar a otros smart contracts de otro parachain?

Esta característica aún no ha sido implementada en el lado de Substrate.

### ¿Qué es el ABI del contrato o los Metadatos?

En ink! los metadatos de un smart contract son recuperados utilizando la herramienta CLI `cargo-contract` e
invocando `cargo contract build` que devuelve un fichero `.contract` que incluye ambos el
`.wasm` compilado del smart contract de ink! así como la denominada información de metadatos del mismo
smart contract.
Los metadatos son especialmente importantes para herramientas de terceros como Polkadot JS Apps o el Contracts UI
y proporciona información útil sobre los constructores, mensajes, eventos, funciones selectoras, documentación del contrato y
comentarios de las estructuras antes mencionadas, así como también cómo se codificarán y decodificarán las entradas y salidas, respectivamente, etc.

### ¿Puede el bug re-entrancy ocurrir en los contratos ink!?

Si. Sin embargo, el equipo de Substrate es muy consciente de los problemas asociados y ya ha pensado en
posibles adiciones futuras para eliminar los ataques de re-entrancy.

### ¿Como puede mi smart contract interacturar con el runtime?

Mira la sección de las [Chain Extensions](/macros-attributes/chain-extension) para más información.

### ¿Como puedo utilizar ink! en una cadena de Substrate con una configuración de cadena presonalizada?

Pr favor mira [el argumento `env_types`](https://docs.rs/ink_lang_macro/3.3.1/ink_lang_macro/attr.contract.html#header-arguments)
para el macro del contrato. Te permite especificar el entorno en la 
`#[ink::contract(env = MyEnvironment)]`.

### ¿Qué significa el `#![cfg_attr(not(feature = "std"), no_std)]` al principio de cada contrato?

Las anotaciones `#[cfg(..)]` o `#[cfg_attr(..)]` son la manera que Rust tiene para hacer compilación condicional.

Los smart contracts ink! pueden ser compilados de dos modos diferentes.

Mediante `#![cfg_attr(not(feature = "std"), no_std)]` un ink! smart contract le dice al compilador de Rust
en que modo sera compilado. Esto juega también un rol significativo en como ink! genera el código del 
in which mode they are being compiled. This also plays a significant role in how ink! generates smart contract.

Los dos modos son:

1. Modo Wasm: Este es el modo escogido cuando compilamos un ink! smart contract para desplegarlo en una blockchain.
   El resultado binario es un fichero `.wasm` y como tal, no es posible usar ciertas partes de la libreria estándar de Rust.

2. Modo Off-chain: Este es el modo escogido cuando intentamos testear un ink! smart contract utilizando un entorno off-chain. 
   Testing en un entorno es muy útil para comprobar si ciertos constructores de ink! o mensajes se comportan bien y permiten una mejor depuración que cuando intentan depurar el mismo smart contract desplegado en una cadena.

### ¿Seguridad Overflow?

Al ser escrito en Rust, ink! proporciona seguridad en tiempo de compilación para overflow/underflow. Utilizando la 
configuración del compilador de Rust, puedes específicar si quieres soporte matemático para overflowing, o si quieres
que entre en pánico durante la ejecución del contrato cuando ocurra un overflows. No es necesario importar continuamente
las lbrerias "Safe Math", aunque Rust también proporciona [checked integrado, wrapped, y funciones matematicas saturadas](https://doc.rust-lang.org/std/primitive.u32.html).

>Nota: Hay algunos problemas conocidos con respecto a la funcionalidad a nivel de los overflows checks en el compilador y el tamaño resultante del Wasm blob. TEsta función podría cambiar o ser iterada en el futuro.

### ¿Cuál es la diferencia entre memoria y storage?

En ink!, la memoria se refiere a la memoria del computador, mientras que el storage se refiere al almacenamiento on-chain
utilizado por una instancia del contrato. La memoria es temporal y solo dura hasta que la ejecución del contrato termine,
mientras que el storage es persistente y dura durante má de una ejecuciones del contrato.
El storage del contrato está construido sobre el storage del runtime, y su acceso se considera lento.

### ¿Cómo imprimo algo en la consola desde el runtime?

Puedes elegir entre estos dos macros:
* [`ink_env::debug_println!`](https://docs.rs/ink_env/3.3.1/ink_env/macro.debug_println.html)
* [`ink_env::debug_print!`](https://docs.rs/ink_env/3.3.1/ink_env/macro.debug_print.html)

Tienes que hacer tres cosas para poder mostrar en la consola los mensajes de debug: 

1. __Permitir la feature `pallet-contracts/unstable-interface` en el runtime.__<br/>
Para `substrate-contracts-node` esto esta hecho por defecto [aquí](https://github.com/paritytech/substrate-contracts-node/blob/master/runtime/Cargo.toml).
  
1. __Permitir la feature `ink-debug` para el crate `ink_env`.__<br/>
`cargo-contract` hace esto automaticamente para ti (para versiones `>= 0.13.0`), excepto si
compilas un contrato en modo `--release`.

1. __Establecer el nivel de log de su nodo en `runtime::contracts=debug`.__<br/>
Por ejemplo, para que aparezcan solo los errores y el output del debug en el `substrate-contracts-node`: 
  ```
  substrate-contracts-node --dev --tmp -lerror,runtime::contracts=debug
  ```

__Importante: El debug output solo se imprime para llamadas RPC o tests off-chain ‒ no para transacciones!__

En tu mensaje o constructor ink! puedes escribir lo siguiente:

```rust
#[ink(constructor)]
fn new() -> Self {
    ink_env::debug_println!("created new instance at {}", Self::env().block_number());
    Self { }
}

#[ink(message)]
fn print(&self) {
   let caller = self.env().caller();
   let message = ink_prelude::format!("got a call from {:?}", caller);
   ink_env::debug_println!(&message);
}
```


### ¿Por qué la libreria estándar de Rust (stdlib) no está disponible en ink!?

La libreria estándar de Rust consiste en tres diferentes capas:

1. La libreria `core` que define todo lo que no tiene dependencias fuera de Rust. Incluye tipos como  `Option`, `Result` 
   asi como toda una variedad de módulos, funciones y macros.
   Los smart contracts de ink! permite a los autores utilizar el crate de Rust `core`.

2. La libreria `alloc` que depende de un asignador global y principalmente define las colecciones que vierten sus elementos
   en la memoria heap de la ejecución.
   Ejemplos de colecciones son `Box`, `String`, `Vec`, `HashMap`, `LinkedList` y módulos
   como `fmt`, `rc` (punteros ref-counted) o borrows.

   Los smart contracts de ink! permite a los autores utilizar el crate de Rust `alloc`.
   Por defecto los autores ink! utilizan definiciones del crate `alloc` a través del crate `ink_prelude`.

3. La libreria `std` es lo que generalmente la gente llama libreria estándar de Rust.

   > La Libreria Estándar de Rust es la base de portátil del software Rust, un conjunto minimo y bien testeado de abstracciones compartidas por el amplio ecosistema de Rust.

   Requiere varias capacidades del sistema operativo para funcionar correctamente, como sistemas de entrada y salida para archivos, redes, etc.

   Desde que el objectivo de compilación Wasm (a.k.a. `wasm32-unknown-unknown`) no soporta libreria estándar de Rust los autores ink! tampoco pueden utilizarlo para sus propios fines. En su lugar el `contracts-pallet`
   intenta proporcionar algunas funcionalidades comunes que de otra manera no estarían disponibles para operaciones comunes de smart contracts.
### ¿Por qué se requiere de `nightly` en ink!?

ink! requiere el compilador de Rust `nightly` a partir de 2021-01 ya que depende de unas pocas inestables nightly features
alrededor de los controladores de asignación para el código `no_std` (libreria no estándar).

Tan pronto como el equipo de Rust decida estabilizar estas características, ink! estara disponible para stable Rust.

### ¿Cómo creo un hash de un valor?

Una serie de hashes criptográficos están integrados en el [contracts-pallet](/how-it-works) y
por lo tanto son muy eficientes de utilizar. Actualmente soportamos un puñado de esos, puedes
ver la lista completa [aquí](https://docs.rs/ink_env/3.3.1/ink_env/hash/trait.CryptoHash.html).

Si necesitas utilizar urgentemente otro hash criptográfico puedes introducirlo a través de
[Chain Extensions](/macros-attributes/chain-extension)
o crear una propuesta para incluirlo en el conjunto por defecto de `contracts-pallet`.

Se puede utilizar uno de los hashes criptográficos que ya están integrados como se explica aqui:
* [`self.env().hash_bytes()`](https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_bytes.html)
* [`self.env().hash_encoded()`](https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_encoded.html)

### ¿Por qué no es posible utilizar tipos de datos de coma flotante en ink!? ¿Cómo implemenar el retorno de un número decimal?

Los tipos floats son geniales por todo tipo de razones, pero también tienen un inconveniente importante.
La aritmetica de los tipos de datos de coma flotante es no determinista, lo que significa
que diferentes procesadores pueden computar diferentes resultados (ligeramente) para la misma operación.
A pesar de que hay una especificación IEEE, resultados no deterministas pueden venir de
librerías utilizadas especificas, o incluso de hardware. Para que los nodos de una red blockchain lleguen
a un acuerdo con el estado de la cadena, todas las operaciones deben ser completamente deterministas.
Por lo tanto, no permitimos tipos de datos de punto flotante en ink!.

En consecuencia, no es posible devolver un número decimal desde un mensaje ink".
Lo que debe hacer en su lugar es hacer que su interfaz de usuario denomine el número devuelto a decimales.

Nota que es típico en blockchains tener el número de tokens disponibles como números no flotantes
y determina la denominación en la interfaz de usuario. Por ejemplo, 1 Bitcoin es equivalente a la
100,000,000 de la unidad más pequeña: Satoshi. Y todas las implementaciones de Bitcoin persisten
internalmente balances de cuentas en Satoshi, y no como un número decimal de Bitcoins.

### ¿Por qué no puedo simplemente utilizar las colecciones de datos estándars de Rust en ink!?

¡Puedes utilizarlos! Estan expuestos en el crate `ink_prelude` (p.ej. `ink_prelude::vec::Vec`)
y puedes devolverlos desde mensajes ink! y hacer que persistan en el storage.

_Sin embargo, las colleciones stdlib de Rust no están optimizadas para el uso de smart contract!_ 
Asi que por ejemplo, si quieres utilizarlas para persistir los datos en la cadena, siempre tendran que 
ocupar una única celda del storage y así que se carguen siempre con avidez, en su totalidad.
¡Esto puede ser muy costoso! Simplemente piensa en un `Vec` o un `HashMap` donde el smart contract 
posiblemente solo necesite acceder a algunos elementos, en lugar de a toda la recopilación de datos.
### ¿Por qué recibo un error `ContractTrapped` cuando interactuo con el contrato?

Cuando no constituye una afirmación deliberada, como por ejemplo una verificación de permisos, 
lo más probable es que se trate de un error en su contrato o en ink!.

Una fuente común de `ContractTrapped` son los Integer overflows, que puede hacer que su contrato se atrape. 
Existe un [conocido bug en el compilador de Rust](https://github.com/rust-lang/rust/issues/78744)
con respecto a las operaciones matemáticas seguras. Como solución para este particular bug
intenta añadir `overflow-checks = false` en tu `Cargo.toml`.
Esto deshabilitará por completo las operaciones matemáticas seguras, pero desafortunadamente no conocemos actualmente una mejor solución hasta que se solucione el error en el compilador.

Si no encuentras el problema también puedes pedir ayuda en nuestro
[Element](https://riot.im/app/#/room/#ink:matrix.parity.io) público 
o nuestro canal de [Discord](https://discord.gg/j2DKRRbSJr).


### ¿Qué son los trait `scale::Encode` y `scale::Decode`?

Los blockchains basados en Substrate utilizan el [SCALE codec](https://github.com/paritytech/parity-scale-codec)
para codificar los datos.
Como consequencia los datos de cada interacción con Substrate necesita se codificada con 
SCALE - esto significa que necesita implementar `scale::Encode`,
`scale::Decode`, o ambos. Esto afecta por ejemplo a los datos que quieres devolver al llamante de la función, 
a los datos que quieres tomar como entrada, o a los datos que quieras almacenar on-chain.

Un error común que puedes encontrarte cuando un trait SCALE necesario no este implementado para
una estructura de datos podría estar en la línea de `the trait "WrapperTypeEncode"
is not implemented for "Foo"`.
Por ejemplo, puedes encontrarte este error si intentantas almacenar una estructura de 
datos personalizada en el storage del contrato. O por ejemplo cuando intentes devolver un 
error personalizado desde un mensaje ink!.

> Nota: El error `the trait "WrapperTypeEncode" is not implemented for …` es también
> un error común cuando una versión del `parity-scale-codec` es utilizada
> en el contrato y no coincide con la versión utilizada por ink!.

La solución generalmente es agregar una implementación adecuada del trait para tu estructura de datos:

* `Encode` es utilizado para condificar una estructura de datos cuando por ejemplo es devuelta a un llamante de la función o cuando persiste en el storage de los contratos.
  
* `Decode` es utilizado para lo inverso, por ejemplo cuando lees del storage o tomas una entrada de un usuario (o de otro contrato).

Es posible derivar estos traits y, a menudo, la forma más sencilla es simplemente derivar el trait que falta del objeto para el que esta faltando la implementación:

```rust
#[derive(scale::Encode, scale::Decode)]
struct MyCustomDataStructure { … }
```

### ¿Como utilizo `String` en mi contrato?

En general, debes pensar dos veces si de verdad necesitas `String`.
Los smart contracts normalmente no utilizan strings; estos se utilizan 
normalmente para las interacciones del usuario y deben vivir en la UI y no en la cadena.

Una buena practica es minimizar el uso del storage de tu contrato y tu solo debes persis
and solo deberías persistir los elementos necesarios para derivar transiciones de estado en el contrato.

Si aún asi, por alguna razón, necesitas utilizar `String`, entonces debes utilizar
el `String` [del preludio ink!](https://docs.rs/ink_prelude/latest/ink_prelude/string/struct.String.html).
