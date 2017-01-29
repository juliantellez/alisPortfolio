const webpack = require('webpack')
const statsLog = require('./helpers/stats')
const config = require('./common.config')

const compiler = webpack(config)
const watchOpts = {
  ignored: /node_modules/,
  poll: 1000,
}

compiler.watch(watchOpts, statsLog)
