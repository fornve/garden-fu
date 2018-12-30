<template>
  <div class="home">
    <h3>Fields Component</h3>
    <div v-if="fields.length">
      <div v-for="field in fields" :key="field.id" class="field">
        <li>
          <router-link :to="{ path: getFieldUrl(field) }">{{ field.name }}</router-link>
        </li>
      </div>
      <FieldsNew></FieldsNew>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FieldsNew from './new.vue'
export default {
  components: {
    FieldsNew
  },
  name: 'home',
  /*data() {
    return {
      fields: []
    }
  },*/
  computed: {
    ...mapState(['fields']),
  },
  methods: {
    getFieldUrl(field) {
      return '/fields/'+ field.id;
    }
  }
}
</script>
