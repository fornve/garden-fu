<template>
  <div class="home">
    <h3>Fields Component</h3>
    <div v-if="fields.length">
      <div v-for="field in fields" :key="field.id" class="field">
        <span>Field {{ field.id }} {{ field.name }} </span>
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
    ...mapState(['fields'])
  }
}
</script>
