import store from '@/store'
const firebase = require('@/firebase.js')
import { teamsNew } from '../teams.js'

let createTeamForUser = function(user) {
  return new Promise(async function(resolve) {
    let teamId = await teamsNew(user);

    resolve(teamId);
  });
};

let teamDetector = function(user) {
  return new Promise((resolve) => {
    teamsGetByUser(user.uid)
      .then((data) => {
        resolve(data.data().teamId);
      })
      .catch(() => {
        createTeamForUser(user).then((teamId) => {
          resolve(teamId);
        });
      });
  });
};

let teamsGetByUser = async function(userId) {
  let doc = firebase
    .teamsCollection
    .where('users', 'array-contains', userId)
    .orderBy('createdAt', 'desc')
    .get()

  if(!doc.exists) {
    return false
  }

  let team = {
    id: doc.id,
    metadata: doc.data()
  }

  return team
}

let registerTeams = async function(userId) {
  try {
    firebase.teamsCollection.where('users', 'array-contains', userId).orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        store.commit(
          'addTeam',
          { id: doc.id, metadata: doc.data() },
          { module: 'teams' }
        )
      })
    });
  }
  catch(e) {
    // eslint-disable-next-line
    console.log('teams snapshot failed');
    // eslint-disable-next-line
    conole.log(e)
  }
};

let unregisterTeams = async function() {
  store.commit('setCurrentteam', false)
  firebase.teamsCollection.onSnapshot();
};

export { teamDetector, registerTeams, unregisterTeams };
