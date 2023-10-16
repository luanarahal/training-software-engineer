const animals = ['cao', 'gato', 'cachorro', 'peixe', 'pássaro'];
const moreThan4Characters = animals.filter(x => {
    if (x.length > 4) {
        return x;
    }
})

console.log(animals);
console.log(moreThan4Characters);
