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
      <router-link to="/works">
        <md-list-item>
          <md-icon>menu</md-icon>
          <span class="md-list-item-text">Works</span>
        </md-list-item>
      </router-link>
      <md-list-item>
        <router-link to="/dashboard">Dashboard</router-link>
      </md-list-item>
      <md-list-item>
        <router-link to="/settings">Settings</router-link>
      </md-list-item>
    </div>
    <md-list-item>
      <router-link v-bind:to="{ name: 'about', params: { projectId: false }}">About</router-link>
    </md-list-item>
    <md-list-item>
      <router-link v-bind:to="{ name: 'login', params: { projectId: false }}">Login</router-link>
    </md-list-item>
  </md-list>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['currentUser', 'currentProject']),
  },
}
</script>
