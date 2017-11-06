<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="i in testingProps">{{i}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'nested-component',
    props: {
      testingProps: {
        type: Array
      }
    },
    data () {
      return {
        msg: 'This is a nested component'
      }
    }
  }
</script>