<template>
  <div id="app">
    <img height="100px" src="./assets/logo.png">
    <hello></hello>
    <h2>Components</h2>
    <PluginComponent> I am a plugin component</PluginComponent>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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
