const inject = require('../injector');
const DaoFactory = require('../src/dao/daoFactory');
const expect = require('chai').expect;

class mockClient {
  constructor(){}
}

describe('inject', () => {
  it('should resolve daoFactory', () => {
    let daoFactory = inject(DaoFactory);
    expect(daoFactory.constructor.name).to.equal('DaoFactory');
  })

  it('should resolve daoFactory client', () => {
    let daoFactory = inject(DaoFactory);
    expect(daoFactory.client.name).to.equal('MongoClient');
  })

  it('should resolve daoFactory client to supplied client', () => {
    let daoFactory = inject(DaoFactory, mockClient);
    expect(daoFactory.client.constructor.name).to.equal('mockClient');
  })
});