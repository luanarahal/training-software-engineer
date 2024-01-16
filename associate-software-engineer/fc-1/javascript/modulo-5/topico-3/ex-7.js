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

const main = async () => {
    const first = await firstPromise();
    console.log(first);
    const second = await secondPromise();
    console.log(second);
    const third = await thirdPromise();
    console.log(third);
}

main();
