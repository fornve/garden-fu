<template>
  <div id="app" class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ $route.name }}</span>
        <md-avatar v-if="currentUser">
          <img v-bind:src="currentUser.photoURL" alt="Avatar">
        </md-avatar>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <main-menu></main-menu>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainMenu from './components/main-menu.vue'
import { registerListeners } from './services/listeners/register'
import firebase from 'firebase'

export default {
  components: {
    MainMenu
  },
  computed: {
    ...mapState(['currentUser']),
  },
  data: () => ({
    menuVisible: false
  }),/*
  created() {
    console.log('app started');
    return false;
    const currentUser = firebase.auth().currentUser

    if(currentUser) {
      if(!this.$store.state.currentUser || this.$store.state.currentUser.uid !== currentUser.uid) {
        console.log('Setting up user (in App.vue)');
        this.$store.commit('setCurrentUser', currentUser)
        console.log(store.state.currentUser);

        registerListeners(this.$router)
      }
    }
  }*/
}
</script>

<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 300px;
    max-width: calc(100vw - 125px);
  }
</style>
