
<template>
  <div class="fields-new">
    <h3>View field {{ field.name }}</h3>
    <div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'
const R = require('ramda')

export default {
  computed: {
    ...mapState(['fields', 'currentUser'])
  },
  data: () => ({
    field: false
  }),
  methods: {

  },
  mounted() {
    this.field = R.filter((field) => { return field.id === this.$route.params.id }, this.fields)[0];
  }
}
</script>
