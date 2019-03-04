<template lang="html">

  <v-content class="components-field-edit">
    <h1>editing {{ id }}</h1>

    <v-layout>
      <v-flex>
        <v-text-field
          v-model="name"
          label="Field name"
          required
        >
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-text-field
          v-model="width"
          label="Width"
        >
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-text-field
          v-model="height"
          label="Height"
        >
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-text-field
          v-model="x"
          label="X"
        >
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-text-field
          v-model="y"
          label="Y"
        >
        </v-text-field>
      </v-flex>
    </v-layout>


    <v-layout>
      <v-flex>
        <v-btn primary @click="save">Save</v-btn>
      </v-flex>
    </v-layout>

  </v-content>

</template>

<script lang="js">
  export default  {
    props: ['id'],
    mounted() {
      this.field = this.fields.getField(this.id)
      if(!this.field.metadata.createdBy) {
        this.field.metadata.createdBy = {
          id: this.user.user.id,
          displayName: this.user.user.displayName,
        }
      }
    },
    data() {
      return {
        field: false,
        name: '',
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      }
    },
    methods: {
      ...mapGetters('fields', ['getField']),
      save() {
        this.field.metadata.name = this.name
        this.field.metadata.width = this.width
        this.field.metadata.height = this.height
        this.field.metadata.x = this.x
        this.field.metadata.y = this.y
      }
    },
    computed: {

    }
}
</script>
