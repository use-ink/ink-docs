---
title: Arranca un Nodo Substrate
slug: /getting-started/running-substrate
---

El [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node#note) es es un Substrate blockchain simple configurado para incluir el módulo `contracts`.

Es una opción muy cómoda si quieres un inicio rápido.

[Despues de instalar correctamente `substrate-contracts-node`](/getting-started/setup), puedes arrancar una cadena para el desarrollo local ejecutando:

```bash
substrate-contracts-node
```

![Una imagen del terminal arrancando el nodo Substrate](/img/substrate-contracts-node.png)

Deberías comenzar a ver bloques producidos por el nodo en su terminal.

Puede interactuar con el nodo utilizando Contracts UI:

<a href="https://contracts-ui.substrate.io">https://github.com/paritytech/contracts-ui</a>

Ahora configura el UI para conectar al nodo corriendo en local:

- Haga clic en el selector desplegable en la esquina superior izquierda.
- Elige el Nodo Local.

![Conecta al nodo local](/img/contracts-ui-local-node.png)
