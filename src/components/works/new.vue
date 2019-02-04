<template>
  <v-flex class="works-new">
    <h3>New work</h3>
    <FormSchema v-bind:schema="schema" v-model="model" v-on:submit="submit">
      <v-btn type="submit">Create</v-btn>
    </FormSchema>

  </v-flex>
</template>

<script>
import FormSchema from '@formschema/native'
import schema from './new-work-form-schema.json'
import { mapState } from 'vuex'
import store from '@/store'

export default {
  components: {
    FormSchema
  },
  computed: {
    ...mapState(['currentUser', 'currentProject'])
  },
  data: () => ({
    schema: schema,
    model: {}
  }),
  methods: {
    submit (e) {
      e.preventDefault();

      let work = {
        name: this.model.name.toString(),
        userId: this.currentUser.uid,
        projectId: this.currentProject.id,
      }
      store.dispatch('worksNew', work)
      return false;
      // this.model contains the valid data according your JSON Schema.
      // You can submit your model to the server here
    }
  },
}
</script>
