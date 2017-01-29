import path from 'path'
import I from 'immutable'

const SRC = path.join(__dirname, 'app')
const DEST = path.join(__dirname, 'build')
const BASE_URL = '/'

const PATHS = I.Map({
  server: path.join(SRC, 'scripts/server/main.js'),
  webpack: {
    dev: path.join(__dirname, 'webpack/dev.config'),
  },
})

export default I.Map({
  PORT: 5000,
  SRC,
  DEST,
  BASE_URL,
  PATHS,
})
