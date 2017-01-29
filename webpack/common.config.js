import I from 'immutable'
import appConfig from '../appConfig'

export default I.Map({
  devtool: 'source-map',
  entry: {
    server: appConfig.get('PATHS').get('server'),
    client: appConfig.get('PATHS').get('client'),
  },
  output: {
    path: appConfig.get('DEST'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
})
