# @azat-io/stylelint-config

## Base rules

### alpha-value-notation

Disallow to use number notation for alpha-values.

```css
/* bad */
.foo {
  color: oklch(0 0 0 / 0.5);
  opacity: 0.8;
}
```

```css
/* good */
.foo {
  color: oklch(0 0 0 / 50%);
  opacity: 80%;
}
```

### annotation-no-unknown

Disallow unknown annotations.

```css
/* bad */
a {
  color: green !please;
}
```

```css
/* good */
a {
  color: green !important;
}
```

### at-rule-empty-line-before

Require an empty line before at-rules.

```css
/* bad */
a {
}
@media {
}
```

```css
/* good */
a {
}

@media {
}
```

### at-rule-no-vendor-prefix

Disallow vendor prefixes for at-rules.

```css
/* bad */
@-webkit-keyframes {
  0% {
    top: 0;
  }
}
```

```css
/* good */
@keyframes {
  0% {
    top: 0;
  }
}
```

### block-no-empty

Disallow empty blocks.

### color-function-notation

Specify modern notation for color-functions.

```css
/* bad */
.foo {
  color: oklch(70%, 0.1, 248);
}
```

```css
/* good */
.foo {
  color: oklch(70% 0.1 248);
}
```

### color-name

Disallow named colors.

```css
/* bad */
a {
  color: black;
}
```

```css
/* good */
a {
  color: oklch(0% 0 0);
}
```

### color-no-hex

Disallow hex colors.

```css
/* bad */
a {
  color: #333;
}
```

```css
/* good */
a {
  color: oklch(32.11% 0 0);
}
```

### comment-empty-line-before

Require an empty line before comments.

```css
/* bad */
a {
}
/* comment */
```

```css
/* good */
a {
}

/* comment */
```

### comment-no-empty

Disallow empty comments.

### comment-whitespace-inside

Require whitespace on the inside of comment markers.

### custom-property-empty-line-before

Specify a pattern for custom media query names.

```css
/* bad */
@custom-media --fooBar (max-width: 30em);
```

```css
/* good */
@custom-media --foo-bar (max-width: 30em);
```

### custom-property-no-missing-var-function

Disallow missing `var` function for custom properties.

```css
/* bad */
:root {
  --foo: red;
}

a {
  color: --foo;
}
```

```css
/* good */
:root {
  --foo: red;
}

a {
  color: var(--foo);
}
```

### custom-property-pattern

Specify a pattern for custom properties.

```css
/* bad */
a {
  --fooBar: 1px;
}
```

```css
/* good */
a {
  --foo-bar: 1px;
}
```

### declaration-block-no-duplicate-custom-properties

Disallow duplicate custom properties within declaration blocks.

### declaration-block-no-duplicate-properties

Disallow duplicate properties within declaration blocks.

```css
/* bad */
a {
  color: pink;
  color: orange;
}
```

### declaration-block-no-redundant-longhand-properties

Disallow redundant longhand properties within declaration-block.

```css
/* bad */
.foo {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```

```css
/* good */
.foo {
  inset: 0;
}
```

### declaration-block-no-shorthand-property-overrides

Disallow shorthand properties that override related longhand properties.

```css
/* bad */
a {
  background-repeat: repeat;
  background: green;
}
```

### declaration-block-single-line-max-declarations

Limit the number of declarations within a single-line declaration block.

### declaration-empty-line-before

Require an empty line before declarations.

```css
/* bad */
a {
  --foo: pink;
  top: 5px;
}
```

```css
/* good */
a {
  --foo: pink;

  top: 5px;
}
```

### font-family-name-quotes

Require quotes for font family names where recommended.

### font-family-no-duplicate-names

Disallow duplicate names within font families.

### font-family-no-missing-generic-family-keyword

Disallow a missing generic family keyword within font families.

```css
/* bad */
a {
  font-family: Arial;
}
```

```css
/* good */
a {
  font-family: Arial, sans-serif;
}
```

### function-calc-no-unspaced-operator

Disallow invalid unspaced operator within `calc` functions.

```css
/* bad */
a {
  top: calc(1px+2px);
}
```

```css
/* good */
a {
  top: calc(1px + 2px);
}
```

### function-disallowed-list

Disallow to use `rgb`, `rgba`, `hsl`, `hsla` functions.

### function-linear-gradient-no-nonstandard-direction

Disallow non-standard direction values for linear gradient functions.

### function-name-case

Specify lowercase for function names.

```css
/* bad */
a {
  width: Calc(5% - 10em);
}
```

```css
/* good */
a {
  width: calc(5% - 10em);
}
```

### function-no-unknown

Disallow unknown functions.

```css
/* bad */
a {
  transform: unknown(1);
}
```

### function-url-quotes

Require quotes for urls.

```css
/* bad */
a {
  background: url(x.jpg);
}
```

```css
/* good */
a {
  background: url('x.jpg');
}
```

### hue-degree-notation

Specify number notation for degree hues.

```css
/* bad */
a {
  color: lch(56.29% 19.86 10deg / 15%);
}
```

```css
/* good */
a {
  color: lch(56.29% 19.86 10 / 15%);
}
```

### import-notation

Specify URL notation for `@import` rules.

```css
/* bad */
@import 'foo.css';
```

