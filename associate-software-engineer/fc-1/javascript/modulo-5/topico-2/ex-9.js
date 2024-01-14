const myPromise = () => {
    return new Promise((resolve, reject) => {
        const mainPromise = new Promise((resolve) => {
            setTimeout(() => resolve("Mensagem retornada com sucesso!"), 5000);
        });

        const cancel = setTimeout(() => reject("Time out!"), 3000);

        mainPromise
            .then(message => {
                clearTimeout(cancel);
                resolve(message);
            })
            .catch(err => reject(err));
    });
}

myPromise()
    .then(message => console.log(message))
    .catch(err => console.error('Erro: ', err));
