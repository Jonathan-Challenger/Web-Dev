<template>
    <div class="content-container"> 
        <div v-for="movie in movies" :key="movie.id" class="movie">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Poster">
            <div class="content">
                <h1>{{ movie.title }}</h1>
                <div class="rating">
                    <p>Rating:</p>
                    <p>{{ movie.vote_average }}  <img id="star" src="../assets/star-solid.svg" alt="Star"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentBox',
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
        }
    },
    async created() {
        this.movies = await this.getMovies()
    },
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

.movie {
    background-color: #707070;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    transition: transform 500ms ease;
    max-width:285px;
}

.movie:hover {
    transform: scale(1.05);
}

.content {
    display: grid;
    padding: 0 5px;
    grid-template-columns: 3fr 1fr;
    gap:1rem;
    color: black;
}

.rating {
    display: flex;
    flex-flow: column;
}

img {
    height: 85%;
    width: 100%;
}

#star {
    height:17px;
    width:15px;
    padding-top: 6px;
}

h1 {
    font-size: 18px;
}
</style>