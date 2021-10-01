<template>
  <div id="app">
    <Navbar @logoutCheck="toggleLogoutCheck()"/>
    <div class="container">
      <router-view/>
      <LogoutCheck v-show="isConfirm" @cancelLogout="cancelLogout()" @logoutUser="logoutUser()"/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import LogoutCheck from './components/LogoutCheck.vue'
import { mapActions } from 'vuex'

export default {
  components:{
    Navbar,
    LogoutCheck
  },
  data() {
    return {
      isConfirm: false
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleLogoutCheck() {
      this.isConfirm = true;
    },
    cancelLogout() {
      this.$router.push('/profile');
      this.isConfirm = false;
    },
    logoutUser() {
      this.logout();
      this.isConfirm = false;
    }
  }
}
</script>

<style>

</style>
