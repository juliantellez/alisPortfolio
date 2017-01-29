import Hapi from 'hapi'

const server = new Hapi.Server()

server.connection({port: 5000})

server.start(e => {
  if (e) {
    throw e
  }
  console.log(`Server running at: ${server.info.uri}`)  
})
