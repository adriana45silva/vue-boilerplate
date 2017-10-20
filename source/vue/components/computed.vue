<template>
<div>
  <p>Computed Properties</p>

  <div>
    <p>
      Add 1 to n1: {{add}}
    </p>
    <button v-on:click="n1++">
      Add!
    </button>
    <div>
    </div>
  </div>

  <div>
    <p>
      Subtract 1 from n2: {{subt}}
    </p>
    <button v-on:click="n2--">
      Subtract!
    </button>
  </div>
</div>

</template>

<script>
  export default {
    name: 'Computed',
    data() {
      return {
        n1: 0,
        n2: 100,
        a: 10,
        b: 5        
      }
    },
    methods: {
      // add: function () {
      //   console.log('running add!')
      //   return this.n1 + this.a
      // },
      // subt: function () {
      //   console.log('running subt!')
      //   return this.n2 - this.b
      // }       
    },
    computed: {
      add: function () {
        console.log('running add!')
        return this.n1 + this.a
      },
      subt: function () {
        console.log('running subt!')
        return this.n2 - this.b
      }       
    }    
  }        

</script>
