<template>
    <div class="box-container">
        <img src="../assets/loading.png" alt="loading" v-if="loading" id="loading">
        <ContentBox v-else :movies="movies"/>
    </div>
</template>

<script>
import ContentBox from '../components/content-boxes/ContentBox.vue'

export default {
    name: 'Home',
    components: {
        ContentBox,
    },
    data() {
        return {
            movies: [],
            loading: true,
        }
    },
    methods: {
        async getMovies() {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8b6426ed2bb28ce20b1467f0c9e172be&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate`)

            const data = await res.json()
            this.loading = false

            return data.results
        },
    },
    async mounted() {
        this.movies = await this.getMovies()
    }
}
</script>

<style scoped>
#loading {
    height:40px;
    width: 40px;
    position: absolute;
    inset: 0;
    margin: auto;
}
</style>
