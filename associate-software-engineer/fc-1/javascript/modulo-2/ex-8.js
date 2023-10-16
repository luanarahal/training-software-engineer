const fruits = ['banana', 'maçã', 'abacaxi'];
const firstLetterCapitalized = fruits.map(x => x.replace(x[0], x[0].toUpperCase()));

console.log(firstLetterCapitalized);
