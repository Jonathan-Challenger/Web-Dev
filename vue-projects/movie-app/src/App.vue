<template>
  <Header @go-home="logoClick" @get-results="findResults"/>
  <router-view :results="results" ></router-view>
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
      results: [],
    }
  },
  methods: {
    findResults(data) {
      this.results = data
    },
    async logoClick() {
      this.movies = await this.getMovies()
    },
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
