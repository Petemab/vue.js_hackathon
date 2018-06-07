<template>
  <div id="app">
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">BRITAIN BY THE BOOK</router-link>
        <a role="button" class="navbar-burger" v-bind:class="{ 'is-active': navIsOpen }" v-on:click="toggleNav()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': navIsOpen }">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">home</router-link>
          <router-link to="/places" class="navbar-item">literary places</router-link>
          <router-link to="/places/new" class="navbar-item">add a literary place</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return { navIsOpen: false };
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
    }
  },
  watch: {
    '$route'() {
      this.navIsOpen = false;
    }
  }
};
</script>

<style scoped>
body, html {
  padding: 0;
  margin: 0;
}
</style>
