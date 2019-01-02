const firebase = require('@/firebase.js')
import store from '@/store'

export default () => {
  console.log('Unregistering listeners');

  store.commit('setFields', [])
  firebase.fieldsCollection.onSnapshot(querySnapshot => {});

  store.commit('setWorks', [])
  firebase.worksCollection.onSnapshot(() => {});

  console.log('Listeners unregistered');
}
