const readMessage = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Olá, Promises!");
    }, 2000);
});

readMessage.then(message => {
    console.log(message);
});
