const apiKey = 'c584d3029130c723e9e022f7b70f7058';
const city = 'São José dos Campos';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const getWeather = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

getWeather(url);
