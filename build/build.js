require('shelljs/global')
var webpack = require('webpack')
var ora = require('ora')
var conf = require('./webpack.prod')
var spinner = ora('chargement...')

spinner.start()
rm('-rf', 'dist')

webpack(conf, function (err, stats) {
  spinner.stop()
  if (err) {
    throw err
  } else {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  }
})
