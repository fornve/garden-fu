<template>
  <div id="app" class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ $route.name }}</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <main-menu></main-menu>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import MainMenu from './components/main-menu.vue'
export default {
  components: {
    MainMenu
  },
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 300px;
    max-width: calc(100vw - 125px);
  }
</style>
