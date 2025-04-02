---
title: Solidity & MetaMask Compatibility
hide_title: true
slug: /background/solidity-metamask-compatibility
---
<head>
    <meta name="description" content="Explanation of ink!'s compatibility with Solidity and Ethereum tooling (MetaMask, block explorers, Hardhat, …)." />
    <meta name="keywords" content="Ethereum, MetaMask, Solidity, Hardhat, ink!" />
    <meta property="og:title" content="Solidity & MetaMask Compatibility" />
    <meta property="og:description" content="Explanation of ink!'s compatibility with Solidity and Ethereum tooling (MetaMask, block explorers, Hardhat, …)." />
    <meta property="og:image" content="https://use-ink.com/img/opengraph/solidity-metamask.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Solidity and MetaMask" />
    <meta property="og:image:type" content="image/jpg" />
</head>

![Metadata Title Picture](/img/title/solidity.svg)

# Solidity & MetaMask Compatibility

:::caution
This page has not yet been written for ink! v6.

TODO @davidsemakula
:::

With ink! v6, we have introduced a new attribute `abi` for the `#[ink::contract]` macro.
It allows building your contract in Solidity-compatibility mode ([more details here](/macros-attributes/contract).

The implication of supporting Solidity ABI encoding is that there is a restriction on
the types you can use as constructor/message arguments or return types.
You won't be able to use Rust types for which no mapping to a Solidity type exists.
An error about a missing trait implementation for this type will be thrown.

Please note that your contract sizes will get larger if you support both the ink!
and Solidity ABI.

## MetaMask

…

## Hardhat, Foundry, etc.

…

## Block explorers

…