
<template>
  <div class="fields-new">
    <h3>View field {{ field.name }}</h3>
    <ul>
      <li>
        <router-link :to="{ path: getEditFieldUrl(field) }">Edit</router-link>
      </li>
      <li>
        <a v-on:click="deleteField(field)">Delete</a>
      </li>
    </ul>
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
    getEditFieldUrl(field) {
      return '/fields/edit/'+ field.id;
    },
    deleteField(field) {
      console.log('deleting field')
    }
  },
  mounted() {
    this.field = R.filter((field) => { return field.id === this.$route.params.id }, this.fields)[0];
  }
}
</script>
