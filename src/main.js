import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const firebase = require('./firebase.js')

Vue.config.productionTip = false

// handle page reloads
let app
firebase.auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
