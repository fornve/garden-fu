<template>
  <div class="works-new">
    <h3>New work</h3>
    <FormSchema v-bind:schema="schema" v-model="model" v-on:submit="submit">
      <button type="submit">Create</button>
    </FormSchema>

  </div>
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
    ...mapState(['currentUser'])
  },
  data: () => ({
    schema: schema,
    model: {}
  }),
  methods: {
    submit (e) {
      e.preventDefault();
      console.log(e)
      console.log(this.model)
      let work = {
        name: this.model.name.toString()
      }
      store.dispatch('worksNew', work)
      return false;
      // this.model contains the valid data according your JSON Schema.
      // You can submit your model to the server here
    }
  },
}
</script>
