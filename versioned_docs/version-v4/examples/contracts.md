---
title: Smart Contracts
slug: /examples/smart-contracts
---

We have a repository <a href="https://github.com/use-ink/ink-examples/tree/main">`ink-examples`</a>,
in which you find a number of contracts written in ink!.
Some of the most interesting ones:

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/flipper"><img src="/img/icons/flipper.svg" width="100" /></a>
        <p>
            Our "Hello, World!".<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/flipper">» view example</a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/erc20"><img src="/img/icons/erc20.svg" width="100" /></a>
        <p>
            An ERC-20 implementation.<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/erc20">» view example</a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/erc721"><img src="/img/icons/nft.svg" width="100" /></a>
        <p>
            <a href="https://github.com/use-ink/ink-examples/tree/main/erc721">» view ERC-721</a>
            <br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/erc1155">» view ERC-1155</a>
        </p>
    </div>
</div>

<br/>

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts"><img src="/img/icons/upgradable.svg" width="100" /></a>
        <p>
            An upgradeable contract.<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts">» view example</a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/multisig"><img src="/img/icons/multisig.svg" width="100" /></a>
        <p>
            A multi-signature wallet.<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/multisig">» view example</a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/rand-extension"><img src="/img/icons/rand-extension.svg" width="100" /></a>
        <p>
            Allow runtime access.<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/rand-extension">» view example</a>
        </p>
    </div>
</div>

<br/>

<div className="row">
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts/delegator"><img src="/img/icons/delegator.svg" width="100" /></a>
        <p>
            Cross-contract calls.<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts/delegator">» view example</a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/trait-erc20"><img src="/img/icons/trait-erc20.svg" width="100" /></a>
        <p>
            Implements an <code>Erc20</code> trait.<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/trait-erc20">» view example</a>
        </p>
    </div>
    <div className="col text--center">
        <a href="https://github.com/use-ink/ink-examples/tree/main/dns"><img src="/img/icons/dns.svg" width="100" /></a>
        <p>
            Simple <code>DomainNameService</code>.<br/>
            <a href="https://github.com/use-ink/ink-examples/tree/main/dns">» view example</a>
        </p>
    </div>
</div>

<br/>

If not noted otherwise in the readme, to build a single example navigate to the root of
the example and run:

```bash
cargo contract build
```

As a result you'll get a file `target/<example-name>.wasm` file, a `<example-name>.json` file
and a `<example-name>.contract` file in the `target/` folder of your contract.
The `.contract` file combines the Wasm and metadata into one file and needs to be used
when deploying the contract.

For further information, please have a look at the
[Deploy your Contract](../getting-started/deploying.md) section.