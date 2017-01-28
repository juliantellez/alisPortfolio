const onError = e => {
  console.error(e.stack || e)
  if (e.details) {
    console.log(e.details)
  }
}

module.exports = (e, stats) => {
  if (e) {
    onError(e)
  }
  let info = stats.toJson()

  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  info = stats.toString({
    chunks: false,
    colors: true,
  })
  console.log(info)
}
