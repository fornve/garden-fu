import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import "material-design-icons/iconfont/material-icons.css"

import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)

// handle page reloads
let app

if (!app) {
    app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
};
