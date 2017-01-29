import webpack from 'webpack'
import statsLog from './helpers/stats'
import commonConfig from './common.config'

const compiler = webpack(commonConfig.toJS())
const watchOpts = {
  ignored: /node_modules/,
  poll: 1000,
}

export default () => compiler.watch(watchOpts, statsLog)
