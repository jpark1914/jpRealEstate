<template>
  <div id="app">

    <nav>
      <router-link to="/">Home </router-link>
      <router-link to="/form">Rental Form </router-link>
      <router-link to="/posts">Posts </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

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
