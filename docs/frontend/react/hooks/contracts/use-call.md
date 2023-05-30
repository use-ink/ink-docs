---
title: 'useCall'
description: 'A React hook for calling a contract message and decoding the result.'
---

# useCall

A hook for calling a contract message and decoding a successful response or receiving an
error. See [useink/utils helpers](/frontend/utils/pick) for compatible functions that work
well with this hook. 

## Usage

```tsx
import { useCall } from 'useink'
import { pickDecoded } from 'useink/utils'
import metadata from 'contract/metadata.json'

const CONTRACT_ADDRESS = '...'

// We define a response type so that `get.result.value.decoded` is of type SuccessfulResponse
interface SuccessfulResponse {
  foo: 'bar'
}

export const MyContractView: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata, 'astar');
  const get = useCall<SuccessfulResponse>(contract, 'get');
  const args = ['arg-1', 2];

  return (
    <>
      <h1>Get the Result the hard way: {get.result?.ok ? get.result.value.decoded.foo : '--'}</h1>
      <h1>Or the easy way: {pickDecoded(get.result)?.foo || '--'}</h1>

      <button disabled={get.isSubmitting} onClick={() => get.send(args)}>
        Get Result
      </button>
    </>
  );
}
```

## Calling with a default caller address

You must first define a default caller in [configuration](/frontend/configuration#configprops), then call the contract with options:

```tsx
const call = useCall(contract, 'get');
const args = [];

call.send(args, { defaultCaller: true })
```

## Handling `Result<T, E>` responses from an ink! contract

One of the benefits of using ink! is ability to return meaningful errors with `Result<T,
E>` (since ink! v4.0.0). In this example we will distinguish between two kinds of errors
and a successful result. Let's say that you have the following ink! code in your contract.

```rust
    use ink::prelude::string::String;

    // ...other contract code omitted

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct Unhappy {
        boo: String,
    }

    // A successful response
    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct Happy {
        yippee: String,
    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        Sad(Unhappy),
    }

    impl MyMoodyContract {
      #[ink(message)]
      pub fn mood(&self, value: u64) -> Result<Happy, Error> {
          if value % 2 == 0 {
              return Ok(Happy {
                  yippee: String::from("😃"),
              });
          }

          Err(Error::Sad(Unhappy {
              boo: String::from("😢"),
          }))
      }
    }
```

In this example, when you call `mood(2)`, you will get an `Ok` response. If you call
`mood(1)` you will get an `Err`. If you call `mood(5)` you will get another type of `Err`.

Here is how we could handle the view using **useink**.

```tsx
import { useCall, useContract, useBlockNumber, decodeError } from 'useink'
import metadata from 'contract/metadata.json'
const CONTRACT_ADDRESS = '...'

// We define the interface for the response.
interface MoodResult { 
  Ok?: { yippee: string }; 
  Err?: { 
    Sad?: { boo: string; },
  },
};

export const MyFickleContract: React.FC = () => {
  const { blockNumber } = useBlockNumber();
  const contract = useContract(CONTRACT_ADDRESS, metadata);
  const getMood = useCall<MoodResult>(contract, 'mood');

  // Fetch the mood of the contract on each new block
  useEffect(() => {
    if(blockNumber) getMood.send([blockNumber]);
  }, [blockNumber])

  // result is undefined before it is called the first time
  if (!getMood.result) return <h1>Loading...</h1>

  // if result.ok is false then one of two things happened.
  // One possibility is that a pallet in the Substrate runtime threw an error.
  // A second possibility is a contract method may have called panic! 
  // OR called assert! and it failed. In these situations no Response has been returned. 
  // We need to handle the error using decodeError.
  if (!getMood.result.ok) {
    return (
      <div>
        <p>An error occurred in runtime, not our contract function.</p>
        <p>
          {decodeError(getMood, {
            ContractTrapped: 'This is a custom message. Something went wrong.', 
          })}
        </p>
      </div>
    )
  }

  // We now know we have decoded value of type `MoodResult`
  const { decoded } = getMood.result.value;

  return (
    <h1>
      Block Number {blockNumber} makes me feel
      {decoded.Ok && decoded.Ok.yippee}
      {decoded.Err?.Sad && decoded.Err.Sad.boo}
    </h1>
  );
}
```

## Return Value

```ts
type DecodedContractResult<T> = {
  result?: {
    ok: true;
    value: {
      decoded: T; // The response is decoded using contract Metadata and of type `T`
      raw: ContractExecResult; // encoded raw data 
    } | {
      ok: false;
      // error
      // This error occurs if any pallet throws an error, 
      // or if a contract method calls panic! or assert!() and it fails.
      error: DispatchError | undefined; 
    }
  }
}

// useCall returns
{
  isSubmitting: boolean;
  // args: a list of arguments your contract message receives
  // options: additional option overrides
  // caller: the calling address. This can be used in ink! contracts with `self.env.caller()`
  //         `caller` defaults to the connected wallet address.
  send: (args?: unknown[], options?: ContractOptions, caller?: string) => 
    Promise<DecodedContractResult<T> | undefined>;
  result?: DecodedContractResult<T>;
}
```