```css
/* good */
@import url(foo.css);
```

### keyframe-block-no-duplicate-selectors

Disallow duplicate selectors within keyframe blocks.

```css
/* bad */
@keyframes foo {
  0% {
  }

  0% {
  }
}
```

```css
/* good */
@keyframes foo {
  0% {
  }

  100% {
  }
}
```

### keyframe-declaration-no-important

Disallow invalid `!important` within keyframe declarations.

### keyframe-selector-notation

Specify percentage notation for keyframe selectors.

```css
/* bad */
@keyframes foo {
  from {
  }

  to {
  }
}
```

```css
/* good */
@keyframes foo {
  0% {
  }

  100% {
  }
}
```

### keyframes-name-pattern

Specify a pattern for keyframe names.

```css
/* bad */
@keyframes fooBar {
}
```

```css
/* good */
@keyframes foo-bar {
}
```

### length-zero-no-unit

Disallow units for zero lengths.

```css
/* bad */
a {
  top: 0px;
}
```

```css
/* good */
a {
  top: 0;
}
```

### media-feature-name-no-vendor-prefix

Disallow vendor prefixes for media feature names.

### media-feature-name-no-unknown

Disallow unknown media feature names.

### media-feature-range-notation

Specify context notation for media feature ranges.

```css
/* bad */
@media (min-width: 800px) {
}
```

```css
@media (width >= 800px) {
}
```

### media-query-no-invalid

Disallow invalid media queries.

### named-grid-areas-no-invalid

Disallow invalid named grid areas.

### no-descending-specificity

Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.

```css
/* bad */
#container a {
  top: 10px;
}

a {
  top: 0;
}
```

### no-duplicate-at-import-rules

Disallow duplicate `@import` rules.

### no-duplicate-selectors

Disallow duplicate selectors.

```css
/* bad */
.foo {
}

.foo {
}
```

### no-invalid-double-slash-comments

Disallow invalid double-slash comments.

### no-invalid-position-at-import-rule

Disallow invalid position `@import` rules.

### number-max-precision

Limit the number of decimal places allowed in numbers to 4.

```css
/* bad */
a {
  top: 3.245634px;
}
```

```css
/* good */
a {
  top: 3.2456px;
}
```

### property-no-vendor-prefix

Disallow vendor prefixes for properties.

```css
/* bad */
a {
  -webkit-transform: scale(1);
}
```

```css
/* good */
a {
  transform: scale(1);
}
```

### property-no-unknown

Disallow unknown properties.

### rule-empty-line-before

Require an empty line before rules.

### selector-anb-no-unmatchable

Disallow unmatchable An+B selectors.

```css
/* bad */
a:nth-of-type(0n + 0) {
}
```

### selector-attribute-quotes

Require quotes for attribute values.

### selector-class-pattern

Specify a pattern for class selectors.

```css
/* bad */
.fooBar {
}
```

```css
/* good */
.foo-bar {
}
```

### selector-id-pattern

Specify a pattern for id selectors.

```css
/* bad */
#fooBar {
}
```

```css
/* good */
#foo-bar {
}
```

### selector-no-vendor-prefix

Disallow vendor prefixes for selectors.

```css
/* bad */
input::-moz-placeholder {
}
```

```css
/* good */
input::placeholder {
}
```

### selector-not-notation

Specify complex notation for `:not()` pseudo-class selectors.

```css
/* bad */
:not(a):not(div) {
}
```

```css
/* good */
:not(a, div) {
}
```

### selector-pseudo-class-no-unknown

Disallow unknown pseudo-class selectors.

### selector-pseudo-element-no-unknown

Disallow unknown pseudo-element selectors.

```css
/* bad */
a::pseudo {
}
```

### selector-pseudo-element-colon-notation

Specify double colon notation for applicable pseudo-element selectors.

```css
/* bad */
a:before {
  color: pink;
}
```

```css
/* good */
a::before {
  color: pink;
}
```

### selector-type-case

Specify lowercase for type selectors.

```css
/* bad */
A {
}
```

```css
/* good */
a {
}
```

### selector-type-no-unknown

Disallow unknown type selectors.

```css
tag {
}
```

### shorthand-property-no-redundant-values

Disallow redundant values within shorthand properties.

```css
/* bad */
a {
  margin: 1px 1px;
}
```

```css
/* good */
a {
  margin: 1px;
}
```

### string-no-newline

Disallow invalid newlines within strings.

### unit-no-unknown

Disallow unknown units.

```css
/* bad */
a {
  width: 100pixels;
}
```

### value-keyword-case

Specify lowercase for keywords values.

```css
/* bad */
a {
  display: BLOCK;
}
```

```css
a {
  display: block;
}
```

### value-no-vendor-prefix

Disallow vendor prefixes for values.

## Gamut

### color-no-out-gamut-range

Disallow out of gamut range colors.

## Logical CSS

### use-logical-properties-and-values

Require to use logical properties and values.

```css
/* bad */
.foo {
  max-width: 100%;
}
```

```css
/* bad */
.foo {
  max-inline-size: 100%;
}
```

### use-logical-units

Require to use logical units.

```css
/* bad */
.foo {
  max-inline-size: 100vw;
}
```

```css
/* bad */
.foo {
  max-inline-size: 100vi;
}
```
