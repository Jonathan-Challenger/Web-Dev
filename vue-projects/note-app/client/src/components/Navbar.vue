<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">uNote</router-link> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link> 
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/register">Register</router-link> 
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/login">Login</router-link> 
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <router-link class="nav-link" to="/profile">Profile</router-link> 
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <a @click="$emit('logoutCheck')" class="nav-link" to="/logout" id="logout">Logout</a> 
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'; 

export default {
    name: 'Navbar',
    computed: {
        ...mapGetters(["isLoggedIn"])
    },
}
</script>

<style scoped>
#logout {
    cursor: pointer;
}
</style>