<template>
  <v-container>
    <v-flex class="display-1">Projects</v-flex>
    <v-data-table
        :items="projects.projects"
        item-key="id"
        class="elevation"
      >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>More shit button {{props}}</td>
      </template>
    </v-data-table>

    <v-flex><NewProject></NewProject></v-flex>

  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
import NewProject from "./new"
  export default {
    computed: {
      ...mapState(['projects'])
    },
    components: {
      NewProject
    },

    name: "projects",
    created() {
      console.log(this.projects)
    }
  }
</script>

<style scoped>

</style>