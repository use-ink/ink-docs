---
title: Overview
hide_title: true
slug: /overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/title/ink! 6.0.svg')} title="The ink! 6.0 smart contracts toolkit release" style={{ marginBottom: 10 }} />

Welcome to the ink! documentation, the Rust-based smart contract language for the Polkadot ecosystem. This documentation will take you from your first "Hello, World!" contract to building sophisticated decentralized applications.

## Overview

### **Getting Started**
Begin your ink! journey with setup instructions, creating your first contract, and deploying it to a blockchain. Perfect for newcomers to both ink! and smart contract development.

### **Basics**
Master the fundamental concepts of ink! development including storage, contract interactions, events, and the ABI system that enables interoperability with other languages like Solidity.

### **Testing**
Learn comprehensive testing strategies from unit tests to end-to-end testing, including working with testing tools like DRink! for robust contract development.

### **Debugging**
Discover tools and techniques for debugging your contracts, from event logging to tracing execution and using development tools.

### **Macros & Attributes**
Deep dive into ink!'s powerful macro system that transforms your Rust code into smart contracts, including storage annotations, message definitions, and event handling.

### **Storage & Data Structures**
Understand how to efficiently store and manage data in your contracts, from simple values to complex mappings and custom data structures.

### **Linter**
Utilize ink!'s built-in security linter to identify common smart contract vulnerabilities and ensure your code follows best practices.

### **Frontend Development**
Connect your contracts to web applications using TypeScript/JavaScript libraries, React hooks, and various SDK options for building complete dApps.

### **Standards**
Explore community-maintained standards for tokens (PSP-22), NFTs (PSP-34), and other common contract patterns.

### **Technical Background**
Understand the deeper technical aspects including why Rust and RISC-V were chosen, how ink! compares to other smart contract languages, and when to choose smart contracts vs. parachains.

## Key Features of ink! v6

- **RISC-V & PolkaVM**: Modern execution environment for better performance
- **Solidity Compatibility**: Seamless interoperability with Ethereum ecosystem
- **Rust Ecosystem**: Access to existing Rust libraries and tooling
- **Type Safety**: Compile-time guarantees for safer smart contracts
- **Polkadot Integration**: Native support for cross-chain functionality

## Quick Navigation

- **New to ink!?** → Start with [Introduction to ink!](./intro.mdx)
- **Ready to code?** → Jump to [Getting Started](../getting-started/setup.md)
- **Need examples?** → Check out [Smart Contract Examples](https://github.com/use-ink/ink-examples)
- **Migrating?** → See [Migration Guides](../faq/migrating-from-ink-5-to-6.md)
- **Having issues?** → Visit [FAQ](../faq/faq.md)

## Community & Support

ink! is actively developed and maintained by Parity Technologies with strong community support. Whether you're building simple utilities or complex DeFi protocols, this documentation will guide you through every step of your ink! development journey.

## What is ink!?

<img src={useBaseUrl('/img/what-is-ink.png')} width="250" style={{ borderRadius: 10, border: '1px solid slategrey' }} />

ink! is a programming language for writing smart contracts...
