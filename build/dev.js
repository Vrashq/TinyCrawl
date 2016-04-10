var webpack = require('webpack')
var chokidar = require('chokidar')
var config = require('./webpack.dev')
var WebpackDevServer = require('webpack-dev-server')

var port = 8080
var compiler = webpack(config)

var hotMiddleware = require('webpack-hot-middleware')(compiler)

chokidar.watch('./*.html').on('all', function (path) {
  console.log('Le fichier ' + path + ' a changé')
  hotMiddleware.publish({action: 'reload'})
})

var server = new WebpackDevServer(compiler, {
  hot: true,
  /* proxy: {
   '*': {
   target: 'http://www.jerome-lenaou.fr',
   changeOrigin: true
   }
   }, */
  contentBase: './',
  quiet: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: { colors: true }
})

server.use(hotMiddleware)

server.listen(port, function (err) {
  if (err) {
    throw err
  } else {
    console.log('Listen on localhost:' + port)
  }
})
