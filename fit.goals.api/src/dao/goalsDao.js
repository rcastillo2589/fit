const url = 'mongodb://localhost:27017';
const dbName = 'fitgoals';

class GoalsDao {
  constructor(client) {
    this.client = client;
  }

  async getGoalsByUserId(userId) {
    return await connect(this.client, (db) => {
      const collection = db.collection('goals');
      return collection.find(
        /* Query */
        { user: userId }
      ).toArray();
    });
  }

  async getGoalById(goalId) {
    return await connect(this.client, (db) => {
      const collection = db.collection('goals');
      return collection.find(
        /* Query */
        { "_id": goalId }
      ).toArray();
    });
  }

  async createGoal(user, goal) {
    return await connect(this.client, (db) => {
      const collection = db.collection('goals');
      return collection.insert(
        { user: user, goal }
      );
    });
  }

  async addProgressMark(goalId, progress) {
    return await connect(this.client, (db) => {
      const collection = db.collection('goals');
      return collection.update(
        /* Query */
        { "_id": goalId },
        { $push: { "goal.progress": progress } }
      );
    });
  }

  async deleteAllGoalsByUser(userId) {
    return await connect(this.client, (db) => {
      const collection = db.collection('goals');
      return collection.deleteMany(
        /* Query */
        { user: userId }
      );
    });
  }

  async deleteGoalById(goalId) {
    return await connect(this.client, (db) => {
      const collection = db.collection('goals');
      return collection.deleteOne(
        /* Query */
        { "_id": goalId }
      );
    });
  }
}

/**
 * Handles all opening and closing connections to mongo
 * @param {MongoClient} client 
 * @param {Logic to Execute} job 
 */
async function connect(client, job) {
  return await client.connect(url)
    .then((dbClient) => {
      const result = job(dbClient.db(dbName));
      dbClient.close();
      return result;
    }).catch((err) => {
      console.log(err);
      throw err;
    });
}

module.exports = GoalsDao;
