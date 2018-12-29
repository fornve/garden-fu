import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const firebase = require('./firebase.js')

Vue.config.productionTip = false

// handle page reloads
let app
firebase.auth.onAuthStateChanged(user => {
  if (!user) {
    // realtime updates from our posts collection
    firebase.fieldsCollection.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
        let fieldsArray = []

        querySnapshot.forEach(doc => {
            let field = doc.data()
            field.id = doc.id
            field.name = doc.name
            fieldsArray.push(field)
        })

        store.commit('setFields', fieldsArray)
    })
  }
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
