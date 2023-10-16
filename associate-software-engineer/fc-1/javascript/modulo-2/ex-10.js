const animals = ['cão', 'gato', 'cachorro', 'peixe', 'pássaro'];
const moreThan4Characters = animals.filter(item => {
    if (item.length > 4) {
        return item;
    }
})

console.log(animals);
console.log(moreThan4Characters);
