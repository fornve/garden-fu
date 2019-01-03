/* eslint-disable-no-console */
const firebase = require('@/firebase.js')
import store from '@/store'

let registerWorks = async function(projectId) {
  try {
    firebase.worksCollection
      .where('projectId', '==', projectId)
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        let worksArray = []

        querySnapshot.forEach(doc => {
          let work = doc.data()
          work.id = doc.id
          worksArray.push(work)
        })

        store.commit('setWorks', worksArray)
    })
  }
  catch(e) {
    // eslint-disable-no-console
    console.log('Works snapshot failed');
    // eslint-disable-no-console
    console.log(e)
  }
};

let unregisterWorks = async function() {
  store.commit('setWorks', [])
  firebase.worksCollection.onSnapshot();
};

export { registerWorks, unregisterWorks };