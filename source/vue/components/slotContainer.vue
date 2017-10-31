<template>
  <foo>
    <h1 slot="one">{{dynamicMsg}}</h1>
  </foo>
</template>


<script>
import foo from 'vuesrc/components/slot'
  export default {
    components: {
      'foo': foo
    },    
    data () {
      return {
        msg: 'Slot container',
        dynamicMsg: 'Test inputed slot'
      }
    }
  }
</script>