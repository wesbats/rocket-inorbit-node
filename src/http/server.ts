import fastify from 'fastify'

const app = fastify()

app
  .listen({
    port: 333,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
