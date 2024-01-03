const readPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Olá, Promises!");
    }, 2000);
});

readPromise.then(message => {
    console.log(message);
});
