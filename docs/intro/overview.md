---
title: Overview
hide_title: true
slug: /overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/title/ink! 6.0.svg')} title="The ink! 6.0 smart contracts toolkit release" style={{ marginBottom: 10 }} />

Welcome to the ink! documentation, the Rust-based smart contract language for the Polkadot ecosystem. This documentation will take you from your first "Hello, World!" contract to building sophisticated decentralized applications.

## Overview

### **[Getting Started](/getting-started/creating.md)**
Begin your ink! journey with setup instructions, creating your first contract, and deploying it to a blockchain. Perfect for newcomers to both ink! and smart contract development.

### **[Basics](/basics/contract-template.md)**
Master the fundamental concepts of ink! development including storage, contract interactions, events, and the ABI system that enables interoperability with other languages like Solidity.

### **[Testing](/testing/overview.md)**
Learn comprehensive testing strategies from unit tests to end-to-end testing, including working with testing tools like DRink! for robust contract development.

### **[Debugging](/debugging/overview.md)**
Discover tools and techniques for debugging your contracts, from event logging to tracing execution and using development tools.

### **[Macros & Attributes](/macros-attributes/overview.md)**
Deep dive into ink!'s powerful macro system that transforms your Rust code into smart contracts, including storage annotations, message definitions, and event handling.

### **[Storage & Data Structures](/datastructures/overview.md)**
Understand how to efficiently store and manage data in your contracts, from simple values to complex mappings and custom data structures.

### **[Linter](/linter/overview.md)**
Utilize ink!'s built-in security linter to identify common smart contract vulnerabilities and ensure your code follows best practices.

### **[Frontend Development](/frontend/overview.md)**
Connect your contracts to web applications using TypeScript/JavaScript libraries, React hooks, and various SDK options for building complete dApps.

### **[Technical Background](/background/polkadot-sdk.md)**
Understand the deeper technical aspects including why Rust and RISC-V were chosen, how ink! compares to other smart contract languages, and when to choose smart contracts vs. parachains.