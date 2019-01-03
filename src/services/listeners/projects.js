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
      .set({
        createdAt: new Date(),
        projectId: projectId,
        userId: user.uid
      });

    resolve(projectId);
  });
};

let projectDetector = function(user, router) {
  return new Promise((resolve, reject) => {
    // get projectId from route
    let projectId = router.app.$route.params.projectId;
    console.log(router.app.$route.params);
    if(projectId && projectId !== 'false') {
      console.log('project in route '+ projectId);
      firebase.projectsUsersCollection
        .doc(projectId + '-' + user.uid)
        .get()
        .then((data) => {
          if(!data.exists)
          {
            console.log(projectId + '-' + user.uid);
            reject('This user has no access to this project')
          } else {
            resolve(projectId);
          }
        });
    }
    else {
      console.log('no project in route');
      firebase.projectsUsersCollection
        .where('userId', '==', user.uid)
        .orderBy('createdAt')
        .limit(1)
        .get()
        .then((data) => {
          if(!data.size)
          {
            console.log(data);
            console.log('didnot found any projects for that user');
            createProjectForUser(user).then((projectId) => {
              resolve(projectId);
            });
          } else {
            console.log('found projects for that user');
            resolve(data.docs[0].data().projectId);
          }

        }).catch((error) => {
          console.log(error)
          console.log('This user has no projects (lets create one)');
          createProjectForUser(user).then((projectId) => {
            resolve(projectId);
          });
      })
    }
  });
};

let registerProject = async function(projectId) {
  try {
    firebase.projectsCollection.doc(projectId).onSnapshot(doc => {
      let project = doc.data()
      project.id = doc.id
      project.name = doc.metadata.name;

      store.commit('setCurrentProject', project)
    });
  }
  catch(e) {
    console.log('Projects snapshot failed');
    conole.log(e)
  };
};

let unregisterProject = async function() {

    store.commit('setCurrentProject', false)
    firebase.projectsCollection.onSnapshot();

};

export { projectDetector, registerProject, unregisterProject };