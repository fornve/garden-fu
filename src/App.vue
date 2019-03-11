<template>
  <v-app>
    <v-toolbar clipped-left app>
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
import { retrieveUser, googleAuth } from './helpers/firebase-auth'
import { teamDetector } from './services/listeners/teams'
export default {
  components: {
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

      if(!user) {
        return
      }

      if(!this.$route.params.team) {
        teamDetector(user, this.$route.params.team).then(teamId => {
          this.$router.push({ name: 'dashboard', params: { team: teamId }})
        })
      } else {
        console.log('team in route '+ this.$route.params.team)
      }

      this.$bus.emit('user-set', user)
    })
  },
  methods: {
    ...mapMutations('user', ['setUser']),
    login() {
      googleAuth()
    }
  }
}
</script>

<style lang="scss">
a { text-decoration: none }
</style>
