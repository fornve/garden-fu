<template>
  <v-content>
    <v-layout>
      Dashboard of team: {{ $route.params.team }}
    </v-layout>
    <Fields :team="$route.params.team" @setField="setField" />

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
    addField() {
      this.activeField = uuid()
    },
    setField(id) {
      this.activeField = id
    }
  }
}
</script>
