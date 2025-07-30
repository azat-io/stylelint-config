/*
  eslint perfectionist/sort-objects: [
    'error',
    {
      type: 'alphabetical',
      order: 'asc',
      partitionByNewLine: true
    }
  ]
*/

import defineConfig from 'stylelint-define-config'

export default defineConfig({
  extends: ['stylelint-config-recess-order'],
  plugins: [
    'stylelint-gamut',
    'stylelint-plugin-defensive-css',
    'stylelint-plugin-logical-css',
    'stylelint-use-nesting',
  ],
  rules: {
    /**
     * Specify percentage notation for alpha-values.
     */
    'alpha-value-notation': 'percentage',
    /**
     * Disallow unknown annotations.
     */
    'annotation-no-unknown': true,
    /**
     * Disallow unknown at-rule descriptors.
     */
    'at-rule-descriptor-no-unknown': true,
    /**
     * Disallow unknown values for descriptors within at-rules.
     */
    'at-rule-descriptor-value-no-unknown': true,
    /**
     * Require or disallow an empty line before at-rules.
     */
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
      },
    ],
    /**
     * Disallow deprecated at-rules.
     */
    'at-rule-no-deprecated': true,
    /**
     * Disallow unknown at-rules.
     */
    'at-rule-no-unknown': true,
    /**
     * Disallow vendor prefixes for at-rules.
     */
    'at-rule-no-vendor-prefix': true,
    /**
     * Disallow invalid preludes for at-rules.
     */
    'at-rule-prelude-no-invalid': true,
    /**
     * Disallow empty blocks.
     */
    'block-no-empty': true,
    /**
     * Disallow redundant nested style rules within blocks.
     */
    'block-no-redundant-nested-style-rules': true,
    /**
     * Specify modern notation for color-functions.
     */
    'color-function-notation': 'modern',
    /**
     * Disallow named colors.
     */
    'color-named': 'never',
    /**
     * Disallow hex colors.
     */
    'color-no-hex': true,
    /**
     * Require or disallow an empty line before comments.
     */
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    /**
     * Disallow empty comments.
     */
    'comment-no-empty': true,
    /**
     * Require whitespace on the inside of comment markers.
     */
    'comment-whitespace-inside': 'always',
    /**
     * Specify a pattern for custom media query names.
     */
    'custom-media-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: name =>
          `Expected custom media query name "${name}" to be kebab-case`,
      },
    ],
    /**
     * Disallow an empty line before custom properties.
     */
    'custom-property-empty-line-before': 'never',
    /**
     * Disallow missing `var` function for custom properties.
     */
    'custom-property-no-missing-var-function': true,
    /**
     * Specify a pattern for custom properties.
     */
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: name =>
          `Expected custom property name "${name}" to be kebab-case`,
      },
    ],
    /**
     * Disallow duplicate custom properties within declaration blocks.
     */
    'declaration-block-no-duplicate-custom-properties': true,
    /**
     * Disallow duplicate properties within declaration blocks.
     */
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-syntaxes'],
      },
    ],
    /**
     * Disallow redundant longhand properties within declaration-block.
     */
    'declaration-block-no-redundant-longhand-properties': true,
    /**
     * Disallow shorthand properties that override related longhand properties.
     */
    'declaration-block-no-shorthand-property-overrides': true,
    /**
     * Limit the number of declarations within a single-line declaration block.
     */
    'declaration-block-single-line-max-declarations': 1,
    /**
     * Disallow an empty line before declarations.
     */
    'declaration-empty-line-before': 'never',
    /**
     * Disallow deprecated keywords for properties within declarations.
     */
    'declaration-property-value-keyword-no-deprecated': true,
    /**
     * Disallow unknown values for properties within declarations.
     */
    'declaration-property-value-no-unknown': true,
    /**
     * Require quotes for font family names.
     */
    'font-family-name-quotes': 'always-where-recommended',
    /**
     * Disallow duplicate names within font families.
     */
    'font-family-no-duplicate-names': true,
    /**
     * Disallow a missing generic family keyword within font families.
     */
    'font-family-no-missing-generic-family-keyword': true,
    /**
     * Specify numeric or named notation for font weights.
     */
    'font-weight-notation': 'named-where-possible',
    /**
     * Disallow invalid unspaced operator within `calc` functions.
     */
    'function-calc-no-unspaced-operator': true,
    /**
     * Specify a list of disallowed functions.
     */
    'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
    /**
     * Disallow non-standard direction values for linear gradient functions.
     */
    'function-linear-gradient-no-nonstandard-direction': true,
    /**
     * Specify lowercase for function names.
     */
    'function-name-case': 'lower',
    /**
     * Disallow unknown functions.
     */
    'function-no-unknown': true,
    /**
     * Require quotes for URLs.
     */
    'function-url-quotes': 'always',
    /**
     * Specify angle notation for degree hues.
     */
    'hue-degree-notation': 'angle',
    /**
     * Specify URL notation for `@import` rules.
     */
    'import-notation': 'url',
    /**
     * Disallow duplicate selectors within keyframe blocks.
     */
    'keyframe-block-no-duplicate-selectors': true,
    /**
     * Disallow invalid `!important` within keyframe declarations.
     */
    'keyframe-declaration-no-important': true,
    /**
     * Specify percentage notation for keyframe selectors.
     */
    'keyframe-selector-notation': 'percentage',
    /**
     * Specify a pattern for keyframe names.
     */
    'keyframes-name-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: name => `Expected keyframe name "${name}" to be kebab-case`,
      },
    ],
    /**
     * Disallow units for zero lengths.
     */
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    /**
     * Specify percentage notation for lightness.
     */
    'lightness-notation': 'percentage',
    /**
     * Disallow unknown media feature names.
     */
    'media-feature-name-no-unknown': true,
    /**
     * Disallow vendor prefixes for media feature names.
     */
    'media-feature-name-no-vendor-prefix': true,
    /**
     * Disallow unknown values for media features.
     */
    'media-feature-name-value-no-unknown': true,
    /**
     * Specify context or prefix notation for media feature ranges.
     */
    'media-feature-range-notation': 'context',
    /**
     * Disallow invalid media queries.
     */
    'media-query-no-invalid': true,
    /**
     * Disallow deprecated media types.
     */
    'media-type-no-deprecated': true,
    /**
     * Disallow invalid named grid areas.
     */
    'named-grid-areas-no-invalid': true,
    /**
     * Disallow missing scoping root for nesting selectors.
     */
    'nesting-selector-no-missing-scoping-root': true,
    /**
     * Disallow selectors of lower specificity from coming after overriding
     * selectors of higher specificity.
     */
    'no-descending-specificity': true,
    /**
     * Disallow duplicate `@import` rules.
     */
    'no-duplicate-at-import-rules': true,
    /**
     * Disallow duplicate selectors.
     */
    'no-duplicate-selectors': true,
    /**
     * Disallow invalid double-slash comments.
     */
    'no-invalid-double-slash-comments': true,
    /**
     * Disallow invalid position `@import` rules.
     */
    'no-invalid-position-at-import-rule': true,
    /**
     * Disallow invalid position declarations.
     */
    'no-invalid-position-declaration': true,
    /**
     * Disallow unknown animations.
     */
    'no-unknown-animations': true,
    /**
     * Disallow unknown custom media queries.
     */
    'no-unknown-custom-media': true,
    /**
     * Limit the number of decimal places allowed in numbers.
     */
    'number-max-precision': 4,
    /**
     * Disallow deprecated properties.
     */
    'property-no-deprecated': true,
    /**
     * Disallow unknown properties.
     */
    'property-no-unknown': true,
    /**
     * Disallow vendor prefixes for properties.
     */
    'property-no-vendor-prefix': true,
    /**
     * Require or disallow an empty line before rules.
     */
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    /**
     * Disallow unmatchable An+B selectors.
     */
    'selector-anb-no-unmatchable': true,
    /**
     * Require quotes for attribute values.
     */
    'selector-attribute-quotes': 'always',
    /**
     * Specify a pattern for class selectors.
     */
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: selector =>
          `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
    /**
     * Specify a pattern for ID selectors.
     */
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: selector =>
          `Expected id selector "${selector}" to be kebab-case`,
      },
    ],
    /**
     * Disallow vendor prefixes for selectors.
     */
    'selector-no-vendor-prefix': true,
    /**
     * Specify complex notation for :not() pseudo-class selectors.
     */
    'selector-not-notation': 'complex',
    /**
     * Disallow unknown pseudo-class selectors.
     */
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    /**
     * Specify double colon notation for applicable pseudo-element selectors.
     */
    'selector-pseudo-element-colon-notation': 'double',
    /**
     * Disallow unknown pseudo-element selectors.
     */
    'selector-pseudo-element-no-unknown': true,
    /**
     * Specify lowercase for type selectors.
     */
    'selector-type-case': 'lower',
    /**
     * Disallow unknown type selectors.
     */
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    /**
     * Disallow redundant values within shorthand properties.
     */
    'shorthand-property-no-redundant-values': true,
    /**
     * Disallow invalid newlines within strings.
     */
    'string-no-newline': true,
    /**
     * Disallow invalid syntax strings.
     */
    'syntax-string-no-invalid': true,
    /**
     * Disallow unknown units.
     */
    'unit-no-unknown': true,
    /**
     * Specify lowercase for values.
     */
    'value-keyword-case': 'lower',
    /**
     * Disallow vendor prefixes for values.
     */
    'value-no-vendor-prefix': true,

    /**
     * Throw warning if color goes out of sRGB color space and is not wrapped in
     * `@media (color-gamut: p3) {}` or `@media (color-gamut: rec2020) {}`.
     */
    'gamut/color-no-out-gamut-range': true,

    /**
     * Enforce defensive CSS best practices.
     */
    'plugin/use-defensive-css': true,

    /**
     * Require logical properties and values.
     */
    'plugin/use-logical-properties-and-values': true,
    /**
     * Require logical units.
     */
    'plugin/use-logical-units': true,

    /**
     * Enforce nesting when it is possible.
     */
    'csstools/use-nesting': 'always',
  },
})
