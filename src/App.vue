<template>
  <v-app>
    <v-toolbar clipped-left app>
      <v-toolbar-side-icon><v-icon>filter_vintage</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{ $route.name }}<span v-if="currentProject"> - {{ currentProject.id }}</span></v-toolbar-title>
        <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn>
          <v-avatar v-if="currentUser">
            <img v-bind:src="currentUser.photoURL" alt="Avatar">
          </v-avatar>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main-menu></main-menu>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MainMenu from './components/main-menu.vue'

export default {
  components: {
    MainMenu
  },
  computed: {
    ...mapState(['currentUser', 'currentProject']),
  },
  data: () => ({
    menuVisible: false
  }),
  created() {
    this.retrieveUser(this.$router)
  },
  methods: {
    ...mapActions(['retrieveUser']),
  }
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
