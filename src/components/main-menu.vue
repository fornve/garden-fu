<template>
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
</template>
