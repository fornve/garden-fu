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
  watch: {
    team: function(team) {
      if(team) {
        this.getTeamFields(team.id)
      }
    }
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
