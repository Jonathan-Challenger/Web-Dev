<template>
    <footer>
        <h3>Made by Jonathan Challenger</h3>
        <a target="_blank" href="https://github.com/Jonathan-Challenger/Web-Dev/tree/main/vue-projects/bookmark-app">Find the code here</a>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>

footer {
    position: absolute;
    bottom: 0;
    left: 23%;
    display: flex;
    justify-content: space-evenly;
    margin: 5px;
    width: 50vw;
}

h3 {
    color: var(--txtcol);
}

a {
    color: var(--txtcol);
    text-decoration: none;
}
</style>