<template>
    <footer>
        <h3>Made by Jonathan Challenger</h3>
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