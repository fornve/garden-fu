<template>
  <v-content>
    <v-layout>
      Dashboard of team: {{ $route.params.team }}
    </v-layout>
    <Fields @setField="setField" />

    <v-btn icon @click="addField"><v-icon>add_circle</v-icon></v-btn>

    <FieldEdit
      v-if="activeField"
      :key="activeField"
      :id="activeField"
      :team="$route.params.team"
    />
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Fields from './fields'
import FieldEdit from '../field/edit'
import uuid from 'uuid'
export default {
  components: {
    Fields,
    FieldEdit
  },
  data() {
    return {
      activeField: false
    }
  },
  methods: {
    ...mapActions('team', ['getTeam']),
    addField() {
      this.activeField = uuid()
    },
    setField(id) {
      this.activeField = id
    }
  },
  mounted() {
    this.getTeam(this.$route.params.team)
  }
}
</script>
