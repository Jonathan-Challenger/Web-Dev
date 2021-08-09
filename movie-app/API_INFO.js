const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const API_KEY = '8b6426ed2bb28ce20b1467f0c9e172be'
const DISCOVER = 'https://api.themoviedb.org/3/discover/movie?api_key=8b6426ed2bb28ce20b1467f0c9e172be&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate'


async function fetchData() {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8b6426ed2bb28ce20b1467f0c9e172be&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate')

    const data = await res.json();

    console.log(data)
}
