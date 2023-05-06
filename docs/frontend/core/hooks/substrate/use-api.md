---
title: 'useApi'
description: 'Get a api instance for a given chain'
---

# useApi

A hook to get an ApiPromise and WsProvider instance for a given chain. These instances
have chain-specific RPC urls defined and will automatically update when you change your
configuration or set a new default RPC for a chain. This hook is used in many **useink**
hooks. 

```tsx
import { useApi } from 'useink';

export const Api = ({ children }) => {
  const { api } = useApi(); // Get the api instance for the default chain set in UseInkProvider
  const alephApi = useApi('aleph'); // This assumes that 'aleph' config is added to UseInkProvider

  console.log('default chain api', api)
  console.log('aleph chain api', alephApi.api)

  return <h1>Check the console logs...</h1>
}
```

## Return Type

```ts
{
  api: ApiPromise;
  provider: WsProvider;
} | undefined
```