<template>
  <div id="app" class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ $route.name }}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-list>
          <router-link to="/" v-on:click.native="menuVisible = false">
            <md-list-item>
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>
          </router-link>
          <router-link to="/fields" v-on:click.native="menuVisible = false">
            <md-list-item>
              <md-icon>menu</md-icon>
              <span class="md-list-item-text">Fields</span>
            </md-list-item>
          </router-link>
          <md-list-item>
            <router-link to="/about">About</router-link>
          </md-list-item>
          <md-list-item>
            <router-link to="/dashboard">Dashboard</router-link>
          </md-list-item>
          <md-list-item>
            <router-link to="/login">Login</router-link>
          </md-list-item>
          <md-list-item>
            <router-link to="/settings">Settings</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  })
}
</script>
