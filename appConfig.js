const path = require('path')
const I = require('immutable')

const SRC = path.join(__dirname, 'app')
const DEST = path.join(__dirname, 'build')

const PATHS = new I.Record({
  server: path.join(SRC, 'scripts/server/main.js'),
})()

module.exports = new I.Record({
  PORT: 5000,
  SRC,
  DEST,
  PATHS,
})()
