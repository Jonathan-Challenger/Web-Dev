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
nav {
    background-color: rgb(97, 97, 255);
    height: 100px;
    display: flex;
    align-items:center;
    justify-content: center;

    h1 {
        color:red;
        font-size:2.5rem;
    }
}
</style>