<template>
    <div v-if="result.media_type == 'movie'" class="movie-container">
        <div v-if="result.poster_path != null" class="image">
            <img :src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" alt="Poster">
        </div>
        <div v-else class="image">
            <img id="mov-placeholder" src="@/assets/movie-placeholder.png" alt="Poster">
        </div>
        <div class="content">
            <h1>{{ result.title }}</h1>
            <div class="rating">
                <p>Rating:</p>
                <p>{{ result.vote_average }}  <img id="star" src="@/assets/star-solid.svg" alt="Star"></p>
            </div>
        </div>
        <div class="overview">
            <h1>{{ result.title }}</h1>
            <div class="rating-hover">
                <p>Rating: &nbsp;</p>
                <p>{{ result.vote_average }}  <img id="star" src="@/assets/star-solid.svg" alt="Star"></p>
            </div>
            <h3>Overview</h3>
            {{ result.overview }}
        </div>
    </div>
    <div v-if="result.media_type == 'tv'" class="movie-container">
        <div v-if="result.poster_path != null" class="image">
            <img :src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" alt="Poster">
        </div>
        <div v-else class="image">
            <img id="mov-placeholder" src="@/assets/movie-placeholder.png" alt="Poster">
        </div>
        <div class="content">
            <h1>{{ result.name }}</h1>
            <div class="rating">
                <p>Rating:</p>
                <p>{{ result.vote_average }}  <img id="star" src="@/assets/star-solid.svg" alt="Star"></p>
            </div>
        </div>
        <div class="overview">
            <h1>{{ result.name }}</h1>
            <div class="rating-hover">
                <p>Rating: &nbsp;</p>
                <p>{{ result.vote_average }}  <img id="star" src="@/assets/star-solid.svg" alt="Star"></p>
            </div>
            <h3>Overview</h3>
            {{ result.overview }}
        </div>
    </div>
    <div v-if="result.media_type == 'person'" class="movie-container">
        <div v-if="result.profile_path != null" class="image">
            <img :src="`https://image.tmdb.org/t/p/w500${result.profile_path}`" alt="Poster">
        </div>
        <div v-else class="image">
            <img id="mov-placeholder" src="@/assets/placeholder.png" alt="Poster">
        </div>
        <div class="content-person">
            <h1>{{ result.name }}</h1>
            <p>Known for: {{ result.known_for_department }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Result',
    props: {
        result: Object
    },
}
</script>

<style scoped>
.movie-container {
    background-color: white;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    transition: transform 500ms ease;
    max-width:285px;
    position: relative;
    overflow: hidden;
    height: 500px;
}

.movie-container:hover {
    transform: scale(1.05);
}

.movie-container:hover .overview {
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

.content-person {
    display: flex;
    flex-direction: column;
    text-align: left;
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
</style>