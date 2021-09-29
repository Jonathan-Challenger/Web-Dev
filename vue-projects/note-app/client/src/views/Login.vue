<template>
    <div>
        <h2 class="text-center my-5">Login</h2>
        <div class="row">
            <div class="card mx-auto px-0">
                <div class="card-header text-white bg-primary text-center">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form @click.prevent="loginUser">
                        <div class="form-group">
                            <label class="my-2" for="email">Email Address</label>
                            <input type="text" placeholder="Email" name="email" v-model="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="my-2" for="password">Password</label>
                            <input type="password" placeholder="Password" name="password" v-model="password" class="form-control">
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary my-3">Login</button>
                            <router-link class="card-link mx-3 align-self-center" to="/register">Need an account?</router-link> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        loginUser() {
            console.log(this.email, this.password);
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