const readMessage = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Olá, Promises!");
    }, 2000);
});

const main = async () => {
    const data = await readMessage;
    return console.log(data);
}

main();
