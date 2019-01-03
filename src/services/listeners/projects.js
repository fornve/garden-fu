const firebase = require('@/firebase.js')
import store from '@/store'
const uuid = require('uuid');

let createProjectForUser = function(user) {
  return new Promise(async function(resolve) {
    let projectId = uuid();
    await firebase.projectsCollection
      .doc(projectId)
      .set({ createdAt: new Date() });

    await firebase.projectsUsersCollection
      .doc(projectId + '-' + user.uid)
      .set({ createdAt: new Date() });

    resolve(projectId);
  });
};

let projectDetector = function(user, router) {
  return new Promise((resolve, reject) => {
    // get projectId from route
    let projectId = router.app.$route.params.projectId;

    if(projectId) {
      firebase.projectsUsersCollection
        .doc(projectId + '-' + user.uid)
        .get()
        .then((data) => {
          resolve(data.id);
        }).catch((error) => {
          console.log('This user has no access to this project');
          console.log(error)
      })
    }
    else {
      firebase.projectsUsersCollection
        .where('userId', '==', user.uid)
        .orderBy('createdAt')
        .limit(1)
        .get()
        .then((data) => {

        }).catch((error) => {
          console.log('This user has no projects (lets create one)');
          createProjectForUser(user).then((projectId) => {
            resolve(projectId);
          });
      })
    }
  });
};

let registerProject = async function(projectId) {
    firebase.projectsCollection.doc(projectId).onSnapshot(querySnapshot => {

        querySnapshot.forEach(doc => {
            let project = doc.data()
            project.id = doc.id
            project.name = doc.metadata.name;
        })

        store.commit('setProject', project)
    });
};

let unregisterProject = async function(projectId) {

    store.commit('setProject', false)
    firebase.projectsCollection.onSnapshot(querySnapshot => {});

};

export { projectDetector, registerProject, unregisterProject };