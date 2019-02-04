<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <button>
          <v-icon>filter_vintage</v-icon>
        </button>
        <span class="md-title">{{ $route.name }}</span>
        <v-spacer></v-spacer>
        <span class="md-title" v-if="currentProject">{{ currentProject.id }}</span>
        <v-avatar v-if="currentUser">
          <img v-bind:src="currentUser.photoURL" alt="Avatar">
        </v-avatar>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <main-menu></main-menu>
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
