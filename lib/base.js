'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const defaultConfig = require('./config');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(defaultConfig, config));
    this.setOption({ resolveLoader: { modules: [path.join(__dirname, '../node_modules')] } });
  }
};
module.exports = WebpackBaseBuilder;
