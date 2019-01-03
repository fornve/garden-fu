import firebase from 'firebase'
import 'firebase/firestore'
import config from './config/firebase.js'

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const fieldsCollection = db.collection('fields')
const projectsCollection = db.collection('projects')
const projectsUsersCollection = db.collection('projects_users')
const worksCollection = db.collection('works')

export {
  db,
  auth,
  currentUser,
  firebase,
  fieldsCollection,
  projectsCollection,
  projectsUsersCollection,
  worksCollection,
}
