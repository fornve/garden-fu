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
      .then((team) => {
        resolve(team.id);
      })
      .catch(e => {
        createTeamForUser(user).then((teamId) => {
          resolve(teamId);
        });
      });
  });
};

let teamsGetByUser = async function(userId) {
  let snap = await firebase
    .teamsCollection
    .where('users', 'array-contains', userId)
    .orderBy('createdAt', 'asc')
    .limit(1)
    .get()
    .then()

  if(snap.size < 1) {
    return false
  }

  let team = {}
  snap.forEach(doc => {
    team.id = doc.id
    team.metadata = doc.data()
  })

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
