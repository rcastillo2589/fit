const DaoFactory = require('../../dao/daoFactory');

async function goalsRoute(fastify, options) {
  fastify.get('/goals', async(request, reply) => {
    // TODO Call goals endpoint or put into Redis Message Queue
  });

  fastify.post('/goal', async(request, reply)  => {
    let newGoal = request.body;
  });
}

module.exports = goalsRoute;
