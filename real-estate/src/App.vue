<template>
  <div id="app">

    <nav>
      <b-navbar variant="faded" type="dark">
        <b-navbar-brand><router-link to="/">Home </router-link></b-navbar-brand>
        <b-navbar-brand><router-link to="/form">Rental Form </router-link></b-navbar-brand>
      </b-navbar>

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
