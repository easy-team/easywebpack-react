'use strict';
const EasyWebpack = require('easywebpack');
const WebpackReactBaseBuilder = require('./base');
class WebpackClientBuilder extends WebpackReactBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
  }

  initHotEntry() {
    if (this.config.hot) {
      if (this.config.hotCss === undefined) {
        this.config.hotCss = true;
      }
      super.initHotEntry();
      Object.keys(this.options.entry).forEach(name => {
        this.options.entry[name] = ['react-hot-loader/patch'].concat(this.options.entry[name]);
      });
    }
  }
}
module.exports = WebpackClientBuilder;
