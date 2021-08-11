<template>
    <div class="content-container" v-if="movies.length > 0"> 
        <div v-for="movie in movies" :key="movie.id" class="movie">

            <div v-if="movie.poster_path != null" class="image">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Poster">
            </div>
            <div v-else class="image">
                <img id="mov-placeholder" src="../assets/movie-placeholder.png" alt="Poster">
            </div>
            <div class="content">
                <h1>{{ movie.title }}</h1>
                <div class="rating">
                    <p>Rating:</p>
                    <p>{{ movie.vote_average }}  <img id="star" src="../assets/star-solid.svg" alt="Star"></p>
                </div>
            </div>
            <div class="overview">
                <h1>{{ movie.title }}</h1>
                <div class="rating-hover">
                    <p>Rating: &nbsp;</p>
                    <p>{{ movie.vote_average }}  <img id="star" src="../assets/star-solid.svg" alt="Star"></p>
                </div>
                <h3>Overview</h3>
                {{ movie.overview }}
            </div>
        </div>
    </div>
    <div class="no-response" v-else>
            <h1>Sorry, we have no results...</h1>
    </div>
</template>

<script>
export default {
    name: 'ContentBox',
    props: {
        movies: Array,
        movie: Object,
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

.movie {
    background-color: white;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    transition: transform 500ms ease;
    max-width:285px;
    position: relative;
    overflow: hidden;
}

.movie:hover {
    transform: scale(1.05);

}

.movie:hover .overview {
    transform: translateY(0);
}

.content {
    display: grid;
    padding: 0 5px;
    grid-template-columns: 3fr 1fr;
    gap:1rem;
    color: black;
    height: 13%;
}

.rating {
    display: flex;
    flex-flow: column;
}

.image {
    height:85%;
}

img {
    height: 100%;
    width: 100%;
}

#star {
    height:17px;
    width:15px;
    padding-top: 6px;
}

h1 {
    font-size: 18px;
    text-align: left;
}

.overview {
    color: black; 
    display: flex;
    flex-flow: column;  
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    background-color: white; 
    max-height: 100%;
    transform: translateY(101%);
    transition: transform 300ms ease;
    font-size: 13px;
}

.overview h1 {
    text-align: center;
    font-size: 22px;
}

.overview h3 {
    font-size: 20px;
}

.rating-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 16px;
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