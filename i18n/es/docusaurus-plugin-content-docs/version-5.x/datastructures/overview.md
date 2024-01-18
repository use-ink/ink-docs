---
title: Introducción
slug: /datastructures/overview
hide_title: true
---

<img src="/img/title/storage.svg" className="titlePic" />

# Introducción

El crate `ink_storage` funciona como la librería de almacenamiento estándar para los smart contracts de ink!. Por el momento provee dos primitivas para interactuar con el storage,
[`Mapping`](https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html)
y [`Lazy`](https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Lazy).

`Mapping` es un map de pares key-value directamente en el storage del contrato. Es muy similar a las hash tables y comparable al tipo `mapping` que ofrece Solidity. Como un ingrediente esencial del lenguaje ink!, su principal ventaja es ser simple y liviano: favorece el ser eficiente en términos de costo de gas y tamaño de código por sobre proveer muchas funcionalidades de alto nivel encontradas en otras implementaciones como el tipo `ink::prelude::collections::HashMap`. En general, el `Mapping` de ink! será una elección sólida para la mayoría de los contratos. Además, los desarrolladores de smart contracts pueden implementar funcionalidades avanzadas por sí mismos.

`Lazy` es un tipo de wrapper que puede ser usado sobre cualquier otro tipo de storage compatible. Esto permite a los desarrolladores de smart contracts tener un control manual más fino sobre la estructura del storage del contrato al asignar una celda diferente para cada campo. Por ejemplo, puede ser usado para prevenir la carga anticipada de grandes campos del storage durante cada llamada al contrato. 
Posiblemente, podría ser deseable cambiar algunos aspectos sobre cómo su smart contract maneja las variables del storage. Puedes encontrar más información sobre esto en la sección sobre la [Estructura del Storage](https://use.ink/datastructures/storage-layout) en ink!.