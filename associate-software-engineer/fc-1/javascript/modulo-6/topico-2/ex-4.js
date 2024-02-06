const makePokemonURL = (name) => {
    return `https://pokeapi.co/api/v2/pokemon/${name}`;
}

const OPEN_POKEMON_URL = makeURL("pikachu");

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

getPikachuName(OPEN_POKEMON_URL);
