const API_KEY = 'c584d3029130c723e9e022f7b70f7058';
const city = 'São José dos Campos';

const makeOpenWeatherURL = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
}

const OPEN_WEATHER_URL = makeOpenWeatherURL(city);

const getWeather = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        const temperature = response.main.temp;
        console.log(`Temperatura em ${city}: ${temperature} °C`);
    } catch (error) {
        console.error(error);
    }
}

getWeather(OPEN_WEATHER_URL);
