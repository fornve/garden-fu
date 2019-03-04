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
import { mapMutations } from 'vuex'
import uuid from 'uuid'
export default {
  name: 'home',
  methods: {
    ...mapMutations('team', ['setTeam']),
    start() {
      this.$router.push({ name: 'dashboard', params: { team: uuid() } })
    }
  }
}
</script>
