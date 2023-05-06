---
title: getRegistryError
hide_title: true
description: A utility function to easily get a Substrate module error
---

# getRegistryError

A utility function to decode an module error.

## Basic Usage

```tsx
export const MyContract: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata);
  const foo = useCall<string>(contract, 'foo');
  const t = useI18n();

  useEffect(() => { foo?.send() }, []);
  const registryError = useMemo(() => getRegistryError, [foo.result])

  if (registryError) {
    return <p>Error `${registryError?.section}.${registryError?.method}: ${registryError?.docs}`)</p>
  }

  return <p>No errors...</p>
}

## Return Type

```ts
{
    args: string[];
    docs: string[];
    index: number;
    method: string;
    name: string;
    section: string;
} | undefined
```

See [configuration](/frontend/notifications/configuration) to learn about custom and default settings.