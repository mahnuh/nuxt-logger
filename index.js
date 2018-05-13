const path = require('path')

module.exports = function nuxtLogger (moduleOptions) {
  const options = Object.assign({}, this.options.logger, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: true,
    fileName: 'logger.js',
    options
  })
}

module.exports.meta = require('./package.json')