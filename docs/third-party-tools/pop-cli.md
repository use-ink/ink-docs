---
title: Pop CLI
slug: /getting-started/pop-cli
---

# Pop CLI

[Pop CLI](https://onpop.io/cli/) is a powerful command-line tool designed to accelerate smart contract development within the Polkadot ecosystem. It provides developers with easy-to-use CLI commands for setting up their environment, scaffolding contract projects, testing, and deploying—all from the terminal.

Pop CLI simplifies contract development with features like:

- Scaffolding new smart contract projects from predefined templates

- Running unit and end-to-end tests in local environments

- Deploying contracts to local testnets or live production chains

- Easily and interactively guiding developers to call and interact with their contracts

Pop CLI streamlines the entire smart contract development workflow, so developers can focus more on building and less on setup.

### Install Pop CLI

To install Pop CLI run the following command
```bash
cargo install --force --locked pop-cli
```
Confirm that Pop CLI is installed by running `pop --help` in your terminal
```bash
pop --help
```

### Initialize a Project

Start a new project quickly using Pop CLI `pop new contract` command:

![pop new contract](/img/popnewcontract.gif)
Once the project is generated, move into the new directory and build your parachain:

```
cd my_contract
pop build --release
```

Pop CLI integrates the [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node) enabling you to easily spin up a local network for smart contract development and testing. This local environment is automatically launched when deploying your contract using the `pop up` command or running your e2e tests using the `pop test --e2e` command.

![pop up contract](/img/popupcontract.gif)
After deployment, you can easily interact with your smart contract using the `pop call contract` command:

### Interact with your contract
![pop call contract](/img/popcallcontract.gif)
## Where to Go Next
For a comprehensive guide to all Pop CLI features and advanced usage, see the official [Pop CLI](https://learn.onpop.io/contracts) documentation.  

:::tip
 Pop CLI also offers powerful solutions for Polkadot-SDK based chains developers. If you're interested in that path, check out the [Pop CLI Appchains](https://learn.onpop.io/appchains) documentation.
:::

## Join the community

Join the [Pop Telegram Group](https://t.me/onpopio) to ask questions, share ideas, and collaborate.

---
