# js-var-to-css-var

Generate CSS/LESS variables and TS Types from JS/TS.

[![version][npm-img]][npm-url]
[![license][mit-img]][mit-url]
[![size][size-img]][size-url]
[![download][download-img]][download-url]

## Installation

```sh
yarn add js-var-to-css-var
```


## Usage


### for Js


```js
const jsVarToCssVar = require('js-var-to-css-var');

jsVarToCssVar({
  inputPath: `${CUR_DIR}/styles/style--js-1.js`,
  //
  outputCssPath: `${CUR_DIR}/_output--js/style--css-1.css`,
  outputCssScopeTag: ':root',
  //
  outputLessPath: `${CUR_DIR}/_output--js/style--less-1.less`,  // [Optional]
  outputLessHeaderImport: `@import './variables.less';`, // [Optional]
  //
  outputTypePath: `${CUR_DIR}/_output--js/style--type-1.ts`,  // [Optional]
  outputTypeName: 'ITheme1',  // [Optional]
});

```


### for Node Cil

```bash
TODO
```

## Result

Input

```js
export const THEME_JS_COLOR = {
  '--color-red': '#f99',
  '--color-blue': '#1f9cff',
};

export const THEME_JS_FONT = {
  '--font-size-xs': '12px',
  '--font-size-md': '18px',
  '--font-size-lg': '24px',
};
```

Output

css

```css
:root {
  --color-red: #f99;
  --color-blue: #1f9cff;
  --font-size-xs: 12px;
  --font-size-md: 18px;
  --font-size-lg: 24px;
}
```

less

```less
@import './variables.less';

@color-red: #f99;
@color-blue: #1f9cff;
@font-size-xs: 12px;
@font-size-md: 18px;
@font-size-lg: 24px;
```

type

```typescript
export type ITheme1 =
  | '--color-red'
  | '--color-blue'
  | '--theme-light'
  | '--theme-dark'
  | '--font-size-xs'
  | '--font-size-md'
  | '--font-size-lg'
```

## Real World

sample

```typescript jsx
import { IGlobalCssVars } from '@/styles/vars/global-css-vars--type';
import { IOverwriteAntdVars } from '@/styles/vars/overwrite-antd-vars--type';

type ICssVars = IGlobalCssVars | IOverwriteAntdVars | string;

export const getCssVar = (cssVar: ICssVars): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
};

// use getCssVar Fn
// getCssVar('--font    <-- here have IDE hint all css vars

```

watch `style.ts` file cahnge (use webpack plugin)

```js
const WatchFileAndRunCallbackWebpackPlugin = require('watch-file-change-and-run-callback-webpack-plugin');

webpackConfig.plugins.push(
  new WatchFileAndRunCallbackWebpackPlugin({
    matchs: [
      {
        filePath: `${SRC_DIR}/styles/vars/global-css-vars.ts`,
        callback: () => {
          syncStyleCssVar(SRC_DIR);
        },
      },
    ],
  }),
);
```


## License

MIT © [Jason Feng][author-url]

<!-- badges -->

[author-url]: https://github.com/SolidZORO


[mit-img]: https://img.shields.io/npm/l/js-var-to-css-var.svg?style=flat&colorA=000000&colorB=000000

[mit-url]: ./LICENSE


[npm-img]: https://img.shields.io/npm/v/js-var-to-css-var?style=flat&colorA=000000&colorB=000000

[npm-url]: https://www.npmjs.com/package/js-var-to-css-var


[size-img]: https://img.shields.io/bundlephobia/minzip/js-var-to-css-var?label=bundle&style=flat&colorA=000000&colorB=000000

[size-url]: https://www.npmjs.com/package/js-var-to-css-var


[download-img]: https://img.shields.io/npm/dt/js-var-to-css-var.svg?style=flat&colorA=000000&colorB=000000

[download-url]: https://www.npmjs.com/package/js-var-to-css-var


[build-img]: https://github.com/SolidZORO/js-var-to-css-var/workflows/badge.svg

[build-url]: https://github.com/SolidZORO/js-var-to-css-var/actions
