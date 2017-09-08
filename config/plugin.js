'use strict';

exports.modulereplacement = {
  enable(){
    return !this.config.cssModule
  }
};

exports.ignore = {
  enable(){
   return !this.config.cssModule
  }
};

