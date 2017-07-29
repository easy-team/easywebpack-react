'use strict';
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const defaultConfig = require('./config');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(defaultConfig, config));
  }
};
module.exports = WebpackBaseBuilder;
