const firebase = require('@/firebase.js')
import store from '@/store'

export default () => {
  console.log('Registering listeners');

  firebase.auth.onAuthStateChanged(user => {
    if (user) {

      firebase.fieldsCollection.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
          let fieldsArray = []

          querySnapshot.forEach(doc => {
              let field = doc.data()
              field.id = doc.id
              fieldsArray.push(field)
          })

          store.commit('setFields', fieldsArray)
      });

      firebase.worksCollection.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
          let worksArray = []

          querySnapshot.forEach(doc => {
              let work = doc.data()
              work.id = doc.id
              worksArray.push(work)
          })

          store.commit('setWorks', worksArray)
      });
    };

    if(!user) {
      console.log('Nah, no user, listeners not registered');      
    }
  });
}
