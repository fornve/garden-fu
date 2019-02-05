import store from '@/store'
const firebase = require('@/firebase.js')
import { projectsNew } from '../projects.js'

let createProjectForUser = function(userId) {
  return new Promise(async function(resolve) {
    let projectId = await projectsNew(userId);
    await projectsUsersNew(projectId, userId);

    resolve(projectId);
  });
};

let projectDetector = function(user, router) {
  return new Promise((resolve, reject) => {
    // get projectId from route
    let projectId = router.app.$route.params.projectId;
    // eslint-disable-next-line
    console.log(router.app.$route.params);
    if(projectId && projectId !== 'false') {
      // eslint-disable-next-line
      console.log('project in route '+ projectId);
    }
    else {
      // eslint-disable-next-line
      console.log('no project in route');
      projectsUsersGetByUser(user.uid)
        .then((data) => {
          resolve(data.data().projectId);
        })
        .catch(() => {
          createProjectForUser(user.uid).then((projectId) => {
            resolve(projectId);
          });
        });
    }
  });
};


let registerProjects = async function(userId) {
  try {
    firebase.projectsCollection.where('users', 'array-contains', userId).orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      let projectsArray = []

      querySnapshot.forEach(doc => {
        let project = doc.data()
        project.id = doc.id
        projectsArray.push(field)
      })

      store.commit('setProjects', projectsArray)
    });
  }
  catch(e) {
    // eslint-disable-next-line
    console.log('Projects snapshot failed');
    // eslint-disable-next-line
    conole.log(e)
  }
};

let unregisterProjects = async function() {
  store.commit('setCurrentProject', false)
  firebase.projectsCollection.onSnapshot();
};

export { projectDetector, registerProjects, unregisterProjects };