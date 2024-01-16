const myPromise = async () => {
    const mainPromise = new Promise((resolve) => {
        setTimeout(() => resolve("Mensagem retornada com sucesso!"), 5000);
    });

    const cancel = setTimeout(() => {
        throw new Error("Time out!")
    }, 3000);

    try {
        const data = await mainPromise;
        clearTimeout(cancel);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

const main = async () => {
    try {
        const data = await myPromise();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

main();
