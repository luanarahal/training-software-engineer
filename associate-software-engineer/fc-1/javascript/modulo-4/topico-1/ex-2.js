const number1 = -10;
const number2 = 2;

const divideNumbers = (number1, number2) => {
    if (number1 < 0 || number2 < 0) {
        throw new Error("Não aceitamos fazer divisão com número negativo");
    }
    return number1 / number2;
}

console.log(divideNumbers(number1, number2));
