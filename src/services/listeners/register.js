const firebase = require('@/firebase.js')
import { registerTeam, registerTeams, registerTeams, teamDetector } from './teams'
import { registerFields } from './fields'
import { registerWorks } from './works'

export const registerUserListeners(router) => {
    teamDetector(user, router).then(teamId => {
      console.log('Current team is: '+ teamId);
      registerFields(teamId);
      registerWorks(teamId);
    });
}
