'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'react',
  commonsChunk: ['vendor'],
  entry: {
    include: 'test/web/page',
    exclude: ['test/web/page/html'],
    template: 'test/web/view/layout.html'
  },
  html: {
    include: 'test/web/page',
    template: 'test/web/view/layout.html',
    buildDir: 'html',
    options: {}
  },
  alias: {
    asset: 'test/web/asset',
    app: 'test/web/framework/vue/app.js',
    component: 'test/web/component',
    framework: 'test/web/framework',
    store: 'test/web/store'
  },
  create() {
  }
};