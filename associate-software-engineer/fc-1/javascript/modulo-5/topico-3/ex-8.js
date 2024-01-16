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

const main = async () => {
    const [firstResponse, secondResponse, thirdResponse] = await Promise.all([firstPromise(), secondPromise(), thirdPromise()]);
    console.log(firstResponse, secondResponse, thirdResponse);
}

main();
