const numbers = new Set([1, 2, 3, 4, 5]);

const arrayNumbers = new Array();

numbers.forEach(number => {
    arrayNumbers.push(number)
})

console.log(numbers);
console.log(arrayNumbers);
