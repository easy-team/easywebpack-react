'use strict';
const EasyWebpack = require('easywebpack');
const WebpackReactBaseBuilder = require('./base');
class WebpackClientBuilder extends WebpackReactBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config = {}) {
    super(config);
  }

  createHotEntry() {
    if (this.hot) {
      super.createHotEntry();
      Object.keys(this.webpackConfig.entry).forEach(name => {        
        this.webpackConfig.entry[name] = ['react-hot-loader/patch'].concat(this.webpackConfig.entry[name]);
      });
    }
  }
}
module.exports = WebpackClientBuilder;
