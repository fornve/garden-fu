import store from '@/store'
const firebase = require('@/firebase.js')
import { teamsNew } from '../teams.js'

let createTeamForUser = function(userId) {
  return new Promise(async function(resolve) {
    let teamId = await teamsNew(userId);
    await teamsUsersNew(teamId, userId);

    resolve(teamId);
  });
};

let teamDetector = function(user, router) {
  return new Promise((resolve, reject) => {
    // get teamId from route
    let teamId = router.app.$route.params.team;
    // eslint-disable-next-line
    console.log(router.app.$route.params);
    if(teamId && teamId !== 'false') {
      // eslint-disable-next-line
      console.log('team in route '+ team);
    }
    else {
      // eslint-disable-next-line
      console.log('no team in route');
      teamsUsersGetByUser(user.uid)
        .then((data) => {
          resolve(data.data().teamId);
        })
        .catch(() => {
          createteamForUser(user.uid).then((teamId) => {
            resolve(teamId);
          });
        });
    }
  });
};


let registerteams = async function(userId) {
  try {
    firebase.teamsCollection.where('users', 'array-contains', userId).orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      let teamsArray = []

      querySnapshot.forEach(doc => {
        let team = doc.data()
        team.id = doc.id
        teamsArray.push(field)
      })

      store.commit('setteams', teamsArray)
    });
  }
  catch(e) {
    // eslint-disable-next-line
    console.log('teams snapshot failed');
    // eslint-disable-next-line
    conole.log(e)
  }
};

let unregisterteams = async function() {
  store.commit('setCurrentteam', false)
  firebase.teamsCollection.onSnapshot();
};

export { teamDetector, registerteams, unregisterteams };
