<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
  import Header from './Layout/Header.vue'

  export default {
    components: {
      Header,
    },
    
  }
</script>

