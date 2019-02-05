<template>
  <v-container class="home">
    <v-flex class="display-1">Fields Component</v-flex>
    <v-flex>
      <div v-if="getFields.length">
        <div v-for="field in getFields" :key="field.id" class="field">
          <li>
            <router-link :to="{ path: getFieldUrl(field) }">{{ field.name }}</router-link>
          </li>
        </div>
      </div>
      <FieldsNew></FieldsNew>
    </v-flex>
    <div v-if="getAllFields.length">
      <h4>All fields</h4>
      <div v-for="field in getAllFields" :key="field.id" class="field">
        <li>
          <router-link :to="{ path: getFieldUrl(field) }">{{ field.name }}</router-link>
        </li>
      </div>
    </div>

  </v-container>
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
    ...mapGetters(['getFields', 'getAllFields']),
  },
  methods: {
    getFieldUrl(field) {
      return '/fields/'+ field.id;
    }
  }
}
</script>
