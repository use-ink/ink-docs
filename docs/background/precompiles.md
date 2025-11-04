---
title: Precompiles
hide_title: true
slug: /background/precompiles
---

<head>
    <meta name="description" content="Explanation of precompiles in Polkadot SDK and `pallet-revive`." />
    <meta name="keywords" content="Precompile, XCM, Polkadot SDK, pallet-revive, Smart Contracts" />
    <meta property="og:title" content="Precompiles in `pallet-revive`" />
    <meta property="og:description" content="Explanation of how ink! ties into Polkadot SDK and `pallet-revive`." />
</head>

![Polkadot SDK Title Picture](/img/title/polkadot.svg)

# Precompiles in Polkadot SDK

Precompiles act on-chain like regular contracts: they have an address and 
contracts can interact with them as if they were other contracts. But their code 
is not stored on-chain, instead they are implemented outside the
sandboxed environment in which contracts are normally executed.

This makes precompiles a very efficient option to execute e.g. cryptographic functionality.
But they need to be added by the chain operator. Since they run outside the
sandbox, bugs or exploits here can have grievous consequences.

The execution engine for ink! contracts, `pallet-revive`, supports precompiles.
Some precompiles are enabled by default, others are shipped with Polakdot SDK,
but are optional.

An important distinction is that precompiles can be written in a way that they
take either raw bytes as input, or in a way that they expose a complete
Solidity interface, requiring also the Solidity ABI and encoding as the calling 
convention.

## Primitive Precompiles

The `pallet-revive` ships with a number of precompiles that are enabled by default:

| Name                                                                                                                             | Address | Called via         | Enabled by default? | Implemented in ink!? |
|----------------------------------------------------------------------------------------------------------------------------------|---------|--------------------|---------------------|----------------------|
| [EcRecover](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/ecrecover.rs)  | 0x1     | Raw bytes          | ✅                  | ✅|
| [Sha256](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/sha256.rs)        | 0x2     | Raw bytes          | ✅                  | ✅|
| [Ripemd160](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/ripemd160.rs)  | 0x3     | Raw bytes          | ✅                  | Not yet              |
| [Identity](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/identity.rs)    | 0x4     | Raw bytes          | ✅                  | Not yet              |
| [Modexp](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/modexp.rs)        | 0x5     | Raw bytes          | ✅                  | Not yet              |
| [Bn128Add](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/bn128.rs)       | 0x6     | Raw bytes          | ✅                  | Not yet              |
| [Bn128Mul](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/bn128.rs)       | 0x7     | Raw bytes          | ✅                  | Not yet              |
| [Bn128Pairing](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/bn128.rs)   | 0x8     | Raw bytes          | ✅                  | Not yet              |
| [Blake2F](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/blake2f.rs)      | 0x9     | Raw bytes          | ✅                  | Not yet              |
| [PointEval](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/point_eval.rs) | 0a      | Raw bytes          | ✅                  | Not yet              |
| [System](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/system.rs)        | 0x900   | Solidity interface | ✅                  | ✅|
| [Storage](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/src/precompiles/builtin/storage.rs)      | 0x901   | Solidity interface | ✅                  | ✅|

The Polkadot SDK contains a number of additional precompiles that can be enabled at will:

| Name                                                                                                           | Address | Called via         | Enabled by default? | Implemented in ink!? |
|----------------------------------------------------------------------------------------------------------------|---------|--------------------|---------------------|----------------------|
| [AssetsPrecompile](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/assets/precompiles)  | 0x0120  | Solidity interface | ✅                  | Not yet              |
| [XcmPrecompile](https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/pallet-xcm/precompiles/)   | 0xA0000 | Raw bytes          | ✅                  | ✅                    |

## Add your own precompiles

It's possible to extend the `pallet-revive` with custom precompiles.
This is not relevant if you are only deploying your contracts to a chain 
that you don't control.

But if you are building a blockchain with Polkadot SDK and want to give
users the ability to access specific functionality of your blockchain
runtime in their smart contracts, then that's the way to go.

