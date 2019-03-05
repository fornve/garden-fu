import Vue from 'vue'

import './plugins/vuetify'

import App from './App.vue'
import VueBus from 'vue-bus'
import store from './store'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(VueBus)

// handle page reloads
let app

if (!app) {
    app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
}
