<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    },
}
</script>

<style scoped>
h1 {
    text-align: center;
    color: var(--txtcol);
    font-size: 4rem;
}
</style>