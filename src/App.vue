<template>
  <div id="app">
    <guide></guide>
  </div>
</template>

<script>
import guide from './layout/components/index.vue'

export default {
  name: 'app',
  components: {
    guide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
