<template>
    <ContentTV  :shows="shows"/>
</template>

<script>
import ContentTV from '../components/content-boxes/ContentTV.vue'

export default {
    name: 'TV',
    components: {
        ContentTV,
    },
    data() {
        return {
            shows: [],
        }
    },
    methods: {
        async getShows() {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate`)

            const res = await response.json()

            return res.results
        },    
    },
    async mounted() {
        this.shows = await this.getShows()
    }
    
}
</script>