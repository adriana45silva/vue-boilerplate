<template>
  <div class="about">
    <h1>About Component</h1>
    <Nested :testingProps="testingProps"></Nested>
  </div>
</template>

<script>
  import Nested from 'vuesrc/components/nested';
  export default {
    name: 'About',
    components: {
      'Nested': Nested
    },
    data () {
      return {
        testingProps: [
          'This is the testing prop #1',
          'This is the testing prop #2',
          'This is the testing prop #3'
        ]
      }
    } 
  }
</script>