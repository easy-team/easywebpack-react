# easywebpack-react

Webpack3 (3.x.x) and Webpack2 (1.x.x) building solution for React, Support client render and server side render build.

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
const easywebpack = require('easywebpack-vue');
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
const webpackConfig = require('webpack.config.js');

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

- [egg-react-webpack-boilerplate](https://github.com/hubcarl/egg-react-webpack-boilerplate) support client render and server render.

- you can use [easywebpack-cli](https://github.com/hubcarl/easywebpack-cli) create client render project or create server side render project for react.

## Questions & Suggestions

Please open an issue [here](https://github.com/hubcarl/easywebpack-vue).

## License

[MIT](LICENSE)
