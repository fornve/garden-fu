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

    firebase.fieldsCollection.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      let fieldsArray = []

      querySnapshot.forEach(doc => {
        let field = doc.data()
        field.id = doc.id
        fieldsArray.push(field)
      })

      store.commit('setAllFields', fieldsArray)
    });
  }
  catch(e) {
    // eslint-disable-no-console
    console.log('Fields snapshot failed');
    // eslint-disable-no-console
    console.log(e)
  }
};

let unregisterFields = async function() {
  store.commit('setFields', [])
  store.commit('setAllFields', [])
  firebase.fieldsCollection.onSnapshot();
};

export { registerFields, unregisterFields };