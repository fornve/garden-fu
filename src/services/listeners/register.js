const firebase = require('@/firebase.js')
import { registerProject, registerProject, projectDetector } from './projects'
import { registerFields } from './fields'
import { registerWorks } from './works'

export default (router) => {
  console.log('Registering listeners');

  firebase.auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user set')
      registerProjects();
      projectDetector(user, router).then(projectId => {
        console.log('Current project is: '+ projectId);
        registerProject(projectId);
        registerFields(projectId);
        registerWorks(projectId);
      });
    };

    if(!user) {
      console.log('Nah, no user, listeners not registered');
    }
  });
}
