function sumNumbers(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sumNumbers(4, 5, 5, 10));
