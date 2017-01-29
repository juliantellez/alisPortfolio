import path from 'path'
import gulp from 'gulp'
import del from 'del'
import plugins from 'gulp-load-plugins'
import forever from 'forever-monitor'
import appConfig from './appConfig'

const $ = plugins()

gulp.task('serve', ['watch'], () => {
  const serverPath = path.join(appConfig.get('DEST'), 'server.js')
  const child = new (forever.Monitor)(serverPath, {
    watch: true,
    watchDirectory: appConfig.get('DEST'),
    silent: false,
    colors: true,
  })
  child.on('watch:restart', info => {
    console.error(`Restaring server because of a change in: ${info.stat}`);
  })
  child.on('exit', info => {
    console.log('server has exited ...', info)
  })
  child.on('restart', info => {
    console.log('Forever has restarted the server');
  })
  child.start()
})

gulp.task('watch', () => require('./webpack/dev.config')())
gulp.task('build', ['clean'], () => require('./webpack/prod.config')())

gulp.task('clean', () => del([appConfig.get('DEST')]))