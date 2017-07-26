'use strict';
const path = require('path');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setEntry({
      include: 'test/web/page',
      template: 'test/web/view/layout.html'
    });
    this.setAlias('asset', 'test/web/asset');
    this.setAlias('component', 'test/web/component');
    this.setAlias('framework', 'test/web/framework');
    this.setAlias('store', 'test/web/store');
  }
};
module.exports = WebpackBaseBuilder;
