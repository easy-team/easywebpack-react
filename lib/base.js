'use strict';
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const defaultConfig = require('./config');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(config, defaultConfig));
  }
};
module.exports = WebpackBaseBuilder;
