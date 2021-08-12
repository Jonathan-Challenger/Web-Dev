<template>
    <ContentUp :upcoming="upcoming"/>
</template>

<script>
import ContentUp from '../components/content-boxes/ContentUp.vue'

export default {
    name: 'Upcoming',
    components: {
        ContentUp,
    },
    data() {
        return {
            upcoming: [],
        }
    },
    methods: {
        async getUpcoming() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&page=1`)

            const res = await response.json()

            return res.results
        },
    },
    async mounted() {
        this.upcoming = await this.getUpcoming()
    }
    
}
</script>