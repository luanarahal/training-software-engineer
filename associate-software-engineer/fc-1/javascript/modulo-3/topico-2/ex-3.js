function highestValue(...numbers) {
    return numbers.reduce((a, b) => {
        return a > b ? a : b;
    })
}

console.log(highestValue(10, 5, 100, 10, 50, 60, 5000));
