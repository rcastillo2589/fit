async function start(fastify, port = 3000, host = '127.0.0.1') {
  try {
    console.log('Starting server ...');
    await fastify.listen(port, host);
    console.log('Server started on port: ' + port);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

module.exports = start;
