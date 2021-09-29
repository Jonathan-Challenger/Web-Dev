<template>
    <div>
        <h2 class="text-center my-5">Login</h2>
        <div class="row">
            <div class="card mx-auto px-0">
                <div class="card-header text-white bg-primary text-center">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser">
                        <div class="form-group">
                            <label class="my-2" for="email">Email Address</label>
                            <input type="text" placeholder="Email" name="email" v-model="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="my-2" for="password">Password</label>
                            <input type="password" placeholder="Password" name="password" v-model="password" class="form-control">
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <input type="submit" class="btn btn-primary my-3" value="Login"/>
                            <router-link class="card-link mx-3 align-self-center" to="/register">Need an account?</router-link> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(['login']),
        loginUser() {
            let user = {
                email: this.email,
                password: this.password
            };
            this.login(user)
                .then(res => {
                    if (res.data.success) {
                        this.$router.push('/profile');
                    }
                }).catch(err => console.log(err));
        }
    }
}
</script>

<style>
.card {
    width: 60%;
    border-radius: 0;
}

.btn {
    border-radius: 0;
    width: 20%;
}

.form-control {
    border-radius: 0;
}
</style>