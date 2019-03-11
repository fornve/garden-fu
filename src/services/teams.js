const firebase = require('@/firebase.js')
const uuid = require('uuid');

let teamsNew = async function(user) {
  let teamId = uuid();
  await firebase.teamsCollection
    .doc(teamId)
    .set({
      createdAt: new Date(),
      createdBy: {
        id: user.uid,
        name: user.displayName
      },
      users: [
        user.uid
      ]
    });

  return teamId;
}

export { teamsNew };
