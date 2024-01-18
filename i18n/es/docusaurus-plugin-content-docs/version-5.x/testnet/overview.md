---
title: Contratos en Rococo
hide_title: true
slug: /testnet
---

<img src="/img/title/testnet.svg" className="titlePic" />

# Contratos en Rococo

[Rococo](https://wiki.polkadot.network/docs/build-pdk#rococo-testnet) es una testnet para 
las parachains de Polkadot y Kusama. Allí tenemos una testnet llamada Contracts funcionando como una parachain.

<img src="/img/contracts-on-polkadot-js.png" alt="Parachain para Contratos Inteligentes en Rococo" />

## ¿Qué es la Parachain Contracts?

Es una parachain de [Substrate](https://github.com/paritytech/substrate) para 
Contratos Inteligentes. La hemos configurado para usar el modulo de Contratos Inteligentes
 de Substrate - el pallet [`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) - 
 con una configuración default.

El código de esta parachain puede ser encontrado [en el repositorio de `cumulus`](https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo). Nuestra parachain usa el token nativo de la relay chain Rococo (`ROC`) en lugar de tener el suyo propio. 
Debido a esto, necesitarás `ROC` para poder desplegar tus contratos en nuestra testnet.


## ¿Cómo puedo usarla?
### (1) Crear una Cuenta

Como primer paso, deberías crearte una cuenta. Esto puede hacerse utilizando herramientas de linea de comandos (por ejemplo, `subxt`) 
o via billetera (por ejemplo, con la extensión de navegador `polkadot-js`). [Aquí](https://wiki.polkadot.network/docs/learn-account-generation) tienes una guía detallada.


### (2) Obtener Tokens de Testnet

<img src="/img/chest.svg" alt="imagen de un cofre del tesoro" className="faucetHeroImage" />

Como segundo paso, debes adquirir tokens de testnet `ROC` a traves del [Faucet de Rococo](/faucet).

Alternativamente, puedes usar la [sala de chat de Element](https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet). Debes enviar un mensaje como el siguiente (Notar el `:1002` luego de la dirección de la billetera):

```
!drip YOUR_SS_58_ADDRESS:1002
```

El número `1002` es la identificación de la parachain Contracts en Rococo. Al suministrarlo, le indicas al faucet que teletransporte tokens `ROC` directamente a tu cuenta en la parachain.
Si tienes algunos tokens en la relay chain Rococo, puedes transportarlos a la parachain Contracts por tus propios medios. Lee más acerca de transportar activos [aquí](https://wiki.polkadot.network/docs/learn-teleport).

Si todo funcionó bien, los tokenes `ROC` telentransportados van aparecer en tu cuenta. 
En caso de que estés usando el frontend de `polkadot-js`, los podrás ver en [la pestaña de "Cuentas" para la parachain Contracts](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts).

<img src="/img/roc-in-wallet.png" alt="Tokens de la testnet Rococo en la billetera" />

### (3) Despliega Tu Contrato

Una vez que tengas tokens `ROC` en la parachain Contracts, puedes desplegar tu contrato casi como si lo harías con un nodo local de desarrollador. 
La única diferencia es que no puedes utilizar cuentas pre-creadas como `Alice` o `Bob`, sino la que tú has generado.

<img src="/img/deployment-acc.png" alt="Despliega un contrato inteligente en Rococo/Polkadot" />

También puedes desplegar tu contrato desde la línea de comandos a través de `cargo-contract`. 
Asegúrate de estar en la carpeta de tu contrato y que se ha compilado recientemente. 
A continuación, ejecute:

```bash
cargo contract upload --suri "your twelve or twenty-four words"
cargo contract instantiate --suri … --constructor new --args true
```

`new` en este caso sería un método constructor expuesto por el contrato, 
`--args` sería cualquier argumento que el constructor espere.

Consulte [la documentación de `cargo-contract`](https://github.com/paritytech/cargo-contract/blob/master/crates/extrinsics/README.md#commands) para obtener información más detallada.
