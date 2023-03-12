---
title: Contratos Inteligentes
slug: /examples/smart-contracts
---

Tenemos un repositorio <a href="https://github.com/paritytech/ink-examples/tree/main">`ink-examples`</a>, 
en el que encontrará una serie de contratos escritos en ink!. 
Algunos de los más interesantes son:

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/flipper"><img src="/img/icons/flipper.svg" width="100" /></a>
        <p>
            Nuestro "Hola, Mundo!".<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/flipper">
                » ver ejemplo
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/erc20"><img src="/img/icons/erc20.svg" width="100" /></a>
        <p>
            Una implementación de ERC-20.<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/erc20">
                » ver ejemplo
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/erc721"><img src="/img/icons/nft.svg" width="100" /></a>
        <p>
            <a href="https://github.com/paritytech/ink-examples/tree/main/erc721">
                » ver ERC-721
            </a>
            <br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/erc1155">
                » ver ERC-1155
            </a>
        </p>
    </div>
</div>

<br/>

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"><img src="/img/icons/upgradable.svg" width="100" /></a>
        <p>
            Un contrato actualizable.<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts">
                » ver ejemplo
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/multisig"><img src="/img/icons/multisig.svg" width="100" /></a>
        <p>
            Una billetera multi-firma.<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/multisig">
                » ver ejemplo
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/rand-extension"><img src="/img/icons/rand-extension.svg" width="100" /></a>
        <p>
            Acceso al runtime.<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/rand-extension">
                » ver ejemplo
            </a>
        </p>
    </div>
</div>

<br/>

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/delegator"><img src="/img/icons/delegator.svg" width="100" /></a>
        <p>
            Comunicación entre contratos.<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/delegator">
                » ver ejemplo
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/trait-erc20"><img src="/img/icons/trait-erc20.svg" width="100" /></a>
        <p>
            Implementación de un trait <code>Erc20</code>.<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/trait-erc20">
                » ver ejemplo
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink-examples/tree/main/dns"><img src="/img/icons/dns.svg" width="100" /></a>
        <p>
            Un simple <code>DNS</code>.<br/>
            <a href="https://github.com/paritytech/ink-examples/tree/main/dns">
                » ver ejemplo
            </a>
        </p>
    </div>
</div>

<br/>

Si no se indica lo contrario en el archivo README, para compilar un único ejemplo navegue 
hasta la carpeta raíz del ejemplo y ejecute:

```bash
cargo contract build
```

Como resultado, obtendrá un archivo `target/<nombre-del-ejemplo>.wasm`, un archivo `metadata.json` 
y un archivo `<nombre-del-ejemplo>.contract` en la carpeta `target/` de su contrato. 
El archivo `.contract` combina el Wasm y la metadata en un sólo archivo que debe utilizarse al 
desplegar el contrato.

Para más información, por favor consulte la sección 
[Despliega tu Contrato”](/getting-started/deploy-your-contract)“.