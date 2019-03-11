const firebase = require('@/firebase.js')
const uuid = require('uuid');

let teamsNew = async function(userId) {
  let teamId = uuid();
  await firebase.teamsCollection
    .doc(teamId)
    .set({
      createdAt: new Date(),
      createdByUser: userId,
      users: [
        userId
      ]
    });

  return teamId;
}

export { teamsNew };
