const firebase = require('@/firebase.js')
import store from '@/store'


let unregisterFields = async function() {
  store.commit('setFields', [])
  store.commit('setAllFields', [])
  firebase.fieldsCollection.onSnapshot();
};

export { registerFields, unregisterFields };
