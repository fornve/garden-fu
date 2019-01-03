const firebase = require('@/firebase.js')
import store from '@/store'

let registerFields = async function(projectId) {
  try {
    firebase.fieldsCollection.where('projectId', '==', projectId).orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      let fieldsArray = []

      querySnapshot.forEach(doc => {
        let field = doc.data()
        field.id = doc.id
        fieldsArray.push(field)
      })

      store.commit('setFields', fieldsArray)
    });
  }
  catch(e) {
    console.log('Fields snapshot failed');
    conole.log(e)
  }
};

let unregisterFields = async function(projectId) {

    store.commit('setFields', [])
    firebase.fieldsCollection.onSnapshot(querySnapshot => {});

};

export { registerFields, unregisterFields };