const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const getName = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        console.log(`Nome: ${response.name}, Tipo: ${response.types[0].type.name}`);
    } catch (error) {
        console.error(error);
    }
}

getName(url);
