---
title: Desplega tu Contrato
slug: /getting-started/deploy-your-contract
hide_title: true
---

<img src="/img/title/rocket.svg" className="titlePic" />

# Desplega tu Contrato

Ahora que hemos generado el binario Wasm desde nuestro código fuente y nos hemos conectado a un nodo local, 
queremos desplegar este contrato en nuestro Substrate blockchain.

El despliegue de los smart contracts en Substrate es un poco diferente que los blockchain smart contracts tradicionales.

Mientras que en otras plataformas cada vez que se carga un contrato se despliega un nuevo blob del código fuente de los smart contracts,
Substrate opta por optimizar este comportamiento. Por ejemplo, el token estándar ERC20 se ha desplegado en Ethereum miles de veces, 
algunas veces solo con cambios en la configuración inicial (mediante la función de Solidity `constructor`). Cada una de estas instancias
ocupan espacio en la blockchain equivalente al tamaño del código fuente del contrato, aunque en realidad no se modificó ningún código.

En Substrate, el proceso de despliegue del contrato se divide en dos pasos:

1. Poner el código del contrato en la blockchain.
2. Crear una instancia de tu contrato.

Con este patrón, código de un contrato como el estándar ERC20 puede ponerse en la blockchain una sola vez, pero instanciarse muchas veces.
No es necesario cargar el mismo código fuente continuamente y desperdiciar espacio en la blockchain.

## TODO: Using the Contracts UI

### 1. Cargar el código del Contrato 

Aquí cargaremos el código del contrato e instanciaremos una copia del contrato en la blockchain (que suele ser la razón por la que cargamos el código del contrato en primer lugar):

- Haga clic en el botón **Add New Contract** de la barra lateral.
- Haga clic en el botón **Upload New Contract Code** en la página de `Add New Contract`.
- Elige una **Instantiation account** (e.g. ALICE).
- Dale una descripción al contrato **Name** (e.g. Flipper Contract).
- Arrastra el fichero `flipper.contract` que contiene el paquete Wasm blob y la metadata en el area de `drag & drop`. Verás la UI analizar los metadatos  y habilitar el botón que te permitira avanzar al siguiente paso.
- aga clic en el botón **Next**.

![Flipper Instantiate Contract 01](/img/contracts-ui-0.png)

### 2. Instanciar un Contrato en la Blockchain

Los Smarts contracts existen como una extensión del account system de la blockchain. Por lo tanto, 
crear una instancia de este contrato creará un nuevo `AccountId` que almacenará cualquier balance gestionado por el
smart contract y nos permite interactuar con el contrato.

Ahora una pantalla nos mostrara la información que representa nuestro smart contract. Vamos a instanciar una copia del smart contract:

- Aceptar las opciones por defecto del contrato **Deployment Constructor**.
- Aceptar la opción por defecto **Max Gas Allowed** de `200000`.
- Haga click en `Next`

![Flipper Instantiate Contract 02](/img/contracts-ui-1.png)

La transacción ahora está en cola, revisa tus datos y haga clic en  **Upload and Instantiate** o vuelve para modificar tus inputs.

![Flipper Instantiate Contract 03](/img/contracts-ui-2.png)

Cuando hagas clic en **Upload and Instantiate** deberías ver que el extrinsic `instantiateWithCode` 
se está procesando, y aparece una ráfaga de eventos, incluyendo la creación de una nueva cuenta (`system.NewAccount`) 
y la instanciación del contrato (`contracts.Instantiated`).
Seras redirigido a una nueva página, donde podrás interactuar con la nueva instancia creada del contrato.

![Flipper Instantiate Success](/img/contracts-ui-3.png)

<div class="translateTodo">
## Using `cargo-contract`

Contracts can be deployed via the command-line as well. With `cargo-contract`
it's just a simple sequence of:

```bash
cargo contract build
cargo contract upload --suri //Alice
cargo contract instantiate --suri //Alice --args true
```
</div>