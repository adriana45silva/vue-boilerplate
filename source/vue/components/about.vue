<template>
  <div class="about">
    <h1>About Component</h1>
    <component :testingProps.sync="testingProps" v-bind:is="component"></component>

    <button v-on:click="asyncMutation">Click to remove one prop</button>
    <button v-on:click="addToTestingProps">Click to add one prop</button>
  </div>
</template>

<script>
  import Nested from 'vuesrc/components/nested';
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  export default {
    name: 'About',
    data () {
      return {
        component: Nested
      }
    },
    computed: {
      ...mapGetters([
       'testingProps'
      ]),
    },
    methods: {     
      ...mapActions([
        'asyncMutation', 'addToTestingProps'
      ]),    
    }     
  }
</script>