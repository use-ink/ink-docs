---
title: OpenBrush
slug: /getting-started/use-openbrush
---

[OpenBrush] es una librería para el desarrollo de contratos inteligentes en ink! mantenida por el equipo de [Brushfam].

Proporciona contratos estándar basados en las [Propuestas Estándar de Polkadot (PSPs)](https://github.com/w3f/PSPs), así como contratos de más alto nivel y macros de Rust que generan código de ink!.

Usar OpenBrush es simple, sólo tienes que añadir la dependencia a tu archivo `Cargo.toml`. Puedes encontrar un ejemplo [aquí](https://docs.openbrush.io/smart-contracts/overview).

### ¿Qué estándares y componentes de contrato contiene?

- **PSP22**: Token fungible (*equivalente a ERC20*) con extensiones.
- **PSP34**: Token no fungible (*equivalente a ERC721*) con extensiones.
- **PSP37**: *Equivalente a ERC1155* con extensiones.
- **Ownable** Restringe el accionar a los que no son propietarios.
- **Access Control**: Define un conjunto de roles y restringe el acceso a una acción determinada por roles.
- **Reentrancy Guard**: Previene llamadas reentrantes a una función.
- **Pausable**: Pausar/Resumir un contrato para deshabilitar/habilitar algunas operaciones.
- **Timelock Controller**: Ejecuta operaciones con determinado retardo.
- **Payment Splitter**: Divide la cantidad de tokens nativos entre participantes.

### Implementación genérica de Traits

OpenBrush añade soporte para implementaciones genéricas de Traits. De esta manera podras dividir un Trait y su implementación en diferentes archivos. Esto puede aumentar la legibilidad y mantenibilidad del código de tu contrato inteligente ([descripción detallada](https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md)).

### Wrapper de Traits

OpenBrush simplifica la comunicación entre contratos. No es necesario contar con un contrato que implemente un Trait en particular para poder llamarlo. Un Wrapper permite llamar a métodos de ese Trait referenciando la dirección de algún contrato de la red (hacer una llamada cruzada entre contratos).

### Documentación

- [Repositorio Github de OpenBrush](https://github.com/727-Ventures/openbrush-contracts)
- [Documentación oficial](https://docs.openbrush.io/)
- [Sitio web de OpenBrush](https://openbrush.io/)
- [Seminario de Substrate (Youtube)](https://www.youtube.com/watch?v=I5OFGNVvzOc)
- [Cómo usar modificadores?](https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76)

## Typechain-Polkadot

Otra herramienta útil para el desarrollo de contratos inteligentes ink! es [Typechain-Polkadot](https://github.com/727-Ventures/typechain-polkadot).

Typechain-Polkadot se utiliza para generar wrappers de Typescript de su contrato inteligente. Esto se puede utilizar para el desarrollo de la UI o en las pruebas de integración de sus contratos inteligentes ink!. La librería utiliza [`polkadot-js/api`](https://github.com/polkadot-js/api), pero es especialmente útil porque todas las llamadas y consultas están tipadas, por lo que se mitiga la posibilidad de obtener un error durante una llamada.

## Sol2Ink

[Sol2Ink](https://github.com/727-Ventures/sol2ink) es una herramienta que permite realizar migraciones de Solidity a ink!. El código en Solidity se envía a Sol2Ink y es convertido en un contrato ink!. La herramienta también puede utilizarse para aprender las diferencias entre el código de Solidity y el de ink!.

### ¿Preguntas?

Si tienes alguna pregunta sobre cómo utilizar cualquiera de estas herramientas, o simplemente sobre los contratos inteligentes de ink! en general, puede unirse al [canal de Element de Brushfam](https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation) o hacer una pregunta en el [Substrate Stack Exchange](https://substrate.stackexchange.com/).

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs