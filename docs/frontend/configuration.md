---
title: Configuration
description: Learn about what configurations and defaults are available in useink
---

# Configuration

`UseInkProvider` takes props of type `ConfigProps`.

```tsx
import { UseInkProvider } from 'useink';
import { RococoContractsTestnet } from 'useink/chains';

function App({ children }) {
  const config = {
    chains: [RococoContractsTestnet],
    caller: {
      // An optional default caller address to be used before a user connects their wallet.
      default: "5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR", 
    }
  }

  return (
    <UseInkProvider config={config}>
      <MyRoutes />
    </UseInkProvider>
  );
}

export default App
```

## ConfigProps

```ts
export type ConfigProps = {
  // dappName: This is the name that is displayed when a user first connects their wallet.
  // It is also the key used for localStorage in some features.
  dappName?: string; 
  // chains: see `useink/chains` for more chain configurations. 
  chains: ArrayOneOrMore<Chain>; 
  // caller: If you want to read from the blockchain before a user connect's their wallet 
  // then you can set a default caller address globally or on a per chain basis. When making 
  // a call to a contract the priority level of which address to use will be:
  // 1. The address of the user's connected wallet
  // 2. The address for the chain specified in this config for the chainId. e.g. { astar: '5E.....' }
  // 3. The address for the chain specified in `caller.default` in this config.
  // If this `caller` is omitted in the config then a user must connect their wallet before they can 
  // call a contract message. 
  // NOTE: Default caller addresses cannot be used for transactions, which require a signature.
  // See https://use.ink/frontend/react/hooks/contracts/use-call and related hooks for examples.
  caller?: {
    default?: string; // Set the default for all chains that do not have a 
  } & Partial<Result<ChainId, string>>;
  events?: { 
    // expiration: Time in miliseconds before an event is removed from state.
    // This is used in the useEvent() hook for contracts
    // Set to 0 to prevent events from being removed from state
    // Default: 5000 (5 seconds)
    expiration?: number; 
    // checkInterval: The amount of time to wait before checking which events need to be removed.
    checkInterval?: number; 
  };
  wallet?: {
    // skipAutoConnect: Skip a dApp from using localStorage to restore a previously connected account
    // Default: true
    skipAutoConnect?: boolean; 
  };
};
```

## Adding a Custom Chain Config

You can add your own chain config by modifying the `Custom` chain config. e.g.

```tsx
import { UseInkProvider } from 'useink';
import { Custom, Chain } from 'useink/chains';

const MyChain: Chain = {
  ...Custom,
  // NOTE: The value of 'id' should be 'custom'. ChainId must be of a known value that we 
  // have already defined in useink/chains. We do this because chainId is used as an 
  // argument in many hooks and we want to prevent bugs due to mispelled chain names. 
  // For example: `useBlockHeader('astart')` would return undefined because `astart` 
  // is not a chainId. `astar` is the correct name. ChainId has known values so that 
  // TypeScript will show you your error before runtime.
  id: 'custom', 
  name: 'My New Blockchain',
  rpcs: ['wss://my-new-rpc.xyz'],
}


function App({ children }) {
  return (
    <UseInkProvider config={{ chains: [MyChain] }}>
      <MyRoutes />
    </UseInkProvider>
  );
}

export default App
```

Using the above config you can call hooks with or without the `chainId` as an argument. 

e.g. `useBlockHeaders()` (defaults to 'custom') or `useBlockHeaders('custom')`