import Hapi from 'hapi'

import config from 'scripts/config'
const server = new Hapi.Server()

server.connection({port: config.get('PORT')})

server.start(e => {
  if (e) {
    throw e
  }
  console.log(`Server running at: ${server.info.uri}`)
})
