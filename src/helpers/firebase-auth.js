import { firebase, auth } from '../firebase'

export const googleAuth = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.auth().getRedirectResult().then(() => {
  }).catch(function(error) {
    // eslint-disable-next-line
    console.log('auth error')
    // eslint-disable-next-line
    console.log(error)
  });
}

export const logout = () => {
  return firebase.auth().signOut()
}

export const retrieveUser = () => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user)
    })
  })
}
