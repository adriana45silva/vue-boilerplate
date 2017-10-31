<template>
  <div>
    <div >
      <h1>{{ msg }}</h1>
    </div>
    <slot name="one"></slot>  
  </div>
</template>


<script>

  export default {
    name: 'slot-presentational',
    data () {
      return {
        msg: 'Slot presentational'
      }
    }
  }
</script>