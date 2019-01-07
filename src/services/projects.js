const firebase = require('@/firebase.js')
const uuid = require('uuid');

let projectsNew = async function(userId) {
  let projectId = uuid();
  await firebase.projectsCollection
    .doc(projectId)
    .set({
      createdAt: new Date(),
      createdByUser: userId
      ,
    });

  return projectId;
}

export { projectsNew };