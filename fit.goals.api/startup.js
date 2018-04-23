const fastify = require('fastify')();
const cors = require('cors');
const environments = require('./src/environment');
const startServer = require('./src/server');
const DaoFactory = require('./src/dao/daoFactory');

class Startup {
  start() {
    this.configure((fastifyConfigured, port, ip) => {
      startServer(fastifyConfigured, port, ip);
    });
  }

  configure(callback) {
    // Middleware
    fastify.use(cors());
    // Routes
    fastify.register(require('./src/route/v1/goals-route'), { prefix: 'v1' });
    // Default to dev, unless params supplied
    let environment = environments['dev'];
    if(process.argv.length > 2) {
      environment = environments[process.argv[2]];
    } 
    callback(fastify, environment.port, environment.ip);
  }
}

new Startup().start();