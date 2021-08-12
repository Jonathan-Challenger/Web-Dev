<template>
    <ContentBox :movies="movies"/>
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
        }
    },
    methods: {
        async getMovies() {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate`)

            const data = await res.json()

            return data.results
        },
    },
    async mounted() {
        this.movies = await this.getMovies()
    }
}
</script>