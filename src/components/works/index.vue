<template>
  <v-component class="home">
    <v-flex class="display-3">Works Component</v-flex>
    <v-flex>
      <div v-if="works.length" v-for="work in works" :key="work.id" class="work">
        <li>
          <router-link :to="{ path: getWorkUrl(work) }">{{ work.name }}</router-link>
        </li>
      </div>

      <WorksNew></WorksNew>
    </v-flex>
  </v-component>
</template>

<script>
import { mapState } from 'vuex'
import WorksNew from './new.vue'
export default {
  components: {
    WorksNew
  },
  name: 'works',
  computed: {
    ...mapState(['works']),
  },
  methods: {
    getWorkUrl(work) {
      return '/works/'+ work.id;
    }
  }
}
</script>
