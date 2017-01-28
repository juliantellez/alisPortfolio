const webpack = require('webpack')
const statsLog = require('./helpers/stats')
const config = require('./common.config')

const compiler = webpack(config)

compiler.watch({
  ignored: /node_modules/,
}, statsLog)
