const _ = require('lodash')
const webpack = require('webpack')
const statsLog = require('./helpers/stats')
const uglifyOptions = require('./helpers/uglify')
const chunksOptions = require('./helpers/chunks')
const config = require('./common.config')

const productionConfig = {
  entry: {
    vendor: ['hapi'],
  },
  output: {
    filename: '[name]-[hash].js'
  },
  plugins:[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(uglifyOptions),
    new webpack.optimize.CommonsChunkPlugin(chunksOptions),
  ]
}

const _config = _.merge(config, productionConfig)
const compiler = webpack(_config)
compiler.run(statsLog)
