const feachData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.error("Erro ao buscar info", err));
}

feachData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data));
