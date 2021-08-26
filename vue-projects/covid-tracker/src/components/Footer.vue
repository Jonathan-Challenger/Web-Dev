<template>
    <footer>
        <p>Jonathan Challenger</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
$primary: rgb(67, 102, 255);

footer {
    height: 75px;
    background-color: $primary;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: white;
        font-size: 1.5rem;
    }
}
</style>