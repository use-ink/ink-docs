---
title: Ejecute su Contrato
slug: /getting-started/calling-your-contract
---

Ahora que se ha desplegado su contrato, podremos interactuar con él! Flipper solo tiene dos funciones,
 `flip()` y `get()` por lo que vamos a ver como jugar con ambas.

## Llamadas RPC vs. Transacciones

Hay dos maneras de llamar a un contrato:

### Dry-run via RPC

Remote procedure calls, o métodos RPC, son una manera de que un programa externo - por ejemplo, un
navegador or una aplicación front-end - de comunicarse con un nodo Substrate.
Por ejemplo, usarás un método RPC para leer un valor almacenado, enviar una transacción, o 
pedir información sobre la cadena a la que un nodo está conectado.

Si una interfaz muestra el valor de un contrato (por ejemplo, el balance de una cuenta
en un contrato ERC-20), entonces esto es algo que típicamente se hace mediante RPC.
Más espeficicamente se hace ejecutando un dry-run síncrono del método del contrato y
devolviendo el resultado.
Es siguiente esquema muestra esto.

![Contract dry-run via RPC](/img/rpc.png)

Las llamadas RPC no requieren de ninguna token, simplemente una conexión a un nodo
de la red. Es importante hacer enfasis en que la ejecucón no conllevará ninguna modificación
del estado de la blockchain, es simplemente un dry-run.

### Mutar el estado enviando transacciones

La otra manera de ejecutar una llamada a un contrato es enviando una transacción
on-chain. Esto require tokens de la red para pagar los costes de dicha transacción.
Esta será incluida en la "transaction-pool" y entonces procesada asíncronamente.
Durante el envío de la transacción ningún resultado será disponible. Esto es diferente
a una llamada RPC.

El patrón usual de cómo un cliente puede reconocer el resultado tras una llamada es que
el contrato emitirá un evento y el cliente escuchará activamente por este tipo de eventos.
Típicamente librerías (como `polkadot-js/api`) proveen APIs que hacen justo esto.
Lo importante es que los desarrolladores de contratos tienen que asegurarse de que
los eventos sean emitidos si quieren que los clientes sean capaces de hacer el seguimiento.

![Contract execution via transaction](/img/events.png)

## Usando la UI de Contracts
### 1. función get()

Establecemos el valor inicial del contrato Flipper
`value` a `false` cuendo instanciemos el contrato. Comprobemos que este es el caso.

El la sección **Message to Send**, selecciona el mensaje "**get(): bool**" y acepta los valores por defecto para el resto de opciones.

Pulsa **"Read"** y confirma que el valor que te devuelve sea `false`:

![An image of Flipper RPC call with false](/img/flipper-false.png)

### 2. función flip()

Vamos a cambiar el valor a `true` ahora!

El mensaje alternativo para enviar con la UI es `flip()`. Otra vez, acepte los valores predeterminados para el resto de opciones y haga clic en **Call**

![An image of a Flipper transaction](/img/send-as-transaction.png)

Si la transacción fue exitosa, deberíamos poder volver a llamar a la función `get()` y ver nuestro almacenamiento actualizado:

![An image of Flipper RPC call with true](/img/flipper-true.png)

Woohoo! Has desplegado tu primer smart contract!

<div class="translateTodo">
## Using `cargo-contract`

Calling a contract can also be done via the command-line!

### 1. `get()` function

```bash
cargo contract build
cargo contract upload --suri //Alice

cargo contract instantiate --suri //Alice --args true
# The output of this command will contain the contract address,
# insert it in the command below.

cargo contract call --contract ... --message get --dry-run --suri //Alice
```

### 2. `flip()` function

```bash
cargo contract call --contract ... --message flip --suri //Alice
```
</div>