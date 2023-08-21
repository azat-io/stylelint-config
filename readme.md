# Stylelint Config

Stylelint sharable config.

See [docs](https://github.com/azat-io/stylelint-config/blob/main/docs.md) for a list of all rules.

## Installation

1. Install package:

```sh
pnpm add --save-dev stylelint @azat-io/stylelint-config stylelint-config-recess-order stylelint-gamut stylelint-plugin-logical-css stylelint-order
```

2. Create ESLint configuration file `.stylelintrc`:

```json
{
  "extends": "@azat-io/stylelint-config"
}
```

3. Add script for package.json:

```js
{
  "scripts": {
    "lint": "stylelint **/*.css",
  }
}
```
