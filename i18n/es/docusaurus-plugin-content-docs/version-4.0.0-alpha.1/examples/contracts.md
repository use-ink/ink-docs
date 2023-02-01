---
title: Smart Contracts
slug: /examples/smart-contracts
---

TODO: Please see [this file](https://github.com/paritytech/ink-docs/blob/7a62015b4ea9c020a175404017bb5492beb24328/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/examples/overview.md), some content can be recycled.

The ink! repository contains an <a href="https://github.com/paritytech/ink/tree/master/examples">examples folder</a>
in which you find a number of examples written in ink!.
Some of the most interesting ones:

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/flipper"><img src="/img/icons/flipper.svg" width="100" /></a>
        <p>
            Our "Hello, World!".<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/flipper">
                » view example
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/erc20"><img src="/img/icons/erc20.svg" width="100" /></a>
        <p>
            An ERC-20 implementation.<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/erc20">
                » view example
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/erc721"><img src="/img/icons/nft.svg" width="100" /></a>
        <p>
            <a href="https://github.com/paritytech/ink/tree/master/examples/erc721">
                » view ERC-721
            </a>
            <br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/erc1155">
                » view ERC-1155
            </a>
        </p>
    </div>
</div>

<br/>

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts"><img src="/img/icons/upgradable.svg" width="100" /></a>
        <p>
            An upgradeable contract.<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts">
                » view example
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/multisig"><img src="/img/icons/multisig.svg" width="100" /></a>
        <p>
            A multi-signature wallet.<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/multisig">
                » view example
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/rand-extension"><img src="/img/icons/rand-extension.svg" width="100" /></a>
        <p>
            Allow runtime access.<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/rand-extension">
                » view example
            </a>
        </p>
    </div>
</div>

<br/>

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/delegator"><img src="/img/icons/delegator.svg" width="100" /></a>
        <p>
            Cross-contract calls.<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/delegator">
                » view example
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/trait-erc20"><img src="/img/icons/trait-erc20.svg" width="100" /></a>
        <p>
            Implements an <code>Erc20</code> trait.<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/trait-erc20">
                » view example
            </a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/paritytech/ink/tree/master/examples/dns"><img src="/img/icons/dns.svg" width="100" /></a>
        <p>
            Simple <code>DomainNameService</code>.<br/>
            <a href="https://github.com/paritytech/ink/tree/master/examples/dns">
                » view example
            </a>
        </p>
    </div>
</div>

<br/>

If not noted otherwise in the readme, to build a single example navigate to the root of
the example and run:

```bash
cargo contract build
```

As a result you'll get a file `target/<example-name>.wasm` file, a `metadata.json` file
and a `<example-name>.contract` file in the `target/` folder of your contract.
The `.contract` file combines the Wasm and metadata into one file and needs to be used
when deploying the contract.

For further information, please have a look at the
[Deploy your Contract](/getting-started/deploy-your-contract) section.