---
title: Overview
slug: /datastructures/overview
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Introducción

El crate `ink_storage` actúa como la biblioteca de almacenamiento estándar para los smart contracts ink!.
En este momento proporciona dos primitivas para interactuar con el storage,
[`Mapping`](https://docs.rs/ink_storage/4.0.0-rc/ink_storage/struct.Mapping.html)
y [`Lazy`](https://docs.rs/ink_storage/4.0.0-rc/ink_storage/struct.Lazy.html).

`Mapping` es un mapeo de pares clave-valor directamente en el storage del contrato. 
Es muy similar a tablas hash tradicionales y comparable con el tipo `mapping` que ofrece Solidity.
Como ingrediente central del lenguaje ink!, su principal ventaja es ser simple y ligero:
Favorece ser eficiente en cuanto a costes de gas y tamaño de código
en lugar de proporcionar una gran cantidad de funciones de alto nivel que se encuentran en otras implementaciones
como el tipo `ink::prelude::collections::HashMap`.
Generalmente, el `Mapping` de ink! será una opción sólida para la mayoría de los contratos. Además, los
desarrolladores de smart contracts developers pueden implementar ellos mismos funcionalidades avanzadas.

`Lazy` es un tipo wrapper que puede ser utilizado sobre cualquier otro tipo compatible del storage.
Esto permite a los desarrolladores de smart contract un control manual detallado sobre el diseño del
storage del contrato asignando una celda separada del storage para esse campo. Por ejemplo, esto puede ser 
utilizado para prevenir el contrato de la carga ansiosa de grandes campos de almacenamiento durante cada llamada de contrato.
Posiblemente, puede ser deseable cambiar ciertos aspectos sobre cómo su contrato trata con sus variables del storage.
Puedes encontrar más información sobre esto en la sección sobre el ink! [Storage Layout](https://use.ink/datastructures/storage-layout).
