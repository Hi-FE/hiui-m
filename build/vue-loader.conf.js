var utils = require('./utils')
var config = require('../config')
var env = process.env.NODE_ENV
var isProduction = env !== 'development'
var sourceMap = !isProduction ? config.dev.cssSourceMap : env === 'production' ? config.build.productionSourceMap : config.package.productionSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap,
    extract: isProduction
  })
}
