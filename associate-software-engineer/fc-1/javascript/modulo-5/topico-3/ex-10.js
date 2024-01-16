import { generateRandomNumber } from "../utils.js";

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

const main = async () => {
    try {
        const data = await discoverNumber(5);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

main();
