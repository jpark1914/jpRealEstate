<template>
  <div id="app">
    <RentalHousing />
  </div>
</template>

<script>
import RentalHousing from './components/RentalHousing.vue'

export default {
  name: 'app',
  components: {
    RentalHousing
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
