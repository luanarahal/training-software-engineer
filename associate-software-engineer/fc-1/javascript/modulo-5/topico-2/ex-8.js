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
        }, 2000);
    });
};

const thirdPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Terceira mensagem!");
        }, 3000);
    });
};

Promise.all([
    firstPromise(),
    secondPromise(),
    thirdPromise()
])
    .then(messages => {
        const [message1, message2, message3] = messages;
        console.log(`${message1}, \n ${message2}, \n ${message3}`);
    });
