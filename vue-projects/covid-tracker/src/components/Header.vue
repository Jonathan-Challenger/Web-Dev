<template>
    <nav>
        <i class="fas fa-viruses fa-2x"></i>
        <h1>Covid-19 Tracker</h1>
        <i class="fas fa-viruses fa-2x"></i>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
$primary: rgb(67, 102, 255);

nav {
    background-color: $primary;
    height: 100px;
    display: flex;
    align-items:center;
    justify-content: center;

    i {
        color: white;
        padding: 0 20px;
    }

    h1 {
        color:rgb(255, 255, 255);
        font-size:2.5rem;
    }
}
</style>