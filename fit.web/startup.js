const fastify = require('fastify')();
const path = require('path');
const serveStatic = require('serve-static');
const startServer = require('./server');

/**
 * Middleware
 */
// Multiple paths
fastify.use(serveStatic(path.join(__dirname, 'client', 'build')));

/**
 * Register Routes
 */
fastify.register(require('./index'));

/**
 * Start Server
 */
startServer(fastify, 80, '0.0.0.0');
