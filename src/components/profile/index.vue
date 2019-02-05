<template>
  <v-container class="home">
    <v-flex class="display-1">User profile</v-flex>
    <v-flex>
      <v-btn class="" v-on:click="google()" v-if="!userProfile">Login with google</v-btn>
      <v-btn class="" v-on:click="logout()">Logout</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
import { firebase } from '@/firebase.js'
import unregisterListeners from '@/services/listeners/unregister'
import { mapState } from 'vuex'

export default {
  name: 'login',
  computed: {
    ...mapState(['userProfile']),
  },
  methods: {
    google() {
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
    },
    logout() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        unregisterListeners()
        this.$store.commit('currentUser', null);
      }).catch(function(error) {
        // eslint-disable-next-line
        console.log(error)
      });
    }
  }
}
</script>
