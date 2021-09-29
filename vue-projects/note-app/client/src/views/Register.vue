<template>
    <div>
        <h2 class="text-center my-5">Register</h2>
        <div class="row">
            <div class="card mx-auto px-0">
                <div class="card-header text-white bg-primary text-center">
                    <h4>Register</h4>
                </div>
                <div class="card-body">
                    <form>
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
                            <button class="btn btn-primary my-3">Register</button>
                            <router-link class="card-link mx-3 align-self-center" to="/login">Already have an account?</router-link> 
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
            name: "",
            email: "",
            password: "",
            confirm_password: ""
        };
    }
}
</script>