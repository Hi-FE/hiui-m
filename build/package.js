require('./check-versions')()

process.env.NODE_ENV = 'package'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.package.conf')

var spinner = ora('packaging for componets...')
spinner.start()

rm(path.join(config.package.assetsRoot, '/'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Package complete.\n'))
    console.log(chalk.yellow(
      '  Tip: Not Tip. \n'
    ))
  })
})
