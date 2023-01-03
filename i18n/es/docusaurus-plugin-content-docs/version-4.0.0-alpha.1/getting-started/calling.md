---
title: Ejecute su Contrato
slug: /getting-started/calling-your-contract
---

Ahora que se ha desplegado su contrato, podremos interactuar con él! Flipper solo tiene dos funciones,
 `flip()` y `get()` por lo que vamos a ver como jugar con ambas.

### 1. función get()

Establecemos el valor inicial del contrato Flipper
`value` a `false` cuendo instanciemos el contrato. Comprobemos que este es el caso.

El la sección **Message to Send**, selecciona el mensaje "**get(): bool**" y acepta los valores por defecto para el resto de opciones.

Pulsa **"Read"** y confirma que el valor que te devuelve sea `false`:

![An image of Flipper RPC call with false](./assets/flipper-false.png)

### 2. función flip()

Vamos a cambiar el valor a `true` ahora!

El mensaje alternativo para enviar con la UI es `flip()`. Otra vez, acepte los valores predeterminados para el resto de opciones y haga clic en **Call**

![An image of a Flipper transaction](./assets/send-as-transaction.png)

Si la transacción fue exitosa, deberíamos poder volver a llamar a la función `get()` y ver nuestro almacenamiento actualizado:

![An image of Flipper RPC call with true](./assets/flipper-true.png)

Woohoo! Has desplegado tu primer smart contract!