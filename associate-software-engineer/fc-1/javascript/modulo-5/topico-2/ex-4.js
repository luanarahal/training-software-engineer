const generateRandomNumber = () => {
    let min = 0;
    let max = 1;
    return (Math.random() * (max - min) + min).toFixed(2);
}

const verifyNumber = () => {
    const randomNumber = generateRandomNumber();
    console.log(randomNumber)
    return new Promise((resolve, reject) => {
        if (randomNumber >= 0.5) {
            resolve("O número é maior ou igual a 0.5!");
        } else {
            reject("O número é menor que 0.5!");
        }
    });
}

verifyNumber()
    .then(message => console.log(message))
    .catch(err => console.error(err));
