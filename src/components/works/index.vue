<template>
  <div class="home">
    <h3>Works Component</h3>
    <div>
      <div v-if="works.length" v-for="work in works" :key="work.id" class="work">
        <li>
          <router-link :to="{ path: getWorkUrl(work) }">{{ work.name }}</router-link>
        </li>
      </div>

      <WorksNew></WorksNew>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import WorksNew from './new.vue'
export default {
  components: {
    WorksNew
  },
  name: 'works',
  /*data() {
    return {
      fields: []
    }
  },*/
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
