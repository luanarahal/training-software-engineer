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

const main = async () => {
    try {
        const data = await readMessage(2);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

main();
