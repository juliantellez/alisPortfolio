import path from 'path'
import Hapi from 'hapi'
import inert from 'inert'

import routesHandler from './routes/handler'
import config from 'scripts/config'

const options:Object = {
  connections: {
    router: {
      stripTrailingSlash: true,
    },
  },
}

if (!config.get('isProduction')) {
  options.debug = {
    request: ['error', 'request-internal'],
  }
}

const server = new Hapi.Server(options)
server.connection({labels: ['server'], port: config.get('PORT')})

server.register([inert], e => {
  if (e) {
    throw new Error(e)
  }
  server.route(routesHandler)
  server.start(e => {
    if (e) {
      throw e
    }
    console.log(`Server running in port: ${server.info.port}`)
  })
})
