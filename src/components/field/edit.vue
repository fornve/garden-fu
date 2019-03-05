<template lang="html">

  <v-content class="components-field-edit">
    <h1>editing {{ id }}</h1>

    <FormComponent :data="form" :key="formKey" />

  </v-content>

</template>

<script lang="js">
  import FormComponent from '@/helpers/form'
  import uuid from 'uuid'
  import { mapActions, mapGetters } from 'vuex'
  import { fieldsCollection } from '@/firebase'

  export default  {
    components: {
      FormComponent
    },
    props: ['id', 'team'],
    mounted() {
      let index = this.fields.findIndex(x => x.id === this.id)

      if(index > -1) {
        this.field = state.fields[index]
      } else {
        this.field = {
          id: this.id,
          metadata: {
            createdAt: new Date(),
            team: this.team
          }
        }
      }

      console.log(this.field)
      if(!this.field.metadata.createdBy) {
        this.field.metadata.createdBy = {
          id: this.user.uid,
          displayName: this.user.displayName,
        }
      }

      this.form = {
        fields: [
          {
            name: 'name',
            label: 'Field name',
            focus: true,
            type: 'text',
            value: this.field.metadata.name
          },
          {
            name: 'width',
            label: 'Field width',
            type: 'text',
            value: this.field.metadata.width
          },
          {
            name: 'height',
            label: 'Field height',
            type: 'text',
            value: this.field.metadata.height
          },
          {
            name: 'x',
            label: 'Top position to corner',
            type: 'text',
            value: this.field.metadata.x
          },
          {
            name: 'y',
            label: 'Left position to corner',
            type: 'text',
            value: this.field.metadata.y
          },
          {
            type: 'button',
            name: 'button',
            text: 'Submit'
          }
        ],
        validate: {
          name: {
            required: true,
            minLength: 1
          },
          width: {
            required: true
          },
          height: {
            required: true
          }
        },
        submit: (data) => {
          this.field.metadata.name = data.name
          this.field.metadata.width = data.width
          this.field.metadata.height = data.height
          this.field.metadata.x = data.x
          this.field.metadata.y = data.y
          fieldsCollection.doc(this.field.id).set(this.field.metadata)
        }
      }

      this.$nextTick().then(() => {
        this.formKey = uuid()
      })
    },
    data() {
      return {
        formKey: uuid(),
        form: {
          fields: []
        }
      }
    },
    methods: {
    },
    computed: {
      ...mapGetters('fields', ['fields']),
      ...mapGetters('user', ['user']),
    }
}
</script>
