<template>
    <div>
        <h2 class="text-center my-5">Register</h2>
        <div class="row">
            <div class="card mx-auto px-0">
                <div class="card-header text-white bg-primary text-center">
                    <h4>Register</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser()">
                        <div class="form-group">
                            <label class="my-2" for="name">Name</label>
                            <input type="text" placeholder="Name" name="name" v-model="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="my-2" for="email">Email Address</label>
                            <input type="text" placeholder="Email" name="email" v-model="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="my-2" for="password">Password</label>
                            <input type="password" placeholder="Password" name="password" v-model="password" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="my-2" for="confirm_password">Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="form-control">
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <input type="submit" class="btn btn-primary my-3" value="Register" />
                            <router-link class="card-link mx-3 align-self-center" to="/login">Already have an account?</router-link> 
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
            name: "",
            email: "",
            password: "",
            confirm_password: ""
        };
    },
    methods: {
        ...mapActions(['register']),
        registerUser() {
            let user = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password
            }
            this.register(user).then(res => {
                if (res.data.success) {
                    this.$router.push('/login')
                }
            });
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