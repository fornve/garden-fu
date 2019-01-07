const firebase = require('@/firebase.js')
/*const ProjectsUsers = factory.define('projects_users', {
  createdAt: new Date(),
  projectId:
});*/

let projectsUsersNew = async function(projectId, userId) {
  await firebase.projectsUsersCollection
    .doc(projectId + '-' + userId)
    .set({
      createdAt: new Date(),
      projectId: projectId,
      userId: userId,
    });
};

let projectsUsersGet = function(projectId, userId) {
  return new Promise((resolve, reject) => {
    firebase.projectsUsersCollection
      .doc(projectId + '-' + userId)
      .get()
      .then((data) => {
        if(!data.exists)
        {
          reject('No data')
        } else {
          resolve(projectId);
        }
      });
  });
};

let projectsUsersGetByUser = function(userId) {
  return new Promise((resolve, reject) => {
    firebase.projectsUsersCollection
      .where('userId', '==', userId)
      .orderBy('createdAt')
      .limit(1)
      .get()
      .then((data) => {
        if(!data.size)
        {
          console.log(data);
          reject('did not found any projects for that user');
        } else {
          console.log('found projects for that user');
          resolve(data.docs[0]);
        }
      }).catch((error) => {
        console.log(error)
        reject('This user has no projects (lets create one)');
      })
  });
};

export { projectsUsersNew, projectsUsersGet, projectsUsersGetByUser };