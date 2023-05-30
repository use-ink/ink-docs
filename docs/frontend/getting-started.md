---
title: 1. Getting Started
hide_title: true
slug: /frontend/getting-started
description: Get started building frontend applications for ink! with useink
---

# Getting Started

## Installation

Install `useink`

```bash
# npm
npm i useink

# pnpm
pnpm i useink

# yarn
yarn add useink
```

## Configuration

### tsconfig.json

You must set `moduleResolution` to `nodenext` or `bundler`. This feature allows your application to
discover multiple import paths defined in the **useink** `package.json`. This is required
to use various features defined in paths such as
[useink/notifications](/frontend/notifications) and [useink/utils](/frontend/utils).

```json
{
  "compilerOptions": {
    "moduleResolution": "nodenext", // or `bundler`
  }
}
```

### Adding `<UseInkProvider />`

React uses *Providers* to make state accessible to any child component no matter how deeply nested a component is. To make `useink` features available to your application you must wrap your application with `UseInkProvider`. 

```tsx
import { UseInkProvider } from 'useink';
import { RococoContractsTestnet, ShibuyaTestnet } from 'useink/chains';

function App() {
  return (
    <UseInkProvider 
      config={{ 
        dappName: 'Flipper', 
        chains: [RococoContractsTestnet, ShibuyaTestnet] ,
      }}
    >
      <MyRoutes />
    </UseInkProvider>
  );
}

export default App
```

There are two fields to note in the example above: `dappName` and `chains`. `dappName` is the name that is displayed to a user when they are asked to connect their browser wallet for the first time. `chains` is an array of chain configurations that your dapp will support. Only chains that are configured here will be accessible to your dApp. `useink` provides chain configurations for hundreds of existing chains that you can import from `useink/chains`.

You can learn more about [chain configuration here](/frontend/configuration).

### You can now use all the features of useink

Next, you can learn how to [connect to a browser wallet extension](/frontend/connect-wallet), or [see an example dApp](https://github.com/paritytech/useink-kitchen-sink/blob/master/frontend/src/components/pg-home/HomePage.tsx).
