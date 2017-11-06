<template>
  <div class="hello">
    <h1 v-test-dir>{{ msg }}</h1>
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
    },
    directives:{
      testDir: {
        //custom directive locally
        bind(el, binding, vnode){
          console.log(el);
        }        
      }
    } 
  }
</script>