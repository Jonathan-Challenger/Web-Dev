<template>
    <nav>
        <h1>Covid-19 Tracker</h1>
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

    h1 {
        color:rgb(255, 255, 255);
        font-size:2.5rem;
    }
}
</style>