<template>
  <v-container class="home">
    <v-layout class="display-1">Garden-fu</v-layout>
    <v-layout>Garden-fu is my small Firebase discovery pproblems for SaaS systems. In meantime it may help me organize my garden
    using ideas that can be found with similar systems mixed with fields management I found in Farming Simulator and
    multiplied with my ideas.</v-layout>
    <v-btn @click="start"><v-icon>start</v-icon></v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { teamsCollection } from "../firebase";
import uuid from 'uuid'
export default {
  name: 'home',
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    ...mapMutations('team', ['setTeam']),
    start() {
      let team = {
        id: uuid(),
        metadata: {
          users: [this.user.uid],
          createdAt: new Date(),
          createdBy: {
            id: this.user.uid,
            displayName: this.user.displayName
          }
        }
      }
      teamsCollection.doc(team.id).set(team.metadata)
      this.$router.push({ name: 'dashboard', params: { team: team.id } })
    }
  }
}
</script>
