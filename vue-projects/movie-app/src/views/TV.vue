<template>
    <div class="box-container">
        <img src="../assets/loading.png" alt="loading" v-if="loading" id="loading">
        <ContentTV  v-else :shows="shows"/>
    </div>
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
            loading: true,
        }
    },
    methods: {
        async getShows() {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate`)

            const res = await response.json()

            this.loading = false

            return res.results
        },    
    },
    async mounted() {
        this.shows = await this.getShows()
    }
    
}
</script>

<style scoped>
#loading {
    height:40px;
    width: 40px;
    margin-top: 370px;
}
</style>