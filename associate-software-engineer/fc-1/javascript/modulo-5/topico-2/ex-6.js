const featchData = (url) => {
    return fetch(url)
        .then(response => response.json());
}

featchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(err => console.error("Error! -> ", err));   
