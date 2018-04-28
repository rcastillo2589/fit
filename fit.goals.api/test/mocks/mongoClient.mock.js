const goodClient = {
  db: (name) => {
    return /* db */ {
      collection: (collectionName) => {
        return /* collection */ {
          find: () => { return {
              toArray: () => { 
                return new Promise((resolve) => resolve([])); 
              }
            }
          },
          insert: () => { 
            return new Promise(resolve => resolve({}));
          },
          update: () => {
            return new Promise(resolve => resolve({}));
          },
          deleteMany: () => {
            return new Promise(resolve => resolve({}));
          },
          deleteOne: () => {
            return new Promise(resolve => resolve());
          }
        }
      }
    };
  },
  close: () => {}
};

const badClient = {
  db: (name) => {
    return /* db */ {
      collection: (collectionName) => {
        return /* collection */ {
          find: () => { return {
              toArray: () => { 
                return new Promise((resolve, reject) => reject({})); 
              }
            }
          },
          insert: () => { 
            return new Promise((resolve, reject) => reject({}));
          },
          update: () => {
            return new Promise((resolve, reject) => reject({}));
          },
          deleteMany: () => {
            return new Promise((resolve, reject) => reject({}));
          },
          deleteOne: () => {
            return new Promise((resolve, reject) => reject({}));
          }
        }
      }
    };
  },
  close: () => {}
};

module.exports = {
  good: goodClient,
  bad: badClient
};
