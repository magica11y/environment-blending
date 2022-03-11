`environmentBlending()`
========================
> Detects the characteristics of the user’s display using 'environment-blending' CSS3 level 5 media query.

[![Travis](https://img.shields.io/travis/com/magica11y/environment-blending.svg?style=for-the-badge)](https://app.travis-ci.com/github/magica11y/environment-blending)
[![NPM](https://img.shields.io/npm/v/@magica11y/environment-blending.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/@magica11y/environment-blending)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/environment-blending.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/environment-blending)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/environment-blending.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/environment-blending)
[![Coveralls](https://img.shields.io/coveralls/github/magica11y/environment-blending.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/github/magica11y/environment-blending)
[![David DM](https://img.shields.io/david/magica11y/environment-blending.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/environment-blending)
[![David DM](https://img.shields.io/david/dev/magica11y/environment-blending.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/environment-blending?type=dev)
[![NodeJS](https://img.shields.io/node/v/@magica11y/environment-blending.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/@magica11y/environment-blending)
[![License](https://img.shields.io/github/license/magica11y/environment-blending.svg?style=for-the-badge "MIT license")](LICENSE.md)
[![Snyk](https://img.shields.io/snyk/vulnerabilities/github/magica11y/environment-blending?style=for-the-badge "Snyk vulnerabilities status")](https://snyk.io/test/github/magica11y/environment-blending?targetFile=package.json)

[![Magica11y cover](https://cdn.jsdelivr.net/gh/magica11y/cauldron@1.0.7/assets/Magica11y-cover.jpg "Magica11y cover")](https://magica11y.github.io)


# :sparkles: Introduction

Quoting from the [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://www.w3.org/TR/mediaqueries-5/)
[media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) specfication…

> The `environment-blending` media feature is used to query the characteristics of the user’s display so the author can adjust the style of the document. An author might choose to adjust the visuals and/or layout of the page depending on the display technology to increase the appeal or improve legibility.

:tv: **`environmentBlending()`** is part of :crystal_ball: [**Magica11y**](https://magica11y.github.io), which provides a suite of functions to detect “user-preference” and “environment” media features.

[Magica11y](https://magica11y.github.io) functions are awesome because…
  * They have **zero** dependencies
  * They’re **lightweight**; e.g. `environmentBlending()` is just [![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/environment-blending.svg?style=flat-square&label "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/environment-blending) minified, or [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/environment-blending.svg?style=flat-square&label "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/environment-blending) minified & gzipp’d
  * They use the **[`window.matchMedia`](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)** API underneath
  * They’re optimized for **performance**; all the module functions are designed in such a way that they exit early
  * They provide a **clean**, **well-documented** and **semantic** API to work with

In addition to `environmentBlending()`, [Magica11y](https://magica11y.github.io) also provides…

  * :art: [`forcedColors()`](https://github.com/magica11y/forced-colors)
  * :new_moon: [`invertedColors()`](https://github.com/magica11y/inverted-colors)
  * ~:candle: [`lightLevel()`](https://github.com/magica11y/light-level)~
  * :last_quarter_moon: [`prefersColorScheme()`](https://github.com/magica11y/prefers-color-scheme)
  * :high_brightness: [`prefersContrast()`](https://github.com/magica11y/prefers-contrast)
  * :roller_coaster: [`prefersReducedMotion()`](https://github.com/magica11y/prefers-reduced-motion)
  * :gem: [`prefersReducedTransparency()`](https://github.com/magica11y/prefers-reduced-transparency)

# :rocket: Getting started

## :building_construction: Installation

You can install `environmentBlending()` using a package manager such as [`yarn`](https://yarnpkg.com/en/package/@magica11y/environment-blending) or [`npm`](https://www.npmjs.com/package/@magica11y/environment-blending)…

```sh
$ yarn add "@magica11y/environment-blending"
# OR
$ npm install --save "@magica11y/environment-blending"
```

You can also include `environmentBlending()` from a CDN on your page, such as [jsDelivr](https://www.jsdelivr.com/package/npm/@magica11y/environment-blending) or [unpkg](https://unpkg.com/@magica11y/environment-blending)…

```html
<script src="https://cdn.jsdelivr.net/npm/@magica11y/environment-blending@latest/dist/magica11y.environmentBlending.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/@magica11y/environment-blending@latest/dist/magica11y.environmentBlending.js"></script>
```

## :game_die: Usage

`environmentBlending()` is distributed as a [UMD](https://github.com/umdjs/umd) module, so you can use it as a browser global…

```js
var displayBlend = window.magica11y.environmentBlending.default();
var isAugmentedRealityDisplay = (displayBlend === window.magica11y.environmentBlending.availableDisplayBlends.ADDITIVE);
```

… or as a CommonJS module…

```js
const environmentBlending = require('@magica11y/environment-blending');
const displayBlend = environmentBlending.default();
const isAugmentedRealityDisplay = (displayBlend === environmentBlending.availableDisplayBlends.ADDITIVE);
```

… or as an ES module…

```js
import environmentBlending, { availableDisplayBlends } from '@magica11y/environmentBlending';

const displayBlend = environmentBlending();
const isAugmentedRealityDisplay = (displayBlend === availableDisplayBlends.ADDITIVE);
```

The `availableDisplayBlends` object contains all the possible values supported by the `'environment-blending'` media query…

* `availableDisplayBlends.OPAQUE` (spec: [`'opaque'`](https://www.w3.org/TR/mediaqueries-5/#valdef-media-environment-blending-opaque))
  > The document is rendered on an opaque medium, such as a traditional monitor or paper. Black is dark and white is 100% light.
* `availableDisplayBlends.ADDITIVE` (spec: [`'additive'`](https://www.w3.org/TR/mediaqueries-5/#valdef-media-environment-blending-additive))
  > The display blends the colors of the canvas with the real world using additive mixing. Black is fully transparent and white is 100% light. For example: a head-up display in a car.
* `availableDisplayBlends.SUBTRACTIVE` (spec: [`'subtractive'`](https://www.w3.org/TR/mediaqueries-5/#valdef-media-environment-blending-subtractive))
  > The display blends the colors of the canvas with the real world using subtractive mixing. White is fully transparent and dark colors have the most contrast. For example: an LCD display embedded in a bathroom mirror.
* `null`
  > The display characteristics could not be determined.


# :checkered_flag: Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs)
in `node_modules/@magica11y/environment-blending/lib` by configuring them in your `.flowconfig`…

```
[libs]
node_modules/@magica11y/environment-blending/lib
```

Now, you can use the Flow types as follows…

```js
// @flow
import environmentBlending, { type DisplayBlend } from '@magica11y/environment-blending';

const displayBlend: ?DisplayBlend = environmentBlending();
```

:tophat: **Note**: `environmentBlending()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void)
type (i.e. `DisplayBlend`). So using the `?` prefix to indicate nullable types is recommended (i.e. `?DisplayBlend`).


# :scroll: License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with :heart: by [Rishabh](https://rishabh.ink).

[![Twitter](https://img.shields.io/twitter/follow/rishabh_ink.svg?style=social)](https://twitter.com/rishabh_ink)
