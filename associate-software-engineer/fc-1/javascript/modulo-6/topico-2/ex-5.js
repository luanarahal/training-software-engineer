const API_KEY = '3cfea54a8f9236298dbd85d9779c11e7';
const movieName = 'Inception';

const makeMovieURL = (name, key) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`;
}

const OPEN_MOVIE_URL = makeURL(movieName, API_KEY);

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
