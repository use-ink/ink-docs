---
title: Contract Verification
slug: /basics/verification/contract-verification
hide_title: true
---

<img src="/img/title/verification.svg" className="titlePic" />

# Contract Verification

Contract verification is the process of matching a deployed ink! contract 
with the source code and metadata generated when it was built. 

The verification process for Rust-based smart contract languages is more
complex than EVM-based languages such as Solidity due to the Rust 
compiler not providing deterministic builds of contracts. 

In order to verify an ink! smart contract, the verification
process must recompile the contract in an identical host environment to
which it was originally built. The simplest way to do this is using a Docker
container.

Since ink! 5.0, `cargo-contract` provides the necessary tools to produce 
a verifiable build and verify a binary against the reference contract.

:::note
Contract verification tools are available from `cargo-contract`
version 4.0 on. To install it, run
```
cargo install cargo-contract --locked --version ^4
```
:::

## Verifiable build

As mentioned earlier, due to the non-deterministic nature of Rust compilation,
smart contract developers are advised to build their project inside
a Docker container we provide. Luckily, `cargo contract build`
provides the `--verifiable` flag for this purpose.

The steps for the verifiable build production are:
1. [Install Docker Engine](https://docs.docker.com/engine/install/)
2. (Linux users) Make sure you complete the [post-installation step](https://docs.docker.com/engine/install/linux-postinstall/).
This is required for the correct operation of the command.
4. Ensure Docker Engine is up and running, and the socket is accessible.
3. Simply run `cargo contract build --verifiable`.

This will pull the image with the version that corresponds to your `cargo-contract` crate version,
perform a build, and write artifacts in the standard output directory.

If everything is correct, you can verify the image version in the metadata file.
It should contain a key-value `image` after the `contract` information:
```json
  "contract": {
    "name": "flipper",
    "version": "4.3.0",
    "authors": [
      "Use Ink <ink@use.ink>"
    ]
  },
  "image": "paritytech/contracts-verifiable:4.0.0-alpha",
```

You are now ready to deploy your contract to a production chain.

:::note
The image is `amd64` based. Therefore, the build times can be significantly slower
on Apple Silicon machines. To overcome the issue enable _Rosetta for x86/amd64 emulation_ 
in _Settings_ → _Features in development_ tab in Docker Desktop App.
:::

## Verifying contract

Similarly to etherscan, you want to ensure that the given contract bundle
is indeed a copy of some well-known contract code.

There are two options when it comes to verification:
* Local bare-bones verification using `cargo contract verify`
* A third-party service [Sirato](./sirato.md)

`cargo contract verify` allows you to verify the given cargo project
against a reference contract bundle. 

Simply run `cargo contract verify <path>` 
in the cargo project directory. 

If the reference contract was not build inside a docker container, the command
will compare the build info from the reference contract with the current environment
to ensure a match in environment.

:::warning
If you are not using standardized verifiable builds. It is your responsibility
to ensure deterministic environment both for build and verification of 
smart contracts.
:::

If the build info from the `.contract` file matches the environment and a
docker `image` is present in metadata, `cargo contract` will build the
 project inside the specified `image` docker container. 
Otherwise, a local build is carried out.

Upon completion, the built contract bundle is compared to the reference one
and the result is returned.

## Advanced usage

If you would like to carry out other operations inside a deterministic environment
you can use our docker image. It is availble on [Docker Hub](https://hub.docker.com/repository/docker/paritytech/contracts-verifiable/general).
The entry point is set to `cargo contract` allowing you to specify other commands to be
executed.

:::tip
If you are building a multi-contract project, 
make sure you are executing the build in the parent directory in order to mount the directory 
of all contracts to be visible. Specify a relative manifest path to the root contract: 

`cargo contract build --verifiable --manifest-path ink-project-a/Cargo.toml`
:::

You can find a Dockerfile and further documentation on image usage 
in [the `cargo-contract` repository](https://github.com/use-ink/cargo-contract/tree/master/build-image)