<template>
  <v-navigation-drawer permanent>
    <v-list dense class="pt-0">
      <router-link v-bind:to="{ name: 'home', params: { projectId: false }}">
        <v-list-tile>
          <v-icon>home</v-icon>
          <span class="md-list-item-text">Home</span>
        </v-list-tile>
      </router-link>
      <div v-if="currentProject">
        <router-link v-bind:to="{ name: 'fields', params: { projectId: currentProject.id }}">
          <v-list-tile>
            <v-icon>menu</v-icon>
            <span class="md-list-item-text">Fields</span>
          </v-list-tile>
        </router-link>
        <router-link v-bind:to="{ name: 'works', params: { projectId: currentProject.id }}">
          <v-list-tile>
            <v-icon>menu</v-icon>
            <span class="md-list-item-text">Works</span>
          </v-list-tile>
        </router-link>
        <router-link v-bind:to="{ name: 'dashboard', params: { projectId: currentProject.id }}">
          <v-list-tile>
            <v-icon>menu</v-icon>
            <span class="md-list-item-text">Dashboard</span>
          </v-list-tile>
        </router-link>
        <router-link to="/settings">
          <v-list-tile>
            <v-icon>menu</v-icon>
            <span class="md-list-item-text">Settings</span>
          </v-list-tile>
        </router-link>
      </div>
      <div v-if="userProfile">
        <router-link v-bind:to="{ name: 'projects' }">
          <v-list-tile>
            <v-icon>menu</v-icon>
            <span class="md-list-item-text">Projects</span>
          </v-list-tile>
        </router-link>
      </div>
      <router-link v-bind:to="{ name: 'profile' }">
        <v-list-tile>
          <v-icon>menu</v-icon>
          <span class="md-list-item-text">Profile</span>
        </v-list-tile>
      </router-link>
    </v-list>


  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userProfile', 'currentProject']),
  },
}
</script>
