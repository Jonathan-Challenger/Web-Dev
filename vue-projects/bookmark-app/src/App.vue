<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

.container {
  max-width: 60vw;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 30px;
  background-color: red;
}
</style>
