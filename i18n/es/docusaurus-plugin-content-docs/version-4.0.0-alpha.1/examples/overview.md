---
title: Introducción
slug: /examples
---

En nuestra <a href="https://github.com/paritytech/ink/tree/master/examples">carpeta de ejemplos</a>  puedes encontrar un buen número de ejemplos
escritos con ink!.

Algunos de los más interesantes:

* `delegator` ‒ Implementa las llamadas cross-contract.
* `trait-erc20` ‒ Define un trait para contratos `Erc20` y lo implementa.
* `erc721` ‒ Un ejemplo de implementación de tokens NFT `Erc721`.
* `dns` ‒  Un simple smart contract `DomainNameService`.
* …y más, solo busca en la carpeta 🙃.

Para compilar un ejemplo navega a la raíz del ejemplo y ejecuta:
```bash
cargo contract build
```

Como resultado obtendras un fichero `target/flipper.wasm`, un fichero `metadata.json` y un fichero `<contract-name>.contract` en la carpeta `target/` de tu contrato.
El fichero `.contract` combina el Wasm y el metadata en un fichero y necesita ser utilizado cuando despliegues el contrato.

Pra más información, por favor mira la sección [Despliega tu Contrato](/getting-started/deploy-your-contract) de nuestro [smart contracts workshop](https://docs.substrate.io/tutorials/v3/ink-workshop/pt1).


