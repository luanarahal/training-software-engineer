const readMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (id !== 1) {
            reject("Negado!");
        }
        setTimeout(() => {
            resolve("Sucesso!");
        }, 1000);
    });
}

readMessage(1)
    .then(message => console.log(message))
    .catch(err => console.error("Error: ", err));
