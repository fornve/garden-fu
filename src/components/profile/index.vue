<template>
  <v-container class="home">
    <v-flex class="display-1">User profile</v-flex>
    <v-flex>

    </v-flex>
  </v-container>
</template>

<script>
import { firebase } from '@/firebase.js'
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  computed: {
    ...mapGetters('user', ['user']),
  },
  methods: {
    google() {

    },
    logout() {

    }
  }
}
</script>
