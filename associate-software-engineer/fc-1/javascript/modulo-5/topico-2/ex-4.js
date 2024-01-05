const verifyNumber = () => {
    let min = 0;
    let max = 10;
    let randomNumber = Math.floor(Math.random() * (max - min * 1) + min);
    console.log(randomNumber);
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
