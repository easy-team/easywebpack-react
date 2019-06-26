'use strict';
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

class ReactSSRDynamicChunkPlugin {
  constructor(opts) {
    this.opts = Object.assign({ }, { chunk: true }, opts);
  }

  apply(compiler) {
    compiler.hooks.emit.tap('ReactSSRDynamicChunkPlugin', (compilation, callback) => {
      const buildPath = compilation.options.output.path;
         
      if (!fs.existsSync(buildPath)) {
        mkdirp.sync(buildPath);
      }
      
      compilation.chunks.forEach(chunk => {
        if (!this.opts.chunk) {
          return;
        }

        const asyncChunks = chunk.getAllAsyncChunks();

        asyncChunks && asyncChunks.forEach(asyncChunk => {
          asyncChunk.files.forEach(filename => {
            const filepath = path.join(buildPath, filename);
            const source = compilation.assets[filename].source();
            fs.writeFileSync(filepath, source, 'utf8');
          });
        })
      });
      callback && callback();
    });
  }
}

module.exports = ReactSSRDynamicChunkPlugin;
