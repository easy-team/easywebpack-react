'use strict';
module.exports = {
  presets: [
    react, [env, {
      modules: false
    }]
  ],
  plugins: [
    'transform-object-assign',
    'syntax-dynamic-import',
    'transform-object-rest-spread',
    'transform-runtime'
  ],
  env: {
    development: {
      plugins: [
        'react-hot-loader/babel'
      ]
    }
  },
  comments: false
};