<template lang="html">

  <v-card>
    <v-flex v-for="field in fields" :key="field.id">
      <span @click="setField(field.id)">{{ field.id }}</span>
    </v-flex>
  </v-card>

</template>

<script>
import { fieldsCollection} from "../../firebase";
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  mounted() {
    /*this.getFields(this.team.id)
    this.listener = fieldsCollection
      .where('team', '==', this.team.id)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        snap.docChanges().forEach(change => {
          let field = {
            id: change.doc.id,
            metadata: change.doc.data()
          }

          this.addField(field)
        })
      })*/
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
    ...mapActions('fields', ['getTeamFields']),
    setField(id) {
      this.$router.push({
        name: 'dashboard.field',
        params: {
          team: this.team.id,
          field: id
        }
      })
    }
  },
  computed: {
    ...mapGetters('fields', ['fields']),
    ...mapGetters('team', ['team']),
  }
}
</script>
