# `@drpiou/expo-secure-store`

![GitHub](https://img.shields.io/github/license/drpiou/react-expo-secure-store)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/react-expo-secure-store)
![Jest tests](https://img.shields.io/badge/stage-beta-important)
![GitHub all releases](https://img.shields.io/github/downloads/drpiou/react-expo-secure-store/total)

The `@drpiou/expo-secure-store` package wraps the `expo-secure-store` package.

> - type SecureStore.
> - written in TypeScript.

<!--ts-->

- [Compatibility](#compatibility)
- [Installation](#installation)
- [Example](#example)
- [Documentation](#documentation)

<!--te-->

## Compatibility

- Expo (43+)

## Installation

```shell
yarn add @drpiou/expo-secure-store
```

### Peer Dependencies

Expo project:

```shell
expo install expo-secure-store
```

## Example

```typescript jsx
import { SecureStore } from '@drpiou/expo-secure-store';

type StorageItemValueMap = {
  credentials: {
    access_token: string;
    refresh_token: string;
  };
};

const storage = new SecureStore<StorageItemValueMap>();
```

## Documentation

```typescript
class SecureStore<S extends Record<string, unknown>> {
  getItem: <K extends keyof S, D extends S[K] | undefined>(
    key: K,
    defaultValue?: D,
    autoSet?: boolean,
  ) => Promise<D extends undefined ? S[K] | undefined : S[K]>;

  setItem: <K extends keyof S>(key: K, value: S[K]) => Promise<void>;

  hasItem: (key: keyof S) => Promise<boolean>;

  removeItem: (key: keyof S) => Promise<void>;
}
```
