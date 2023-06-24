---
title: 1. Empezando
hide_title: true
slug: /frontend/getting-started
description: Comienze a construir aplicaciones frontend para ink! con useink
---

# Empezando

## Instalación

Instala `useink`

```bash
# npm
npm i useink

# pnpm
pnpm i useink

# yarn
yarn add useink
```

## Configuración

### tsconfig.json

Deberás modificar la propiedad `moduleResolution` a `nodenext` o `bundler`. Esta funcionalidad le permite a su aplicación
descubrir multiples rutas de importación definidas en el `package.json` de **useink**. Esto es requerido
para utilizar multiples funcionalidades definidas en rutas como
[useink/notifications](/frontend/notifications) y [useink/utils](/frontend/utils).

```json
{
  "compilerOptions": {
    "moduleResolution": "nodenext" // o `bundler`
  }
}
```

### Agregando `<UseInkProvider />`

React usa _Providers_ para que cualquier componente hijo pueda acceder al estado, sin importar que tan profundamente anidado esté. Para hacer que las funcionalidades de `useink` esten disponibles para toda la aplicación debemos envolverla con `UseInkProvider`.

```tsx
import { UseInkProvider } from 'useink'
import { RococoContractsTestnet, ShibuyaTestnet } from 'useink/chains'

function App() {
  return (
    <UseInkProvider
      config={{
        dappName: 'Flipper',
        chains: [RococoContractsTestnet, ShibuyaTestnet],
      }}
    >
      <MyRoutes />
    </UseInkProvider>
  )
}

export default App
```

En el ejemplo de arriba hay dos campos que debemos tener en cuenta: `dappName` y `chains`. `dappName` es el nombre que va a ser presentado al usuario cuando se les solicite conectar su wallet por primera vez. `chains` es la lista de configuraciones de cadenas que su aplicación va a soportar. Solo las cadenas que estén configuradas aquí van a ser accesibles para nuestra aplicación. `useink` provee configuraciones para cientos de cadenas existentes que puedes importar desde `useink/chains`.

Puedes aprender más sobre [configuración de cadenas aquí](/frontend/configuration).

### Ahora puede usar todas las funcionalidades de useink

A continuación puede aprender como [conectar una wallet mediante una extensión de navegador](/frontend/connect-wallet), o [ ver un ejemplo de dApp](https://github.com/paritytech/useink-kitchen-sink/blob/master/frontend/src/components/pg-home/HomePage.tsx).
