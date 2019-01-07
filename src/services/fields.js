const firebase = require('@/firebase.js')
const uuid = require('uuid');

let fieldsNew = async function(field) {
  return new Promise((resolve, reject) => {
    field.createdAt = new Date();
    firebase.db.collection('fields')
      .doc(uuid())
      .set(field)
      .then(() => {
        resolve();
      }).catch((err) => {
        reject(err)
    })
  });
};

export { fieldsNew };