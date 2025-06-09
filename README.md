# @ntnyq/prettier-config

[![CI](https://github.com/ntnyq/prettier-config/workflows/CI/badge.svg)](https://github.com/ntnyq/prettier-config/actions)
[![NPM VERSION](https://img.shields.io/npm/v/@ntnyq/prettier-config.svg)](https://www.npmjs.com/package/@ntnyq/prettier-config)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/@ntnyq/prettier-config.svg)](https://www.npmjs.com/package/@ntnyq/prettier-config)
[![LICENSE](https://img.shields.io/github/license/ntnyq/prettier-config.svg)](https://github.com/ntnyq/prettier-config/blob/main/LICENSE)

My sharable prettier config.

## Style

- 2 spaces
- No semi
- Single quote
- Trailing comma
- Avoid arrow parens

## Install

```shell
npm install @ntnyq/prettier-config
```

```shell
yarn add @ntnyq/prettier-config
```

```shell
pnpm add @ntnyq/prettier-config
```

```shell
bun add @ntnyq/prettier-config
```

### Usage

Config in `prettier.config.mjs`:

### Basic usage

```mjs
// @ts-check

import { defineConfig } from '@ntnyq/prettier-config'

export default defineConfig()
```

### Custom options

```mjs
// @ts-check

import { defineConfig } from '@ntnyq/prettier-config'

export default defineConfig({
  printWidth: 100,
  trailingComma: 'none',
  overrides: [
    {
      files: ['**/*.html'],
      options: {
        singleAttributePerLine: false,
      },
    },
    {
      files: ['**/*.{css,scss}'],
      options: {
        singleQuote: false,
      },
    },
  ],
})
```

## Config in VSCode

Config in `.vscode/settings.json`:

```json
{
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "prettier.configPath": "./prettier.config.mjs",
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## License

[MIT](./LICENSE) License © 2020-PRESENT [ntnyq](https://github.com/ntnyq)
