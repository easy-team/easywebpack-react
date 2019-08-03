'use strict';
const EasyWebpack = require('@easy-team/easywebpack');
const WebpackReactBaseBuilder = require('./base');
class WebpackServerBuilder extends WebpackReactBaseBuilder(EasyWebpack.WebpackServerBuilder){
  constructor(config) {
    super(config);
    this.setStyleLoader('isomorphic-style-loader');
  }
}
module.exports = WebpackServerBuilder;
