const OPEN_PIKACHU_URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const getPikachuName = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        const name = response.name;
        const type = response.types[0].type.name;
        console.log(`Nome: ${name}, Tipo: ${type}`);
    } catch (error) {
        console.error(error);
    }
}

getPikachuName(OPEN_PIKACHU_URL);
