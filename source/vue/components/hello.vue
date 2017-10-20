<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
  h1 {
    text-decoration: underline;
  }
</style>

<script>

  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to Hello Component'
      }
    }
  }
</script>