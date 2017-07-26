'use strict';
const WebpackServerBaseBuilder = require('./base');
class WebpackBuilder extends WebpackServerBaseBuilder{
  constructor(config) {
    super(config);
  }
}
module.exports = new WebpackBuilder().create();
