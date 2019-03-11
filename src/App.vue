<template>
  <v-app>
    <v-toolbar clipped-left app>
      <v-toolbar-side-icon><v-icon v-on:click="toggleNavigationDrawer">menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-side-icon><router-link :to="{name: 'home'}"><v-icon>filter_vintage</v-icon></router-link></v-toolbar-side-icon>
      <v-toolbar-title>{{ $route.name }}<span v-if="team"> - {{ team.id }}</span></v-toolbar-title>
        <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="user">
          <v-avatar v-if="user">
            <img v-bind:src="user.photoURL" alt="Avatar">
          </v-avatar>
        </v-btn>
        <v-btn v-if="!user" @click="login"><v-icon>perm_identity</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- main-menu ></main-menu -->

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
//import MainMenu from './components/main-menu.vue'
import { retrieveUser, googleAuth } from './helpers/firebase-auth'

export default {
  components: {
    //MainMenu
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('team', ['team'])
  },
  data: () => ({
    menuVisible: false
  }),
  created() {
    retrieveUser().then(user => {
      this.setUser(user)
      this.$bus.emit('user-set', user)
    })
    this['navigationDrawer/toggle']();
  },
  methods: {
    ...mapActions(['navigationDrawer/toggle']),
    ...mapMutations('user', ['setUser']),
    toggleNavigationDrawer() {
      this['navigationDrawer/toggle']();
    },
    login() {
      googleAuth()
    }
  }
}
</script>

<style lang="scss">
a { text-decoration: none }
</style>
