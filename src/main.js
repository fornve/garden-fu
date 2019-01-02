import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import "material-design-icons/iconfont/material-icons.css"

import App from './App.vue'
import router from './router'
import store from './store'
const firebase = require('./firebase.js')

Vue.config.productionTip = false

Vue.use(VueMaterial)

// handle page reloads
let app
firebase.auth.onAuthStateChanged(user => {
  if (!user) {

    firebase.fieldsCollection.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
        let fieldsArray = []

        querySnapshot.forEach(doc => {
            let field = doc.data()
            field.id = doc.id
            fieldsArray.push(field)
        })

        store.commit('setFields', fieldsArray)
    });

    firebase.worksCollection.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
        let worksArray = []

        querySnapshot.forEach(doc => {
            let work = doc.data()
            work.id = doc.id
            worksArray.push(work)
        })

        store.commit('setWorks', worksArray)
    });
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
