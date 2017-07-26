'use strict';
const WebpackServerBuilder = require('../../../lib/server');
const WebpackServerBaseBuilder = require('../base');
class WebpackBuilder extends WebpackServerBaseBuilder(WebpackServerBuilder) {
  constructor(config) {
    super(config);
  }
}
module.exports = WebpackBuilder;