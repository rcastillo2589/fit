const GoalsDao = require('../../../src/dao/goalsDao');
const MongoClient = require('mongodb').MongoClient;
const chai = require('chai');
const spies = require('chai-spies');
const goodMockClient = require('../../mocks/mongoClient.mock').good;
const badMockClient = require('../../mocks/mongoClient.mock').bad;
const expect = chai.expect;
const should = chai.should();

chai.use(spies);

const sandbox = chai.spy.sandbox();

describe('GoalsDao', () => {
  describe('getGoalsByUserId(userId) returns Success', () => {
    let goalsDao;

    beforeEach(() => {
      goalsDao = new GoalsDao(MongoClient);
      sandbox.on(goalsDao.client, 'connect', (url) => {
        return new Promise((resolve) => resolve(goodMockClient));
      });
    });

    afterEach(() => {
      sandbox.restore();
    })

    it('should return promise', () => {     
      let result = goalsDao.getGoalsByUserId(1);
      expect(result).to.be.instanceof(Promise);
    });

    it('should return array of goals', () => {
      goalsDao.getGoalsByUserId(1)
        .then((goals) => {
          expect(goals).to.be.instanceOf(Array);
          expect(goals.length).to.equal(0);
        });
    });
  });

  describe('getGoalsByUserId(userId) returns Failure', () => {
    let goalsDao;

    beforeEach(() => {
      goalsDao = new GoalsDao(MongoClient);
      sandbox.on(goalsDao.client, 'connect', (url) => {
        return new Promise((resolve) => resolve(badMockClient));
      });
    });

    afterEach(() => {
      sandbox.restore();
    })

    it('should return in catch', () => {
      try {
        goalsDao.getGoalsByUserId(1)
      } catch(err) {
        expect(err).not.to.be.undefined;
        expect(err).to.equal({});
      }
    });
  });

  describe('getGoalById(goalId) returns Success', () => {
    let goalsDao;

    beforeEach(() => {
      goalsDao = new GoalsDao(MongoClient);
      sandbox.on(goalsDao.client, 'connect', (url) => {
        return new Promise((resolve) => resolve(goodMockClient));
      });
    });

    afterEach(() => {
      sandbox.restore();
    })

    it('should return promise', () => {     
      let result = goalsDao.getGoalById(1);
      expect(result).to.be.instanceof(Promise);
    });

    it('should return array of goals', () => {
      goalsDao.getGoalById(1)
        .then((goals) => {
          expect(goals).to.be.instanceOf(Array);
          expect(goals.length).to.equal(0);
        });
    });
  });

  describe('getGoalById(userId) returns Failure', () => {
    let goalsDao;

    beforeEach(() => {
      goalsDao = new GoalsDao(MongoClient);
      sandbox.on(goalsDao.client, 'connect', (url) => {
        return new Promise((resolve) => resolve(badMockClient));
      });
    });

    afterEach(() => {
      sandbox.restore();
    })

    it('should return in catch', () => {
      try {
        goalsDao.getGoalById(1);
      } catch(err) {
        expect(err).not.to.be.undefined;
        expect(err).to.equal({});
      }
    });
  });

  describe('createGoal(user, goal) returns Success', () => {
    let goalsDao;

    beforeEach(() => {
      goalsDao = new GoalsDao(MongoClient);
      sandbox.on(goalsDao.client, 'connect', (url) => {
        return new Promise((resolve) => resolve(goodMockClient));
      });
    });

    afterEach(() => {
      sandbox.restore();
    })

    it('should return promise', () => {     
      let result = goalsDao.createGoal({}, {});
      expect(result).to.be.instanceof(Promise);
    });

    it('should return result object', () => {
      goalsDao.createGoal({}, {})
        .then((result) => {
          expect(result).to.be.instanceOf(Object);
          expect(result).to.equal({});
        });
    });
  });

  describe('getGoalsByUserId(userId) returns Failure', () => {
    let goalsDao;

    beforeEach(() => {
      goalsDao = new GoalsDao(MongoClient);
      sandbox.on(goalsDao.client, 'connect', (url) => {
        return new Promise((resolve) => resolve(badMockClient));
      });
    });

    afterEach(() => {
      sandbox.restore();
    })

    it('should return in catch', () => {
      try {
        goalsDao.createGoal({}, {});
      } catch(err) {
        expect(err).not.to.be.undefined;
        expect(err).to.equal({});
      }
    });
  });
});
