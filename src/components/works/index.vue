<template>
  <v-container class="home">
    <v-flex class="display-1">Works Component</v-flex>
    <v-flex>
      <div v-if="works.length">
        <div v-for="work in works" :key="work.id" class="work">
          <li>
            <router-link :to="{ path: getWorkUrl(work) }">{{ work.name }}</router-link>
          </li>
        </div>
      </div>

      <WorksNew></WorksNew>
    </v-flex>
  </v-container>
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
