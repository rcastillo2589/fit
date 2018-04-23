const ObjectId = require('mongodb').ObjectId;
const inject = require('../../../injector');
const DaoFactory = require('../../dao/daoFactory');

async function goalsRoute(fastify, options) {
  // Get all goals for the provided user
  fastify.get('/goals/user/:id', async(request, reply) => {
    const userId = request.params['id'];
    await inject(DaoFactory)
      .getGoalsDao()
      .getGoalsByUserId(userId)
      .then((data) => {
        reply.send(data);
      }).catch((err) => {
        reply
          .code(500)
          .send('Something happened');
      });
  });

  // Get one goal by id
  fastify.get('/goal/:id', async(request, reply) => {
    let goalId = new ObjectId(request.params["id"]);
    await inject(DaoFactory)
      .getGoalsDao()
      .getGoalById(goalId)
      .then((data) => {
        reply.send(data);
      }).catch((err) => {
        reply
          .code(500)
          .send('Something happened');
      });
  });

  // Create one goal for the provided user
  fastify.post('/goal', async(request, reply) => {
    const user = request.body.user;
    const goal = request.body.goal;
    await inject(DaoFactory)
      .getGoalsDao()
      .createGoal(user, goal)
      .then((data) => {
        reply.send(data);
      }).catch((err) => {
        reply.code(500)
          .send('Something happened');
      });
  });

  // Create a progress mark
  fastify.post('/goal/progress', async(request, reply) => {
    let goalId = new ObjectId(request.body.goalId);
    let progress = request.body.progress;
    await inject(DaoFactory)
      .getGoalsDao()
      .addProgressMark(goalId, progress)
      .then((data) => {
        reply.send(data);
      }).catch((err) => {
        reply.code(500)
          .send('Something happened');
      })
  });

  // Delete all goals for the provided user
  fastify.delete('/goal/user/:id', async(request, reply) => {
    const userId = request.params['id'];
    await inject(DaoFactory)
      .getGoalsDao()
      .deleteAllGoalsByUser(userId)
      .then((data) => {
        reply.send(data);
      }).catch((err) => {
        reply.code(500)
          .send('Something happened');
      });
  });

  // Delete a single goal for by id
  fastify.delete('/goal/:id', async(request, reply) => {
    const goalId = new ObjectId(request.params['id']);
    await inject(DaoFactory)
      .getGoalsDao()
      .deleteGoalById(goalId)
      .then((data) => {
        reply.send(data);
      }).catch((err) => {
        reply.code(500)
          .send('Something happened');
      });
  });
}

module.exports = goalsRoute;
