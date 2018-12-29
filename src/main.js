import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebase_config from './config/firebase.js'

Vue.use(VueFire)
firebase.initializeApp(firebase_config);
const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export default db;