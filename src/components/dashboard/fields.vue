<template lang="html">

  <v-card>
    <v-flex v-for="field in fields" :key="field.id">
      <span @click="setField(field.id)">{{ field.id }}</span>
    </v-flex>
  </v-card>

</template>

<script>
import { fieldsCollection} from "../../firebase";
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: ['team'],
  mounted() {
    this.listener = fieldsCollection
      .where('team', '==', this.team)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        snap.docChanges().forEach(change => {
          let field = {
            id: change.doc.id,
            metadata: change.doc.data()
          }

          this.addField(field)
        })
      })
  },
  destroyed() {
    this.listener()
  },
  data() {
    return {
      listener: () => {}
    }
  },
  methods: {
    ...mapMutations('fields', ['addField']),
    setField(id) {
      this.$emit('setField', id)
    }
  },
  computed: {
    ...mapGetters('fields', ['fields'])
  }
}
</script>
