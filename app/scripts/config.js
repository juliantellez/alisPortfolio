import I from 'immutable'
import appConfig from '../../appConfig'

const ENV:string = process.env.NODE_ENV || 'development'
const isProduction:boolean = ENV === 'production'

export default appConfig.merge(I.Map({
  ENV,
  isProduction,
}))
