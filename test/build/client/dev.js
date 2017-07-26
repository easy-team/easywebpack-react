'use strict';
const WebpackClientBaseBuilder = require('./base');
class ClientBuilder extends WebpackClientBaseBuilder {
  constructor(config) {
    super(config);
  }
}
module.exports = new ClientBuilder().create();
