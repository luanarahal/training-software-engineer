const firstPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Primeira mensagem!");
        }, 1000);
    });
};

const secondPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Segunda mensagem!");
        }, 3000);
    });
};

const thirdPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Terceira mensagem!");
        }, 4000);
    });
};

firstPromise()
    .then(details => console.log(details))
    .then(message => secondPromise(message))
    .then(details => console.log(details))
    .then(message => thirdPromise(message))
    .then(details => console.log(details));
