const GoalsDao = require('./goalsDao');

class DaoFactory {
  constructor(client) {
    this.client = client;
  }

  getGoalsDao() {
    return new GoalsDao(this.client);
  }
}

module.exports = DaoFactory;
