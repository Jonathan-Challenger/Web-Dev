<template>
    <div class="box-container">
        <img src="../assets/loading.png" alt="loading" v-if="loading" id="loading">
        <ContentUp v-else :upcoming="upcoming"/>
    </div>
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
            loading: true,
        }
    },
    methods: {
        async getUpcoming() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&page=1`)

            const res = await response.json()
            this.loading = false

            return res.results
        },
    },
    async mounted() {
        this.upcoming = await this.getUpcoming()
    }
    
}
</script>

<style scoped>
#loading {
    height:40px;
    width: 40px;
    margin-top: 350px;
}
</style>