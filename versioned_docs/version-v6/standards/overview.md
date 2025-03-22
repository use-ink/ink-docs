---
title: Overview
slug: /standards/overview
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Standards Title Picture](/img/title/standards.svg)

# Overview

Standards are maintained by the community initiative ink!hub.
You can find them here: [github.com/inkdevhub/standards](https://github.com/inkdevhub/standards).

## Wallet Support

TODO

<table className="wallet-table text--center">
    <tr>
        <th></th>
        <th className="text--left">Contract Interactions</th>
        <th className="text--left">Tokens (PSP-22)</th>
        <th className="text--left">NFTs (PSP-34)</th>
    </tr>
    <tr>
        <th>
            <a href="https://www.subwallet.app/" title="SubWallet" >
                <img src={useBaseUrl('/img/wallets/subwallet.svg')} className="wallet" alt="SubWallet" width="200"/>
            </a>
        </th>
        <td><img src={useBaseUrl('/img/icons/checkmark1.svg')} className="checkmark" /></td>
        <td><img src={useBaseUrl('/img/icons/checkmark1.svg')} className="checkmark" /></td>
        <td><img src={useBaseUrl('/img/icons/checkmark1.svg')} className="checkmark" /></td>
    </tr>
    <tr>
        <th>
            <a href="https://polkadot.js.org/extension/" title="Polkadot{.js}">
                <img src={useBaseUrl('/img/wallets/polkadot-js.svg')} className="wallet" alt="Polkadot{.js}" width="200"/>
            </a>
        </th>
        <td><img src={useBaseUrl('/img/icons/checkmark1.svg')} className="checkmark" /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>
            <a href="https://www.talisman.xyz/" title="Talisman">
                <img src={useBaseUrl('/img/wallets/talisman.svg')} className="wallet" alt="Talisman" width="200"/>
            </a>
        </th>
        <td><img src={useBaseUrl('/img/icons/checkmark1.svg')} className="checkmark"/></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>
            <a href="https://metamask.io" title="MetaMask">
                <img src={useBaseUrl('/img/wallets/metamask.svg')} className="wallet" alt="metamask" width="200"/>
            </a>
        </th>
        <td><img src={useBaseUrl('/img/icons/checkmark1.svg')} className="checkmark"/></td>
        <td></td>
        <td></td>
    </tr>
</table>


## PSP-22

A standard for a fungible token interface for WebAssembly smart contracts which run on Substrate's [`contracts` pallet](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/contracts).

This proposal aims to define the standard fungible token interface for WebAssembly smart contracts, just like [EIP-20](https://github.com/ethereum/EIPs/edit/master/EIPS/eip-20.md) for the Ethereum ecosystem.

## PSP-34

A standard for a Non-Fungible Token interface for WebAssembly smart contracts which run on Substrate's [`contracts` pallet](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/contracts).

This proposal aims to define the standard Non-Fungible Token interface for WebAssembly smart contracts, just like [EIP-721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) for the Ethereum ecosystem.

## PSP-37

A standard for a Multi Token interface for WebAssembly smart contracts which run on Substrate's [`contracts` pallet](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/contracts).

This proposal aims to define the standard Multi Token interface for WebAssembly smart contracts, just like [EIP-1155](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md) for the Ethereum ecosystem.
