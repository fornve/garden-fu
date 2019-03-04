<template>
  <v-app>
    <v-toolbar clipped-left app>
      <v-toolbar-side-icon><v-icon v-on:click="toggleNavigationDrawer">menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-side-icon><v-icon>filter_vintage</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{ $route.name }}<span v-if="team"> - {{ team.id }}</span></v-toolbar-title>
        <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>
          <v-avatar v-if="user">
            <img v-bind:src="user.photoURL" alt="Avatar">
          </v-avatar>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main-menu ></main-menu>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import MainMenu from './components/main-menu.vue'
import { retrieveUser } from './helpers/firebase-auth'

export default {
  components: {
    MainMenu
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('team', ['team'])
  },
  data: () => ({
    menuVisible: false
  }),
  created() {
    retrieveUser().then(this.setUser)
    this['navigationDrawer/toggle']();
  },
  methods: {
    ...mapActions(['navigationDrawer/toggle']),
    ...mapMutations('user', ['setUser']),
    toggleNavigationDrawer() {
      this['navigationDrawer/toggle']();
    }
  }
}
</script>

<style lang="scss">
a { text-decoration: none }
</style>
