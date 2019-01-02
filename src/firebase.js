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
const worksCollection = db.collection('works')

export {
    db,
    auth,
    currentUser,
    firebase,
    fieldsCollection,
    worksCollection,
}
