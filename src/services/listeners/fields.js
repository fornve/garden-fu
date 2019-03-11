const firebase = require('@/firebase.js')
import store from '@/store'

let registerFields = async function(teamId) {
  try {
    firebase.fieldsCollection.where('teamId', '==', teamId).orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
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
