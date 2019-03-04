<template>
  <v-content>
    <v-layout>
      Dashboard
    </v-layout>
    <Fields />
    <v-btn icon @click="addField"><v-icon>plus</v-icon></v-btn>
    <FieldEdit v-if="activeField" :id="activeField" />
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
    }
  }
}
</script>
