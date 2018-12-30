<template>
  <div id="app" class="page-container">
    <md-app>
      <md-app-drawer md-permanent="full">
        <md-list>
          <router-link to="/">
              <md-list-item>
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>
          </router-link>
          <router-link to="/fields">
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
