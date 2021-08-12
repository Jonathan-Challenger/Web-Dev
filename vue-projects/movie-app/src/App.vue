<template>
  <Header @go-home="logoClick" @get-results="findResults"/>
  <router-view :movies="movies" :shows="shows" :results="results"></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      movies: [],
      shows: [],
      results: [],
    }
  },
  methods: {
    async getMovies() {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate`)

      const data = await res.json()

      return data.results
    },
    async getShows() {
      const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate`)

      const res = await response.json()

      return res.results
    },
    findResults(data) {
      this.results = data
      // this.$router.push("/results")
    },
    async logoClick() {
      this.movies = await this.getMovies()
      console.log(this.results)
    }
  },
  async created() {
    this.movies = await this.getMovies()
    this.shows = await this.getShows()
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

#app {
  font-family: 'Secular One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  overflow-y: scroll;
}

body {
  background-color: black;
  height: auto;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
