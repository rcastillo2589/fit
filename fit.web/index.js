const path = require('path');

async function indexRoute(fastify, options) {
  fastify.get('/', async(request, reply) => {
    const fs = require('fs');
    const stream = fs.createReadStream(
      path.join(__dirname, 'client', 'build', 'index.html'), 
      'utf8'
    );
    reply.send(stream);
  });
}

module.exports = indexRoute;
