const generateRandomNumber = () => {
    let min = 0;
    let max = 10;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const discoverNumber = (number) => {
    const randomNumber = generateRandomNumber();
    console.log(`Número digitado: ${number}`);
    console.log(`Número gerado: ${randomNumber}`);
    return new Promise((resolve, reject) => {
        if (number === randomNumber) {
            resolve("Acertou!");
        } else {
            reject("Errou!");
        }
    });
}

discoverNumber(0)
    .then(result => console.log(result))
    .catch(err => console.error(err));

//discoverNumber(5);
