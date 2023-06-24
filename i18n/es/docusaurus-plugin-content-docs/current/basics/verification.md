---
title: Verificación de un contrato
slug: /basics/contract-verification
hide_title: true
---

<img src="/img/title/magnifying-glass.svg" className="titlePic" />

# Verificación de un Contrato 

La verificación de un contrato es el proceso de hacer coincidir un contrato deployado de ink! con el código fuente y la metadata generada cuando éste fue compilado. 

El proceso de verificación para lenguajes de smart contracts basados en Wasm es más complejo que los lenguajes basados en EVM tal como Solidity debido a que el compilador de Rust no provee una compilación determinista de los contratos.

Para verificar un smart contract de ink! o Wasm el proceso de verificación debe recompilar el contrato en un entorno de host idéntico al que fue creado originalmente. La manera más simple de hacerlo es usar un contenedor de Docker.

Como esto no será posible con los smart contracts existentes, se ha creado un mecanismo alternativo en el cual un deployador de contrato puede proveer un archivo de metadatos firmado para asociarlo al contrato. Este enfoque también se describe abajo.

:::note
Por el momento, la herramienta CLI `cargo-contract` no provee una imagen  Docker para ink! creando compilaciones verificables. El siguiente [issue](https://github.com/paritytech/cargo-contract/issues/1065) se ha creado con detalles sobre esto.

Como una solución provisoria, los Labs de Web3 están publicando una [imagen de contenedor](https://github.com/web3labs/ink-verifier-image) para la verificación de código fuente de los smart contracts ink!
:::

Los Labs de Web3 han puesto a disposición una versión pública de su  [servicio de verificación](https://github.com/web3labs/ink-verifier-server) para atender a los ecosistemas de ink! y DotSama. Esto puede ser usado junto al contenedor de compilación de imagen verificable para validar los smart contracts de ink!.

Los siguientes pasos describen cómo crear una compilación verificable y de ese modo validarlo usando estos servicios.

## Realizar una compilación verificable

Ya deberían estar familiarizados con el uso de `cargo-contract` para
[compilar su contrato](/getting-started/building-your-contract).

Necesitarán instalar el contenedor de imagen verificada de ink!:
```
cargo install — git 
https://github.com/web3labs/ink-verifier-image.git
```

Ahora se puede realizar una compilación verificada al ejecutar el siguiente comando en la carpeta de proyecto de smart contracts:
```
build-verifiable-ink -i ghcr.io/web3labs/ink-verifier .
```

:::note
Las compilaciones reproducibles sólo funcionan con cargo-contract >= 2.0.2
y los contratos generados con esa versión en adelante. Para solucionarlo se puede usar en su lugar el archivo de metadatos firmados.
:::

Si se usara el [ejemplo flipper](/getting-started/creating-an-ink-project) se vería un resultado similar al de abajo:

```
...
 [5/5] Generating bundle

Original wasm size: 20.6K, Optimized: 1.4K

The contract was built in RELEASE mode.

Your contract artifacts are ready. You can find them in:
/build/package/src/target/ink

  - flipper.contract (code + metadata)
  - flipper.wasm (the contract's code)
  - flipper.json (the contract's metadata)
  adding: src/ (stored 0%)
  adding: src/Cargo.lock (deflated 75%)
  adding: src/Cargo.toml (deflated 52%)
  adding: src/lib.rs (deflated 72%)
  adding: flipper.contract (deflated 64%)
Verification package in /build/target/ink/package.zip
Archive:  /build/target/ink/package.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
        0  2023-03-08 21:41   src/
   105695  2023-03-08 21:28   src/Cargo.lock
      573  2023-03-08 20:40   src/Cargo.toml
     5177  2023-03-08 20:40   src/lib.rs
     5278  2023-03-08 21:41   flipper.contract
---------                     -------
   116723                     5 files
```

Si se tiene cualquier problema ejecutando la compilación, uno mismo puede compilarla ejecutando los siguientes comandos:
```
cd ../
git clone https://github.com/web3labs/ink-verifier-image.git
cd ink-verifier-image
docker build . -t ink-verifier:develop
cd ../flipper
build-verifiable-ink -t develop .
```

Habrá ahora un paquete de zipfile disponible que contendrá el código fuente del contrato, los metadatos y el binario de Wasm:
```
tree -L 3
.
├── Cargo.lock
├── Cargo.toml
├── lib.rs
└── target
    └── ink
        └── package.zip
```

Ahora que se ha creado la compilación verificada puede [deployar su contrato](getting-started/deploy-your-contract).

Una vez deployado, se deberá tomar nota del código hash del contrato para poder verificarlo.

## Verificando un smart contract de ink!

### Usando la web app del servicio de verificación

El [servicio de verificación de ink!](https://github.com/web3labs/ink-verifier-server) es un servicio web RESTful creado para verificar smart contracts deployados usando el [pallet-contracts](https://crates.io/crates/pallet-contracts).

Web3 Labs alberga una instancia pública del servicio en 
[ink-verifier.sirato.xyz](https://ink-verifier.sirato.xyz/). Una interfaz Swagger para el servicio está también disponible en 
[ink-verifier.sirato.xyz/api/api-docs/](https://ink-verifier.sirato.xyz/api/api-docs/).

<img src="/img/verification-service-api.png" alt="ink! Verification Service Swagger endpoint" />

El proceso de verificación incluye los siguientes pasos:

1. Un solicitante sube un archivo de paquete fuente para una red y un código hash 
2. El servidor controla que:
   - El código fuente para la red y el código hash no han sido verificados aún o no están siendo verificados
   - Hay suficientes recursos del host para comenzar una nueva verificación 
3. El servidor descarga el Wasm byte code limpio correspondiente a la red y el código fuente provistos
4. El servidor transmite el archivo si es un archivo comprimido
5. El servidor mueve los archivos de staging al directorio processing
6. El servidor ejecuta un contenedor para que la imagen de verificación valide el paquete en processing. Ver el flujo de tareas de verificación del código fuente para detalles.
7. En el caso de una salida del contenedor el servidor mueve los artefactos verificados al directorio publish si la verificación fue exitosa, de otro modo mantiene un registro en el directorio de errores. 
 
Funciona con cualquier red que se define en el paquete [@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/endpoints).

Para verificar un contrato deployado usando el servicio necesitará usar el endpoint `/verify/{network}/{codeHash}` que está documentado [aquí](https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_verify__network___codeHash_).

Una vez que el contrato ha sido verificado se pueden usar los endpoints  
`/contract/{codeHash}/metadata.json` y `/contract/{codeHash}/src` para recuperar los metadatos y el código fuente respectivamente. 


### Usando Sirato

Sirato Substrate es un explorador de smart contracts para los smart contracts de ink!. Se integra con el servicio de verificación de contratos permitiendo a los usuarios cargar archivos de paquete generados por la imagen de compilación verificable por medio de la UI Sirato en lugar de tener que usar el endpoint web.

Por otra parte una vez que un contrato ha sido verificado, los detalles de cualquier actividad de contrato y eventos que tienen lugar en una parachain o Substrate chain son decodificados para el usuario en Sirato.

Por ejemplo, para poder verificar un contrato deployado en la parachain Rococo, puede dirigirse a la instancia de Sirato en [substrate.sirato.xyz](https://substrate.sirato.xyz/).


<img src="/img/sirato-substrate.png" alt="Sirato Substrate" />

Desde allí se puede navegar al código deployado al hacer click en la referencia de código que compatible con el código hash devuelto por la devuelto por la llamada de instanciación de cargo contract.

Alternativamente, se puede acceder directamente entrando en la URL 
`https://substrate.sirato.xyz/codes/0x<code-hash>`.

<img src="/img/sirato-contract-instance.png" alt="Sirato contract instance view" />

Ahora hacer clic en la pestaña código fuente:
<img src="/img/sirato-package-upload.png" alt="Sirato package upload page" />

Luego cargar el archivo verificado `package.zip` que se generó anteriormente.

<img src="/img/sirato-package-upload-done.png" alt="Sirato package upload complete" />

Ahora se puede comenzar el proceso de verificación que inicia una compilación de los recursos provistos.

<img src="/img/sirato-package-verify.png" alt="Sirato package verification" />

Una vez que el proceso ha terminado se verá el mensaje 
`Contract successfully verified`.

<img src="/img/sirato-verify-complete.png" alt="Sirato package verification complete" />

Al hacer click en los archivos verificados se mostrarán los metadatos y archivos fuente asociados a su contrato.

<img src="/img/sirato-browse-verified.png" alt="Sirato browse verified contract" />

Luego si accedemos de nuevo a nuestra instancia de contrato, cualquier método o evento estará ahora decodificado.

<img src="/img/sirato-decoded-transaction.png" alt="Sirato decoded contract transaction" />

Podemos verificar esto invocando un método en el contrato. Podemos ver ahora el método decodificado que fue llamado en Sirato.

<img src="/img/sirato-decoded-transaction2.png" alt="Another Sirato decoded contract transaction" />

### Carga de metadatos no verificados

El servicio de verificación soporta la carga de metadatos del contrato firmado como una alternativa adicional para metadatos generados por compilación reproducible. Por favor tener en cuenta que los metadatos firmados no están verificados y el titular del código hash es confiable. 

Esta carácteristica responde a:

1. El soporte para los datos `build_info` sólo está disponible desde `cargo-contract` 2.0.2. 
2. Aún no hay una imagen oficial o procedimiento con respecto a compilaciones reproducibles.
3. Mientras tanto queremos expandir la utilidad del servicio.

Aunque está lejos de ser la manera ideal para vincular los metadatos a un código hash dado evita un exploit trivial al:
- Verificar que la firma es de la cuenta del propietario del código hash. 
- Verificar que el mensaje firmado coincide con el sha256 del metadata.json subido + el código hash del bytecode del contrato.
 
 Para proveer los metadatos firmados, será necesario usar el endpoint 
 `/upload/{network}/{codeHash}` que está documentado [aquí](https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_upload__network___codeHash_)

Para el cuerpo de la solicitud se necesitará firmar el mensaje usando la cuenta que subió el contrato. Se puede usar la [herramienta firmar y verificar](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/signing) en Polkadot.js.
 
También se puede usar Sirato para esto, se pueden encontrar instrucciones 
[aquí](https://github.com/web3labs/ink-verifier-server/blob/main/docs/TUTORIAL.md#s2---owner-signed-metadata).
