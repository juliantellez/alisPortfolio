const I = require('immutable')
const path = require('path')
const appConfig = require('../appConfig')

module.exports = {
  entry: {
    server: appConfig.PATHS.server,
  },
  output: {
    path: appConfig.DEST,
    filename: '[name].js'
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  }
}
