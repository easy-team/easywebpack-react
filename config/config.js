module.exports = {
  entry: {
    extMatch: '.jsx'
  },
  cssExtract: true,
  plugins:{
    buildfile: false,
    manifestDeps: true
  }
};