<template lang="html">

  <v-layout>
    <v-flex v-for="field in fields" :key="field">
      {{ field.id }}
    </v-flex>
  </v-layout>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters('fields', ['fields'])
  }
}
</script>
