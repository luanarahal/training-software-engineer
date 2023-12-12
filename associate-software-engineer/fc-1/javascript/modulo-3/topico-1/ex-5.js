const sumOfTwoValues = (number1, number2) => {
    return number1 + number2;
}

const printResult = (sum) => {
    return `A soma dos números é: ${sum}`;
}

console.log(printResult(sumOfTwoValues(2, 5)));
