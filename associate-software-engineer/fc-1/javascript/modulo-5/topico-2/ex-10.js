import { generateRandomNumber } from "./utils.js";

const discoverNumber = (number) => {
    const randomNumber = generateRandomNumber(0, 10);
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

discoverNumber(5)
    .then(result => console.log(result))
    .catch(err => console.error(err));