Through this, smart contract developers can utilize the business logic primitives of the chain to build a new
application on top of it. Think for example of a decentralized exchange blockchain. This chain would in its 
simplest form have an order book to place bids and asks — there is no need for taking untrusted, Turing-complete, 
programs from the outside. The parachain could decide to expose the order book into smart contracts though, 
giving external developers the option of building new applications that utilize the order book. For example, 
to upload trading algorithms as smart contracts to the chain.
Smart contracts here are an opportunity to up the user engagement and drive usage of the chain's native token. 
And the billing for utilizing the chain comes already built-in with the pallet — users have to pay gas fees 
for the execution of their smart contract.

For example, on the Polkadot testnet Westend the `pallet-revive` is configured to use 
these additional precompiles ([here](https://github.com/paritytech/polkadot-sdk/blob/master/cumulus/parachains/runtimes/assets/asset-hub-westend/src/lib.rs#L1192-L1196)):

```rust
type Precompiles = (
    ERC20<Self, InlineIdConfig<0x120>, TrustBackedAssetsInstance>,
    ERC20<Self, InlineIdConfig<0x320>, PoolAssetsInstance>,
    XcmPrecompile<Self>,
);
```

If you are looking to develop your own custom precompile, here are some starting points:

Our `ink-node` contains a simple demo precompile. You can find its source code 
[here](https://github.com/use-ink/ink-node/blob/main/runtime/src/demo_precompile.rs) and its 
Solidity interface specification [here](https://github.com/use-ink/ink-node/blob/main/runtime/src/IDemo.sol).

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

/// This trait is an implementation of the Solidity interface found at
/// <https://github.com/use-ink/ink-node/blob/main/runtime/src/IDemo.sol>.
///
/// Note that it's also possible to just implement the interface partially.
/// This can be useful if you just want to expose part of the precompile
/// functionality
#[ink::contract_ref(abi = "sol")]
pub trait System {
    /// Simple echo function.
    ///
    /// If `mode = 0`, the function reverts.
    /// If `mode > 0`, the input `message` is echoed back to the caller.
    ///
    /// # Note
    ///
    /// This signature is the ink! equivalent of the following Solidity signature
    ///
    /// ```solidity
    /// function echo(uint8 mode, bytes message) external view returns (bytes);
    /// ```
    #[ink(message)]
    #[allow(non_snake_case)]
    fn echo(&self, mode: u8, message: ink::sol::DynBytes) -> ink::sol::DynBytes;
}

#[ink::contract]
mod precompile_demo {
    use super::System;
    use ink::prelude::vec::Vec;

    #[ink(storage)]
    pub struct PrecompileDemo;

    impl PrecompileDemo {
        /// Initializes contract.
        #[ink(constructor)]
        #[allow(clippy::new_without_default)]
        pub fn new() -> Self {
            Self {}
        }

        /// Calls the `echo` function from `ink-node`'s `DemoPrecompile`.
        #[ink(message)]
        pub fn call_echo(&self, data: Vec<u8>) -> Vec<u8> {
            const DEMO_PRECOMPILE_ADDR: [u8; 20] =
                hex_literal::hex!("00000000000000000000000000000000000B0000");
            let system_ref: super::SystemRef = ink::Address::from(DEMO_PRECOMPILE_ADDR).into();
            let in_bytes = ink::sol::DynBytes(data);
            let out_bytes = system_ref.echo(1, in_bytes);
            out_bytes.0
        }
    }

    #[cfg(all(test, feature = "e2e-tests"))]
    mod e2e_tests {
        use super::*;
        use ink_e2e::ContractsBackend;

        type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;

        #[ink_e2e::test]
        async fn call_echo_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
            // given
            let mut constructor = PrecompileDemoRef::new();
            let contract = client
                .instantiate("precompile_demo", &ink_e2e::bob(), &mut constructor)
                .submit()
                .await
                .expect("instantiate failed");
            let call_builder = contract.call_builder::<PrecompileDemo>();

            // when
            let data = vec![0x1, 0x2, 0x3, 0x4];
            let expected = data.clone();
            let call_echo = call_builder.call_echo(data);
            let res = client
                .call(&ink_e2e::bob(), &call_echo)
                .submit()
                .await
                .expect("call_echo failed");

            // then
            assert_eq!(res.return_value(), expected);

            Ok(())
        }
    }
}
```

If you want to look further, the source code of the [`AssetPrecompile`](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/assets/precompiles/src)
and the [`XcmPrecompile`](https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/pallet-xcm/precompiles/src) 
is also a good inspiration.
