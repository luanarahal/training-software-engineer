import { generateRandomNumber } from "../utils.js";

const verifyNumber = () => {
    const randomNumber = generateRandomNumber(0, 1, 2);
    console.log(randomNumber);
    return new Promise((resolve, reject) => {
        if (randomNumber >= 0.5) {
            resolve("O número é maior ou igual a 0.5!");
        } else {
            reject("O número é menor que 0.5!");
        }
    });
}

const main = async () => {
    try {
        const data = await verifyNumber();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}

main();
