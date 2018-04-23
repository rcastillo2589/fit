async function userRoute(fastify, options) {
  fastify.get('/user', async(request, reply) => {
    return {
      firstName: 'Robert',
      lastName: 'Castillo'
    };
  });
}

module.exports = userRoute;
