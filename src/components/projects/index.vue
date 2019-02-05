<template>
  <v-component>
    <v-flex class="display-1">Projects</v-flex>
    <v-data-table
        v-model="selected"
        :headers="headers"
        :items="projects"
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
        <td>
          <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
      </template>
    </v-data-table>

    <v-flex><NewProject></NewProject></v-flex>

  </v-component>
</template>

<script>
import NewProject from "./new"
  export default {
    components: {
      NewProject
    },
    name: "projects"
  }
</script>

<style scoped>

</style>