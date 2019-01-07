<template>
  <div class="home">
    <h3>Fields Component</h3>
    <div>
        <div v-if="getFields.length">
            <div v-for="field in getFields" :key="field.id" class="field">
                <li>
                    <router-link :to="{ path: getFieldUrl(field) }">{{ field.name }}</router-link>
                </li>
            </div>
        </div>
      <FieldsNew></FieldsNew>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters(['getFields']),
  },
  methods: {
    getFieldUrl(field) {
      return '/fields/'+ field.id;
    }
  }
}
</script>
