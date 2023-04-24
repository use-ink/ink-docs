---
title: Contract Verification
slug: /basics/contract-verification
hide_title: true
---

<img src="/img/title/magnifying-glass.svg" className="titlePic" />

# Contract Verification

Contract verification is the process of matching a deployed ink! contract 
with the source code and metadata generated when it was built. 

The verification process for Wasm-based smart contract languages is more
complex than EVM-based languages such as Solidity due to the Rust 
compiler not providing deterministic builds of contracts. 

In order to verify an ink! or Wasm smart contract the verification
process must recompile the contract in an identical host environment to
which it was originally built. The simplest way to do this is using a Docker
container.

As this will not be possible with existing smart contracts, a fallback 
mechanism has been created where a contract deployer can provide a 
signed metadata file to associate with the contract. This approach is also
outlined below.

:::note
At the current time, the `cargo-contract` CLI tool does not provide a Docker
image for ink! creating verifiable builds. The following 
[issue](https://github.com/paritytech/cargo-contract/issues/1065)
has been created with details of this.

As an interim solution, Web3 Labs are publishing a
[container image](https://github.com/web3labs/ink-verifier-image) for ink!
smart contract source code verification.
:::

Web3 Labs have made available a public version of their
[verification service](https://github.com/web3labs/ink-verifier-server) 
to cater for the ink! and DotSama ecosystems. This can be used alongside 
the verifiable build image container to verify ink! smart contracts.

The following steps outline how to create a verifiable build and 
subsequently verify it using these services.

## Performing a verifiable build

You should already be familiar with using `cargo-contract` to 
[compile your contract](/getting-started/building-your-contract).

You will need to install the ink! verified image crate:
```
cargo install — git 
https://github.com/web3labs/ink-verifier-image.git
```

You can now perform a verified build by running the following 
command in the smart contracts project folder:
```
build-verifiable-ink -i ghcr.io/web3labs/ink-verifier .
```

:::note
Reproducable builds only work with cargo-contract >= 2.0.2 and 
contracts generated with that version onwards. To work around 
this you can use the signed metadata file instead.
:::

If you were to use the 
[flipper example](/getting-started/creating-an-ink-project) you would see 
output similar to the below:
```
...
 [5/5] Generating bundle

Original wasm size: 20.6K, Optimized: 1.4K

The contract was built in RELEASE mode.

Your contract artifacts are ready. You can find them in:
/build/package/src/target/ink

  - flipper.contract (code + metadata)
  - flipper.wasm (the contract's code)
  - flipper.json (the contract's metadata)
  adding: src/ (stored 0%)
  adding: src/Cargo.lock (deflated 75%)
  adding: src/Cargo.toml (deflated 52%)
  adding: src/lib.rs (deflated 72%)
  adding: flipper.contract (deflated 64%)
Verification package in /build/target/ink/package.zip
Archive:  /build/target/ink/package.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
        0  2023-03-08 21:41   src/
   105695  2023-03-08 21:28   src/Cargo.lock
      573  2023-03-08 20:40   src/Cargo.toml
     5177  2023-03-08 20:40   src/lib.rs
     5278  2023-03-08 21:41   flipper.contract
---------                     -------
   116723                     5 files
```

If you have any issues running the build, you can built it yourself by 
running the following commands:
```
cd ../
git clone https://github.com/web3labs/ink-verifier-image.git
cd ink-verifier-image
docker build . -t ink-verifier:develop
cd ../flipper
build-verifiable-ink -t develop .
```

There will now be a package zipfile available which contains the contract 
source code, metadata and Wasm binary:
```
tree -L 3
.
├── Cargo.lock
├── Cargo.toml
├── lib.rs
└── target
    └── ink
        └── package.zip
```

Now that you have created the verified build, you can 
[deploy your contract](getting-started/deploy-your-contract).

Once deployed, you will need to make a note of the contract's code hash in 
order to verify it.

## Verifying an ink! smart contract

### Using the verification service web app

The [ink! Verification Service](https://github.com/web3labs/ink-verifier-server)
is a RESTful web service created for verifying smart contracts deployed using
[pallet-contracts](https://crates.io/crates/pallet-contracts).

Web3 Labs host a public instance of the service at 
[ink-verifier.sirato.xyz](https://ink-verifier.sirato.xyz/). A Swagger interface 
to the service is also avilable at 
[ink-verifier.sirato.xyz/api/api-docs/](https://ink-verifier.sirato.xyz/api/api-docs/).

<img src="/img/verification-service-api.png" alt="ink! Verification Service Swagger endpoint" />

The verification process entails the following steps:

1. A requestor uploads the source packge archive for a network and code hash
1. The server checks that:
   - The source code for the network and code hash is not already verified or 
     being verified
   - There is enough host resources to start a new verification
1. The server downloads the pristine Wasm byte code correspondening to the
   provided network and code hash
1. The server streams the archive if it is a compressed archive
1. The server moves the staging files to the processing directory
1. The server runs a container process for the verifier image to verify the 
   package in processing. See source code verification workflow for details
1. On the event of container exit the server moves the verified artificats to 
   the publish directory if the verification was successful, otherwise keeps a log in the errors directory

It works with any network that is defined in the 
[@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/endpoints) 
package.

In order to verify a deployed contract using the service you will need to use 
the `/verify/{network}/{codeHash}` endpoint which is documented 
[here](https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_verify__network___codeHash_).

Once a contract has been verified you can use the 
`/contract/{codeHash}/metadata.json` and `/contract/{codeHash}/src` endpoints 
to retrieve metadata and source code respectively.

### Using Sirato

Sirato Substrate is a smart contract explorer for ink! smart contracts. It 
integrates with the contract verification service allowing users to upload 
package files generated by the verifiable build image via the Sirato UI instead
of having to use the web endpoint.

In addition once a contract has been verified, details of any contract activity 
and events taking place on a parachain or Substrate chain are decoded for the 
user in Sirato.

For instance, in order to verify a contract deployed on the Rococo parachain,
you can head to the Sirato instance at 
[substrate.sirato.xyz](https://substrate.sirato.xyz/).

<img src="/img/sirato-substrate.png" alt="Sirato Substrate" />

From there you can navigate to the deployed code by clicking on the Code 
reference that matches the code hash returned by the cargo contract instantiate 
call.

Alternatively, you can navigate directly by entering the URL 
`https://substrate.sirato.xyz/codes/0x<code-hash>`.

<img src="/img/sirato-contract-instance.png" alt="Sirato contract instance view" />

Now click on the source code tab:

<img src="/img/sirato-package-upload.png" alt="Sirato package upload page" />

Then upload the verified `package.zip` file that you generated earlier.

<img src="/img/sirato-package-upload-done.png" alt="Sirato package upload complete" />

You can now start the verification process which kicks off a build of the 
provided resources.

<img src="/img/sirato-package-verify.png" alt="Sirato package verification" />

Once the process has finished you will see the message 
`Contract successfully verified`.

<img src="/img/sirato-verify-complete.png" alt="Sirato package verification complete" />

Clicking Browse verified files will display the associated metadata and 
source files for your contract.

<img src="/img/sirato-browse-verified.png" alt="Sirato browse verified contract" />

If we then browse back to our contract instance, any methods or events will 
now be decoded.

<img src="/img/sirato-decoded-transaction.png" alt="Sirato decoded contract transaction" />

We can verify this by invoking a method on the contract. We can now see the 
decoded method that was called in Sirato.

<img src="/img/sirato-decoded-transaction2.png" alt="Another Sirato decoded contract transaction" />

### Unverified metadata upload

The verification service supports uploading signed contract metadata as an 
additional alternative to reproducible builds generated metadata. Please note 
that the signed metadata is not verified and the owner of the code hash is 
trusted.

This feature responds to:
1. The support for `build_info` data is only available from `cargo-contract` 
   2.0.2.
2. There is no official image or procedure regarding reproducible builds 
   yet.
3. We want to expand the service utility in the meantime.

Although it is a far from ideal way to bind the metadata to a given code 
hash it prevents trivial exploitation by:
- Verifying that the signature is from the owner account of the code hash.
- Verifying that the signed message matches the sha256 of the uploaded 
  metadata.json + the code hash of the uploaded contract bytecode.

To provide signed metadata, you will need to use
the `/upload/{network}/{codeHash}` endpoint which is documented
[here](https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_upload__network___codeHash_)

For the request body you will need to sign this message using the account that 
uploaded the contract. You can use the [sign and verify tool](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/signing) 
in Polkadot.js. 

It is also possible to use Sirato for this, you can find instructions 
[here](https://github.com/web3labs/ink-verifier-server/blob/main/docs/TUTORIAL.md#s2---owner-signed-metadata).

