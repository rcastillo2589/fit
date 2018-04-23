const DaoFactory = require('../../../src/dao/daoFactory');
const expect = require('chai').expect;

describe('DaoFactory', () => {
  it('should get GoalsDao', () => {
    let goals = new DaoFactory({}).getGoalsDao();
    expect(goals.constructor.name).to.equal('GoalsDao');
  })
});
