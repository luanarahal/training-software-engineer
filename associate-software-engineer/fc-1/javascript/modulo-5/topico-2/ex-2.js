const readMessage = (id) => new Promise((resolve, reject) => {
    if (id === 1) {
        resolve("Sucesso!");
    } else {
        setTimeout(() => {
            reject("Negado!");
        }, 2000)
    }
});

readMessage(2)
    .then(message => console.log(message))
    .catch(err => console.error("Error: ", err));
