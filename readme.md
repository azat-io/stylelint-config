# Stylelint Config

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/5698350/262110536-5a5be71e-1ba0-4d14-b819-6e416fb98fbe.svg" alt="Stylelint" align="right" width="150" height="150" />

[![Version](https://img.shields.io/npm/v/@azat-io/stylelint-config.svg?color=fff&labelColor=000)](https://npmjs.com/package/@azat-io/stylelint-config)
[![GitHub License](https://img.shields.io/badge/license-MIT-232428.svg?color=fff&labelColor=000)](https://github.com/azat-io/stylelint-config/blob/main/license.md)

Stylelint sharable config.

See [docs](https://github.com/azat-io/stylelint-config/blob/main/docs.md) for a list of all rules.

## Installation

1. Install package:

```sh
pnpm add --save-dev stylelint @azat-io/stylelint-config stylelint-config-recess-order stylelint-gamut stylelint-plugin-logical-css stylelint-order
```

2. Create Stylelint configuration file `.stylelintrc`:

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

## See also

- [`@azat-io/eslint-config`](https://github.com/azat-io/eslint-config)

## License

MIT &copy; [Azat S.](https://azat.io)
