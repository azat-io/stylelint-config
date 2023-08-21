let config = require('@azat-io/eslint-config')

module.exports = [
  ...config,
  {
    rules: {
      'perfectionist/sort-objects': 'off',
    },
    files: ['index.js'],
  },
]
