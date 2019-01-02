<template>
  <div class="home">
    Login
    <div>
      <md-button class="md-raised md-primary" v-on:click="google()">Login with google</md-button>
      <md-button class="md-raised md-primary" v-on:click="logout()">Logout</md-button>
    </div>
  </div>
</template>

<script>
import { auth, firebase } from '@/firebase.js'
import unregisterListeners from '@/services/listeners/unregister'

export default {
  name: 'login',
  methods: {
    google() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          console.log('auth success '+ token)
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('auth error')
        console.log(error)
      });
    },
    logout() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        unregisterListeners()
        this.$store.commit('currentUser', null);
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
}
</script>
