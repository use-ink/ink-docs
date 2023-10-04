---
title: Contract Verification
slug: /basics/verification/contract-verification
hide_title: true
---

<img src="/img/title/magnifying-glass.svg" className="titlePic" />

# Contract Verification

Contract verification is the process of matching a deployed ink! contract 
with the source code and metadata generated when it was built. 

The verification process for Rust-based smart contract languages is more
complex than EVM-based languages such as Solidity due to the Rust 
compiler not providing deterministic builds of contracts. 

In order to verify an ink! or Wasm smart contract the verification
process must recompile the contract in an identical host environment to
which it was originally built. The simplest way to do this is using a Docker
container.

Since ink! `4.0.0`, `cargo-contract` provides the necessary tools to produce 
a verifiable build and verify a binary against the reference contract.

## Verifiable build

As mentioned earlier, due to non-deterministic nature of compilation,
smart contract developers are advised to build their project inside
a Docker container we provide. Luckily, `cargo-contract contract build`
provides `--verifiable` flag for the action.

The steps for the verifiable build production are:
1. [Install Docker Engine](https://docs.docker.com/engine/install/)
2. (Linux users) Make sure you complete [post-installation step](https://docs.docker.com/engine/install/linux-postinstall/).
This is required for the correct operation of the command
4. Ensure Docker Engine is up and running, and the socket is accessible
3. Simply run `cargo contract build --verifiable`

This will pull the image with the version that correspond to your `cargo-contract` crate version,
perform a build, and write artifacts in the standard output directory.

If the everything is correct, you can verify the image version in the metadata file,
it should contain :
```json
  "contract": {
    "name": "flipper",
    "version": "4.3.0",
    "authors": [
      "Parity Technologies <admin@parity.io>"
    ]
  },
  "image": "paritytech/contracts-verifiable:4.0.0-alpha",
```

After that you are ready to deploy your contract on production chain.

:::note
The image is `amd64` based. Therefore, the build times can be significantly slower
on Apple Silicon machines. To overcome the issue enable _Rosetta for x86/amd64 emulation_ 
in _Settings_ -> _Features in development_ tab in Docker Desktop App.
:::

## Verifying contract

Similarly to etherscan, you want to ensure that the given contract bundle
is indeed a copy of some well-known contract code.

There are two option when it comes to verification:
* Local bare-bones verification using `cargo contract verify`
* A third-party service [Sirato](/basics/verification/sirato)

`cargo contract verify` allows you to verify the given cargo project
against a reference contract bundle. 

Simply run `cargo contract verify --contract <path>` 
in the cargo project directory. 

The command will compare build info from the reference contract with current environment,
if the reference contract was not build inside a docker container,
to ensure match in environment.

:::warning
If you are using standardized verifiable builds. It is your responsibility
to ensure deterministic environment both for build and verification of 
smart contracts.
:::

If the build info match the environment and docker image is present in metadata,
`cargo contract` will build current project inside a docker container. 
Otherwise, the local build is carried out.

Upon completion, the built contract bundle is compared to the reference one,
and the result is returned.

## Advanced usage

If you would like to carry out other operations inside a deterministic environment.
The docker image is available on [Docker Hub](https://hub.docker.com/repository/docker/paritytech/contracts-verifiable/general).
The entry point is set to `cargo contract` allowing you to specify other commands to be
executed.

:::tip
If you are building a multi-contract project, 
make sure you are executing the build in the parent directory in order to mount the directory 
of all contracts to be visible. Specify a relative manifest path to the root contract: 

`cargo contract build --verifiable --release --manifest-path ink-project-a/Cargo.toml`
:::

You can find a Dockefile and further documentation on image usage 
in [`cargo-contract` repository](https://github.com/paritytech/cargo-contract/tree/master/build-image)