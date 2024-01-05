const discoverNumber = (number) => {
    let min = 0;
    let max = 10;
    let randomNumber = Math.floor(Math.random() * (max - min * 1) + min);
    console.log(`Número digitado: ${number}`);
    console.log(`Número gerado: ${randomNumber}`);
    return new Promise(() => {
        const checkNumber = new Promise((resolve, reject) => {
            if (number === randomNumber) {
                resolve("Acertou!");
            } else {
                reject("Errou!");
            }
        });

        checkNumber
            .then(result => console.log(result))
            .catch(err => console.error(err));

    });
}

discoverNumber(5);
