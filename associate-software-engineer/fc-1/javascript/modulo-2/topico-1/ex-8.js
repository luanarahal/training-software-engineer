const fruits = ['banana', 'maçã', 'abacaxi'];
const firstLetterCapitalized = fruits.map(item => item.replace(item[0], item[0].toUpperCase()));

console.log(firstLetterCapitalized);
