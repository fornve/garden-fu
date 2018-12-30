
<template>
  <div class="fields-new">
    <h3>New field</h3>
    <FormSchema v-bind:schema="schema" v-model="model" v-on:submit="submit">
      <button type="submit">Create</button>
    </FormSchema>

  </div>
</template>

<script>
import FormSchema from '@formschema/native'
import schema from './new-field-form-schema.json'
import { mapState } from 'vuex'
import store from '@/store'

export default {
  components: {
    FormSchema
  },
  computed: {
    ...mapState(['fields', 'currentUser'])
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
      let field = {
        name: this.model
      }
      store.dispatch('fieldsNew', field)
      return false;
      // this.model contains the valid data according your JSON Schema.
      // You can submit your model to the server here
    }
  },
}
</script>
