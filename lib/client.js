'use strict';
const EasyWebpack = require('easywebpack');
const WebpackReactBaseBuilder = require('./base');
class WebpackClientBuilder extends WebpackReactBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config = {}) {
    super(config);
    // fix server import react-hot-loader problem when use same .babelrc config
    if (this.dev) {
      this.mergeLoader({
        babel: {
          options:{
            plugins: ['react-hot-loader/babel']
          }
        }
      });
    }
  }

  createHotEntry() {
    if (this.config.hot) {
      if (this.config.hotCss === undefined) {
        this.config.hotCss = true;
      }
      super.createHotEntry();
      Object.keys(this.webpackConfig.entry).forEach(name => {        
        this.webpackConfig.entry[name] = ['react-hot-loader/patch'].concat(this.webpackConfig.entry[name]);
      });
    }
  }
}
module.exports = WebpackClientBuilder;
