const DaoFactory = require('./src/dao/daoFactory');
const MongoClient = require('mongodb').MongoClient;

const classes = {
  // TODO Setup MongoDb as client
  'DaoFactory': (dependency = MongoClient) =>  {
    if(dependency.name === 'MongoClient') {
      return new DaoFactory(dependency);
    } 
    return new DaoFactory(new dependency());
  },
}

module.exports = (resolvingClass, dependency) => {
  if(typeof dependency === 'undefined') {
    return classes[resolvingClass.name]();
  } else {
    return classes[resolvingClass.name](dependency);
  }
}
