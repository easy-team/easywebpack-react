'use strict';
const path = require('path');
const WebpackReactBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.mergeConfig(require('../config/config'));
    this.mergePlugin(require('../config/plugin'));
    this.setResolveLoader({ modules: [path.join(__dirname, '../node_modules')] });
  }

  prepareCssModuleLoader(loaders) {
    const cssModule = this.config.cssModule;
    if (cssModule) {
      const cssLoaderName = 'css-loader';
      const loaderNames = Object.keys(loaders);
      loaderNames.forEach(name => {
        const itemLoader = loaders[name];
        if (Array.isArray(itemLoader.use)) {
          const cssLoaderIndex = itemLoader.use.findIndex(loader => {
            return loader === cssLoaderName || (this.utils.isObject(loader) && loader.loader === cssLoaderName);
          });
          if (cssLoaderIndex > -1) {
            const cssModuleLoader = this.utils.cloneDeep(itemLoader);
            const cssModuleName = `${name}_module`;
            const cssModuleLoaderOption = this.merge({
              options: {
                modules: true,
                importLoaders: cssModuleLoader.use.length - cssLoaderIndex
              }
            }, this.utils.isObject(cssModule) && cssModule.options);
            const oldCssLoader = cssModuleLoader.use[cssLoaderIndex];
            const newCssLoader = this.merge(this.utils.isString(oldCssLoader) ? { loader: cssLoaderName } : oldCssLoader, cssModuleLoaderOption);
            if (this.utils.isObject(cssModule) && cssModule.include) {
              const include = [].concat(cssModule.include).map(filepath=> {
                return this.utils.normalizePath(filepath, this.config.baseDir);
              });
              cssModuleLoader.include = [].concat(itemLoader.include || []).concat(include);
              itemLoader.exclude = [].concat(itemLoader.exclude || []).concat(include);
            } else if (this.utils.isBoolean(cssModule)) {
              itemLoader.enable = false;
            }
            cssModuleLoader.use[cssLoaderIndex] = newCssLoader;
            if (this.ssr) {
              cssModuleLoader.use.unshift('isomorphic-style-loader');
            }
            loaders[cssModuleName] = cssModuleLoader;
          }
        }
      });
    }
  }
};
module.exports = WebpackReactBaseBuilder;