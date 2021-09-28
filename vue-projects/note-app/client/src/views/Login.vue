<template>
    <div>
        <h2 class="text-center my-5">Login</h2>
        <div class="row">
            <div class="card mx-auto px-0">
                <div class="card-header text-white bg-primary">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" placeholder="Name" name="name" v-model="name" class="form-control">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.card {
    width: 60%;
}
</style>