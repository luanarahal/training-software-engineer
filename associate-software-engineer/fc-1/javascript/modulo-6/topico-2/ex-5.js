const API_KEY = '3cfea54a8f9236298dbd85d9779c11e7';
const query = 'Inception';
const OPEN_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

const getInfosMovie = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        response.results.forEach(movie => console.log(movie.title));
    } catch (error) {
        console.error(error);
    }
}

getInfosMovie(OPEN_MOVIE_URL);
