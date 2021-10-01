<template>
    <div class="container bg-dark w-25 fixed-top">
        <h4 class="text-white text-center pt-5">Are you sure?</h4>
        <div class="d-flex justify-content-center">
            <button @click="$emit('logoutUser')" type="button" class="btn btn-lg btn-primary mt-5 mx-4">Yes</button>
            <button @click="$emit('cancelLogout')" type="button" class="btn btn-lg btn-primary mt-5 mx-4">No</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LogoutCheck',
}
</script>

<style>
.container {
    height: 250px;
    border-radius: 5px;
}
</style>