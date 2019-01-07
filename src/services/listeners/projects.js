import store from '@/store'
const firebase = require('@/firebase.js')
import { projectsNew } from '../projects.js'
import { projectsUsersNew, projectsUsersGet, projectsUsersGetByUser } from '../projectsUsers.js'

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

      projectsUsersGet(projectId, user.uid)
        .then(resolve(projectId))
        .catch(reject('This user has no access to this project'))
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
    // eslint-disable-next-line
    console.log('Projects snapshot failed');
    // eslint-disable-next-line
    conole.log(e)
  }
};

let unregisterProject = async function() {
  store.commit('setCurrentProject', false)
  firebase.projectsCollection.onSnapshot();
};

export { projectDetector, registerProject, unregisterProject };