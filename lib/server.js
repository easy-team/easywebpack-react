'use strict';
const EasyWebpack = require('easywebpack');
const WebpackReactBaseBuilder = require('./base');
class WebpackServerBuilder extends WebpackReactBaseBuilder(EasyWebpack.WebpackServerBuilder){
  constructor(config) {
    super(config);
  }
}
module.exports = WebpackServerBuilder;
