<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
      <LogoutCheck v-show="isConfirm"/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import LogoutCheck from './components/LogoutCheck.vue'

export default {
  components:{
    Navbar,
    LogoutCheck
  },
  data() {
    return {
      isConfirm: false
    }
  }
}
</script>

<style>

</style>
