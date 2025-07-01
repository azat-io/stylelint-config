# Stylelint Config

<img
  src="https://raw.githubusercontent.com/azat-io/stylelint-config/main/assets/logo.svg"
  alt="Stylelint Config Logo"
  align="right"
  width="160"
  height="160"
/>

[![Version](https://img.shields.io/npm/v/@azat-io/stylelint-config.svg?color=fff&labelColor=000)](https://npmjs.com/package/@azat-io/stylelint-config)
[![GitHub License](https://img.shields.io/badge/license-MIT-232428.svg?color=fff&labelColor=000)](https://github.com/azat-io/stylelint-config/blob/main/license.md)

A comprehensive and flexible Stylelint configuration that supports diverse CSS frameworks, preprocessors, and styling approaches. Seamlessly enforce clean, consistent styling standards across projects by enabling rules for specific tools and methodologies.

This config delivers multiple styling setups through a single, intuitive import, ensuring consistency across different project architectures and CSS technologies.

## Installation

1. Install package:

```sh
pnpm add --save-dev stylelint @azat-io/stylelint-config
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
    "test:css": "stylelint \"**/*.css\"",
  }
}
```

## Plugins

This config uses the following plugins:

- [stylelint-gamut](https://github.com/fpetrakov/stylelint-gamut)
- [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation)
- [stylelint-plugin-defensive-css](https://github.com/yuschick/stylelint-plugin-defensive-css)
- [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting)

## See also

- [`@azat-io/eslint-config`](https://github.com/azat-io/eslint-config)

## License

MIT &copy; [Azat S.](https://azat.io)
