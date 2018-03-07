# easywebpack-react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/easywebpack-react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/easywebpack-react
[travis-image]: https://img.shields.io/travis/hubcarl/easywebpack-react.svg?style=flat-square
[travis-url]: https://travis-ci.org/hubcarl/easywebpack-react
[codecov-image]: https://img.shields.io/codecov/c/github/hubcarl/easywebpack-react.svg?style=flat-square
[codecov-url]: https://codecov.io/github/hubcarl/easywebpack-react?branch=master
[david-image]: https://img.shields.io/david/hubcarl/easywebpack-react.svg?style=flat-square
[david-url]: https://david-dm.org/hubcarl/easywebpack-react
[snyk-image]: https://snyk.io/test/npm/easywebpack-react/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/easywebpack-react
[download-image]: https://img.shields.io/npm/dm/easywebpack-react.svg?style=flat-square
[download-url]: https://npmjs.org/package/easywebpack-react

Webpack client render and server side render build solution for React

- easywebpack-react ^4.x.x > webpack 4.x.x
- easywebpack-react ^3.x.x > webpack 3.x.x 


## Featues

![easywebpack](https://github.com/hubcarl/easywebpack/blob/master/docs/images/easywebpack.png)

see [easywebpack](https://github.com/hubcarl/easywebpack)

## Documents

- http://hubcarl.github.io/easywebpack
- https://zhuanlan.zhihu.com/easywebpack

## Install

```bash
$ npm i easywebpack-react --save-dev
```

## Usage


### `webpack.config.js`

```js
const easywebpack = require('easywebpack-react');
const webpack = easywebpack.webpack;
const merge = easywebpack.merge;
const baseWebpackConfig = easywebpack.getWebpackConfig({
    env, // support dev, test, prod 
    target : 'web', // browser mode build
    entry:{
        app: 'src/index.js'
    }
});
module.exports = merge(baseWebpackConfig, {
   
})
```

### use `webpack` command build

```bash
webpack --config webpack.config.js
```

### base `easywebpacack-cli` build mode

```js
const webpackConfig = require('./webpack.config.js');

if (process.env.NODE_SERVER) {
  // development mode: webpack building and start webpack hot server
  ReactWebpack.server(config);
} else {
  // build file to disk
  ReactWebpack.build(config);
}
```


## Example

- see [test/web](test/web) for more detail.

- [react-client-render-boilerplate](https://github.com/hubcarl/easywebpack-cli-template/tree/master/boilerplate/react) React client render boilerplate.

- [egg-react-webpack-boilerplate](https://github.com/hubcarl/egg-react-webpack-boilerplate) support client render and server render.

- [egg-react-typescript-boilerplate](https://github.com/hubcarl/egg-react-typescript-boilerplate) Egg + TypeScript + React server render boilerplate.

- you can use [easywebpack-cli](https://github.com/hubcarl/easywebpack-cli) create client render project or create server side render project for react.

## Questions & Suggestions

Please open an issue [here](https://github.com/hubcarl/easywebpack-react).

## License

[MIT](LICENSE)
