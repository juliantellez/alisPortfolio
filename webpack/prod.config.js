import I from 'immutable'
import _ from 'lodash'
import webpack from 'webpack'
import statsLog from './helpers/stats'
import uglifyOptions from './helpers/uglify'
import chunksOptions from './helpers/chunks'
import commonConfig from './common.config'

const productionConfig = {
  entry: {
    vendor: ['hapi'],
  },
  output: {
    filename: '[name].js'
  },
  plugins:[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(uglifyOptions),
    // new webpack.optimize.CommonsChunkPlugin(chunksOptions),
  ]
}

const _config = _.merge(commonConfig.toJS(), productionConfig)
const compiler = webpack(_config)

export default ()  => compiler.run(statsLog)
