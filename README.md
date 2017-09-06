# easywebpack-react

React Webpack Building for easywebpack

## Install

```bash
$ npm i easywebpack-react --save-dev
```

## Usage


### webpack common config `base.js`

```js
'use strict';
const path = require('path');
const ReactWebpack = require('easywebpack-react');
const merge = ReactWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const webpackConfig = {
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/test'],
    html: {
     include: ['app/web/page/html'],
     exclude: [],
     template: 'app/web/view/layout.html',
     buildDir: 'html',
    },
  }
};
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setAlias('asset', 'app/web/asset');
    this.setAlias('component', 'app/web/component');
    this.setAlias('framework', 'app/web/framework');
    this.setAlias('store', 'app/web/store');
  }
};
module.exports = WebpackBaseBuilder;
```

### webpack browser config `client.js` (前端渲染)

```js
'use strict';
const ReactWebpack = require('easywebpack-react');
const WebpackClientBuilder = ReactWebpack.WebpackClientBuilder;
const WebpackBaseBuilder = require('../base');
class ClientBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
}
module.exports = new ClientBuilder().create();
```


### command run entry file `build.js`

```js
const ReactWebpack = require('easywebpack-react');
const clientConfig = require('./client');
const config = [clientConfig]

if (process.env.NODE_SERVER) {
  // development mode: webpack building and start webpack hot server
  ReactWebpack.server(config);
} else {
  // build file to disk
  ReactWebpack.build(config);
}
```

### commmand run

```js
{
  "scripts": {
     "build": "cross-env NODE_ENV=development node test/build",
     "start" : "cross-env NODE_SERVER=true NODE_ENV=development node test/build"
   }
}
```

```bash

npm start

```

## Example

- see [test/web](test/web) for more detail.

- [egg-react-webpack-boilerplate](https://github.com/hubcarl/egg-react-webpack-boilerplate) support client render and server render.

- you can use [easywebpack-cli](https://github.com/hubcarl/easywebpack-cli) create client render project or create server side render project for react.

## Development Error


#### Uncaught TypeError: _react2.default.render is not a function

```bash
npm i babel-plugin-add-module-exports --save-dev
```