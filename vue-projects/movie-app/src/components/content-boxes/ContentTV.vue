<template>
    <div class="content-container" v-if="shows.length > 0"> 
        <div v-for="show in shows" :key="show.id" class="movie">
            <Show :show="show"/>
        </div>
    </div>
    <div class="no-response" v-else>
        <h1>Sorry, we have no results...</h1>
    </div>
</template>

<script>
import Show from '../content-items/Show'

export default {
    name: 'ContentTV',
    components: {
        Show,
    },
    props: {
        shows: Array,
    }
}
</script>

<style scoped>
.content-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 500px;
    width: 75%;
    margin: 50px auto;
    gap: 4rem;
    padding: 1em;
    margin-bottom: 130px;
}

.no-response {
    width: 75%;
    border: 1px solid white;
    margin: 100px auto;
    border-radius: 10px;
}

.no-response  h1{
    color:white;
    text-align: left;
    padding-left: 200px;
    font-size: 25px;
    margin: 50px 0;
}
</style>