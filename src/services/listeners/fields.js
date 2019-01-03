const firebase = require('@/firebase.js')
import store from '@/store'

let registerFields = async function(projectId) {
     firebase.fieldsCollection.where('projectId', projectId).orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
        let fieldsArray = []

        querySnapshot.forEach(doc => {
            let field = doc.data()
            field.id = doc.id
            fieldsArray.push(field)
        })

        store.commit('setFields', fieldsArray)
    });
};

let unregisterFields = async function(projectId) {

    store.commit('setFields', [])
    firebase.fieldsCollection.onSnapshot(querySnapshot => {});

};

export { registerFields, unregisterFields };