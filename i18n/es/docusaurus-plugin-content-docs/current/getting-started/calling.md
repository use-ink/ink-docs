---
title: Ejecute su Contrato
slug: /getting-started/calling-your-contract
---

Ahora que se ha desplegado su contrato, podremos interactuar con él! Flipper solo tiene dos funciones,
 `flip()` y `get()` por lo que vamos a ver como jugar con ambas.

<div class="translateTodo">
## RPC calls vs. Transactions

There are two ways of calling a contract:

### Dry-run via RPC

Remote procedure calls, or RPC methods, are a way for an external program – for example, a browser
or front-end application – to communicate with a Substrate node.
For example, you might use an RPC method to read a stored value, submit a transaction, or request
information about the chain a node is connected to.

If a user interface displays the value of a contract (e.g. the balance of an account in
an ERC-20 contract), then this is typically done via RPC. Specifically it is done by
executing a synchronous dry-run of the contract method and returning its result.
The following schema depicts this.

![Contract dry-run via RPC](/img/rpc.png)

RPC calls don't require any tokens, they just require a connection to a node in the
network. It's important to note that the execution won't result in any state mutations
on the blockchain, it really just is a dry-run.

### State mutating via submitting a Transaction

The other method of executing a call to a contract is by submitting a transaction
on-chain. This requires tokens of the network to pay for the cost of the transaction.
The transaction will be put in a transaction pool and asynchronously processed.
The important implication here is that during submission of the transaction no result
is available. This is different from an RPC call.

The typical pattern for how a client can recognize the result of the contract call is
to have the contract emit an event and have the client actively listen for such an
event. Typically libraries (like `polkadot-js/api`) provide API functions to do just that.
The important take-away is that contract developers have to make sure that events
are emitted if they want clients to be able to pick up on them.

![Contract execution via transaction](/img/events.png)
</div>

## Using the Contracts UI
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