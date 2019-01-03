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
          worksArray.push(field)
        })

        store.commit('setWorks', worksArray)
    })
  }
  catch(e) {
    console.log('Works snapshot failed');
    conole.log(e)
  };
};

let unregisterWorks = async function(projectId) {
  store.commit('setWorks', [])
  firebase.worksCollection.onSnapshot(querySnapshot => {});
};

export { registerWorks, unregisterWorks };