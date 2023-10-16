const animals = ['gato', 'abelha', 'cachorro'];
const startingWithA = animals.find(item => {
    if(item[0] === 'a') {
        return item;
    }
});

console.log(animals);
console.log(startingWithA);
