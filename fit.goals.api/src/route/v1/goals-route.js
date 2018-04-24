const ObjectId = require('mongodb').ObjectId;
const inject = require('../../../injector');
const DaoFactory = require('../../dao/daoFactory');

async function goalsRoute(fastify, options) {
  // Get all goals for the provided user
  fastify.get('/goals/user/:id', async(request, reply) => {
    const userId = request.params['id'];
    try {
      let result = await inject(DaoFactory)
        .getGoalsDao()
        .getGoalsByUserId(userId);
      reply.send(result);
    } catch(err) {
      reply.code(500).send(err);
    }
  });

  // Get one goal by id
  fastify.get('/goal/:id', async(request, reply) => {
    const goalId = new ObjectId(request.params["id"]);
    try {
      let result = await inject(DaoFactory)
        .getGoalsDao()
        .getGoalById(goalId);
      reply.send(result);
    } catch(err) {
      reply.code(500).send(err);
    }
  });

  // Create one goal for the provided user
  fastify.post('/goal', async(request, reply) => {
    const user = request.body.user;
    const goal = request.body.goal;
    try {
      let result = await inject(DaoFactory)
        .getGoalsDao()
        .createGoal(user, goal);
      reply.send(result);
    } catch(err) {
      reply.code(500).send(err);
    }
  });

  // Create a progress mark
  fastify.post('/goal/progress', async(request, reply) => {
    let goalId = new ObjectId(request.body.goalId);
    let progress = request.body.progress;
    try {
      let result = await inject(DaoFactory)
        .getGoalsDao()
        .addProgressMark(goalId, progress);
      reply.send(result);
    } catch(err) {
      reply.code(500).send(err);
    }
  });

  // Delete all goals for the provided user
  fastify.delete('/goal/user/:id', async(request, reply) => {
    const userId = request.params['id'];
    try {
      let result = await inject(DaoFactory)
        .getGoalsDao()
        .deleteAllGoalsByUser(userId);
      reply.send(result);
    } catch(err) {
      reply.code(500).send(err);
    }
  });

  // Delete a single goal for by id
  fastify.delete('/goal/:id', async(request, reply) => {
    const goalId = new ObjectId(request.params['id']);
    try {
      let result = await inject(DaoFactory)
        .getGoalsDao()
        .deleteGoalById(goalId);
      reply.send(result);
    } catch(err) {
      reply.code(500).send(err);
    }
  });
}

module.exports = goalsRoute;
