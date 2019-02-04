<template>
  <md-list>
    <router-link v-bind:to="{ name: 'home', params: { projectId: false }}">
      <md-list-item>
        <md-icon>home</md-icon>
        <span class="md-list-item-text">Home</span>
      </md-list-item>
    </router-link>
    <div v-if="currentProject">
      <router-link v-bind:to="{ name: 'fields', params: { projectId: currentProject.id }}">
        <md-list-item>
          <md-icon>menu</md-icon>
          <span class="md-list-item-text">Fields</span>
        </md-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'works', params: { projectId: currentProject.id }}">
        <md-list-item>
          <md-icon>menu</md-icon>
          <span class="md-list-item-text">Works</span>
        </md-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'dashboard', params: { projectId: currentProject.id }}">
        <md-list-item>
          <md-icon>menu</md-icon>
          <span class="md-list-item-text">Dashboard</span>
        </md-list-item>
      </router-link>
      <router-link to="/settings">
        <md-list-item>
          <md-icon>menu</md-icon>
          <span class="md-list-item-text">Settings</span>
        </md-list-item>
      </router-link>
    </div>
    <div v-if="userProfile">
      <router-link v-bind:to="{ name: 'projects' }">
        <md-list-item>
          <md-icon>menu</md-icon>
          <span class="md-list-item-text">Projects</span>
        </md-list-item>
      </router-link>
    </div>
    <router-link v-bind:to="{ name: 'profile' }">
      <md-list-item>
        <md-icon>menu</md-icon>
        <span class="md-list-item-text">Profile</span>
      </md-list-item>
    </router-link>

  </md-list>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userProfile', 'currentProject']),
  },
}
</script>
