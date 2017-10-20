<template>
  <section id="app">
    <router-link :to="{ name: 'Hello' }">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style>
  h1, p, a {
    font-family: 'Arial';
  }
</style>

<style>
#vue-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>